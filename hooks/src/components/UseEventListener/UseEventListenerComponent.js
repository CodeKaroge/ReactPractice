import { useState } from "react";
import useEventListener from "./useEventListener";

function UseEventListenerComponent() {
    const [keyPressed, setKeyPressed] = useState('');

    useEventListener("keydown", (event) => {
        setKeyPressed(event.key)
    });

    return (
        <div>
            <h1>Press any key!</h1>
            <h2>Key : {keyPressed}</h2>
        </div>
    );
}

export default UseEventListenerComponent;