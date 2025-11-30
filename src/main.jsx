import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css"; 

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { ApiProvider } from "./context/ApiProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApiProvider>
    <App />
  </ApiProvider>
);
