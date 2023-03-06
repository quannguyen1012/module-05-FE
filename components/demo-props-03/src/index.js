import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

const article = {
  headerProp: "Header from props...",
  contentProp: "Content from props..."
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App article={article} />);