import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function App() {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const typingTimeoutRef = useRef(null);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });
    socket.on('disconnect', () => {
      setIsConnected(false);
    });
    socket.on('typingForUI', (data) => {
      setIsTyping(data.isTyping);
    });
    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('typingForUI');
    };
  }, []);

  const handleTyping = (event) => {
    const value = event.target.value;
    setMessage(value);
    socket.emit('typing', { isTyping: true });
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      socket.emit('typing', { isTyping: false });
    }, 1000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('');
    socket.emit('typing', { isTyping: false });
  };

  return (
    <div className="App">
      <h2>Real-Time Typing Indicator</h2>
      <div className="connection-status">
        <span className={`status-icon ${isConnected ? 'connected' : 'disconnected'}`}>
          {isConnected ? '🟢' : '🔴'}
        </span>
        <span>{isConnected ? 'Connected' : 'Disconnected'}</span>
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={handleTyping}
          placeholder="Type a message..."
        />
        <button onClick={handleSubmit}>Send</button>
      </div>
      {isTyping && (
        <div className="typing-indicator">
          <span>Typing</span>
          <span className="typing-dot"></span>
          <span className="typing-dot"></span>
          <span className="typing-dot"></span>
        </div>
      )}
    </div>
  );
}

export default App;
