import {
  Chat,
  DonutLarge,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";

import { Avatar, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import db from "./firebase";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
export default function Sidebar() {
  const [rooms, setRooms] = useState("");
  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input
            placeholder="
              Search or start new chat"
            type="text"
          />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => {
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />;
        })}
      </div>
    </div>
  );
}
