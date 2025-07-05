import { useEffect, useState } from 'react';
import { socket } from './socket';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Divider,
  Paper,
  Stack,
  Chip,
  Select,
  MenuItem,
} from '@mui/material';

function App() {
  const [username, setUsername] = useState('');
  const [registered, setRegistered] = useState(false);
  const [message, setMessage] = useState('');
  const [messageForGroup, setMessageForGroup] = useState('');
  const [toUser, setToUser] = useState('');
  const [privateMessages, setPrivateMessages] = useState([]);
  const [room, setRoom] = useState('');
  const [groupMessages, setGroupMessages] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [typingUser, setTypingUser] = useState(null);

  useEffect(() => {
    socket.on('private-message', (data) => {
      setPrivateMessages((prev) => [...prev, data]);
    });
    socket.on('group-message', (data) => {
      setGroupMessages((prev) => [...prev, data]);
    });
    socket.on('users-online', (users) => {
      setOnlineUsers(users);
    });
    socket.on('available-rooms', (rooms) => {
      console.log(rooms, 'This is rooms');
    });
    socket.on('typing', ({ from }) => {
      setTypingUser(from);
    });
    socket.on('stop-typing', ({ from }) => {
      if (typingUser === from) setTypingUser(null);
    });
    return () => {
      socket.off('private-message');
      socket.off('group-message');
      socket.off('users-online');
      socket.off('typing');
      socket.off('stop-typing');
    };
  }, [typingUser]);

  const register = () => {
    if (!username.trim()) return;
    socket.emit('register', username);
    setRegistered(true);
  };

  const sendPrivateMessage = () => {
    if (!message.trim()) return;
    socket.emit('private-message', { to: toUser, message });
    setPrivateMessages((prev) => [
      ...prev,
      { from: username, message },
    ]);
    setMessage('');
    socket.emit('stop-typing', { to: toUser });
  };

  const sendGroupMessage = () => {
    if (!messageForGroup.trim()) return;
    socket.emit('group-message', { roomName: room, message: messageForGroup });
    setMessageForGroup('');
  };

  const joinRoom = () => {
    if (!room.trim()) return;
    socket.emit('join-room', { roomName: room });
  };

  const handleTyping = () => {
    if (toUser) {
      socket.emit('typing', { to: toUser });
    }
  };

  const handleStopTyping = () => {
    if (toUser) {
      socket.emit('stop-typing', { to: toUser });
    }
  };

  if (!registered) {
    return (
      <Container maxWidth="sm" sx={{ mt: 10 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom>
            Enter Username
          </Typography>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" onClick={register} fullWidth>
            Register
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Welcome, {username} 👋
      </Typography>
      <Typography variant="subtitle1">
        🟢 Online Users: {onlineUsers.length}
      </Typography>
      <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap' }}>
        {onlineUsers.map((user) => (
          <Chip
            key={user}
            label={user}
            color={user === username ? 'primary' : 'default'}
          />
        ))}
      </Stack>
      <Divider sx={{ my: 3 }} />
      <Box>
        <Typography variant="h5">🔒 Private Chat</Typography>
        <Stack direction="row" spacing={2} sx={{ my: 2 }}>
          <Select
            sx={{ minWidth: 100 }}
            labelId="select-user-label"
            value={toUser}
            displayEmpty
            onChange={(e) => setToUser(e.target.value)}
          >
            <MenuItem value="" disabled>
              Select User
            </MenuItem>
            {onlineUsers.filter(item => item !== username).map((user) => (
              <MenuItem key={user} value={user}>
                {user}
              </MenuItem>
            ))}
          </Select>
          <TextField
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={handleTyping}
            onBlur={handleStopTyping}
          />
          <Button variant="contained" onClick={sendPrivateMessage}>
            Send
          </Button>
        </Stack>
        {typingUser && (
          <Typography color="secondary" sx={{ mb: 1 }}>
            ✍️ {typingUser} is typing...
          </Typography>
        )}
        <Paper sx={{ p: 2, mb: 4 }}>
          <Typography variant="h6">Private Messages</Typography>
          {privateMessages.map((msg, i) => (
            <Typography key={i}>
              <b>{msg.from}:</b> {msg.message}
            </Typography>
          ))}
        </Paper>
      </Box>
      <Divider sx={{ my: 3 }} />
      <Box>
        <Typography variant="h5">👥 Group Chat</Typography>
        <Stack direction="row" spacing={2} sx={{ my: 2 }}>
          <TextField
            label="Room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          <Button variant="outlined" onClick={joinRoom}>
            Join Room
          </Button>
        </Stack>
        <Stack direction="row" spacing={2} sx={{ my: 2 }}>
          <TextField
            label="Message"
            value={messageForGroup}
            onChange={(e) => setMessageForGroup(e.target.value)}
            fullWidth
          />
          <Button variant="contained" onClick={sendGroupMessage}>
            Send
          </Button>
        </Stack>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Group Messages</Typography>
          {groupMessages.map((msg, i) => (
            <Typography key={i}>
              <b>{msg.from}:</b> {msg.message}
            </Typography>
          ))}
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
