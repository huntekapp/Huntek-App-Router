"use client";
import Link from "next/link";
import { useState } from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const Navbar = () => {
	const [unreadNotif, setUnreadNotif] = useState(false);

	return (
		<section className="w-full h-[10%] navbar">
			<article className="navbar-start w-[10%]">
				<Link href="/company/dashboard" className="w-16 h-16 bg-HKGtext cursor-pointer"></Link>
			</article>
			<article className="navbar-center w-[80%] flex flex-row justify-evenly">
				<Link href="">GO MATCH</Link>
				<Link href="">HOME</Link>
				<Link href="">CONFIGURACION</Link>
				<Link href="">AYUDA</Link>
				<Link href="">NOTICIAS</Link>
				<Link href="">FEEDBACK</Link>
			</article>
			<article className="navbar-end w-[10%]">
				<div className="drawer drawer-end">
					<input id="notif" type="checkbox" className="drawer-toggle" />
					<div className="drawer-content">
						<label
							htmlFor="notif"
							className="p-1 grid place-content-center rounded-full hover:bg-pri-100 hover:scale-125 duration-200 cursor-pointer">
							{unreadNotif && (
								<p className="absolute text-yellow-500 right-0 -top-2  md:-top-1 text-3xl md:text-2xl ">●</p>
							)}
							<NotificationsNoneOutlinedIcon className="w-6 h-6 text-pri hover:text-pri" />
						</label>
					</div>
				</div>
			</article>
		</section>
	);
};

export default Navbar;
