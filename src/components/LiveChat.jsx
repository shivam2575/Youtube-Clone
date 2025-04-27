import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessages, generateRandomNames } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [chatInput, setChatInput] = useState(null);
  useEffect(() => {
    //API polling
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomNames() || "Shiv",
          message: generateRandomMessages() + "✌🏽" || "Random message",
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="mx-2 p-2 h-[500px] border rounded-lg flex flex-col">
      <div className="h-[470px] overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((message, index) => (
          <ChatMessage
            key={index}
            name={message.name}
            message={message.message}
          />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Shivam",
              message: chatInput,
            })
          );
          setChatInput("");
        }}
        className="m-2 p-2 border rounded-lg flex"
      >
        <input
          className="p-2 mx-2 w-[80%]"
          type="text"
          placeholder="Type your message."
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
        />
        <button className="bg-red-500 p-2 rounded-l-full rounded-r-full">
          Send
        </button>
      </form>
    </div>
  );
};
export default LiveChat;
