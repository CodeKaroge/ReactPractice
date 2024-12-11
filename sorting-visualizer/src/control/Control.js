import React from 'react'

function Control({ handleNewArrayGenrate, handleSorting, userInuptArray, setUserInuptArray  }) {
    return (
        <div className='controls-container'>
            <div className="input-wrapper">
                <input type="text" value={userInuptArray} onChange={(e) => setUserInuptArray(e.target.value)} className="neumorphic-input" placeholder="Enter your Array between 1-500" />
                <div className="info-icon-wrapper">
                    <i className="info-icon">i</i>
                    <span className="tooltip-text">Provide your array by comma separated integer</span>
                </div>
            </div>
            <button className='neu-button' onClick={handleNewArrayGenrate}>Generate New Array</button>
            <select className='neumorphism-dropdown' onChange={handleSorting}>
                <option value=''>Select Sorting</option>
                <option value='bubbleSort'>Bubble Sorting</option>
            </select>
        </div>
    )
}

export default Control
