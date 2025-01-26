import useHover from "./useHover";

function UseHoverComponent() {
    const [hoverRef1, isHovered1] = useHover();
    const [hoverRef2, isHovered2] = useHover();
    const [hoverRef3, isHovered3] = useHover();
    const [hoverRef4, isHovered4] = useHover();

    return (
        <div style={{ width: '100%', height: '80%', display: "flex", justifyContent: 'space-around', alignItems:'center' }}>
            <div ref={hoverRef1} style={{ width: 200, height: 200, background: isHovered1 ? "skyblue" : "lightgray" }}>
                {isHovered1 ? "Hovering!" : "Hover over me!"}
            </div>
            <div ref={hoverRef2} style={{ width: 200, height: 200, background: isHovered2 ? "lightyellow" : "lightpink" }}>
                {isHovered2 ? "Hovering!" : "Hover over me too!"}
            </div>
            <div ref={hoverRef3} style={{ width: 200, height: 200, background: isHovered3 ? "green" : "lightgoldenrodyellow" }}>
                {isHovered3 ? "Hovering!" : "Hover over me too!"}
            </div>
            <div ref={hoverRef4} style={{ width: 200, height: 200, background: isHovered4 ? "purple" : "lightcoral" }}>
                {isHovered4 ? "Hovering!" : "Hover over me too!"}
            </div>
        </div>
    );
}

export default UseHoverComponent;