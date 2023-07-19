"use client";
import Image from "next/image";
import { useState } from "react";
import NotificationDetail from "./notificationdetail";

const Notification = ({ setCloseNotif, closeNotif }) => {
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
			name: "La notificacion mas larga de la historia",
			value: `En esta notificacion vamos a concentrarnos en explayar lo más posible este texto. Cada vez que un gato salta al techo del vecino las placas tectonicas de la zona aledaña deciden moverse en el eje y en un angulo de 45 grados. Este movimiento produce maremotos en las costas Tailandesas, haciendo que los barcos pesqueros Japoneses tomen la retirada debido a las inminentes inundaciones que se avecinan a sus vecinos alemanes.`,
		},
		{
			name: "Notifid",
			value: `Lorem ipsum dolor, etc etc. Quien escribió esto? Por que lo veo en todos lados?`,
		},
		{
			name: "Marco Polo",
			value: `Lorem ipsum dolor, etc etc. Quien escribió esto? Por que lo veo en todos lados?`,
		},
		{
			name: "Usurpa Door",
			value: `Lorem ipsum dolor, etc etc. Quien escribió esto? Por que lo veo en todos lados?`,
		},
	]);

	const handleClick = (nombre) => {
		let filteredNotis = notis.filter((noti) => noti.name !== nombre);
		setNotis([...filteredNotis]);
	};

	return (
		<section className="min-w-full flex flex-col">
			<section className="flex flex-row justify-start w-full h-full items-start py-2 border-gray-200 border-y border-t-0">
				<button
					onClick={() => {
						document.getElementById("my-drawer-4").click();
						setCloseNotif(!closeNotif);
					}}
					className="h-12 w-12  flex items-center justify-center rounded-full ml-2 hover:bg-pri-100">
					<Image alt="back" width={32} height={32} src="/utils/back_huntek.svg" className="scale-x-[-1] scale-y-1" />
				</button>
				<h2 className="text-4xl font-bold mt-1 ml-2 text-pri cursor-default">Notificaciones</h2>
			</section>
			<section
				className="border-gray-200 carousel carousel-vertical h-[90vh] min-w-full">
				{!notis.length && (
					<h2 className="text-xl flex justify-between items-center font-bold ml-5 mt-4">No hay notificaciones...</h2>
				)}
				{notis.map((noti, index) => {
					return (
						<article
							key={index}
							className="bg-none border-gray-200 border-y border-t-0 cursor-default h-[120px] max-h-[120px] flex flex-row carousel-item">
							<section className="flex justify-center items-center mx-4 text-pri text-2xl">●</section>
							<section className="flex flex-col w-full">
								<h2 className="text-pri-800 pr-4 text-lg pt-2 flex flex-row justify-between items-center font-medium">
									{`${noti.name}`}
									<button onClick={() => handleClick(noti.name)} className="h-4 z-50 w-4 hover:scale-125 duration-300">
										<Image alt="x" width={24} height={24} src="/utils/x_huntek.svg" />
									</button>
								</h2>
								<p className="pr-5 pb-2 h-12 max-h-12 line-clamp-2 font-light text-base">{`${noti.value}`}</p>
								<div className="flex justify-end">
									{noti.value.length > 107 && (
										<button className="mr-7 mt-1 h-fit cursor-default">
											<a
												href="#showMore"
												className="text-xs font-semibold text-pri-700 cursor-pointer"
												onClick={() => setCurrentNotification(noti)}>
												Ver más
											</a>
											<div className="modal" id="showMore">
												<div className="modal-box min-h-[150px] bg-gray-100 shadow-xl absolute top-[30vh]">
													<NotificationDetail currentNotification={currentNotification} />
													<a href="#" className="h-5 absolute top-3 right-5 text-2xl hover">
													×
													</a>
												</div>
											</div>
										</button>
									)}
								</div>
							</section>
						</article>
					);
				})}
			</section>
		</section>
	);
};

export default Notification;
