import express from "express";
import { authRouter } from "./routes/auth.mjs";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { chatRouter } from "./routes/chatroom.mjs";
mongoose.connect("mongodb://127.0.0.1/PetSitter");
import "./models/chatrooms.mjs";
import profiles from "./utils/dbtest.mjs";
import { petSitterProfileRouter } from "./routes/petSitterProfile.mjs";
import { ChatRoom } from "./models/chatrooms.mjs";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 4000;

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

app.use(express.json());
app.use("/auth", authRouter)
app.use("/petsitter/profile",petSitterProfileRouter)

app.get("/profiles", (req, res) => {
  res.json(profiles);
});

app.get("/test", (req, res) => {
  return res.json("Server API is working");
});

app.use("/chatrooms", chatRouter);

io.use((socket, next) => {
  try {
    const token = socket.handshake.query.token;
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    socket.userId = payload.id;
    next();
  } catch (err) {
    console.log("token invalid");
  }
});

io.on("connection", (socket) => {
  console.log("a user connected:", socket.userId);

  socket.on("disconnect", () => {
    console.log("user disconnected:", socket.userId);
  });

  socket.on("sendMessage", async ({ chatRoomId, targetId, message }) => {
    if (message) {
      try {
        const newMessage = {
          message,
          senderId: socket.userId,
          receiverId: targetId,
        };
        const reverseChatRoomId = chatRoomId.chatRoomId
          .split("/")
          .reverse()
          .join("/");
        const chatRoom = await ChatRoom.findOneAndUpdate(
          {
            $or: [
              { chatRoomId: chatRoomId.chatRoomId },
              { chatRoomId: reverseChatRoomId },
            ],
          },
          { $push: { messages: newMessage } },
          { new: true, upsert: true }
        );
        io.to(chatRoom).emit("newMessage", newMessage);
      } catch (error) {
        console.error("Error saving message:", error);
      }
    }
  });

  socket.on("joinRoom", async ({ chatRoomId, targetId }) => {
    try {
      const reverseChatRoomId = chatRoomId.chatRoomId
          .split("/")
          .reverse()
          .join("/");
      if (chatRoomId) {
        const chatRoom = await ChatRoom.findOne({
          $or: [
            { chatRoomId: chatRoomId.chatRoomId },
            { chatRoomId: reverseChatRoomId },
          ],
        });
        if (chatRoom) {
          socket.join(chatRoomId);
          io.to(chatRoomId).emit("chatRoomMessage", {
            chatRoom,
          });
          return;
        }
      } else {
        const newChatRoomId = `${socket.userId}/${targetId}`;
        const newChatRoom = new ChatRoom({
          chatRoomId: newChatRoomId,
          messages: [],
        });
        await newChatRoom.save();
        socket.join(chatRoomId);
        io.to(chatRoomId).emit("chatRoomMessage", {
          chatRoom: newChatRoom,
        });
      }
    } catch (error) {
      console.error("Error joining room:", error);
    }
  });
});

server.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
