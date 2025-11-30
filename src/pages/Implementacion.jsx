import { useApi } from "../context/ApiProvider";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

const Implementacion = () => {
  const { pokemons, loading, error, cargarPokemons } = useApi();

  return (
    <div className="page">
      <h1>Implementación</h1>
      <p className="page-description">
        En esta vista se muestran los primeros Pokémon obtenidos desde la API
        pública PokeAPI, estos se cargan a tráves de una capa de servicio y 
        se comparten usando un Provider que en este caso es Context Api, la tabla utiliza el
        componente DataTable directamente desde PrimeReact
      </p>

      <div className="toolbar-implementacion">
        <Button
          label="Recargar Datos"
          icon="pi pi-refresh"
          onClick={cargarPokemons}
        />
        <Link to="/" className="link">
          Volver a inicio
        </Link>
      </div>

      {loading && <p>Cargando datos desde la API...</p>}
      {error && <p className="error-text">{error}</p>}

      {!loading && !error && (
        <div className="card">
          <DataTable value={pokemons} paginator rows={5} responsiveLayout="scroll">
            <Column field="name" header="Nombre" />
            <Column field="url" header="URL" />
          </DataTable>
        </div>
      )}
    </div>
  );
};

export default Implementacion;


