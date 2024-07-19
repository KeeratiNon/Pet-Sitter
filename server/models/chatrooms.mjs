import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    message: {
        type: String,
        require: true
    },
    senderId: {
        type: Number,
        require: true
    },
    receiverId: {
        type: Number,
        require: true
    }
})

const chatSchema = new mongoose.Schema({
    chatRoomId: {
        type: String,
        require: true
    },
    messages: [messageSchema]
})

export const ChatRoom = mongoose.model('ChatRoom', chatSchema);

