"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
		<main className="">
			<section className="w-full min-h-screen">
				<section className="flex flex-row justify-start h-full w-full items-start py-2 border-y border-t-0">
					<a href="/home" className="h-12 w-12 flex justify-center rounded-full ml-2 hover:bg-pri-100">
						<Image loading={"eager"} alt="back" width={32} height={32} src="utils/back_huntek.svg" />
					</a>
					<h1 className="text-4xl font-bold mt-1 ml-2 text-pri cursor-default">Mensajes</h1>
				</section>
				<section className="carousel carousel-vertical h-[90vh] min-w-full">
					{chat.map((chat, index) => {
						return (
							<Link href={`/conversations/${chat.id}`} key={index}>
								<article className="bg-none flex flex-col justify-start border-y border-t-0 h-[100px] max-h-[100px] carousel-item">
									<input type="checkbox" id="my-drawer-2" className="drawer-toggle" />
									<div className="flex ml-3 justify-start items-center">
										<div className="w-13 h-12 xs:w-14 border-2 rounded-full grid place-content-center">
											<Image
												loading={"eager"}
												width={30}
												height={30}
												quality={100}
												src={chat.image}
												alt="image"
												className=""
											/>
										</div>
										<div className="flex flex-col text-start w-full">
											<h2 className="px-4 text-lg pt-2 flex justify-between items-center font-medium">
												{`${chat.name}`}
											</h2>
											<p className="px-4 pb-2 h-12 max-h-12 line-clamp-2 font-light">{`${chat.value}`}</p>
										</div>
									</div>
								</article>
							</Link>
						);
					})}
				</section>
			</section>
		</main>
	);
};

export default Chat;
