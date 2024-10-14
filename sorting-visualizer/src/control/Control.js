import React from 'react'

function Control({ handleNewArrayGenrate , handleSorting}) {
    return (
        <div className='controls-container'>
            <button className='neu-button' onClick={handleNewArrayGenrate}>Generate New Array</button>
            <select className='neumorphism-dropdown' onChange={handleSorting}>
                <option value=''>Select Sorting</option>
                <option value='bubbleSort'>Bubble Sorting</option>
            </select>
        </div>
    )
}

export default Control
