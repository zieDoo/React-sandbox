import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // importing main css
import App from "./App.jsx"; // importig main App component

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Here it is the same as we did previously. It's loading the main App file into th DOM.
