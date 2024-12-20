import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:5173", // Fixed the CORS origin URL
  },
});

const PORT = 4000; // Correctly defining the PORT variable

let onlineUsers = [];
const addUser = (userId, socketId) => {
  const userExists = onlineUsers.find((user) => user.userId === userId);
  if (!userExists) {
    onlineUsers.push({ userId, socketId });
  }
};

const getUser = (userId) => {
  return onlineUsers.find((user) => user.userId === userId);
};

const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("newUser", (userId) => {
    addUser(userId, socket.id);
    console.log(`User ${userId} added with socket ID: ${socket.id}`);
  });

  socket.on("sendMessage", ({ receiverId, data }) => {
    if (!receiverId || !data) {
      console.log("Invalid message payload:", { receiverId, data });
      return;
    }

    const receiver = getUser(receiverId);

    if (receiver) {
      io.to(receiver.socketId).emit("getMessage", data);
      console.log(`Message sent to ${receiverId}:`, data);
    } else {
      console.log(`Receiver ${receiverId} not found online.`);
    }
  });

  socket.on("disconnect", () => {
    console.log(`Socket disconnected: ${socket.id}`);
    removeUser(socket.id);
  });
});

io.listen(PORT); // The server listens on port 4000
console.log(`Socket.IO server running on http://localhost:${PORT}`);
