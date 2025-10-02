import React from "react";
import { Grid } from "@mui/material";
import UserCard from "./UserCard";

const users = [{
    name: 'Jhon',
    email: "jhon@gmail.com"
}];

const UserList = () => {
    return (
        <Grid container spacing={2}>
            {users.map((user) => (
                <Grid item key={user.id} xs={12} sm={6} md={4}>
                        <UserCard user={user} />
                </Grid>
            ))}
        </Grid>
    );
};

export default UserList;
