import React from "react";

function App(props) {
  return (
    <div>
      <h1>{props.article.headerProp}</h1>
      <h2>{props.article.contentProp}</h2>
    </div>
  );
}

export default App;