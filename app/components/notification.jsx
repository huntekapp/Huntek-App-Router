"use client";
import Image from "next/image";
import {useState} from "react";
import NotificationDetail from "./notificationdetail";

const Notification = () => {
	const [showMore, setShowMore] = useState(false);
	const [currentNotification, setCurrentNotification] = useState({});
	const [notis, setNotis] = useState([
		{
			name: "Tienes una nueva cita!",
			value:
				"Aunque nadie lo pueda creer, tienes una nueva cita! De manera totalmente increible, una fémina le dio me gusta a tu carta e hicieron match, estamos seguros de que vas a tener que bañarte por primera vez en los ultimos seis meses.",
		},
		{
			name: "Te han bloqueado.",
			value:
				"Lamentamos informarte que has sido bloqueado por la usuaria @dualipa_temperley debido a que has spameado su casilla de mensajes.",
		},
		{
			name: "Actualizacion.",
			value: `Hemos actualizado nuestra politica.`,
		},
		{
			name: "Notifiuno",
			value: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis beatae atque qui. Expedita recusandae perferendis cum nihil quos, odio nemo illo eos earum voluptatem fugiat, enim, repudiandae amet ad suscipit.`,
		},
		{
			name: "Notifid",
			value: `Lorem ipsum dolor, etc etc. Quien escribió esto? Por que lo veo en todos lados?`,
		},
	]);

	const handleClick = (nombre) => {
		let filteredNotis = notis.filter((noti) => noti.name !== nombre);
		setNotis([...filteredNotis]);
	};

	return (
		<main>
			{showMore && <NotificationDetail currentNotification={currentNotification} setShowMore={setShowMore} />}
			<section className=" bg-sec w-full min-h-screen" style={showMore ? {opacity: "20%"} : {opacity: "100%"}}>
				<section className="flex flex-row justify-start h-full w-full items-start my-2">
					<a href="/home" className="h-12 w-12 flex justify-center rounded-full ml-2 hover:bg-pri-100">
						<Image alt="back" width={32} height={32} src="utils/back_huntek.svg" />
					</a>
					<h2 className="text-4xl font-bold mt-1 ml-2 text-pri cursor-default">Notificaciones</h2>
				</section>
				<section className="border-pri " style={notis.length && {borderBottom: "1px solid"}}>
					{!notis.length && (
						<h2 className="text-xl flex justify-between items-center font-bold ml-5 mt-4">No hay notificaciones...</h2>
					)}
					{notis.map((noti, index) => {
						return (
							<article key={index} className="bg-gray-50 border-pri border-y border-b-0 cursor-default h-[120px] max-h-[120px] ">
								<h2 className="text-pri px-4 text-lg pt-2 flex justify-between items-center font-bold">
									{`${noti.name}`}
									<button onClick={() => handleClick(noti.name)} className="h-4 z-50 w-4 hover:scale-125 duration-300">
										<Image alt="x" width={24} height={24} src="utils/x_huntek.svg" />
									</button>
								</h2>
								<p className="px-4 pb-2 h-12 max-h-12 line-clamp-2">{`${noti.value}`}</p>
								{noti.value.length > 107 && <button
									className="text-xs font-bold px-4 mt-2 mr-4 absolute right-0"
									onClick={() => {
										setShowMore(true), setCurrentNotification(noti);
									}}>
									Ver más...
								</button>}
							</article>
						);
					})}
				</section>
			</section>
		</main>
	);
};

export default Notification;
