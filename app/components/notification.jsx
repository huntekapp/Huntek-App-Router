"use client";
import Image from "next/image";
import { useState } from "react";
import NotificationDetail from "./notificationdetail";

const Notification = ({ user, setCloseNotif, closeNotif }) => {
	const notis = user.notification;
	const [currentNotification, setCurrentNotification] = useState({});

	const handleClick = (nombre) => {
		let filteredNotis = notis.filter((noti) => noti.name !== nombre);
		setNotis([...filteredNotis]);
	};

	return (
		<section className="w-full h-screen text-pri bg-sec flex flex-col">
			<article className="w-full h-[10%] border-b flex flex-row justify-start items-center">
				<button
					onClick={() => {
						document.getElementById("notif").click();
						setCloseNotif(!closeNotif);
					}}
					className="w-6 h-6 mx-2 rounded-full flex flex-row justify-center items-center relative hover:bg-pri-100 hover:scale-125 duration-150">
					<Image src="/utils/x_huntek.svg" alt="close" fill={true} className="absolute" />
				</button>
				<h1 className="mx-1 text-3xl font-bold cursor-default">Notificaciones</h1>
			</article>
			<article className="w-full h-[90%] carousel carousel-vertical">
				{!notis.length && (
					<h2 className="text-xl flex justify-between items-center font-bold ml-5 mt-4">No hay notificaciones...</h2>
				)}
				{notis.map((noti, index) => {
					return (
						<article
							key={index}
							className="bg-none border-gray-200 border-y border-t-0 cursor-default h-[120px] max-h-[120px] flex flex-row carousel-item">
							<section className="flex justify-center items-center mx-4 text-2xl">●</section>
							<section className="flex flex-col w-full">
								<h2 className="text-pri-800 pr-4 text-lg pt-2 flex flex-row justify-between items-center font-medium">
									{`${noti.name}`}
									<button onClick={() => handleClick(noti.name)} className="h-4 z-50 w-4 hover:scale-125 duration-150">
										<Image src="/utils/x_huntek.svg" alt="close" width={24} height={24} />
									</button>
								</h2>
								<p className="pr-5 pb-2 h-12 max-h-12 text-pri-500 line-clamp-2 font-light text-base">{`${noti.value}`}</p>
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
			</article>
		</section>
	);
};

export default Notification;
