import React, { useContext } from 'react';
import { CounterContext } from './index';
import User from './User';

const Counter = () => {
    const { count, setCount } = useContext(CounterContext);

    return (
        <div>
            <h1>You clicked {count} times</h1>
            <button onClick={() => setCount(count + 4)}>Click me</button>
            <User/>
        </div>
    );
};

export default Counter;
