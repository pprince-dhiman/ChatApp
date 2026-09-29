import { BrowserRouter, Routes, Route } from "react-router-dom";
import JoinRoom from "./pages/JoinRoom";
import ChatRoom from "./pages/ChatRoom";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";

const App = () => {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    
    console.log("Connected to websocket server.");
  }, []);

  return (
    <div>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<JoinRoom socket={socket}/>} />
          <Route path="/chat/:roomId" element={<ChatRoom socket={socket}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
