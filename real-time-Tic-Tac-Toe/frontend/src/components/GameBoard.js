import { useEffect, useState } from "react";
import socket from "../socket";
import { Grid, Typography, Paper } from "@mui/material";

export default function GameBoard({ roomId }) {
    const [board, setBoard] = useState(Array(9).fill(""));
    const [turn, setTurn] = useState("X");
    const [symbol, setSymbol] = useState("");

    useEffect(() => {
        socket.on("startGame", ({ board, turn, players }) => {
            if (!players || players.length < 2) return;
            setBoard(board);
            setTurn(turn);
            const playerSymbol = socket.id === players[0] ? "X" : "O";
            setSymbol(playerSymbol);
        });

        socket.on("updateBoard", ({ board, turn }) => {
            setBoard(board);
            setTurn(turn);
        });

        socket.on("gameOver", ({ winner }) => {
            alert(winner === "Draw" ? "It's a draw!" : `${winner} wins!`);
        });

        socket.on("opponentLeft", () => {
            alert("Opponent left the game");
        });

        return () => socket.off();
    }, []);

    const handleClick = (index) => {
        console.log("You clicked:", index);
        console.log("Cell value:", board[index]);
        console.log("Your symbol:", symbol);
        console.log("Current turn:", turn);
        if (board[index] === "" && symbol === turn) {
            socket.emit("makeMove", { roomId, index });
        }
    };

    return (
        <>
            <Typography variant="h5">Room ID: {roomId}</Typography>
            <Typography variant="h6">You are: {symbol}</Typography>
            <Typography variant="body1">Turn: {turn}</Typography>
            <Grid container spacing={1} sx={{ width: 300, marginTop: 2 }}>
                {board.map((cell, i) => (
                    <Grid item xs={4} key={i}>
                        <Paper
                            sx={{
                                height: 100,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 36,
                                cursor: "pointer",
                                backgroundColor: "#e0f7fa",
                            }}
                            onClick={() => handleClick(i)}
                        >
                            {cell}
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
