import React, { useState, useTransition } from "react";
import UserList from "./UserList";

export default function SearchBar({ data }) {
    const [query, setQuery] = useState("");
    const [filtered, setFiltered] = useState(data);
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        startTransition(() => {
            setFiltered(
                data.filter((user) =>
                    user.name.toLowerCase().includes(value.toLowerCase())
                )
            );
        });
    };

    return (
        <div style={{ margin: "20px" }}>
            <h2>🔎 Concurrent Rendering Demo (Search)</h2>
            <input
                value={query}
                onChange={handleChange}
                placeholder="Search users..."
                style={{ padding: "8px", width: "250px", marginBottom: "10px" }}
            />
            {isPending && <p>Loading results…</p>}
            <UserList users={filtered} />
        </div>
    );
}
