import React, { useEffect, useState } from 'react';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(10)
    const [stopStart, setStopStart] = useState(false)
    const [message, setMessage] = useState('')

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1)
        }, 1000);
        if (timeLeft === 0 || stopStart) {
            clearInterval(timer)
        }
        if (timeLeft < 5 && timeLeft > 0) {
            setMessage("Your last 5 seconds left")
        } else if (timeLeft === 0 || timeLeft > 5) {
            setMessage('')
        }
        return () => clearInterval(timer)
    }, [timeLeft, stopStart])

    const formatTime = (time) => {
        const min = Math.floor(time / 60)
        const sec = time % 60
        return `${min}: ${sec < 10 ? '0' : ''} ${sec}`
    }

    return (
        <div>
            <h1>Time Counter</h1>
            <div>Time Left :- {formatTime(timeLeft)}</div>
            <button onClick={() => setStopStart(!stopStart)} >{stopStart ? "Start" : "Stop"}</button>
            <button onClick={() => setTimeLeft(0)} >Reset</button>
            <div>{message}</div>
            <input type="number" onChange={(e) => setTimeLeft(e.target.value)} />
        </div >
    );
};
export default Countdown;
