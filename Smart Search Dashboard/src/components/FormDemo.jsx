"use client";
import { useFormStatus } from "react-dom";

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending} style={{ padding: "6px 12px" }}>
            {pending ? "Submitting…" : "Submit"}
        </button>
    );
}

export default function FormDemo() {
    async function action(formData) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        alert(`Form submitted: ${formData.get("name")}`);
    }

    return (
        <div style={{ margin: "20px" }}>
            <h2>📝 Form Demo (React 19 useFormStatus)</h2>
            <form action={action}>
                <input
                    name="name"
                    placeholder="Your name"
                    style={{ padding: "6px", marginRight: "10px" }}
                />
                <SubmitButton />
            </form>
        </div>
    );
}
