import { useState } from "react";
import { io } from "socket.io-client";

const socket = io("/");

const App = () => {
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.on("message", message);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        placeholder="escribe tu mensaje..."
      />
      <button>Send</button>
    </form>
  );
};

export default App;
