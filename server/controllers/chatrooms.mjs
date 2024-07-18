import { ChatRoom } from "../models/chatrooms.mjs";
import sql from "../utils/db.mjs";

export const getChatRoomList = async (req, res) => {
  const allChatRoom = await ChatRoom.find(
    {},
    {
      _id: 0,
      chatRoomId: 1,
    }
  );
  const mappedChatRoomWithName = await Promise.all(
    allChatRoom
      .filter((chatRoom) =>
        chatRoom.chatRoomId.split("/").find((id) => id === req.user.id)
      )
      .map(async (chatRoom) => {
        const targetId = Number(
          chatRoom.chatRoomId.split("/").find((id) => id !== req.user.id)
        );
        let data;
        if (req.user.role === "petsitter") {
          data =
            await sql`select firstname, lastname from user_profiles where user_id = ${targetId}`;
        } else {
          data =
            await sql`select firstname, lastname from pet_sitter_profiles where pet_sitter_id = ${targetId}`;
        }
        return {
          chatRoom: chatRoom.chatRoomId,
          name: `${data[0].firstname} ${data[0].lastname}`,
          targetId,
        };
      })
  );
  res.send(mappedChatRoomWithName);
};

export const getMessages = async (req, res) => {
  const chatRoomId = req.body.chatRoomId;
  const chatRoom = await ChatRoom.findOne({ chatRoomId });
  if (chatRoom) {
    res
      .status(200)
      .json({ message: "Get message ok!", data: chatRoom.messages });
  } else {
    res.status(404).send("Chat room not found");
  }
};
