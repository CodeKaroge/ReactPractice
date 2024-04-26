import React, { useEffect, useState } from 'react'

function Debouncing() {
    const [inputUser, setInputUser] = useState('')
    const [debouncedData, setDebouncedData] = useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedData(inputUser)
        }, 2000);
        
        return () => {
            clearTimeout(timeout)
        }
    }, [inputUser])

    const handleUserInput = (e) => {
        setInputUser(e.target.value)
    }
    return (
        <div>
            <p>Debouncing Concept</p>
            <input style={{
                width: '300px',
                height: '50px'
            }}
                type='text'
                placeholder='Enter data...'
                value={inputUser}
                onChange={handleUserInput}
            />
            <p>Debounced Data : {debouncedData}</p>
        </div>
    )
}

export default Debouncing