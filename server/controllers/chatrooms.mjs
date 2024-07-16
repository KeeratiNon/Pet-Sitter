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
  const mappedChatRoomWithName = await Promise.all(allChatRoom.map(async (chatRoom) => {
    const targetId = Number(chatRoom.chatRoomId
      .split("/")
      .find((id) => id !== req.user.id));
    const user =
      await sql`select firstname, lastname from pet_sitter_profiles where pet_sitter_id = ${targetId}`;
    return {
      chatRoom: chatRoom.chatRoomId,
      name: `${user[0].firstname} ${user[0].lastname}`,
      targetId,
    };
  }))
  res.send(mappedChatRoomWithName);
};
