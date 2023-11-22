//import { useState } from "react";
import { io } from "socket.io-client";

const App = () => {
  //const [message, setMessage] = useState("");

  const socket = io("http://localhost:8080/");
  socket.emit("message", "Hola desde el front");
  return (
    <form onSubmit={}> 
      <input
        //onChange={(e) => setMessage(e.target.value)}
        type="text"
        placeholder="escribe tu mensaje..."
      />
      <button>Send</button>
    </form>
  );
};

export default App;
