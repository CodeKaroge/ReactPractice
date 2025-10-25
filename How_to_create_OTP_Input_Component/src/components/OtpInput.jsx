import { useState, useRef } from "react";
import { Box, TextField } from "@mui/material";

const OtpInput = ({ length = 6, onChangeOtp }) => {
    const [otpContainer, setOtpContainer] = useState(new Array(length).fill(""));
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value.replace(/\D/g, "");
        if (!value) return;
        const newOtp = [...otpContainer];
        newOtp[index] = value[0];
        setOtpContainer(newOtp);
        onChangeOtp?.(newOtp.join(""));
        if (index < length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            if (otpContainer[index]) {
                const newOtp = [...otpContainer];
                newOtp[index] = "";
                setOtpContainer(newOtp);
                onChangeOtp?.(newOtp.join(""));
            } else if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData("text").slice(0, length).split("");
        const newOtp = [...otpContainer];
        pasted.forEach((char, i) => (newOtp[i] = char));
        setOtpContainer(newOtp);
        onChangeOtp?.(newOtp.join(""));
        const nextIndex = pasted.length < length ? pasted.length : length - 1;
        inputRefs.current[nextIndex].focus();
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={2}
            onPaste={handlePaste}
        >
            {otpContainer.map((digit, index) => (
                <TextField
                    key={index}
                    inputRef={(el) => (inputRefs.current[index] = el)}
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    variant="outlined"
                    inputProps={{
                        maxLength: 1,
                        style: {
                            textAlign: "center",
                            fontSize: "24px",
                            width: "45px",
                            height: "45px",
                        },
                    }}
                />
            ))}
        </Box>
    );
};

export default OtpInput;
