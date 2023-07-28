"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Notification from "./notification";
import Profile from "./profile";

const NavBar = () => {
	const [user, setUser] = useState({
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
	const currentPath = usePathname();
	const [closeProfile, setCloseProfile] = useState(false);
	const [closeNotif, setCloseNotif] = useState(false);

	return (
		<nav className="navbar h-[10%] px-4 bg-pri shadow-xl">
			<article className="navbar-start">
				{currentPath === "/home" ? (
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
						<div className="drawer-side z-50">
							<ul className="w-full h-screen bg-sec">
								<Profile user={user} closeProfile={closeProfile} setCloseProfile={setCloseProfile} />
							</ul>
						</div>
					</div>
				) : (
					<Link
						href="/home"
						className="p-1 grid place-content-center rounded-full hover:text-pri hover:bg-pri-100 hover:scale-125 duration-200">
						<HomeOutlinedIcon className="w-6 h-6 text-sec" />
					</Link>
				)}
			</article>

			<Link
				href={"/home"}
				className="w-1/4 h-8 bg-Huntek bg-contain bg-no-repeat bg-center flex flex-row justify-center navbar-center">
				<span className="sr-only">home</span>
			</Link>

			<article className="navbar-end">
				<div className="w-[75px] flex flex-row justify-between items-center">
					<Link
						href="/messages"
						className="p-1 grid place-content-center rounded-full hover:bg-pri-100 hover:scale-125 duration-200">
						<ForumOutlinedIcon className="w-6 h-6 text-sec hover:text-pri" />
					</Link>
					<div className="drawer drawer-end w-fit">
						<input id="notif" type="checkbox" className="drawer-toggle" />
						<div className="drawer-content">
							<label
								htmlFor="notif"
								className="p-1 grid place-content-center rounded-full hover:bg-pri-100 hover:scale-125 duration-200 cursor-pointer">
								<NotificationsNoneOutlinedIcon className="w-6 h-6 text-sec hover:text-pri" />
							</label>
						</div>
						<div className="drawer-side z-50">
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
