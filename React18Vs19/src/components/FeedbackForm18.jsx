import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

export default function FeedbackForm18() {
    const [feedback, setFeedback] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        await new Promise((resolve) => setTimeout(resolve, 1000));
        setMessage("Feedback submitted: " + feedback)
        setFeedback("");
        setIsSubmitting(false);
    };

    return (
        <Box>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400, mx: "auto", mt: 5 }}
            >
                <Typography variant="h6" align="center">
                    Feedback Form (React 18)
                </Typography>
                <TextField
                    label="Your Feedback"
                    multiline
                    rows={4}
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    variant="outlined"
                />
                <Button type="submit" variant="contained" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
            </Box>
            {
                message && (
                    <Typography sx={{ mt: 2, color: "green" }}>{message}</Typography>
                )
            }
        </Box>
    );
}
