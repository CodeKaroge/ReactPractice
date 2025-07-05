const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
  },
});

app.use(cors());
const users = new Map();
const rooms = new Map();

io.on('connection', (socket) => {
  console.log('🔌 New user connected:', socket.id);
  socket.on('register', (username) => {
    socket.username = username;
    users.set(username, socket.id);
    io.emit('users-online', Array.from(users.keys()));
    console.log(`✅ Registered user: ${username}`);
  });
  socket.on('private-message', ({ to, message }) => {
    const toSocketId = users.get(to);
    if (toSocketId) {
      io.to(toSocketId).emit('private-message', {
        from: socket.username,
        message,
      });
    }
  });

  socket.on('typing', ({ to }) => {
    const toSocketId = users.get(to);
    if (toSocketId) {
      io.to(toSocketId).emit('typing', { from: socket.username });
    }
  });

  socket.on('stop-typing', ({ to }) => {
    const toSocketId = users.get(to);
    if (toSocketId) {
      io.to(toSocketId).emit('stop-typing', { from: socket.username });
    }
  });

  socket.on('join-room', ({ roomName }) => {
    socket.join(roomName);
    if (!rooms.has(roomName)) rooms.set(roomName, new Set());
    rooms.get(roomName).add(socket.username);

    io.to(roomName).emit('group-message', {
      from: 'System',
      message: `${socket.username} joined the room.`,
    });
    io.emit('available-rooms', Array.from(rooms.keys()));
    console.log(`👥 ${socket.username} joined room: ${roomName}`);
  });

  socket.on('group-message', ({ roomName, message }) => {
    io.to(roomName).emit('group-message', {
      from: socket.username,
      message,
    });
  });

  socket.on('disconnect', () => {
    const username = socket.username;
    if (username) {
      users.delete(username);

      for (const room of rooms.values()) {
        room.delete(username);
      }

      io.emit('users-online', Array.from(users.keys()));
      console.log(`❌ User disconnected: ${username}`);
    }
  });
});

server.listen(5000, () => console.log('🚀 Server running on port 5000'));
