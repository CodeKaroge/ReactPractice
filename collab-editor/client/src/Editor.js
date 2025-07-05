import React, { useEffect, useRef, useState } from "react";
import socket from "./socket";
import "./Editor.css";

const Editor = () => {
    const [content, setContent] = useState("");
    const [userCount, setUserCount] = useState(0);
    const [userList, setUserList] = useState([]);
    const [cursorPositions, setCursorPositions] = useState({});
    const [currentUser, setCurrentUser] = useState({});
    const textareaRef = useRef(null);

    useEffect(() => {
        socket.on("receive-changes", setContent);
        socket.on("user-count", setUserCount);
        socket.on("user-list", (users) => {
            setUserList(users);
            const self = users.find(user => user.id === socket.id);
            if (self) setCurrentUser(self);
        });
        socket.on("receive-cursor", (cursorData) => {
            setCursorPositions((prev) => ({
                ...prev,
                [cursorData.id]: cursorData,
            }));
        });
        return () => {
            socket.off("receive-changes");
            socket.off("user-count");
            socket.off("user-list");
            socket.off("receive-cursor");
        };
    }, []);

    console.log(cursorPositions, 'This is cursor position');

    const handleChange = (e) => {
        const newText = e.target.value;
        setContent(newText);
        const cursorPosition = e.target.selectionStart;
        socket.emit("send-changes", newText);
        socket.emit("send-cursor", cursorPosition);
    };

    const handleCursorMove = (e) => {
        const cursorPosition = e.target.selectionStart;
        socket.emit("send-cursor", cursorPosition);
    };

    const getCursorOffset = (charIndex) => {
        if (!textareaRef.current) return { top: 0, left: 0 };
        const textarea = textareaRef.current;
        const div = document.createElement("div");
        const style = getComputedStyle(textarea);
        for (let prop of [
            "fontFamily", "fontSize", "fontWeight", "whiteSpace",
            "letterSpacing", "padding", "border", "lineHeight",
            "textAlign", "wordWrap"
        ]) {
            div.style[prop] = style[prop];
        }
        div.style.position = "absolute";
        div.style.visibility = "hidden";
        div.style.whiteSpace = "pre-wrap";
        div.style.width = `${textarea.offsetWidth}px`;
        div.style.height = "auto";
        div.style.overflow = "auto";
        const before = content.slice(0, charIndex);
        const after = content.slice(charIndex);
        div.innerHTML = `${before}<span id='caret-marker'>\u200b</span>${after}`;
        document.body.appendChild(div);
        const marker = div.querySelector("#caret-marker");
        const { offsetTop: top, offsetLeft: left } = marker;
        document.body.removeChild(div);
        return { top, left };
    }; 

    return (
        <div className="editor-container">
            <div className="top-bar">
                <h2 className="editor-heading">📝 Collaborative Code Editor</h2>
                <div className="user-info">
                    <span>👥 Users Online : {userCount} </span>
                    <div className="user-list-wrapper">
                        <div className="user-preview">
                            <span style={{ color: currentUser.color }}>{currentUser.username}</span>
                            {userList.length > 1 && (
                                <span className="more-users">+{userList.length - 1} more</span>
                            )}
                        </div>
                        <ul className="user-list">
                            {userList.map((user) => (
                                user.id !== socket.id && (
                                    <li key={user.id} style={{ color: user.color }}>
                                        {user.username}
                                    </li>
                                )
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="editor-wrapper">
                <textarea
                    ref={textareaRef}
                    className="editor-textarea"
                    value={content}
                    onChange={handleChange}
                    onKeyUp={handleCursorMove}
                    onClick={handleCursorMove}
                    placeholder="Start typing..."
                    spellCheck={false}
                />
                {Object.entries(cursorPositions).map(([id, data]) => {
                    if (id === socket.id) return null;
                    const { top, left } = getCursorOffset(data.cursorPosition);
                    const userColor = data.color.color;
                    return (
                        <div
                            key={id}
                            className="cursor-wrapper"
                            style={{ top: `${top}px`, left: `${left}px` }}
                        >
                            <div
                                className="user-cursor"
                                style={{ backgroundColor: userColor }}
                            />
                            <span
                                className="cursor-label"
                                style={{
                                    backgroundColor: userColor,
                                    color: "#111",
                                    padding: "2px 6px",
                                    borderRadius: "6px",
                                    fontSize: "12px",
                                    position: "absolute",
                                    top: "-20px",
                                    whiteSpace: "nowrap",
                                    boxShadow: "0 1px 3px rgba(0,0,0,0.3)"
                                }}
                            >
                                {data.username}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Editor;