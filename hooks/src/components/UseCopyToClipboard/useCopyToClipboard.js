import { useState } from "react";

function useCopyToClipboard() {
    const [isCopied, setIsCopied] = useState(false);
    const copy = async () => {
        try {
            const textToCopy = window.getSelection().toString();
            await navigator.clipboard.writeText(textToCopy);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            alert("Failed to copy text:", err);
            setIsCopied(false);
        }
    };
    return { isCopied, copy };
}

export default useCopyToClipboard;
