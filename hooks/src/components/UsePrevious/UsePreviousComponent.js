import { useState } from "react";
import usePrevious from "./usePrevious";

function UsePreviousComponent() {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);

    return (
        <div>
            <h1>Current: {count}</h1>
            <h2>Previous: {prevCount}</h2>
            <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
        </div>
    );
}

export default UsePreviousComponent;