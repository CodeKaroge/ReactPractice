// index.js
const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

let documentContent = "";
let users = {};
const userMeta = {};
const firstNames = ["Alex", "Jamie", "Chris", "Taylor", "Jordan", "Casey", "Morgan"];
const lastNames = ["Smith", "Brown", "Johnson", "Lee", "Davis", "Walker", "Garcia"];
const colors = ["#FF6347", "#1E90FF", "#32CD32", "#FFD700", "#8A2BE2"];

function getRandomName() {
    const first = firstNames[Math.floor(Math.random() * firstNames.length)];
    const last = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${first} ${last}`;
}

function getAvailableColor() {
    const usedColors = Object.values(userMeta).map(u => u.color);
    const availableColors = colors.filter(c => !usedColors.includes(c));
    return availableColors.length > 0
        ? availableColors[Math.floor(Math.random() * availableColors.length)]
        : colors[Math.floor(Math.random() * colors.length)];
}


io.on("connection", (socket) => {
    console.log("New user connected:", socket.id);

    const username = getRandomName();
    const color = getAvailableColor();

    users[socket.id] = username;
    userMeta[socket.id] = { username, color };

    socket.emit("receive-changes", documentContent);
    io.emit("user-list", Object.entries(userMeta).map(([id, data]) => ({
        id,
        ...data
    })));
    io.emit("user-count", Object.keys(users).length);

    socket.on("send-changes", (newContent) => {
        documentContent = newContent;
        socket.broadcast.emit("receive-changes", newContent);
    });

    socket.on("cursor-position", ({ userId, position }) => {
        socket.broadcast.emit("cursor-update", { userId, position });
    });

    socket.on("send-cursor", (cursorPosition) => {
        const color = userMeta[socket.id];
        socket.broadcast.emit("receive-cursor", { id: socket.id, cursorPosition, color, username: userMeta[socket.id].username });
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
        delete userMeta[socket.id];
        delete users[socket.id];
        delete userMeta[socket.id];

        io.emit("user-list", Object.entries(userMeta).map(([id, data]) => ({
            id,
            ...data
        })));
        io.emit("user-count", Object.keys(users).length);
    });
});

server.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});
