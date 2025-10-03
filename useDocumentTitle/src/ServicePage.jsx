import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import useDocumentHead from "./useDocumentTitle";

export default function ServicesPage() {
    useDocumentHead({
        title: "Services - My React App",
        description: "Discover our amazing services",
        ogTitle: "Services - My React App",
        ogDescription: "Explore the services we offer",
        ogImage: "https://myapp.com/images/services.jpg",
        twitterCard: "summary_large_image",
        twitterTitle: "Services - My React App",
        twitterDescription: "Explore the services we offer",
        twitterImage: "https://myapp.com/images/services.jpg",
    });

    return (
        <Box
            sx={{
                minHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #00C9FF 0%, #92FE9D 100%)",
                color: "#fff",
                p: 4,
            }}
        >
            <Typography variant="h3" sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}>
                Tutorials & Projects
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, textAlign: "center", maxWidth: 600 }}>
                Step-by-step tutorials and practical projects to boost your programming skills and learn modern web development.
            </Typography>
            <Card sx={{ p: 2, backgroundColor: "rgba(255,255,255,0.1)", borderRadius: 3 }}>
                <CardContent>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        From React, Node.js, to full-stack projects, CodeKaroge provides resources to make you a confident developer.
                    </Typography>
                    <Button variant="contained" color="secondary">
                        View Tutorials
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}
