import React from 'react';
import { List, ListItem, ListItemText, Divider, Typography } from '@mui/material';

const UserList = ({ users }) => {
    if (!users.length) return <Typography>No users found</Typography>;

    return (
        <List>
            {users.map(user => (
                <React.Fragment key={user.id}>
                    <ListItem>
                        <ListItemText
                            primary={user.name}
                            secondary={user.email}
                        />
                    </ListItem>
                    <Divider />
                </React.Fragment>
            ))}
        </List>
    );
};

export default UserList;
