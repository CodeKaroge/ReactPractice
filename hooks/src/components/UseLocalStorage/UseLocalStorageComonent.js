import React from 'react'
import useLocalStorage from './useLocalStorage';

const UseLocalStorageComonent = () => {
  const [username, setUsername] = useLocalStorage("usernameNew");

    return (
        <div>
            <h1>Welcome, to {username}!</h1>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your Data "
            />
        </div>
    )
}

export default UseLocalStorageComonent
 