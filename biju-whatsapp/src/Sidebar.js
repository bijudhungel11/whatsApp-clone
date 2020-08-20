import React, { useEffect, useState } from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import db from "./firebase";
import "./Sidebar.css";

import { Avatar, IconButton } from "@material-ui/core";
import SidebarChat from "./SidebarChat";
import { useStateValue } from "./StateProvider";
function Sidebar() {
  /* rooms  */
  const [{ user }] = useStateValue();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    /* every times any things changes in the rooms database then it will takes the snaphshots and gives the snaphshot  */
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data(),
        }))
      )
    );
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__header--left">
          <Avatar src={user?.photoURL} />
          <span>
            <h3>{user?.displayName}</h3>
          </span>
        </div>
        <div className="sidebar__header--right">
          {/* for making the clickable button IconButton in the code  */}
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__search--container">
          <SearchOutlinedIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        {/* on sidebarChat is user for adding the new chat room.  */}
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat id={room.id} key={room.id} name={room.name.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
