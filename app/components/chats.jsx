"use client";
import Image from "next/image";
import {useState} from "react";
import ChatUi from "./chatUi";

const Chat = () => {
  const data = [
    {
      name: "Matias Gigena",
      value:
        "Aunque nadie lo pueda creer, tienes una nueva cita! De manera totalmente increible, una fémina le dio me gusta a tu carta e hicieron match, estamos seguros de que vas a tener que bañarte por primera vez en los ultimos seis meses.",
      image: "/huntek/logo/G.svg",
    },
    {
      name: "Eduardo Cabral",
      value:
        "Lamentamos informarte que has sido bloqueado por la usuaria @dualipa_temperley debido a que has spameado su casilla de mensajes.",
      image: "/social/google.svg",
    },
    {
      name: "Marian Font",
      value: "Hemos actualizado nuestra politica.",
      image: "/huntek/logo/G.svg",
    },
    {
      name: "Mati Vazquez",
      value: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis beatae atque qui. Expedita recusandae perferendis cum nihil quos, odio nemo illo eos earum voluptatem fugiat, enim, repudiandae amet ad suscipit.`,
      image: "/social/google.svg",
    },
    {
      name: "Lorem Chueco",
      value: `Lorem ipsum dolor, etc etc. Quien escribió esto? Por que lo veo en todos lados?`,
      image: "/huntek/logo/G.svg",
    },
  ];
  const [chat, setChats] = useState(data);
  const [selectedChat, setSelectedChat] = useState(0);
  const handleChatClick = (index, event) => {
    event.stopPropagation();
    setSelectedChat(index);
  };

  return (
    <main>
      <section className=" bg-sec w-full min-h-screen">
        <section className="flex flex-row justify-start h-full w-full items-start my-2">
          <a href="/home" className="h-12 w-12 flex justify-center rounded-full ml-2 hover:bg-pri-100">
            <Image alt="back" width={32} height={32} src="utils/back_huntek.svg" />
          </a>
          <h2 className="text-4xl font-bold mt-1 ml-2 text-pri cursor-default">Mensajes</h2>
        </section>
        <section className="border-pri " style={chat.length && {borderBottom: "1px solid"}}>
          {!chat.length && (
            <h2 className="text-xl flex justify-between items-center font-bold ml-5 mt-4">No hay notificaciones...</h2>
          )}
          {chat.map((chat, index) => {
            return (
              <article
                onClick={(event) => handleChatClick(index, event)}
                key={index}
                className="bg-gray-50 drawer drawer-end border-pri flex flex-col justify-start border-y border-b-0  cursor-default h-[90px] max-h-[90px] ">
                <input
                  type="checkbox"
                  id="my-drawer-2"
                  className="drawer-toggle"
                  onClick={(event) => event.stopPropagation()}
                />
                <label htmlFor="my-drawer-2" className=" drawer-button">
                  <div className="flex ml-3 justify-start items-center">
                    <div className="w-14 h-12 xs:w-14 rounded-full border-2 border-pri grid place-content-center">
                      <Image width={30} height={25} quality={100} src={chat.image} alt="image" className="h-7" />
                    </div>
                    <div className="flex flex-col text-start w-full">
                      <h2 className="text-pri px-4 text-lg pt-2 flex justify-between  items-center font-medium">
                        {`${chat.name}`}
                      </h2>
                      <p className="px-4 pb-2 h-12 max-h-12 line-clamp-2 ">{`${chat.value}`}</p>
                    </div>
                  </div>
                </label>
                <div className="drawer-side z-40">
                  <label htmlFor="my-drawer-2" className=" z-40"></label>
                  <ul className=" z-40  w-full h-screen bg-pri-200 ">
                    <li>
                      <ChatUi pan={data} selectedChat={selectedChat} />
                    </li>
                  </ul>
                </div>
              </article>
            );
          })}
        </section>
      </section>
    </main>
  );
};

export default Chat;
