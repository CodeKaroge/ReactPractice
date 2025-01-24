import React, { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const startTimer = () => {
        if (!isRunning) {
            const id = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
            setIntervalId(id);
            setIsRunning(true);
        }
    };

    const pauseTimer = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIsRunning(false);
        }
    };

    const stopTimer = () => {
        if (intervalId) {
            clearInterval(intervalId);
        }
        setIsRunning(false);
        setTime(0);
    };

    useEffect(() => {
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [intervalId]);

    return (
        <div className="clock-container">
            <h1>Code Karoge</h1>
            <div className="clock">
                <span className="time">{formatTime(time)}</span>
            </div>
            <div className="timer-controls">
                {!isRunning ? (
                    <button onClick={startTimer} className="start-btn">Start</button>
                ) : (
                    <button onClick={pauseTimer} className="pause-btn">Pause</button>
                )}
                <button onClick={stopTimer} className="stop-btn">Stop</button>
            </div>
        </div>
    );
};

export default Clock;
