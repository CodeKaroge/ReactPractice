import React, { useEffect, useState } from 'react';
import {
  Container, Typography, TextField, Button,
  Snackbar, Grid, Card, CardContent, Dialog, DialogTitle, DialogContent
} from '@mui/material';
import { socket } from './services/socket';
import Poll from './components/Poll';

function App() {
  const [polls, setPolls] = useState([]);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);
  const [notification, setNotification] = useState('');
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [dialogOpen, setDialogOpen] = useState(true);

  useEffect(() => {
    socket.on('requestUsername', () => setDialogOpen(true));

    socket.on('pollList', (data) => {
      setPolls(data);
    });

    socket.on('newPoll', (poll) => {
      setPolls((prev) => {
        if (!prev.find(p => p.id === poll.id)) {
          return [...prev, poll];
        }
        return prev;
      });
    });

    socket.on('voteUpdate', (updatedPoll) => {
      setPolls((prev) => prev.map(p => p.id === updatedPoll.id ? updatedPoll : p));
    });

    socket.on('pollExpired', (pollId) => {
      setPolls((prev) => prev.filter(p => p.id !== pollId));
    });

    socket.on('notification', (msg) => {
      setNotification(msg);
      setOpen(true);
    });

    socket.on('errorMessage', (msg) => {
      setNotification(msg);
      setOpen(true);
    });

    return () => {
      socket.off('requestUsername');
      socket.off('pollList');
      socket.off('newPoll');
      socket.off('voteUpdate');
      socket.off('pollExpired');
      socket.off('notification');
      socket.off('errorMessage');
    };
  }, []);

  const handlePollCreate = () => {
    if (!question || options.some(opt => !opt)) return;
    socket.emit('createPoll', {
      question,
      options,
      expiresIn: 60 // expires in 60 seconds
    });
    setQuestion('');
    setOptions(['', '']);
  };

  const handleUsernameSubmit = () => {
    if (username.trim()) {
      socket.emit('setUsername', username);
      setDialogOpen(false);
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Dialog open={dialogOpen}>
        <DialogTitle>Enter Your Name</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            label="Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleUsernameSubmit()}
            sx={{ mb: 2 }}
          />
          <Button onClick={handleUsernameSubmit} variant="contained">Join</Button>
        </DialogContent>
      </Dialog>

      <Typography variant="h4" gutterBottom>Create a Poll</Typography>

      <TextField fullWidth label="Question" value={question} onChange={(e) => setQuestion(e.target.value)} sx={{ mb: 2 }} />
      {options.map((opt, i) => (
        <TextField
          key={i}
          label={`Option ${i + 1}`}
          value={opt}
          onChange={(e) => {
            const newOptions = [...options];
            newOptions[i] = e.target.value;
            setOptions(newOptions);
          }}
          sx={{ mb: 1, display: 'block' }}
        />
      ))}
      <Button variant="outlined" onClick={() => setOptions([...options, ''])} sx={{ mb: 2 }}>
        Add Option
      </Button>
      <br />
      <Button variant="contained" onClick={handlePollCreate}>Create Poll</Button>

      <Typography variant="h5" sx={{ mt: 4 }}>Live Polls</Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {polls.map(poll => (
          <Grid item xs={12} md={6} key={poll.id}>
            <Card>
              <CardContent>
                <Poll poll={poll} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        message={notification}
        onClose={() => setOpen(false)}
      />
    </Container>
  );
}

export default App;