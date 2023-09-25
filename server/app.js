import express from "express";
import { Server } from "socket.io";
import cors from "cors";
const server = express();
const PORT = 8080;

const httpServer = server.listen(PORT, () => {
  console.log("Servidor Escuchando en el puerto:" + PORT);
});

server.use(
  cors({
    origin: "http://localhost:5173/",
  })
);
const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("cliente conectado");
  socket.on("message", (data) => {
    console.log(data);
  });
});
