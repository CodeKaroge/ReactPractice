import React, { useRef, useState } from 'react';

function UseRefComponent() {
    const [counter, setCounter] = useState(0);
    const counterRef = useRef(0);

    const handleIncrementCounter = () => {
        // setCounter(counter + 1);
        counterRef.current++;

        // console.log(counter);
        console.log(counterRef.current);
    }

    return (
        <div>
            <h1>Counter : {counterRef.current}</h1>
            <button onClick={handleIncrementCounter}>
                Increment</button>
        </div>
    )
}

export default UseRefComponent
