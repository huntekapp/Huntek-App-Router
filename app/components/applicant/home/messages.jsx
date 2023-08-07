"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import getCookie from "../../../helpers/getCookies";
import { useGetChatsMutation } from "../../../globalstore/services/chats-msg/useChats";
import InfoAlert from "./infoAlert";
import SmsFailedIcon from "@mui/icons-material/SmsFailed";

const Messages = () => {
	const chats = [
		{
			id: 1,
			name: "Nico Front",
			image: "/images/pexels-monstera-5384445.jpg",
			enterprise: "Huntek",
			time: "17:00",
			msg: "2",
		},
		{
			id: 2,
			name: "Agus Cabral",
			image: "/images/pexels-monstera-5384445.jpg",
			enterprise: "Huntek",
			time: "16:54",
			msg: "1",
		},
		{
			id: 3,
			name: "Fran Vazquez",
			image: "/images/pexels-monstera-5384445.jpg",
			enterprise: "Huntek",
			time: "12:20",
			msg: "2",
		},
		{
			id: 4,
			name: "Mati Gigena",
			image: "/images/pexels-monstera-5384445.jpg",
			enterprise: "Huntek",
			time: "11:01",
			msg: "5",
		},
	];

	const [getChats, { isLoading }] = useGetChatsMutation();

	useEffect(() => {
		const user_id = getCookie("AiOiJKV1Q");
		getChats(user_id).then((response) => {
			const data = response.data;
		});
	}, []);

	return (
		<article className="w-full h-2/5 px-4 flex flex-col justify-center">
			<div className="h-6 mt-2 mb-1 flex flex-row justify-between">
				<p>Mis conversaciones</p>
				<Link href="/applicant/messages" className="font-medium">
					Ver todas
				</Link>
			</div>
			<div className="w-full h-[90%] text-xs xs:text-sm text-pri bg-sec border rounded-xl shadow-md carousel carousel-vertical flex flex-col">
				{chats.length ? (
					chats.map((chat, index) => {
						return (
							<Link
								href={`/applicant/messages/${chat.id}`}
								key={index}
								className="w-full carousel-item flex flex-col justify-between">
								<div className="w-full h-16 carousel-item flex flex-row justify-between">
									<div className="w-[70%] flex flex-row justify-start items-center">
										<div className="w-8 h-8 mx-4 rounded-full truncate relative">
											<Image
												src="/images/pexels-monstera-5384445.jpg"
												alt="profile"
												fill={true}
												loading={"eager"}
												className="object-cover rounded-full absolute"
											/>
										</div>
										{`${chat.name} | ${chat.enterprise}`}
									</div>
									<div className="w-10 mx-4 my-2 flex flex-col justify-evenly items-center">
										<p className="text-center ">{chat.time}</p>
										<p className="w-5 h-5 grid place-content-center text-sec bg-pri rounded-full">{chat.msg}</p>
									</div>
								</div>
								{chats.length !== index + 1 && <hr />}
							</Link>
						);
					})
				) : (
					<div className="w-full h-full px-4 lightcentergrad-tb flex flex-col justify-center gap-2 items-center">
						{/* <InfoAlert alertBody={"En esta sección verás tus chats con empresas"} /> */}
						<SmsFailedIcon className="" />
						<p className="text-center">¡Aquí se encontrarán tus mensajes mas recientes!</p>
					</div>
				)}
			</div>
		</article>
	);
};

export default Messages;
