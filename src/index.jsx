import React from "react";
import ReactDOMClient from "react-dom/client";
import { ProductCardScreen } from "./screens/ProductCardScreen";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ProductCardScreen />);
