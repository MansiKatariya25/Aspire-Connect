import React, { useContext, useState } from "react";
import { DataContext } from "../../App";

function Chat() {
  const [messages, setMessages] = useState([]); // Array to store chat messages
  const [newMessage, setNewMessage] = useState(""); // Input field value
  const { chats, setChats } = useContext(DataContext);
  // Handle sending a new message
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: newMessage, sender: "You" },
      ]);
      setNewMessage(""); // Clear input field
    }
  };

  return (
    <div className="absolute  right-16 top-36 chat-box w-[75vw] h-[600px] bg-white border-2 border-orange-100 rounded-3xl shadow-md flex flex-col">
      {/* Header */}
      <div className="chat-header flex items-center gap-4 p-4 border-b border-gray-200">
        <img
          src={chats[0].profile_pic}
          alt={`${chats[0].fname + " " + chats[0].lname}'s profile`}
          className="w-10 h-10 rounded-full"
        />
        <p className="font-Manrope text-[16px] font-medium">
          {chats[0].fname + " " + chats[0].lname}
        </p>
      </div>

      {/* Message Body */}
      <div className="chat-body flex-1 p-4 overflow-y-auto">
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <div
              key={index}
              className={`message mb-2 p-2 rounded-md ${
                message.sender === "You"
                  ? "bg-blue-100 text-blue-900 self-end"
                  : "bg-gray-100 text-gray-800 self-start"
              }`}
            >
              <p className="font-Manrope text-[14px]">{message.text}</p>
              <p className="text-xs text-gray-500 mt-1">{message.sender}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No messages yet</p>
        )}
      </div>

      {/* Input Box */}
      <div className="chat-input p-4 border-t border-gray-200 flex items-center gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message"
          className="flex-1 border border-orange-400 rounded-full p-2 outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="bg-orange-400 rounded-full text-white p-4 py-2 w-[100px] h-[45px] flex justify-center items-center hover:bg-orange-600 transition"
        >
          <img src="./send.png" className="w-[30px] h-[30px]" alt="Send" />
        </button>
      </div>
    </div>
  );
}

export default Chat;
