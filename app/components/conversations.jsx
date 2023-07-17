"use client";
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";

const Conversations = () => {
	const [chats, setChats] = useState([
		{name: "Nico Front", image: "/images/pexels-monstera-5384445.jpg", enterprise: "Huntek", time: "17:00", msg: "2"},
		{name: "Agus Cabral", image: "/images/pexels-monstera-5384445.jpg", enterprise: "Huntek", time: "16:54", msg: "1"},
		{name: "Fran Vazquez", image: "/images/pexels-monstera-5384445.jpg", enterprise: "Huntek", time: "12:20", msg: "2"},
		{name: "Mati Gigena", image: "/images/pexels-monstera-5384445.jpg", enterprise: "Huntek", time: "11:01", msg: "5"},
	]);

	return (
		<article className="w-full h-2/5 px-4 flex flex-col justify-around">
			<div className="flex flex-row justify-between">
				<p>Mis conversaciones</p>
				<Link href="/conversations" className="font-medium">
					Ver todas
				</Link>
			</div>
			<div className="w-full h-4/5 px-4 text-xs xs:text-sm text-pri border rounded-xl shadow-md carousel carousel-vertical flex flex-col">
				{chats.map((chat, index) => {
					return (
						<div key={index} className="w-full carousel-item flex flex-col justify-between">
							<div className="w-full h-16 carousel-item flex flex-row justify-between">
								<div className="w-[70%] flex flex-row justify-start items-center">
									<div className="w-8 h-8 mr-4 rounded-full truncate relative">
										<Image
											alt="profile"
											src="/images/pexels-monstera-5384445.jpg"
											fill={true}
											objectFit="cover"
											className="rounded-full"
										/>
									</div>
									{`${chat.name} | ${chat.enterprise}`}
								</div>
								<div className="flex flex-col justify-evenly items-center">
									<p className="">{chat.time}</p>
									<p className="w-5 h-5 grid place-content-center text-sec bg-pri rounded-full">{chat.msg}</p>
								</div>
							</div>
							{chats.length !== index + 1 && <hr />}
						</div>
					);
				})}
			</div>
		</article>
	);
};

export default Conversations;
