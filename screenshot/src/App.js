import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import "./App.css";

const App = () => {
  const captureRef = useRef(null);
  const [selection, setSelection] = useState({
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    isSelecting: false,
  });

  const handleMouseDown = (e) => {
    const rect = captureRef.current.getBoundingClientRect();
    setSelection({
      startX: e.clientX - rect.left,
      startY: e.clientY - rect.top,
      endX: e.clientX - rect.left,
      endY: e.clientY - rect.top,
      isSelecting: true,
    });
  };

  const handleMouseMove = (e) => {
    if (!selection.isSelecting) return;
    const rect = captureRef.current.getBoundingClientRect();
    setSelection((prev) => ({
      ...prev,
      endX: e.clientX - rect.left,
      endY: e.clientY - rect.top,
    }));
  };

  const handleMouseUp = () => {
    setSelection((prev) => ({
      ...prev,
      isSelecting: false,
    }));
  };

  const takeScreenshot = async () => {
    if (selection.startX !== 0) {
      const rect = captureRef.current.getBoundingClientRect();
      const { startX, startY, endX, endY } = selection;
      const x = Math.min(startX, endX);
      const y = Math.min(startY, endY);
      const width = Math.abs(endX - startX);
      const height = Math.abs(endY - startY);
      const canvas = await html2canvas(document.body, {
        scrollX: 0,
        scrollY: 0,
        x: rect.left + x,
        y: rect.top + y,
        width,
        height,
      });
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "screenshot.png";
      link.click();
    } else {
      const canvas = await html2canvas(document.body);
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "screenshot.png";
      link.click();
    }
  };

  return (
    <>
      <h1 style={{marginLeft: '120px'}}>Code Karoge ?</h1>
      <div className="app">
        <div
          ref={captureRef}
          className="capture-area"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <h1>Dynamic Screenshot App</h1>
          <p>
            Drag to select an area for the screenshot, or click the button to
            capture the whole section.
          </p>
          {selection.isSelecting && (
            <div
              className="selection-box"
              style={{
                left: Math.min(selection.startX, selection.endX),
                top: Math.min(selection.startY, selection.endY),
                width: Math.abs(selection.endX - selection.startX),
                height: Math.abs(selection.endY - selection.startY),
              }}
            ></div>
          )}
        </div>
        <button className="screenshot-button" onClick={takeScreenshot}>
          Take Screenshot
        </button>
      </div>
    </>
  );
};

export default App;
