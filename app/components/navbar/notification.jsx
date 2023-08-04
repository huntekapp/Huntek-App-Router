"use client";
import { useState, useEffect } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Notification = ({ user, setCloseNotif, closeNotif, setUnreadNotif, unreadNotif }) => {
	const [notis, setNotis] = useState(user.notification);
	const [currentNotification, setCurrentNotification] = useState({});

	const handleClick = (nombre) => {
		let filteredNotis = notis.filter((noti) => noti.name !== nombre);
		setNotis([...filteredNotis]);
	};

	useEffect(() => {
		for (let i = 0; i < user.notification.length; i++){
			if (user.notification[i].unreaded === true) {
				setUnreadNotif(true)
				break
			}
			if(unreadNotif){setUnreadNotif(false)}
		}
	}, [currentNotification, notis])

	return (
		<main className="w-full h-screen text-pri flex flex-col">
			<section className="w-full h-[10%] px-4 border-b flex flex-row justify-start items-center">
				<button
					onClick={() => {
						document.getElementById("notif").click();
						setCloseNotif(!closeNotif);
					}}
					className="w-6 h-6 rounded-full grid place-content-center hover:bg-pri-100 hover:scale-125 duration-150">
					<CloseOutlinedIcon />
				</button>
				<h1 className="w-full text-center text-3xl font-bold cursor-default">Notificaciones</h1>
				<div className="w-6 h-6"></div>
			</section>
			<section className="w-full h-[90%] carousel-vertical scrollnice">
				{notis.map((noti, index) => {
					return (
						<article
							key={index}
							className="w-full h-24 border-b cursor-default carousel-item flex flex-row justify-center items-center relative">
							<div className={`w-6 h-6 grid px-8 place-content-center ${noti.unreaded ? "text-pri" : "text-gray-300"}`}>●</div>
							<a
								href="#showMore"
								onClick={() => {setCurrentNotification(noti), noti.unreaded = false}}
								className="w-full h-full pr-4 flex flex-col justify-center">
								<h2 className="text-lg font-medium line-clamp-1">{noti.name}</h2>
								<h3 className="h-11 text-base text-pri-500 font-light line-clamp-2">
									<p className="text-sm font-semibold cursor-pointer">{noti.value}</p>
								</h3>
							</a>
								<div className="w-6 h-full pr-8 py-4 flex flex-row items-start">
									<button onClick={() => { noti.unreaded = false, handleClick(noti.name)}}>
										<CloseOutlinedIcon className="w-4 h-4 hover:scale-125 duration-150" />
									</button>
								</div>
							<div className="modal" id="showMore">
								<div className="modal-box bg-gray-100 text-pri-800 shadow-xl">
									<p className="text-start text-lg font-medium">{currentNotification.name}</p>
									<p className="text-start font-light">{currentNotification.value}</p>
									<a href="#" className="h-5 absolute top-3 right-5 text-2xl hover">
										×
									</a>
								</div>
							</div>
						</article>
					);
				})}
				{!notis.length && (
					<div className="w-full h-full text-xl font-bold grid place-content-center">
						<h2>No hay notificaciones...</h2>
					</div>
				)}
			</section>
		</main>
	);
};

export default Notification;
