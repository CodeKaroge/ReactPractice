// server/index.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000"
  }
});

let polls = [];
let userVotes = {}; // Track who voted in which poll (by socket.id)

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Step 1: Ask client for username
  socket.emit('requestUsername');

  // Step 2: Set username when received
  socket.on('setUsername', (username) => {
    socket.username = username;
    console.log(`Username set for ${socket.id}: ${username}`);

    // Send poll list after username is set
    socket.emit('pollList', polls);
  });

  socket.on('createPoll', ({ question, options, expiresIn }) => {
    const id = uuidv4();
    const createdAt = Date.now();
    const expiresAt = createdAt + expiresIn * 1000; // milliseconds

    const poll = {
      id,
      question,
      options,
      votes: Object.fromEntries(options.map(opt => [opt, 0])),
      createdBy: socket.username || 'Anonymous',
      createdAt,
      expiresAt
    };

    polls.push(poll);
    io.emit('newPoll', poll);
    io.emit('notification', `New poll created: "${poll.question}"`);

    // Set timeout to expire the poll
    setTimeout(() => {
      io.emit('pollExpired', poll.id);
    }, expiresIn * 1000);
  });

  socket.on('submitVote', ({ pollId, option }) => {
    const poll = polls.find(p => p.id === pollId);
    if (!poll) return;

    // Prevent multiple votes
    const key = `${socket.id}_${pollId}`;
    if (userVotes[key]) {
      socket.emit('errorMessage', 'You have already voted in this poll.');
      return;
    }

    // Ignore votes after poll expiration
    if (Date.now() > poll.expiresAt) {
      socket.emit('errorMessage', 'This poll has expired.');
      return;
    }

    poll.votes[option] = (poll.votes[option] || 0) + 1;
    userVotes[key] = true;
    io.emit('voteUpdate', poll);
  });

  socket.on('sendNotification', (msg) => {
    io.emit('notification', `${socket.username || 'Anonymous'}: ${msg}`);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});