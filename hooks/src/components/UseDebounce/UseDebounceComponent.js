import React, { useEffect, useState } from 'react'
import useDebounce from './useDebounce';

function UseDebounceComponent() {
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedValue = useDebounce(searchTerm, 1000);

    useEffect(() => {
        console.log('This is', debouncedValue);
    }, [debouncedValue])

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
            />
            <p>Debounced Value: {debouncedValue}</p>
        </div>
    )
}

export default UseDebounceComponent
