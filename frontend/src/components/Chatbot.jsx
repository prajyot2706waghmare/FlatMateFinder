// import { useState } from "react";
// import { sendChatMessage } from "../api/chatApi";
// import ReactMarkdown from "react-markdown";
// import { useEffect } from "react";
// export default function Chatbot() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     setMessages((prev) => [...prev, { role: "user", content: input }]);
//     setLoading(true);

//     try {
//       const data = await sendChatMessage(input);

//       setMessages((prev) => [
//         ...prev,
//         { role: "assistant", content: data.reply },
//       ]);
//     } catch (error) {
//       console.error(error);
//       setMessages((prev) => [
//         ...prev,
//         { role: "assistant", content: "Server error. Please try again." },
//       ]);
//     } finally {
//       setLoading(false);
//       setInput("");
//     }
//   };

//   // Auto-scroll to bottom
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, loading]);


//   return (
//    <div className="fixed bottom-14 right-14 w-126 bg-white rounded-xl shadow-xl flex flex-col">
//       <div className="bg-gray-900 text-white p-4 rounded-t-xl">
//         Chatbot Assistant
//       </div>

//       <div className="flex-1 p-4 overflow-y-auto space-y-2">
//         {messages.map((msg, i) => (
//           <div
//             key={i}
//             className={`p-2 rounded-lg max-w-[80%] ${
//               msg.role === "user"
//                 ? "ml-auto bg-blue-600 text-white"
//                 : "mr-auto bg-gray-200"
//             }`}
//           >
//              <ReactMarkdown>{msg.content}</ReactMarkdown>
//           </div>
//         ))}
//         {loading && <p className="text-sm text-gray-400">Typing...</p>}
//       </div>

//       <div className="p-3 border-t flex gap-2">
//         <input
//           className="flex-1 border rounded-lg px-3 py-2 focus:outline-none"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask something..."
//         />
//         <button
//           onClick={sendMessage}
//           className="bg-blue-600 text-white px-4 rounded-lg"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }


// import { useState, useEffect, useRef } from "react";
// import ReactMarkdown from "react-markdown";
// import { sendChatMessage } from "../api/chatApi";

// export default function Chatbot() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const messagesEndRef = useRef(null);

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     setMessages((prev) => [...prev, { role: "user", content: input }]);
//     setInput("");
//     setLoading(true);

//     try {
//       const data = await sendChatMessage(input);
//       setMessages((prev) => [
//         ...prev,
//         { role: "assistant", content: data.reply },
//       ]);
//     } catch {
//       setMessages((prev) => [
//         ...prev,
//         { role: "assistant", content: "Something went wrong." },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Auto-scroll to bottom
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, loading]);

//   return (
//     <div className="fixed bottom-4 right-4 w-96 h-[520px] bg-white rounded-xl shadow-xl flex flex-col">
//       {/* Header */}
//       <div className="bg-gray-900 text-white p-4 rounded-t-xl">
//         Roommate Finder Assistant
//       </div>

//       {/* Messages */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-3">
//         {messages.map((msg, i) => (
//           <div
//             key={i}
//             className={`p-2 rounded-lg max-w-[80%] whitespace-pre-wrap ${
//               msg.role === "user"
//                 ? "ml-auto bg-blue-600 text-white"
//                 : "mr-auto bg-gray-200 text-black"
//             }`}
//           >
//             <ReactMarkdown>{msg.content}</ReactMarkdown>
//           </div>
//         ))}
//         {loading && (
//           <div className="text-sm text-gray-400">Typing...</div>
//         )}
//         <div ref={messagesEndRef} />
//       </div>

//       {/* Input */}
//       <div className="border-t p-3 flex gap-2">
//         <input
//           className="flex-1 border rounded-lg px-3 py-2 focus:outline-none"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask something..."
//         />
//         <button
//           onClick={sendMessage}
//           disabled={loading}
//           className="bg-blue-600 text-white px-4 rounded-lg disabled:opacity-50"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }


import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { sendChatMessage } from "../api/chatApi";
import { FaRobot } from "react-icons/fa";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setInput("");
    setLoading(true);

    try {
      const data = await sendChatMessage(input);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4  bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
           <FaRobot size={40} /> <h1 className="text-xl font-bold">Chat</h1>
        </button>
      )}

      {/* Chatbot Popup */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 w-96 h-[520px] bg-white rounded-xl shadow-xl flex flex-col animate-slide-up">
          
          {/* Header */}
          <div className="bg-gray-900 text-white p-4 rounded-t-xl flex justify-between items-center">
            <span>Roommate Finder Assistant</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-sm bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            <div className={"p-2 rounded-lg max-w-[80%] whitespace-pre-wrap mr-auto bg-gray-200 text-black"}>How can i help you?</div>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "ml-auto bg-blue-600 text-white"
                    : "mr-auto bg-gray-200 text-black"
                }`}
              >
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            ))}
            {loading && (
              <div className="text-sm text-gray-400">Typing...</div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t p-3 flex gap-2">
            <input
              className="flex-1 border rounded-lg px-3 py-2 focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-blue-600 text-white px-4 rounded-lg disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
