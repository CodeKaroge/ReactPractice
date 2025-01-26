import { useState, useRef, useEffect } from "react";

function useHover() {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);
        const element = ref.current;
        if (element) {
            element.addEventListener("mouseenter", handleMouseEnter);
            element.addEventListener("mouseleave", handleMouseLeave);
        }
        return () => {
            if (element) {
                element.removeEventListener("mouseenter", handleMouseEnter);
                element.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, []);
    return [ref, isHovered];
}

export default useHover;
