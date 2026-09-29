import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });
let user = 0;

interface User {
  socket: WebSocket;
  room: string;
}

// [{socket: socket1, room:"room1"},{socket: socket2, room:"room2"}]
let allSocket: User[] = [];

wss.on("connection", (socket) => {
  // msg => '{"type": "join", "payload": {"roomId": "roomId"}}'
  // msg is still a string, send by ws server.
  socket.on("message", (msg) => {
    //@ts-ignore
    const parsedMsg = JSON.parse(msg);
    console.log("parsed msg: ", parsedMsg);
    // parsedMsg => {type: "join", payload: {roomId: "roomId"}}

    if (parsedMsg.type === "join") {
      console.log("Room joined: " + parsedMsg.payload.roomId);
      allSocket.push({ socket: socket, room: parsedMsg.payload.roomId });
      console.log(allSocket);
    }

    if (parsedMsg.type === "chat") {
      const userSocket = allSocket.find((ele) => ele.socket === socket);
      const currUserRoom = userSocket?.room;

      allSocket.forEach((skt) => {
        if (skt.room === currUserRoom) {
          skt.socket.send(parsedMsg.payload.message);
        }
      });
    }
  });
});
