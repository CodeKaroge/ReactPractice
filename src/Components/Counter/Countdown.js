import React, { useEffect, useState } from 'react';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(10)
    const [stopStart, setStopStart] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1)
        }, 1000);
        if (timeLeft === 0 || stopStart) {
            clearInterval(timer)
        }
        return () => clearInterval(timer)
    }, [timeLeft, stopStart])

    return (
        <div>
            <h1>Time Counter</h1>
            <div>Time Left :- {timeLeft}</div>
            <button onClick={() => setStopStart(!stopStart)} >{stopStart ? "Start" : "Stop"}</button>
        </div >
    );
};
export default Countdown;
