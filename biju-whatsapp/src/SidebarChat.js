import React, { useState, useEffect } from "react";

import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";
import db from "./firebase";
import { Link } from "react-router-dom";

function SidebarChat({ addNewChat, name, id }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState("");
  /* for adding new chat */
  const createChat = () => {
    const roomName = prompt("Please Enter the room name for chat");

    if (roomName) {
      // do some database stuff
      /* here we are adding the new document in the collections rooms which has it's own id and the data is name with the value store by the prompt messages */
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  useEffect(() => {
    /* Every times the component loads the seed will set the random value between the five thousand and gives the random avatar*/
    //console.log(Math.floor(Math.random() * 5000));
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  /* useEffect for the last messages in the sidbarchat sreen */

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);
  /* if the addNewChat is in the props of the any of the sidebarOption then we will show the div which will show the Add new Chat and which is clickable and make us to click and create the new room  */
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        {/* to making the random  avatar faces the trick goes here
      
      just using the url 
      ==>https://avatars.dicebear.com/api/human/and random alphabet or the numbers.svg (SEED)gives us the random svg or the random face*/}
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          {/* as the messages is the array of the database messages and we have set the messages to be array of the data in the database to the descending order so  the last messages is in the first index */}
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;
