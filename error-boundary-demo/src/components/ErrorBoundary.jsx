import React from "react";
import { Alert, AlertTitle, Button, Box } from "@mui/material";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "background.default",
            p: 2
          }}
        >
          <Alert
            severity="error"
            sx={{
              maxWidth: 400,
              width: "100%",
              boxShadow: 3
            }}
          >
            <AlertTitle>Something went wrong</AlertTitle>
            {this.state.error?.message}
            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Button variant="contained" onClick={this.handleReset}>
                Try Again
              </Button>
            </Box>
          </Alert>
        </Box>
      );
    }
    return this.props.children;
  }
}
