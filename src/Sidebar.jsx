import {
  Chat,
  DonutLarge,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";

import { Avatar, IconButton } from "@mui/material";

import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
export default function Sidebar() {
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
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        {/* {rooms.map((room) => {
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />;
        })} */}
      </div>
    </div>
  );
}
