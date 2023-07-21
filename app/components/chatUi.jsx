"use client";
import { useState } from "react";
import Image from "next/image";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import { useParams } from "next/navigation";

const ChatUi = () => {
  const params = useParams();
  const [message, setMessage] = useState({
    message: "",
  });
  const [messages, setMessages] = useState([]); 

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const newMessage = {
        id: messages.length + 1,
        content: message.message,
      };
      setMessages([...messages, newMessage]);
      setMessage({ message: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    setMessage({
      ...message,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <main className="flex flex-col flex-auto bg-pri-200 w-full justify-start h-screen ">
      <nav className="flex bg-sec shadow-lg pl-6  justify-between h-16  items-center border ">
        <h1 className="font-medium text-3xl">Nombre del id: {params.id}</h1>
      </nav>
      <section className="py-2 px-3 ">
        <article className="flex flex-col mt-3 border h-[85vh] h-max-[85vh] bg-sec shadow-lg rounded-2xl ">
          <div className="flex flex-col h-full overflow-x-auto ">
            <ul className="grid grid-cols-12 gap-y-1">
              {messages.map((msg) => (
                <li key={msg.id} className="col-start-6  col-end-13 p-3 rounded-lg">
                  <div className="flex items-center justify-start flex-row-reverse">
                    <Image
                      loading={"eager"}
                      src="/images/pexels-monstera-5384445.jpg"
                      alt="profileImg"
                      width={40}
                      height={1000}
                      quality={100}
                      className="flex items-center justify-center h-10 rounded-full flex-shrink-0"
                    />
                    <div className=" flex  mr-3 max-w-sm text-sm bg-indigo-100 p-2  shadow rounded-xl">
                      <p className="break-words w-full">{msg.content}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <footer>
            <article className="flex w-full rounded-xl bg-white  px-4   items-center h-16">
              <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                </svg>
              </button>
              <form onSubmit={handleSubmit} className="relative w-full flex items-center  ml-4">
                <input
                  type="text"
                  name="message"
                  className="flex w-full bg-sec border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                  value={message.message}
                  onChange={handleChange}
                />
                <div className="flex items-center justify-center ml-4 rounded-xl text-white    sm:px-2 sm:py-2  flex-shrink-0">
                  <IconButton onClick={handleSubmit}>
                    <SendIcon style={{ color: "#046255" }} />
                  </IconButton>
                </div>
              </form>
            </article>
          </footer>
        </article>
      </section>
    </main>
  );
};
export default ChatUi;
