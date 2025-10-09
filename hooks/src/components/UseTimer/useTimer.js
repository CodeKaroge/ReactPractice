import { useState, useEffect, useRef } from "react";

export default function useTimer(initialTime = 0) {
    const [time, setTime] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);

    const start = () => {
        if (!isRunning) setIsRunning(true);
    };

    const pause = () => {
        setIsRunning(false);
    };

    const reset = () => {
        setIsRunning(false);
        setTime(initialTime);
    };

    useEffect(() => {
        if (isRunning) {
            timerRef.current = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }

        return () => clearInterval(timerRef.current);
    }, [isRunning]);

    return { time, isRunning, start, pause, reset };
}
