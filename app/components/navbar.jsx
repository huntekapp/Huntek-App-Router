"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ForumIcon from "@mui/icons-material/Forum";
import Profile from "./profile";
import Notification from "./notification";

const NavBar = () => {
	let currentPath = usePathname();
	const [user, setUser] = useState({
		name: "Luis Sanchez",
		email: "louissaintchess@gmail.com",
		image: "/images/pexels-monstera-5384445.jpg",
		notification: [
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
		],
	});
	const [closeProfile, setCloseProfile] = useState(false);
	const [closeNotif, setCloseNotif] = useState(false);
	const backArrowPaths = [
		"/interviews",
		"/profileExtend",
		"/swipe",
		"/conversations",
		"/postulations",
		/postulations\/.*/,
	];
	const conversationButtonPaths = ["/swipe", "/home", "/postulations", /postulations\/.*/];

	return (
		<nav className="navbar h-[10%] px-2 bg-pri shadow-xl">
			<article className="navbar-start">
				{!backArrowPaths.some((path) => (path instanceof RegExp ? path.test(currentPath) : path === currentPath)) ? (
					<div className="drawer">
						<input type="checkbox" id="profile" className="drawer-toggle" />
						<label htmlFor="profile" className="drawer-button w-10 h-10 relative cursor-pointer">
							<Image
								src={user.image}
								alt="avatar"
								fill={true}
								loading={"eager"}
								className="rounded-full object-cover absolute"
							/>
						</label>
						<div className="drawer-side z-10">
							<ul className="w-full h-screen bg-sec">
								<Profile user={user} closeProfile={closeProfile} setCloseProfile={setCloseProfile} />
							</ul>
						</div>
					</div>
				) : (
					<Link href="/home">
						<button className="btn btn-ghost btn-circle">
							<div className="indicator">
								<Image loading={"eager"} src="/utils/back.svg" alt="backArrow" width={25} height={25} />
							</div>
						</button>
					</Link>
				)}
			</article>

			<Link
				href={"/home"}
				className="w-1/4 h-8 bg-Huntek bg-contain bg-no-repeat bg-center flex flex-row justify-center navbar-center">
				<span className="sr-only">home</span>
			</Link>

			<article className="navbar-end">
				<div className="flex justify-end items-center">
					{conversationButtonPaths.some((path) =>
						path instanceof RegExp ? path.test(currentPath) : path === currentPath
					) ? (
						<button className="btn btn-ghost z-0 btn-circle">
							<a href="/conversations">
								<ForumIcon style={{ fontSize: "24px", color: "white" }} />
							</a>
						</button>
					) : (
						""
					)}
					<div className="drawer drawer-end">
						<input id="notif" type="checkbox" className="drawer-toggle" />
						<div className="drawer-content">
							<label htmlFor="notif" className="drawer-button ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 cursor-pointer mx-1"
									fill="none"
									viewBox="0 0 24 24"
									stroke="#ffffff">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
									/>
								</svg>
							</label>
						</div>
						<div className="drawer-side z-10">
							<ul className="w-full h-screen bg-sec">
								<li>
									<Notification user={user} closeNotif={closeNotif} setCloseNotif={setCloseNotif} />
								</li>
							</ul>
						</div>
					</div>
				</div>
			</article>
		</nav>
	);
};

export default NavBar;
