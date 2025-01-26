import { useRef, useEffect } from "react";

function usePrevious(value) {
    const ref = useRef(null);
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}

export default usePrevious;
