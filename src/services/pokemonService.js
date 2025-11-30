const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=10";

export const getPokemons = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) throw new Error("Error al obtener pokemons");

  const data = await response.json();
  return data.results;
};
