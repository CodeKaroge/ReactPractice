import { useState } from "react";
import {
    Box,
    Typography,
    Paper,
    Button,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
    LocalizationProvider,
    DatePicker,
    PickersDay,
} from "@mui/x-date-pickers";
import "./Calendar.css";
import { Add } from "@mui/icons-material";

const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);

function formatDate(date) {
    if (!(date instanceof Date)) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}


function CustomDay(props) {
    const { day, outsideCurrentMonth, events, ...other } = props;
    const hasEvent = events?.[formatDate(day)]?.length > 0;
    return (
        <Box position="relative" display="inline-block">
            <PickersDay {...other} day={day} outsideCurrentMonth={outsideCurrentMonth} />
            {hasEvent && (
                <Box
                    sx={{
                        position: "absolute",
                        bottom: 4,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "#1976d2",
                    }}
                />
            )}
        </Box>
    );
}

function Calendar() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [events, setEvents] = useState({});
    const [open, setOpen] = useState(false);
    const [selectedHour, setSelectedHour] = useState(null);
    const [eventText, setEventText] = useState("");

    const dateKey = formatDate(selectedDate);

    const handleAddEvent = (hour) => {
        setSelectedHour(hour);
        setOpen(true);
    };

    const handleSaveEvent = () => {
        setEvents((prev) => ({
            ...prev,
            [dateKey]: [...(prev[dateKey] || []), { hour: selectedHour, text: eventText }],
        }));
        setOpen(false);
        setEventText("");
        setSelectedHour(null);
    };

    console.log(selectedDate, ' This is srlected data ', events, ' Hours selected ',selectedHour);
    
    return (
        <Box className="calendar-container">
            <Typography variant="h5" gutterBottom>
                Day Calendar - {selectedDate.toLocaleDateString()}
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Pick a date"
                    value={selectedDate}
                    onChange={(newDate) => setSelectedDate(newDate)}
                    slots={{ day: CustomDay }}
                    slotProps={{
                        day: { events },
                        textField: { sx: { mb: 2 } },
                    }}
                />
            </LocalizationProvider>
            <Box className="day-calendar-grid">
                {hours.map((hour) => {
                    const hasEvent = (events[dateKey] || []).some((e) => e.hour === hour);
                    return (
                        <Paper key={hour} className="calendar-hour" elevation={1}>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Box display="flex" alignItems="center">
                                    <Typography variant="body2">{hour}</Typography>
                                    {hasEvent && (
                                        <Box
                                            sx={{
                                                width: 8,
                                                height: 8,
                                                borderRadius: "50%",
                                                background: "#1976d2",
                                                ml: 1,
                                                display: "inline-block",
                                            }}
                                        />
                                    )}
                                </Box>
                                <Button
                                    size="small"
                                    // variant="outlined"
                                    onClick={() => handleAddEvent(hour)}
                                >
                                    <Add />
                                </Button>
                            </Box>
                            <Box mt={1}>
                                {(events[dateKey] || [])
                                    .filter((e) => e.hour === hour)
                                    .map((e, idx) => (
                                        <Paper key={idx} className="calendar-event" elevation={2}>
                                            <Typography variant="body2">{e.text}</Typography>
                                        </Paper>
                                    ))}
                            </Box>
                        </Paper>
                    );
                })}
            </Box>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Add Event at {selectedHour}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Event"
                        fullWidth
                        value={eventText}
                        onChange={(e) => setEventText(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={handleSaveEvent} disabled={!eventText}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default Calendar;
