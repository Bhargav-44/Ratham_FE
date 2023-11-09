import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../components/chatbot/config";
import MessageParser from "../components/chatbot/MessageParser";
import ActionProvider from "../components/chatbot/ActionProvider";

function Chat() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md mx-auto p-4 bg-gray-200 rounded-lg shadow-md">
        <div className="flex items-center justify-center">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      </div>
    </div>
  );
}

export default Chat;
