// socket.js
import { io } from "socket.io-client";

const socket = io("http://localhost:4000"); // We'll build the server on port 4000

export default socket;
