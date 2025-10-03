import { useState } from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    CircularProgress,
} from "@mui/material";
import { useFormStatus } from "react-dom";

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" variant="contained" disabled={pending}>
            {pending ? <CircularProgress size={24} color="inherit" /> : "Submit"}
        </Button>
    );
}

export default function FeedbackForm19() {
    const [message, setMessage] = useState("");

    async function handleFeedback(formData) {
        const feedback = formData.get("feedback");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setMessage("Feedback submitted: " + feedback);
    }

    return (
        <Box sx={{ maxWidth: 400, mx: "auto", mt: 5 }}>
            <Typography variant="h6" align="center">
                Feedback Form (React 19 + useFormStatus)
            </Typography>
            <Box
                component="form"
                action={handleFeedback}
                sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
            >
                <TextField
                    name="feedback"
                    label="Your Feedback"
                    multiline
                    rows={4}
                    variant="outlined"
                />
                <SubmitButton />
            </Box>
            {message && (
                <Typography sx={{ mt: 2, color: "green" }}>{message}</Typography>
            )}
        </Box>
    );
}
