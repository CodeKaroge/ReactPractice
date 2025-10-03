import useDocumentHead from "./useDocumentTitle";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";

export default function HomePage() {
    useDocumentHead({
        title: "Home - My React App",
        description: "Welcome to the stylish homepage of my app",
        canonical: "https://myapp.com/home",
        ogTitle: "Home - My React App",
        ogDescription: "Check out the homepage of our React app",
        ogImage: "https://myapp.com/images/homepage.jpg",
        twitterCard: "summary_large_image",
        twitterTitle: "Home - My React App",
        twitterDescription: "Check out the homepage of our React app",
        twitterImage: "https://myapp.com/images/homepage.jpg",
    });

    return (
        <Box
            sx={{
                minHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
                color: "#fff",
            }}
        >
            <Typography variant="h3" sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}>
                Welcome to CodeKaroge
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, textAlign: "center", maxWidth: 600 }}>
                Learn programming with simple tutorials, tips, and real-world projects. Start building your skills today!
            </Typography>
            <Card sx={{ p: 2, backgroundColor: "rgba(255,255,255,0.1)", borderRadius: 3 }}>
                <CardContent>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        Navigate through our tutorials and projects. Each page will guide you to improve your coding skills efficiently.
                    </Typography>
                    <Button variant="contained" color="secondary">
                        Watch Tutorials
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}
