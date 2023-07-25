"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Chat = () => {
	const data = [
		{
			id: 1,
			name: "Tute Gigena",
			value:
				"Aunque nadie lo pueda creer, tienes una nueva cita! De manera totalmente increible, una fémina le dio me gusta a tu carta e hicieron match, estamos seguros de que vas a tener que bañarte por primera vez en los ultimos seis meses.",
			image: "/huntek/logo/G.svg",
		},
		{
			id: 2,
			name: "Eduardo Cabral",
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
	const [chat, setChats] = useState(data);

	return (
		<section className="w-full h-screen text-pri flex flex-col">
			<article className="w-full h-[10%] px-4 border-b flex flex-row justify-start items-center">
				<a href="/home" className="grid place-content-center">
					<HomeOutlinedIcon className="w-6 h-6 rounded-full hover:bg-pri-100 hover:scale-125 duration-150" />
				</a>
				<h1 className="w-[90%] text-3xl font-bold grid place-content-center cursor-default">Mensajes</h1>
			</article>
			<article className="w-full h-[90%] carousel carousel-vertical">
				{chat.map((chat, index) => {
					return (
						<Link
							href={`/conversations/${chat.id}`}
							key={index}
							className="w-full h-full border-b flex flex-col justify-center items-center">
							<article className="w-11/12 h-24 carousel-item flex flex-row justify-center items-center">
								<div className="w-16 h-16 border-2 rounded-full grid place-content-center relative">
									<Image
										src={chat.image}
										alt="image"
										fill={true}
										loading={"eager"}
										className="rounded-full object-contain absolute"
									/>
								</div>
								<div className="w-[95%] h-full px-4 flex flex-col justify-center">
									<h2 className="text-lg font-medium line-clamp-1">{`${chat.name}`}</h2>
									<p className="h-12 text-base text-pri-500 font-light line-clamp-2">{`${chat.value}`}</p>
								</div>
							</article>
						</Link>
					);
				})}
			</article>
		</section>
	);
};

export default Chat;
