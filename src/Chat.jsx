import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  Search,
} from "@mui/icons-material";
import { Avatar, Icon, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Chat.css";
function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  let sendMessage = (e) => {
    e.preventDefault();
    console.log(input);
    setInput("");
  };
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last Seen</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className={`chat__message ${true && "chat__reciever"}`}>
          <span className="chat__name">Raghav</span>
          hiii
          <span className="chat__timestamp">3:53pm</span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticon />
        <form action="">
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
