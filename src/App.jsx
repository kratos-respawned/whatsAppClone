import { useEffect, useRef, useState } from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from "pusher-js";
import instance from "./axios";
// import useUpdateEffect from "./useUpdateEffect";
function App() {
  const [messages, setMessages] = useState([]);
  const firstTime = useRef(2);
  useEffect(() => {
    if (firstTime.current) {
      firstTime.current = firstTime.current - 1;
      return;
    } else {
      const pusher = new Pusher("a25c95cbd5b71ace78dd", {
        cluster: "ap2",
      });

      const channel = pusher.subscribe("message");
      channel.bind("inserted", (newMessage) => {
        console.log(JSON.stringify(newMessage));
        setMessages([...messages, newMessage]);
      });
      return () => {
        console.log("unsubscribed");
        channel.unbind_all();
        channel.unsubscribe();
      };
    }
  }, [messages]);

  useEffect(() => {
    instance.get("/messages/sync").then((res) => {
      setMessages(res.data);
    });
  }, []);

  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
