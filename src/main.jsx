import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";


// mobile debugging tool
if (import.meta.env.DEV) {
  import('eruda').then(({ default: eruda }) => {
    eruda.init();
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
