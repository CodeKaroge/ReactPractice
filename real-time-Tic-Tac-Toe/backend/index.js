const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

const rooms = {};

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("createRoom", (callback) => {
    const roomId = Math.random().toString(36).substring(2, 8);
    rooms[roomId] = {
      players: [socket.id],
      board: Array(9).fill(""),
      turn: "X",
    };
    socket.join(roomId);
    callback({ roomId });
  });

  socket.on("joinRoom", ({ roomId }, callback) => {
    const room = rooms[roomId];
    if (room && room.players.length < 2) {
      room.players.push(socket.id);
      socket.join(roomId);
      callback({ status: "joined", roomId });
      io.to(roomId).emit("startGame", {
        board: room.board,
        turn: room.turn,
        players: room.players, // ✅ send players array
      });
    } else {
      callback({ status: "failed", message: "Room full or invalid" });
    }
  });

  socket.on("makeMove", ({ roomId, index }) => {
    const room = rooms[roomId];
    if (!room) return;
    console.log('make move', roomId, index);

    const symbol = room.players[0] === socket.id ? "X" : "O";
    if (room.turn === symbol && room.board[index] === "") {
      room.board[index] = symbol;
      room.turn = symbol === "X" ? "O" : "X";
      io.to(roomId).emit("updateBoard", { board: room.board, turn: room.turn });

      const winner = checkWinner(room.board);
      if (winner) {
        io.to(roomId).emit("gameOver", { winner });
        delete rooms[roomId];
      } else if (!room.board.includes("")) {
        io.to(roomId).emit("gameOver", { winner: "Draw" });
        delete rooms[roomId];
      }
    }
  });

  socket.on("disconnect", () => {
    for (const [roomId, room] of Object.entries(rooms)) {
      if (room.players.includes(socket.id)) {
        io.to(roomId).emit("opponentLeft");
        delete rooms[roomId];
      }
    }
    console.log("User disconnected:", socket.id);
  });
});

function checkWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

server.listen(5000, () => console.log("Server running on port 5000"));
