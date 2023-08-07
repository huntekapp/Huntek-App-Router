"use client";
import Link from "next/link";
import InterviewsHomepage from "../interviewsHomepage";
import InfoAlert from "./infoAlert";

const hardcodedInterviews = [
	{
		enterprise: "Huntek",
		date: "22 SEP",
		hour: "15:30HS",
	},
	{
		enterprise: "Bimbo",
		date: "31 DIC",
		hour: "21:00HS",
	},
	{
		enterprise: "Pantene",
		date: "18 NOV",
		hour: "09:20HS",
	},
];

const Interviews = () => {
	return (
		<article className="w-full h-1/4 px-4 flex flex-col justify-center">
			<div className="h-6 mt-2 mb-1 flex flex-row justify-between">
				<p>Mis entrevistas</p>
				<Link href="/applicant/interviews" className="font-medium">
					Ver todas
				</Link>
			</div>
			{hardcodedInterviews.length ? (
				<div className="overflow-hidden md:grid md:grid-cols-2 md:grid-rows-1 md:gap-4">
					{hardcodedInterviews.map((interview, index) => {
						if (index === 0 || index === 1) return <InterviewsHomepage interviewInfo={interview} index={index} />;
					})}
				</div>
			) : (
				<div className="w-full min-h-[88px] px-2 flex justify-center items-center relative mb-1 md:mb-0">
					{/* <InfoAlert alertBody={"En este espacio tendrás un recordatorio de tu entrevista mas cercana"} /> */}
					<p className="text-pri absolute z-10">No tienes entrevistas agendadas</p>
				</div>
			)}
		</article>
	);
};

export default Interviews;
