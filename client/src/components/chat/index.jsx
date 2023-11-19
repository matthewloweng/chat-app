import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import Header from "@/components/customHeader";
import StandardMessageForm from "@/components/customMessageForms/StandardMessageForm";
import Ai from "@/components/customMessageForms/Ai";
import AiCode from "@/components/customMessageForms/AiCode";
import AiAssist from "@/components/customMessageForms/AiAssist";

const Chat = () => {
  // useMultiChatLogic initializes the chat logic with project ID, username, and secret.
  // The project ID is fetched from environment variables.
  // 'testuser' and '3623' are hardcoded here for demonstration purposes.
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    "testuser", // TODO: Replace hardcoded credentials with dynamic auth mechanism.
    "3623"
  );

  return (
    <div style={{ flexBasis: "100%" }}>
      {/* MultiChatSocket manages the WebSocket connection for real-time chat updates */}
      <MultiChatSocket {...chatProps} />

      {/* MultiChatWindow renders the chat interface. It is customized with different render props. */}
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }} // The chat window occupies the full viewport height
        renderChatHeader={(chat) => <Header chat={chat} />} // Custom chat header component
        renderMessageForm={(props) => {
          // Dynamically render different message forms based on the chat's title
          if (chatProps.chat?.title.startsWith("AiChat_")) {
            return <Ai props={props} activeChat={chatProps.chat} />;
          }
          if (chatProps.chat?.title.startsWith("AiCode_")) {
            return <AiCode props={props} activeChat={chatProps.chat} />;
          }
          if (chatProps.chat?.title.startsWith("AiAssist_")) {
            return <AiAssist props={props} activeChat={chatProps.chat} />;
          }

          // Default message form for standard chats
          return (
            <StandardMessageForm props={props} activeChat={chatProps.chat} />
          );
        }}
      />
    </div>
  );
};

export default Chat;
