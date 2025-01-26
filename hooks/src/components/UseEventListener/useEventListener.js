import { useEffect } from "react";

function useEventListener(eventName, handler, element = window) {
    useEffect(() => {
        element.addEventListener(eventName, handler);
        return () => {
            element.removeEventListener(eventName, handler);
        };
    }, [eventName, handler, element]);
}

export default useEventListener;
