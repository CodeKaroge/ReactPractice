import React, { useEffect, useState } from 'react'

function UseEffectComponent() {
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     console.log("called useEffect");
    //     let timer = setTimeout(() => {
    //         setCount(prev => prev + 1)
    //     }, 1000)
    //     return (() => {
    //         clearInterval(timer)
    //     })
    // }, [count])
    const handleIncre = () => {
        setCount(count + 1)
        setCount( count + 1)
    }
    return (
        <div>
            <h1>UseEffect</h1>
            {count}
            <button onClick={handleIncre}>click</button>
        </div>
    )
}

export default UseEffectComponent
