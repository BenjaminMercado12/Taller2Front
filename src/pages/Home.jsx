import { Link } from "react-router-dom";
import { Button } from "primereact/button";

const Home = () => {
  return (
    <div className="page">
      <h3>Taller 2 - React + API Externa</h3>
       <p>
        Esta aplicación consume la API pública PokeAPI usando React,
        PrimeReact, React Router, Context API y una capa de servicio.
      </p>

      <h3>Integrantes</h3>
      <ul>
        <li>Benjamín Mercado</li>
      </ul>

      <div style={{ marginTop: "1.5rem" }}>
        <Link to="/implementacion">
          <Button 
            label="Implementación" 
            icon="pi pi-arrow-right" 
            className="p-button-sm p-button-outlined" 
          />
        </Link>
        
      </div>
    </div>
    
  );
};

export default Home;
