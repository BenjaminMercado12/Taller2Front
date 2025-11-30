import { createContext, useContext, useState, useEffect } from "react";
import { getPokemons } from "../services/pokemonService";

const ApiContext = createContext();

export const useApi = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const cargarPokemons = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getPokemons();
      setPokemons(data);
    } catch (err) {
      setError("Error al cargar los datos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarPokemons();
  }, []);

  return (
    <ApiContext.Provider value={{ pokemons, loading, error, cargarPokemons }}>
      {children}
    </ApiContext.Provider>
  );
};
