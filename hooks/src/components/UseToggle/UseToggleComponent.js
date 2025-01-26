import React from 'react'
import useToggle from './useToggle';

function UseToggleComponent() {
    const [isDarkMode, toggleDarkMode] = useToggle(false);
    return (
        <div style={{ background: isDarkMode ? "#333" : "#fff", color: isDarkMode ? "#fff" : "#000" }}>
            <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
            <button onClick={toggleDarkMode}>Toggle Mode</button>
        </div>
    )
}

export default UseToggleComponent
