import { Container, Typography, Paper } from "@mui/material";
import Calendar from "./components/Calendar";
import './App.css'

function App() {
  return (
    <Container >
      <Paper>
        <Typography variant="h4" align="center" gutterBottom>
          Mini Google Calendar Clone
        </Typography>
        <Calendar />
      </Paper>
    </Container>
  );
}

export default App;