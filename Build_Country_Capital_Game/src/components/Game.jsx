import React, { useState, useEffect } from "react";
import {
    Grid,
    Card,
    CardActionArea,
    Typography,
    Box,
    Button,
    Zoom,
    Fade
} from "@mui/material";

function Game({ data }) {
    const [items, setItems] = useState([]);
    const [selected, setSelected] = useState([]);
    const [matched, setMatched] = useState([]);
    const [feedback, setFeedback] = useState({});
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        const countryItems = Object.keys(data).map((country) => ({
            label: country,
            type: "country",
        }));
        const capitalItems = Object.entries(data).map(([country, capital]) => ({
            label: capital,
            type: "capital",
            country,
        }));

        const shuffled = [...countryItems, ...capitalItems].sort(
            () => Math.random() - 0.5
        );
        setItems(shuffled);
    }, [data]);

    const handleSelect = (item) => {
        if (disabled || matched.includes(item.label)) return;

        const isAlreadySelected = selected.some((s) => s.label === item.label);
        if (isAlreadySelected) {
            setSelected(selected.filter((s) => s.label !== item.label));
            return;
        }
        const newSelection = [...selected, item];
        setSelected(newSelection);
        if (newSelection.length === 2) {
            setDisabled(true);
            const [first, second] = newSelection;
            const isMatch =
                (first.type === "country" && data[first.label] === second.label) ||
                (second.type === "country" && data[second.label] === first.label);

            const color = isMatch ? "#66cc99" : "red";
            setFeedback({ [first.label]: color, [second.label]: color });
            setTimeout(() => {
                if (isMatch) {
                    setMatched((prev) => [...prev, first.label, second.label]);
                }
                setFeedback({});
                setSelected([]);
                setDisabled(false);
            }, 2000);
        }
    };

    const getBorderColor = (item) => {
        if (feedback[item.label]) return feedback[item.label];
        if (selected.some((s) => s.label === item.label)) return "#1976d2";
        return "#414141";
    };

    const handleRestart = () => {
        setSelected([]);
        setMatched([]);
        setFeedback({});
        const shuffled = [...items].sort(() => Math.random() - 0.5);
        setItems(shuffled);
    };

    const isGameOver = matched.length === items.length;

    return (
        <Box sx={{ maxWidth: "90%", mx: "auto", mt: 6, textAlign: "center" }}>
            <Typography variant="h5" gutterBottom>
                🌍 Country–Capital Match Game
            </Typography>
            {isGameOver ? (
                <Box
                    sx={{
                        mt: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Zoom in={true} timeout={600}>
                        <Typography
                            variant="h6"
                            color="success.main"
                            gutterBottom
                            sx={{
                                fontWeight: "bold",
                                animation: "pulse 1.5s infinite",
                                "@keyframes pulse": {
                                    "0%": { transform: "scale(1)" },
                                    "50%": { transform: "scale(1.1)" },
                                    "100%": { transform: "scale(1)" },
                                },
                            }}
                        >
                            🎉 Congratulations! You matched all pairs!
                        </Typography>
                    </Zoom>

                    {/* Fade in animation for the button */}
                    <Fade in={true} timeout={1200}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleRestart}
                            sx={{
                                mt: 2,
                                px: 4,
                                py: 1,
                                borderRadius: 3,
                                boxShadow: 3,
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.1)",
                                    boxShadow: 6,
                                },
                            }}
                        >
                            Play Again
                        </Button>
                    </Fade>
                </Box>
            ) : (
                <>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        {items.map((item) => (
                            // !matched.includes(item.label) && 
                            <Grid item xs={6} sm={4} key={item.label}>
                                <Card
                                    sx={{
                                        border: `2px solid ${getBorderColor(item)}`,
                                        opacity: matched.includes(item.label) ? 0 : 1,
                                        transition: "all 0.3s ease",
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardActionArea onClick={() => handleSelect(item)}>
                                        <Box sx={{ p: 2 }}>
                                            <Typography variant="body1" fontWeight="500">
                                                {item.label}
                                            </Typography>
                                        </Box>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{ mt: 3 }}>
                        <Button variant="outlined" color="secondary" onClick={handleRestart}>
                            Restart Game
                        </Button>
                    </Box>
                </>
            )}
        </Box>
    );
}

export default Game;
