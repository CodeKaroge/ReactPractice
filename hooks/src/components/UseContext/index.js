import React, { createContext, useEffect, useState } from 'react';

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [userName, setUserName] = useState('New User');

    const passContext = {
        count, 
        setCount,
        userName, 
        setUserName
    }
    return (
        <CounterContext.Provider value={passContext}>
            {children}
        </CounterContext.Provider>
    );
};

export { CounterContext, CounterProvider };
