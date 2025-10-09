import useTimer from "./useTimer";
import { Button, Typography, Stack, Paper } from "@mui/material";

export default function TimerComponent() {
    const { time, isRunning, start, pause, reset } = useTimer(0);

    const formatTime = (t) => {
        const minutes = Math.floor(t / 60)
            .toString()
            .padStart(2, "0");
        const seconds = (t % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    return (
        <Paper
            elevation={4}
            sx={{
                width: 300,
                p: 3,
                m: "auto",
                mt: 10,
                textAlign: "center",
                borderRadius: 3,
            }}
        >
            <Typography variant="h5" gutterBottom>
                ⏱️ Custom Timer Hook
            </Typography>

            <Typography variant="h3" sx={{ my: 2, fontWeight: "bold" }}>
                {formatTime(time)}
            </Typography>

            <Stack direction="row" spacing={2} justifyContent="center">
                {!isRunning ? (
                    <Button variant="contained" color="success" onClick={start}>
                        Start
                    </Button>
                ) : (
                    <Button variant="contained" color="warning" onClick={pause}>
                        Pause
                    </Button>
                )}
                <Button variant="outlined" color="error" onClick={reset}>
                    Reset
                </Button>
            </Stack>
        </Paper>
    );
}
