import React, { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import socket from "./socket";
import GameBoard from "./components/GameBoard";

export default function App() {
  const [roomId, setRoomId] = useState("");
  const [inRoom, setInRoom] = useState(false);
  const [gameData, setGameData] = useState(null);

  const createRoom = () => {
    socket.emit("createRoom", ({ roomId }) => {
      setRoomId(roomId);
      setInRoom(true);
    });
  };

  const joinRoom = () => {
    socket.emit("joinRoom", { roomId }, (res) => {
      if (res.status === "joined") {
        setInRoom(true);
      } else {
        alert(res.message);
      }
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      {!inRoom ? (
        <>
          <Typography variant="h4">Multiplayer Tic-Tac-Toe</Typography>
          <Button variant="contained" onClick={createRoom}>Create Room</Button>
          <TextField
            label="Room ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            sx={{ m: 2 }}
          />
          <Button variant="outlined" onClick={joinRoom}>Join Room</Button>
        </>
      ) : (
        <GameBoard roomId={roomId} />
      )}
    </Box>
  );
}
