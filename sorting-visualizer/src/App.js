import React, { useState } from "react";
import "./App.css";
import Visualiser from "./control/Visualiser";
import Control from "./control/Control";
import { bubbleSort } from "./algorithm/BubbleSort";

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
        const animationArr = bubbleSort(array);
        bubbleAnimation(animationArr)
        break;

      default:
        break;
    }
  }

  function bubbleAnimation(animation) {
    const barEle = document.getElementsByClassName('bar');
    for (let i = 0; i < animation.length; i++) {
      let [barOneInd, bartwoInd, swap] = animation[i];
      let barOne = barEle[barOneInd];
      let barTwo = barEle[bartwoInd];
      setTimeout(() => {
        barOne.style.backgroundColor = swap ? 'red' : 'yellow';
        barTwo.style.backgroundColor = swap ? 'red' : 'yellow';
        if(swap){
          const  heightTemp = barOne.style.height;
          barOne.style.height = barTwo.style.height;
          barTwo.style.height = heightTemp;
          const content = barOne.innerText;
          barOne.innerText = barTwo.innerText;
          barTwo.innerText = content;
        }
      }, 1000)

    }
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
