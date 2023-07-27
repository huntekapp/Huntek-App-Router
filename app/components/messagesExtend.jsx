"use client";
import Image from "next/image";
import Link from "next/link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const MessagesExtend = () => {
	const data = [
		{
			id: 1,
			name: "Tute Gigena",
			value:
				"Aunque nadie lo pueda creer, tienes una nueva cita! De manera totalmente increible, una fémina le dio me gusta a tu carta e hicieron match, estamos seguros de que vas a tener que bañarte por primera vez en los ultimos seis meses.",
			image: "/huntek/logo/G.svg",
			time: "11:01",
			msg: "5",
		},
		{
			id: 2,
			name: "Agustin Ignacio Cabral Robledo",
			value:
				"Lamentamos informarte que has sido bloqueado por la usuaria @dualipa_temperley debido a que has spameado su casilla de mensajes.",
			image: "/social/google.svg",
			time: "11:01",
			msg: "5",
		},
		{
			id: 3,
			name: "Marian Font",
			value: "Hemos actualizado nuestra politica.",
			image: "/huntek/logo/G.svg",
			time: "11:01",
			msg: "5",
		},
		{
			id: 4,
			name: "Maxi Vazquez",
			value: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis beatae atque qui. Expedita recusandae perferendis cum nihil quos, odio nemo illo eos earum voluptatem fugiat, enim, repudiandae amet ad suscipit.`,
			image: "/social/google.svg",
			time: "11:01",
			msg: "5",
		},
		{
			id: 5,
			name: "Lorem Chueco",
			value: `Lorem ipsum dolor, etc etc. Quien escribió esto? Por que lo veo en todos lados?`,
			image: "/huntek/logo/G.svg",
			time: "11:01",
			msg: "5",
		},
		{
			id: 6,
			name: "Barack Obama",
			value: "Debes venir a comer estas enchiladas que hizo Michelle, están buenisimas.",
			image: "/social/google.svg",
			time: "11:01",
			msg: "5",
		},
		{
			id: 7,
			name: "Thomas Holder",
			value:
				"Amigo está re picado acá venite con unos vodka, compra Red Bull de sandia si no le digo a los guardias que te saquen. Na mentira jaja.",
			image: "/huntek/logo/G.svg",
			time: "11:01",
			msg: "5",
		},
	];

	return (
		<section className="w-full h-screen text-pri flex flex-col">
			<nav className="w-full h-[10%] px-4 border-b flex flex-row justify-start items-center">
				<Link
					href="/home"
					className="p-1 grid place-content-center rounded-full hover:bg-pri-100 hover:scale-125 duration-150">
					<HomeOutlinedIcon className="w-6 h-6" />
				</Link>
				<h1 className="w-[95%] text-3xl font-bold grid place-content-center cursor-default">Mensajes</h1>
			</nav>
			<article className="w-full h-[95%] carousel carousel-vertical">
				{data.map((chat, index) => {
					return (
						<Link
							href={`/conversations/${chat.id}`}
							key={index}
							className="w-full h-24 px-2 border-b flex flex-row justify-between items-center">
							<div className="min-w-[60px] h-[60px] border-2 border-pri rounded-full grid place-content-center relative">
								<Image
									src={chat.image}
									alt="image"
									fill={true}
									loading={"eager"}
									className="rounded-full object-cover absolute"
								/>
							</div>
							<div className="w-[95%] h-full ml-4 flex flex-col justify-center">
								<h2 className="text-lg font-medium line-clamp-1">{`${chat.name}`}</h2>
								<p className="text-base text-pri-500 font-light line-clamp-1">{`${chat.value}`}</p>
							</div>
							<div className="min-w-[60px] h-[60px] flex flex-col justify-evenly items-center">
								<p className="text-center ">{chat.time}</p>
								<p className="w-5 h-5 grid place-content-center text-sec bg-pri rounded-full">{chat.msg}</p>
							</div>
						</Link>
					);
				})}
			</article>
		</section>
	);
};

export default MessagesExtend;
