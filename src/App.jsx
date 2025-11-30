import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-header-title">Taller 2 - React + API Externa</div>
        <div className="app-header-subtitle">React · PrimeReact · PokeAPI</div>
      </header>

      <AppRouter />
    </div>
  );
}
export default App;
