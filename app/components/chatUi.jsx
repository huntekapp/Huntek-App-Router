"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import { useGetMessagesMutation } from "../globalstore/services/useMessages";
import { usePostMessageMutation } from "../globalstore/services/usePostMessage";
import getCookie from "../helpers/getCookies";
const ChatUi = () => {
  const user_id = getCookie("AiOiJKV1Q");
  const [getMessages, { isLoading }] = useGetMessagesMutation();
  const [postMessage, {}] = usePostMessageMutation();
  const params = useParams();
  const [message, setMessage] = useState({
    message: "",
  });
  const [mensajes, setMensajes] = useState({
    chat_id: params.id,
    user_id: user_id,
    content: "",
  });
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    getMessages(params.id).then((response) => {
      const data = response.data;
      console.log(data);
    });
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newMessage = {
        id: messages.length + 1,
        content: message.message,
      };
      setMessages([...messages, newMessage]);
      setMessage({ message: "" });
      const response = await postMessage(mensajes).unwrap();
			const data = response.data
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
    <main className="w-full h-screen text-pri flex flex-col justify-start items-center">
      <nav className="w-full h-[10%] px-4 border-b bg-sec flex flex-row justify-start items-center">
        <Link href="/conversations">
          <ArrowBackOutlinedIcon className="w-6 h-6 rounded-full hover:bg-pri-100 hover:scale-125 duration-150" />
        </Link>
        <h1 className="w-[80%] text-3xl font-bold grid place-content-center cursor-default">{params.id}</h1>
      </nav>
      <section className="w-11/12 h-[87%] mt-3 border bg-sec shadow-lg rounded-2xl flex flex-col justify-between items-center ">
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
        <footer className="w-full h-10 mb-4 px-4 flex flex-row justify-around items-center">
          <button className="text-gray-400 grid place-content-center hover:text-gray-600">
            <AttachFileOutlinedIcon className="rotate-45" />
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
        </footer>
      </section>
    </main>
  );
};
export default ChatUi;
