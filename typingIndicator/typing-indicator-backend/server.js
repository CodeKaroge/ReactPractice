const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type'],
    }
});

app.use(express.static('public'));

io.on('connection', (socket) => {
    socket.on('typing', (data) => {
        socket.broadcast.emit('typingForUI', data);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

const port = 5000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
