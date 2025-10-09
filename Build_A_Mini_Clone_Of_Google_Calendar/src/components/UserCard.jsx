import { Card, CardContent, Typography } from "@mui/material";

const UserCard = ({ user }) => {
    if (!user) {
        throw new Error("Data not fetched for user list");
    }

    return (
        <Card sx={{ minWidth: 250, m: 1 }}>
            <CardContent>
                <Typography variant="h6">{user.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                    Email: {user.email}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default UserCard;
