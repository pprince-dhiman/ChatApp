import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

interface MsgType {
  type: "join";
  payload: {
    roomId: string | number;
  };
}

const JoinRoom = ({ socket }) => {
  const [roomName, setRoomName] = useState("");
  const navigate = useNavigate();

  const joinRoom = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const msg: MsgType = {
      type: "join",
      payload: {
        roomId: roomName,
      },
    };

    socket.send(JSON.stringify(msg));
    console.log("Room Joined: " + roomName);
    
    navigate("/chat/" + roomName);
  };

  return (
    <div>
      <div>
        <h2>Create New Chat Room</h2>
        <div>
          <Input
            min={5}
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            placeholder="Room Name..."
          />

          <Button text="Create" onClick={joinRoom} />
        </div>
      </div>
    </div>
  );
};

export default JoinRoom;
