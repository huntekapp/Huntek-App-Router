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
			<div className="flex flex-col space-y-5 justify-start h-full w-full">
				<div className="h-24 w-60">
    <div className="flex flex-row items-center justify-start ml-6 h-full mt-2  animate-pulse">
        <div className="flex flex-col space-y-3">
            <div className="w-24 h-6 bg-slate-400 rounded-md ">
            </div>
            <div className="h-6 bg-slate-400 rounded-md w-36 ">
            </div>
        </div>
    </div>
</div>
				<div className=" flex w-64 animate-pulse gap-3 p-4">
					<div className="h-16 w-16 rounded-full bg-slate-400"></div>
					<div className="h-16 w-16 rounded-full bg-slate-400"></div>
					<div className="h-16 w-16 rounded-full bg-slate-400"></div>
					
				</div>
				<div className="card animate-pulse">
					<div className="card__skeleton bg-slate-400 card__title"></div>
					<div className="card__skeleton bg-slate-400 card__description">         </div>
				</div>
				<div className="card2 animate-pulse">
					<div className="card__skeleton2 bg-slate-400 card__description2">         </div>
				</div>
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
