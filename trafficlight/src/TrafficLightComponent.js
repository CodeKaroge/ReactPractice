import React, { useState } from 'react'

function TrafficLightComponent() {
    const [currentColorActive, setCurrentColorActive] = useState({ color: 'red', time: 5000 });

    setTimeout(() => {
        if (currentColorActive.color === 'red') {
            setCurrentColorActive({color:'yellow', time: 5000})
        }else if (currentColorActive.color === 'yellow') {
            setCurrentColorActive({color:'green', time: 5000})
        }else if (currentColorActive.color === 'green') {
            setCurrentColorActive({color:'red', time: 5000})
        }
    }, currentColorActive.time)

    return (
        <div className='traffic-light'>
            <div className={`light ${currentColorActive.color === 'red' && 'red-active'}`}></div>
            <div className={`light ${currentColorActive.color === 'yellow' && 'yellow-active'}`}></div>
            <div className={`light ${currentColorActive.color === 'green' && 'green-active'}`}></div>
        </div>
    )
}

export default TrafficLightComponent
