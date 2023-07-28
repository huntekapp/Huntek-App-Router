"use client";
import Postulations from "./postulations";
import Messages from "./messages";
import Interviews from "./interviews";
import Footbar from "../footbar";
import { useGetInfoUserQuery } from "@/app/globalstore/services/user-info/useInfoUser";

const Home = () => {
	const { data, isLoading } = useGetInfoUserQuery();

	if (isLoading) {
		return (
			<div className="container">
				<div className="loader2"></div>
			</div>
		);
	}

	return (
		<main className="h-[90%]">
			<section className="w-full h-homecontent text-pri flex flex-col justify-around items-left">
				<article className="w-full h-20 px-4 flex flex-col justify-center">
					<p className="text-xl">¡Hola!</p>
					<p className="text-3xl font-medium">
						{data?.first_name} {data?.last_name}
					</p>
				</article>
				<Postulations />
				<Messages />
				<Interviews />
			</section>
			<footer className="w-full h-20 fixed bottom-0">
				<Footbar />
			</footer>
		</main>
	);
};

export default Home;
