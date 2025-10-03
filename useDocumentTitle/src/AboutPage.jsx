import useDocumentHead from "./useDocumentTitle";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";

export default function AboutPage() {
    useDocumentHead({
        title: "About Us - My React App",
        description: "Learn more about our team and mission",
        ogTitle: "About Us - My React App",
        ogDescription: "Meet our amazing team and discover our mission",
        ogImage: "https://myapp.com/images/about.jpg",
        twitterCard: "summary_large_image",
        twitterTitle: "About Us - My React App",
        twitterDescription: "Meet our amazing team and discover our mission",
        twitterImage: "https://myapp.com/images/about.jpg",
    });


    return (
        <Box
            sx={{
                minHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #FF6B6B 0%, #FF000D 100%)",
                color: "#fff",
                p: 4,
            }}
        >
            <Typography variant="h3" sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}>
                About CodeKaroge
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, textAlign: "center", maxWidth: 600 }}>
                CodeKaroge is dedicated to teaching coding in a simple and practical way. From React to full-stack development, we guide learners to build real projects.
            </Typography>
            <Card sx={{ p: 2, backgroundColor: "rgba(255,255,255,0.1)", borderRadius: 3 }}>
                <CardContent>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        Our mission is to make coding accessible, easy, and fun for everyone. Join thousands of learners and start coding with confidence.
                    </Typography>
                    <Button variant="contained" color="secondary">
                        Learn More
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}
