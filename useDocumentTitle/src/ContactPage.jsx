import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import useDocumentHead from "./useDocumentTitle";

export default function ContactPage() {
    useDocumentHead({
        title: "Contact Us - My React App",
        description: "Get in touch with our team",
        ogTitle: "Contact Us - My React App",
        ogDescription: "Reach out to us anytime",
        ogImage: "https://myapp.com/images/contact.jpg",
        twitterCard: "summary_large_image",
        twitterTitle: "Contact Us - My React App",
        twitterDescription: "Reach out to us anytime",
        twitterImage: "https://myapp.com/images/contact.jpg",
    });

    return (
        <Box
            sx={{
                minHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #FFB347 0%, #FFCC33 100%)",
                color: "#fff",
                p: 4,
            }}
        >
            <Typography variant="h3" sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}>
                Contact Us
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, textAlign: "center", maxWidth: 600 }}>
                Have questions or feedback about CodeKaroge? Reach out to us, and we’ll get back to you promptly.
            </Typography>
            <Card sx={{ p: 2, backgroundColor: "rgba(255,255,255,0.1)", borderRadius: 3 }}>
                <CardContent>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        Whether it’s about tutorials, project ideas, or collaborations, we’re here to help and listen.
                    </Typography>
                    <Button variant="contained" color="secondary">
                        Send Message
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}
