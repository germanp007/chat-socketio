import express from "express";
import { Server } from "socket.io";
import cors from "cors";
const server = express();
const PORT = 8080;

const httpServer = server.listen(PORT, () => {
  console.log("Servidor Escuchando en el puerto:" + PORT);
});

const io = new Server(httpServer).use(
  cors({
    origin: "http://localhost:5173",
  })
);

io.on("connection", (socket) => {
  console.log("se ha conectado un cliente");
  socket.on("message", (socket) => {
    console.log(socket);
  });
});
