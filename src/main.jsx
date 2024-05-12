import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextProvider from "./hooks/ContextProvider/ContextProvider.jsx";
import MainLayout from "./components/MainLayout/MainLayout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <MainLayout>
        <App />
      </MainLayout>
    </ContextProvider>
  </React.StrictMode>
);
