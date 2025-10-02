import React, { useState } from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import UserList from './components/UserList';
import Search from './components/Search';
import { useUsers } from './hooks/useUsers';

const App = () => {
    const { data = [] } = useUsers();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredUsers = data.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    User Directory
                </Typography>
                <Search onSearch={setSearchTerm} />
                <Box sx={{ mt: 3 }}>
                    <UserList users={filteredUsers} />
                </Box>
            </Paper>
        </Container>
    );
};

export default App;
