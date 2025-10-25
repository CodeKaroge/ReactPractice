import { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import OtpInput from "./components/OtpInput";

export default function App() {
  const [otp, setOtp] = useState("");

  const handleSubmit = () => {
    alert(`Your OTP is: ${otp}`);
  };

  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h5" gutterBottom>
        Enter OTP
      </Typography>
      <OtpInput
        length={6}
        onChangeOtp={setOtp} />
      <Box mt={3}>
        <Button
          variant="contained"
          color="primary"
          disabled={otp.length !== 6}
          onClick={handleSubmit}
        >
          Verify OTP
        </Button>
      </Box>
      <Typography variant="body2" color="text.secondary" mt={2}>
        OTP Entered: {otp || "____"}
      </Typography>
    </Box>
  );
}
