// Import react and reactDOM libraries and any used components
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

// Get reference to the div with id Root
const el = document.getElementById("root");

// Tell react to take control of that element
const root = ReactDOM.createRoot(el);

// Show component on screen

root.render(<App />);
