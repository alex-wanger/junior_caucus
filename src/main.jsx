import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // Import your CSS file for global styles

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App></App>
  </StrictMode>
);
