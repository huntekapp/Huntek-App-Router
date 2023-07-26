"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import getCookie from "../helpers/getCookies";
import { usePostMessageMutation } from "../globalstore/services/usePostMessage";
import { useGetMessagesMutation } from "../globalstore/services/useMessages";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";

const ChatUi = () => {
	const params = useParams();
	const userData = [
		{
			id: 1,
			name: "Tute Gigena",
			value:
				"Aunque nadie lo pueda creer, tienes una nueva cita! De manera totalmente increible, una fémina le dio me gusta a tu carta e hicieron match, estamos seguros de que vas a tener que bañarte por primera vez en los ultimos seis meses.",
			image: "/huntek/logo/G.svg",
		},
		{
			id: 2,
			name: "Agustin Ignacio Cabral Robledo",
			value:
				"Lamentamos informarte que has sido bloqueado por la usuaria @dualipa_temperley debido a que has spameado su casilla de mensajes.",
			image: "/social/google.svg",
		},
		{
			id: 3,
			name: "Marian Font",
			value: "Hemos actualizado nuestra politica.",
			image: "/huntek/logo/G.svg",
		},
		{
			id: 4,
			name: "Maxi Vazquez",
			value: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis beatae atque qui. Expedita recusandae perferendis cum nihil quos, odio nemo illo eos earum voluptatem fugiat, enim, repudiandae amet ad suscipit.`,
			image: "/social/google.svg",
		},
		{
			id: 5,
			name: "Lorem Chueco",
			value: `Lorem ipsum dolor, etc etc. Quien escribió esto? Por que lo veo en todos lados?`,
			image: "/huntek/logo/G.svg",
		},
		{
			id: 6,
			name: "Barack Obama",
			value: "Debes venir a comer estas enchiladas que hizo Michelle, están buenisimas.",
			image: "/social/google.svg",
		},
		{
			id: 7,
			name: "Thomas Holder",
			value:
				"Amigo está re picado acá venite con unos vodka, compra Red Bull de sandia si no le digo a los guardias que te saquen. Na mentira jaja.",
			image: "/huntek/logo/G.svg",
		},
	];

	const openChat = userData.find(({ id }) => id === Number(params.id));

	const user_id = getCookie("AiOiJKV1Q");
	const [getMessages, { isLoading }] = useGetMessagesMutation();
	const [postMessage, {}] = usePostMessageMutation();

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
			const data = response.data;
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
		<main className="w-full h-screen text-pri flex flex-col justify-between items-center">
			<nav className="w-full h-[10%] bg-sec flex flex-row justify-start items-center">
				<Link
					href="/conversations"
					className="mx-4 p-1 grid place-content-center rounded-full text-pri hover:bg-pri-200 hover:scale-110 duration-150 ">
					<ArrowBackOutlinedIcon className="w-6 h-6" />
				</Link>
				<article className="w-[90%] flex flex-row justify-start items-center">
					<div className="w-10 h-10 mr-4 border-2 rounded-full border-pri relative">
						<Image
							src={openChat.image}
							alt="profileImg"
							fill={true}
							loading={"eager"}
							className="rounded-full object-cover absolute"
						/>
					</div>
					<h1 className="w-[85%] text-2xl font-medium line-clamp-1 cursor-default">{openChat.name}</h1>
				</article>
			</nav>
			<section className="w-full h-[90%] bg-pri flex flex-col justify-center items-center">
				<article className="w-11/12 h-[95%] border bg-sec shadow-lg rounded-2xl flex flex-col justify-between items-center">
					<div className="w-full h-[90%] p-2 flex flex-col overflow-x-auto">
						<ul className="grid grid-cols-12 gap-y-1">
							{messages.map((msg) => (
								<li key={msg.id} className="p-3 rounded-lg col-start-3 col-end-13">
									<div className="w-full flex flex-row-reverse items-center justify-start">
										<div className="w-8 h-8 ml-2 rounded-full border-2 border-pri relative">
											<Image
												src={openChat.image}
												alt="profileImg"
												fill={true}
												loading={"eager"}
												className="object-cover rounded-full absolute"
											/>
										</div>
										<div className="w-fit max-w-[85%] p-2 text-sm bg-indigo-100 shadow rounded-xl">
											<p className="break-words w-full">{msg.content}</p>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
					<footer className="w-full h-[10%] px-2 bg-pri-100 rounded-bl-lg rounded-br-lg flex flex-row justify-around items-center">
						<buttom className="p-2 grid place-content-center bg-pri-200 rounded-full text-pri hover:text-sec hover:bg-pri duration-150 cursor-pointer">
							<AttachFileOutlinedIcon className="w-6 h-6 rotate-45" />
						</buttom>
						<form onSubmit={handleSubmit} className="w-[90%] flex flex-row justify-center items-center">
							<input
								type="text"
								name="message"
								value={message.message}
								onChange={handleChange}
								className="w-[95%] px-4 py-2 text-sec bg-pri-200 rounded-lg focus:outline-none focus:bg-pri"
							/>
						</form>
						<buttom
							onClick={handleSubmit}
							className="p-2 grid place-content-center bg-pri-200 rounded-full text-pri hover:text-sec hover:bg-pri duration-150 cursor-pointer">
							<SendIcon className="w-6 h-6" />
						</buttom>
					</footer>
				</article>
			</section>
		</main>
	);
};
export default ChatUi;
