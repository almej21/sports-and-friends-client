import ChatBox from "components/Chat/ChatBox.js";
import MyChats from "components/Chat/MyChats.js";
import SideDrawer from "components/Chat/SideDrawer.js";
import { ChatState } from "context/ChatProvider";
import { useState } from "react";
import io from "socket.io-client";
import "./chatpage.scss";

const socket = io.connect("http://localhost:4000");

function ChatPage() {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();
  console.log(user);
  return (
    <div className="chat-page">
      {!user && <h1 className="chat-title-login">Please login to view your chats</h1>}
      {user && <SideDrawer />}
      <div className="mychats-chatbox">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </div>
    </div>
  );
  // }
  // );
}

export default ChatPage;
