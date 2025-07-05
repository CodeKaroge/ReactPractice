import { Container, Typography } from '@mui/material';
import Canvas from './components/Canvas';

function App() {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Multiplayer Drawing App
      </Typography>
      <Canvas />
    </Container>
  );
}

export default App;
