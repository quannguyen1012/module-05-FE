import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

const headerProp = "Header from props...";
const contentProp = "Content from props...";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App headerProp={headerProp} contentProp={contentProp} />);