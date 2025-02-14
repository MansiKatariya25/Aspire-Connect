import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../App";
import api from "../Config/axios";

function ChatDash() {
  const [chatList, setChatList] = useState([]);
  const { setChats, setDashboard } = useContext(DataContext);

  useEffect(() => {
    const fetchChatList = async () => {
      try {
        const response = await api.get("/chats/get-chat-list");
        setChatList(response.data);
      } catch (error) {
        console.error("Failed to fetch chat list:", error);
      }
    };

    fetchChatList();
  }, []);

  // ** Open chat with the selected user **
  const handleOpenChat = (chatUser) => {
    setChats([chatUser]);
    setDashboard(11);
  };

  return (
    <div className="absolute top-12 font-Manrope w-[85vw] h-[92vh] p-6 right-0 bg-white overflow-y-auto">
      <h2 className="text-3xl font-bold  mb-4">Chats</h2>

      {chatList.length > 0 ? (
        chatList.map((chatUser, index) => (
          <div
            key={index}
            onClick={() => handleOpenChat(chatUser)}
            className="flex items-center p-4 border-b hover:bg-gray-100 cursor-pointer transition"
          >
            <img
              src={chatUser?.user?.profile_pic || "/default-profile.png"}
              alt={`${chatUser?.user?.fname} ${chatUser?.user?.lname}'s profile`}
              className="w-12 h-12 rounded-full mr-4"
            />

            <div className="flex-1">
              <p className="font-medium text-lg">
                {chatUser?.user?.fname?.toUpperCase()}{" "}
                {chatUser?.user?.lname?.toUpperCase()}
              </p>

              <p className="text-gray-600 text-sm truncate">
                {chatUser?.lastMessage}
              </p>
            </div>

            <p className="text-xs text-gray-500">
              {new Date(chatUser?.timestamp).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center mt-10">
          No previous chats found.
        </p>
      )}
    </div>
  );
}

export default ChatDash;
