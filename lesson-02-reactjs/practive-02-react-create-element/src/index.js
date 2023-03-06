import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


    const items = ["C++", "PHP", "Java"];

    const programing = React.createElement("section", {id: "coding"},
    React.createElement("h1", null, "Programing languages"),
    React.createElement("ul", {className: "coding"}, 
          items.map((coding, i) => 
          React.createElement("li", {key: i}, coding)
    )));

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(programing);