import React, { useEffect, useState } from "react";
import "./App.css";
import Visualiser from "./control/Visualiser";
import Control from "./control/Control";
import { bubbleSort } from "./algorithm/BubbleSort";

function App() {
  const [array, setArray] = useState([]);
  const [userInuptArray, setUserInuptArray] = useState('');

  useEffect(() => {
    const userInput = userInuptArray.split(',');
    const filteredInput = userInput.filter(item => !isNaN(item) && Number.isInteger(parseFloat(item))).map(item => Number(item) <= 500 && Number(item))
    console.log(filteredInput, ' This is user input');
    setArray([...filteredInput])

  }, [userInuptArray])
  const handleNewArrayGenrate = () => {
    const newArray = Array.from({ length: 15 }, () =>
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
        if (swap) {
          const heightTemp = barOne.style.height;
          barOne.style.height = barTwo.style.height;
          barTwo.style.height = heightTemp;
          const content = barOne.innerText;
          barOne.innerText = barTwo.innerText;
          barTwo.innerText = content;
        }
        setTimeout(() => {
          barOne.style.backgroundColor = 'blue'
          barTwo.style.backgroundColor = 'blue'
        }, 150)
      }, i * 150);
    }
    setTimeout(() => {
      for (let j = 0; j < barEle.length; j++) {
        setTimeout(() => {
          barEle[j].style.backgroundColor = 'green';
        }, j * 150);
      }
    }, animation.length * 150)
  }
  return (
    <div className="App">
      <h1>CodeKaroge?</h1>
      <Control
        handleNewArrayGenrate={handleNewArrayGenrate}
        handleSorting={handleSorting}
        userInuptArray={userInuptArray}
        setUserInuptArray={setUserInuptArray}
      />
      <Visualiser array={array} />
    </div>
  );
}

export default App;
