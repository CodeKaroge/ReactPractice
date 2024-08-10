import React ,{useContext}from 'react';
import { CounterContext } from './index';

function User() {
    const {userName, setUserName} = useContext(CounterContext)
  return (
    <div>
    <h1>User</h1>
    <h1>{userName}</h1>
    <button onClick={() => setUserName("Jone")}>Click</button>
    </div>
  )
}

export default User
