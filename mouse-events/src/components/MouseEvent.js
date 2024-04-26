import React from 'react'

function MouseEvent() {
    const handleOnclick = () => {
        console.log("Onclick")
    }
    const handleOnDoubleclick = () => {
        console.log("OnDoubleclick")
    }
    const handleOnMouseDown = () => {
        console.log("handleOnMouseDown")
    }
    const handleOnMouseUp = () => {
        console.log("handleOnMouseUp")
    }
    const handleOnMouseMove = () => {
        console.log("handleOnMouseMove")
    }
    const handleOnMouseOver = () => {
        console.log("handleOnMouseOver")
    }
    const handleOnMouseOut = () => {
        console.log("handleOnMouseOut")
    }
    const handleOnWheel = () => {
        console.log("handleOnWheel")
    }
    const handleOnMouseEnter = () => {
        console.log("handleOnMouseEnter")
    }
    const handleOnMouseLeave = () => {
        console.log("handleOnMouseLeave")
    }
    const handleonContextMenu = () => {
        console.log("handleonContextMenu")
    }


    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <div style={{
                width: '400px',
                height: '400px',
                background: 'red',
                lineHeight: '400px',
                cursor: 'pointer'
            }}
                onClick={handleOnclick}
                onDoubleClick={handleOnDoubleclick}
                onMouseDown={handleOnMouseDown}
                onMouseUp={handleOnMouseUp}
                onMouseMove={handleOnMouseMove}
                onMouseOver={handleOnMouseOver}
                onMouseOut={handleOnMouseOut}
                onWheel={handleOnWheel}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
                onContextMenu={handleonContextMenu}
            >
                Hover Me
            </div>
        </div>
    )
}

export default MouseEvent