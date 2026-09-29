import React, { useEffect, useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";

const App = () => {
  const [value, setValue] = useState("");
  const [recievedMsg, setRecievedMsg] = useState([]);
  const [socket, setSocket] = useState(null);

  const sendMsg = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    socket.send(value);
  };

  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:8080");
    setSocket(newSocket);

    newSocket.onmessage = (msg) => {
      setRecievedMsg(msg.data);
    };
  }, []);

  return (
    <div>
      {recievedMsg?.map((msg, idx) => (
        <p key={idx}>{msg}</p>
      ))}

      <Input
        placeholder="Enter message..."
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />

      <Button text="send" onClick={sendMsg} />
    </div>
  );
};

export default App;
