"use client";
import Postulations from "./postulations";
import Messages from "./messages";
import Interviews from "./interviews";
import { useGetInfoUserQuery } from "@/app/globalstore/services/applicant/user-info/useInfoUser";

const Home = () => {
	const { data, isLoading } = useGetInfoUserQuery();

	if (isLoading) {
		return (
			<main className="w-full h-homecontent px-4 flex flex-col justify-around items-center">
				<section className="w-full h-[15%] flex flex-col justify-center items-start animate-pulse">
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
				</section>
			</main>
		);
	}

	return (
		<main className="w-full h-homecontent text-pri flex flex-col justify-around items-left">
			<article className="w-full h-[15%] px-4 flex flex-col justify-center">
				<p className="text-xl">¡Hola!</p>
				<p className="text-3xl font-medium">
					{data?.first_name.split(" ")[0]} {data?.last_name && data?.last_name.split(" ")[0]}
				</p>
			</article>
			<Postulations />
			<Messages />
			<Interviews />
		</main>
	);
};

export default Home;
