import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const ChatRoom = ({ socket }) => {
  const [sendMsg, setSendMsg] = useState("");
  const [allChat, setAllChat] = useState([]);

  const sendMsgFn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const msg = {
      type: "chat",
      payload: {
        message: sendMsg,
      },
    };
    socket.send(JSON.stringify(msg));

    setSendMsg("");
  };

  return (
    <div className="h-screen w-full text-white bg-gray-900">
      <div className="bg-gray-800/80 min-h-[90%] w-3xl mx-auto rounded p-4 mb-2">
        <h2>Room id : {}</h2>
        <h4>
          {}/{} joined
        </h4>
        <div></div>
      </div>
      <div className="bg-gray-700 min-h-[6%] w-3xl mx-auto rounded-xl">
        <Input
          value={sendMsg}
          onChange={(e) => setSendMsg(e.target.value)}
          placeholder="Enter Message..."
        />
        <Button text="Send" onClick={sendMsgFn} />
      </div>
    </div>
  );
};

export default ChatRoom;
