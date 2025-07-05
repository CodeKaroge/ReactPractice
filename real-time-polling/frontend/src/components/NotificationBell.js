import { useEffect, useState } from "react";
import {
  IconButton,
  Badge,
  Popover,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const NotificationBell = ({ notifications }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [unreadCount, setUnreadCount] = useState(notifications.length);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);
  useEffect(() => {
    if (open) {
      // Reset notification count
      setUnreadCount(0);
    }
  }, [open]);
  useEffect(() => {
    setUnreadCount(notifications.length);
  }, [notifications]);
  const getNotificationText = (notif) => {
    switch (notif.type) {
      case "like":
        return `${notif.user} liked your post`;
      case "comment":
        return `${notif.user} commented: "${notif.comment}"`;
      case "message":
        return `${notif.user} sent a message: "${notif.message}"`;
      default:
        return "New notification";
    }
  };

  return (
    <>
      <IconButton color="inherit" onClick={handleOpen}>
        <Badge badgeContent={unreadCount} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <List sx={{ width: 300 }}>
          {notifications.length === 0 ? (
            <Typography sx={{ p: 2 }}>No notifications</Typography>
          ) : (
            notifications.map((notif, index) => (
              <ListItem key={index} divider>
                <ListItemText
                  primary={getNotificationText(notif)}
                  secondary={notif.time}
                />
              </ListItem>
            ))
          )}
        </List>
      </Popover>
    </>
  );
};

export default NotificationBell;
