"use client";
import Postulations from "./postulations";
import Messages from "./messages";
import Interviews from "./interviews";
import { gsap } from "gsap";
import { useEffect } from "react";
import { useGetInfoUserQuery } from "@/app/globalstore/services/applicant/user-info/useInfoUser";

const welcome = () => {
	gsap.from("#name", 0.5, { y: -1000, opacity: 0 });
	gsap.from("#welcome", 0.5, { opacity: 0 }, "+=0.5");
};

const Home = () => {
	const { data, isLoading } = useGetInfoUserQuery();

	useEffect(() => {
		welcome();
	}, []);

	if (isLoading) {
		return (
			<main className="w-full h-homecontent px-4 flex flex-col justify-around items-center">
				{/* <section className="w-full h-[15%] flex flex-col justify-center items-start animate-pulse">
					<article className="w-24 h-6 mb-2 bg-slate-400 rounded-lg"></article>
					<article className="w-36 h-8 bg-slate-400 rounded-lg"></article>
				</section>
				<section className="w-full h-1/5 flex flex-col justify-center items-start animate-pulse">
					<article className="w-full h-5 mb-2 flex flex-row justify-between">
						<div className="w-36 bg-slate-400 rounded-lg"></div>
						<div className="w-20 bg-slate-400 rounded-lg"></div>
					</article>
					<article className="w-full flex flex-row justify-start items-center gap-4">
						<div className="w-[65px] h-[65px] bg-slate-400 rounded-full"></div>
						<div className="w-[65px] h-[65px] bg-slate-400 rounded-full"></div>
						<div className="w-[65px] h-[65px] bg-slate-400 rounded-full"></div>
					</article>
				</section>
				<section className="w-full h-2/5 flex flex-col justify-center items-start animate-pulse">
					<article className="w-full h-5 mb-2 flex flex-row justify-between">
						<div className="w-36 bg-slate-400 rounded-lg"></div>
						<div className="w-20 bg-slate-400 rounded-lg"></div>
					</article>
					<article className="w-full h-4/5 bg-slate-400 rounded-lg"></article>
				</section>
				<section className="w-full h-1/4 flex flex-col justify-center items-start animate-pulse">
					<article className="w-full h-5 mb-2 flex flex-row justify-between">
						<div className="w-36 bg-slate-400 rounded-lg"></div>
						<div className="w-20 bg-slate-400 rounded-lg"></div>
					</article>
					<article className="w-full h-20 flex flex-row md:grid md:grid-cols-2 md:grid-rows-1 md:gap-4">
						<div className="w-full bg-slate-400 rounded-lg"></div>
						<div className="w-full bg-slate-400 rounded-lg hidden md:flex"></div>
					</article>
				</section> */}
			</main>
		);
	}

	return (
		<main className="w-full h-homecontent text-pri flex flex-col justify-around items-left overflow-hidden">
			<article id="name" className="w-full h-[15%] px-4 flex flex-col justify-center">
				<p className="text-xl text-center">¡Hola!</p>
				<p className="text-3xl font-medium text-center">
					{data?.first_name.split(" ")[0]} {data?.last_name && data?.last_name.split(" ")[0]}
				</p>
			</article>
			<article id="welcome" className="w-full h-[80%] flex flex-row justify-center items-center">
				<div className="w-[95%] h-full p-10 darkrightgrad text-white rounded-3xl flex flex-col justify-evenly items-center">
					<div>
						<h1 className="text-2xl lg:text-3xl text-center">
							Bienvenido a <b>Huntek</b>!
						</h1>
						<h2 className="text-lg lg:text-xl text-center">¡Gracias por ser un pionero!</h2>
					</div>
					<p className="text-base lg:text-lg text-center">
						Aunque nuestra aplicación está tomando forma, estamos decididos a hacerla grandiosa.
					</p>
					<p className="text-base lg:text-lg text-center">Prepárate para una experiencia única...</p>
					<p className="text-base lg:text-lg text-center">¡¡Tu apoyo nos impulsa a seguir adelante!!</p>
				</div>
			</article>
			{/* <Postulations />
			<Messages />
			<Interviews /> */}
		</main>
	);
};

export default Home;
