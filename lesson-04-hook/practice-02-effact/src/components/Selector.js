import { useState, useEffect } from "react";

function Selector() {
  let [selected, setSelected] = useState("0");
  let [valueSelected, setValueSelected] = useState("");

  const choice = e => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    switch (selected) {
      case "0":
        setValueSelected("Java");
        break;
      case "1":
        setValueSelected("Angular");
        break;
      case "2":
        setValueSelected("ReactJS");
        break;
      case "3":
        setValueSelected("Javascript");
        break;
      case "4":
        setValueSelected("Php");
        break;
      default:
    }
  }, [selected]);

  return (
    <div>
      Khoá học :
      <select
        onChange={e => {
          choice(e);
        }}
      >
        <option value="0">Java</option>
        <option value="1">Angular</option>
        <option value="2">ReactJS</option>
        <option value="3">Javascript</option>
        <option value="4">Php</option>
      </select>
      <h2>Your selected: {valueSelected}</h2>
    </div>
  );
}

export default Selector;