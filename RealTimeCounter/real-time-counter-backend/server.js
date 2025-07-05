const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
    }
});

let counter = 0;
let users = {};
function generateRandomUsername() {
    const adjectives = ['Cool', 'Happy', 'Brave', 'Witty', 'Silent', 'Clever', 'Mighty', 'Funky'];
    const nouns = ['Tiger', 'Panda', 'Unicorn', 'Eagle', 'Otter', 'Wizard', 'Knight', 'Ninja'];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${adjective}${noun}`;
}

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);
    const username = generateRandomUsername();
    users[socket.id] = username;
    io.emit('userListUpdate', Object.values(users));
    socket.emit('counterUpdate', { counter, userId: socket.id.slice(-4) });
    socket.on('incrementCounter', () => {
        counter++;
        io.emit('counterUpdate', { counter, userId: users[socket.id] || socket.id.slice(-4) });
    });

    socket.on('resetCounter', () => {
        counter = 0;
        io.emit('counterUpdate', { counter, userId: users[socket.id] || socket.id.slice(-4) });
        io.emit('counterReset', users[socket.id] || socket.id.slice(-4));
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
        delete users[socket.id];
        io.emit('userListUpdate', Object.values(users));
    });
});

server.listen(4000, () => {
    console.log('Server listening on port 4000');
});
