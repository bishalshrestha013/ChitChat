import { createServer } from 'node:http';
import express from 'express';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

const ROOM = 'main-room';

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);

  socket.on("joinRoom", async (userName) => {
    console.log(`${userName} joined the room.`);

    await socket.join(ROOM);

    socket.to(ROOM).emit("roomJoinedNotification", userName);
  })

  socket.on("chatMessage", async (message) => {
    socket.to(ROOM).emit("chatMessage", message);
  })

  socket.on("typing", async (userName) => {
    socket.to(ROOM).emit("typing", userName);
  })

  socket.on("stopTyping", async (userName) => {
    socket.to(ROOM).emit("stopTyping", userName);
  })
});

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(4000, () => {
  console.log('server running at http://localhost:4000');
});