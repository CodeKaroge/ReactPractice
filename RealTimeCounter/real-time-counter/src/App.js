import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:4000');

function App() {
  const [counter, setCounter] = useState(0);
  const [log, setLog] = useState([]);
  const [userColor, setUserColor] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const randomColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
    setUserColor(randomColor);

    socket.on('counterUpdate', ({ counter, userId }) => {
      setCounter(counter);
      setLog(prev => [`🔔 User ${userId} incremented the counter!`, ...prev]);
    });

    socket.on('counterReset', (userId) => {
      setLog([`⚠️ User ${userId} reset the counter!`]);
    });

    socket.on('userListUpdate', (userList) => {
      setUsers(userList);
    });

    return () => {
      socket.off('counterUpdate');
      socket.off('onlineUsers');
      socket.off('counterReset');
      socket.off('userListUpdate');
    };
  }, []);

  const handleClick = () => {
    socket.emit('incrementCounter');
  };

  const handleReset = () => {
    socket.emit('resetCounter');
  };

  return (
    <div className="container">
      <h1>🚀 Real-Time Global Counter</h1>
      <div className="users-section">
        <h3>🟢 Online Users</h3>
        <ul>
          {users.map((name, i) => (
            <li key={i}>{name}</li>
          ))}
        </ul>
      </div>
      <div className="counter-display" style={{ borderColor: userColor }}>
        {counter}
      </div>
      <button onClick={handleClick} className="action-btn">➕ Increment</button>
      <button onClick={handleReset} className="action-btn reset">🔄 Reset</button>
      <div className="log-section">
        <h3>📝 Activity Log</h3>
        <ul>
          {log.map((entry, i) => <li key={i}>{entry}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
