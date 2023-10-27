"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Notification from "./notification";
import Profile from "./profile";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useGetFilesQuery } from "@/app/globalstore/services/applicant/user-files/useFiles";
import { useGetInfoUserQuery } from "@/app/globalstore/services/applicant/user-info/useInfoUser";

const NavBar = () => {
	const [user, setUser] = useState({
		image: "/images/defaultPhoto.png",
		notification: [
			{
				name: "Tienes una nueva cita!",
				value:
					"Aunque nadie lo pueda creer, tienes una nueva cita! De manera totalmente increible, una fémina le dio me gusta a tu carta e hicieron match, estamos seguros de que vas a tener que bañarte por primera vez en los ultimos seis meses.",
				unreaded: true,
			},
			{
				name: "Te han bloqueado.",
				value:
					"Lamentamos informarte que has sido bloqueado por la usuaria @dualipa_temperley debido a que has spameado su casilla de mensajes.",
				unreaded: true,
			},
			{
				name: "Actualizacion.",
				value: `Hemos actualizado nuestra politica.`,
				unreaded: true,
			},
			// {
			// 	name: "La notificacion mas larga de la historia",
			// 	value: `En esta notificacion vamos a concentrarnos en explayar lo más posible este texto. Cada vez que un gato salta al techo del vecino las placas tectonicas de la zona aledaña deciden moverse en el eje y en un angulo de 45 grados. Este movimiento produce maremotos en las costas Tailandesas, haciendo que los barcos pesqueros Japoneses tomen la retirada debido a las inminentes inundaciones que se avecinan a sus vecinos alemanes.`,
			// 	unreaded: true
			// },
			// {
			// 	name: "Notifid",
			// 	value: `Lorem ipsum dolor, etc etc. Quien escribió esto? Por que lo veo en todos lados?`,
			// 	unreaded: true
			// },
			// {
			// 	name: "Marco Polo",
			// 	value: `Lorem ipsum dolor, etc etc. Quien escribió esto? Por que lo veo en todos lados?`,
			// 	unreaded: true
			// },
			// {
			// 	name: "Usurpa Door",
			// 	value: `Lorem ipsum dolor, etc etc. Quien escribió esto? Por que lo veo en todos lados?`,
			// 	unreaded: true
			// },
		],
	});
	const currentPath = usePathname();
	const [closeProfile, setCloseProfile] = useState(false);
	const [closeNotif, setCloseNotif] = useState(false);
	const [unreadNotif, setUnreadNotif] = useState(false);
	const { data, isLoading } = useGetInfoUserQuery();
	const { data: filesInfo } = useGetFilesQuery(data?.id);
	return (
		<nav className="navbar h-[10%] px-4 bg-pri shadow-xl">
			<article className="navbar-start">
				{currentPath === "/applicant/home" ? (
					<div className="drawer">
						<input type="checkbox" id="profile" className="drawer-toggle" />
						<label htmlFor="profile" className="drawer-button w-10 h-10 relative cursor-pointer">
							{filesInfo && filesInfo[0]?.profile_picture_url ? (
								<Image
									src={filesInfo[0]?.profile_picture_url}
									alt="avatar"
									fill={true}
									loading={"lazy"}
									placeholder="empty"
									blurDataURL="/images/defaultPhoto.png"
									className="rounded-full object-cover absolute"
								/>
							) : (
								<Image
									src={"/images/defaultPhoto.png"}
									alt="avatar"
									fill={true}
									loading={"eager"}
									className="rounded-full object-cover absolute"
								/>
							)}
						</label>
						<div className="drawer-side z-50">
							<ul className="w-full h-screen bg-sec">
								<Profile filesInfo={filesInfo} closeProfile={closeProfile} setCloseProfile={setCloseProfile} />
							</ul>
						</div>
					</div>
				) : (
					<Link
						href="/applicant/home"
						className="p-1 grid place-content-center rounded-full hover:text-pri hover:bg-pri-100 hover:scale-125 duration-200">
						<HomeOutlinedIcon className="w-6 h-6 text-sec" />
					</Link>
				)}
			</article>

			<Link
				href="/applicant/home"
				className="w-1/4 h-8 bg-Huntek bg-contain bg-no-repeat bg-center flex flex-row justify-center navbar-center">
				<span className="sr-only">home</span>
			</Link>

			<article className="navbar-end">
				{/* <div className="w-[75px] flex flex-row justify-between items-center">
          <Link
            href="/applicant/messages"
            className="p-1 grid place-content-center rounded-full hover:bg-pri-100 hover:scale-125 duration-200">
            <ForumOutlinedIcon className="w-6 h-6 text-sec hover:text-pri" />
          </Link>
          <div className="drawer drawer-end w-fit">
            <input id="notif" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="notif"
                className="p-1 grid place-content-center rounded-full hover:bg-pri-100 hover:scale-125 duration-200 cursor-pointer">
                {unreadNotif && (
                  <p className="absolute text-yellow-500 right-0 -top-2  md:-top-1 text-3xl md:text-2xl ">●</p>
                )}
                <NotificationsNoneOutlinedIcon className="w-6 h-6 text-sec hover:text-pri" />
              </label>
            </div>
            <div className="drawer-side z-50">
              <ul className="w-full h-screen bg-sec">
                <li>
                  <Notification
                    user={user}
                    closeNotif={closeNotif}
                    setCloseNotif={setCloseNotif}
                    unreadNotif={unreadNotif}
                    setUnreadNotif={setUnreadNotif}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div> */}
			</article>
		</nav>
	);
};

export default NavBar;
