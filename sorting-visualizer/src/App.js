import React, { useState } from "react";
import "./App.css";
import Visualiser from "./control/Visualiser";
import Control from "./control/Control";

function App() {
  const [array, setArray] = useState([]);

  const handleNewArrayGenrate = () => {
    const newArray = Array.from({ length: 30 }, () =>
      Math.floor(Math.random() * 500)
    );
    setArray(newArray)
  }
  const handleSorting = (e) => {
    const sortingMethod = e.target.value;
    switch (sortingMethod) {
      case 'bubbleSort':
        BubbleAnimation('animaton')
        break;

      default:
        break;
    }
  }

  function BubbleAnimation(animtion) {
    console.log(animtion);
  }
  return (
    <div className="App">
      <h1>CodeKaroge?</h1>
      <Control
        handleNewArrayGenrate={handleNewArrayGenrate}
        handleSorting={handleSorting}
      />
      <Visualiser array={array} />
    </div>
  );
}

export default App;
