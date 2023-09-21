"use client";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InfoAlert from "./infoAlert";

const hardcodedInterviews = [
	// {
	// 	enterprise: "Huntek",
	// 	date: "22 SEP",
	// 	hour: "15:30HS",
	// },
	// {
	// 	enterprise: "Bimbo",
	// 	date: "31 DIC",
	// 	hour: "21:00HS",
	// },
	// {
	// 	enterprise: "Pantene",
	// 	date: "18 NOV",
	// 	hour: "09:20HS",
	// },
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
						if (index === 0 || index === 1) {
							return (
								<article
									className={`${
										index === 1 && "hidden md:flex md:flex-row"
									} flex flex-row w-full h-20 px-4 bg-sec text-xs xs:text-sm text-pri border rounded-xl shadow-md justify-between items-center`}>
									<div className="w-[1%] min-w-[70px]">
										<span className="w-14 h-14 text-sm font-semibold border-pri border-2 rounded-full grid place-content-center">
											{interview.date}
										</span>
									</div>
									<div className="w-[99%]">
										<span className="btn w-full shadow-sm bg-pri border-none text-sm xs:text-xl text-sec">
											<span>
												{interview.hour} | {interview.enterprise}
											</span>
											<LocationOnIcon className="text-lg" />
										</span>
									</div>
								</article>
							);
						}
					})}
				</div>
			) : (
				<div className="w-full min-h-[88px] px-2 flex justify-center items-center relative mb-1 md:mb-0">
					<InfoAlert alertBody={"En este espacio tendrás un recordatorio de tu entrevista mas cercana"} />
					<p className="text-base absolute z-10">Aún no tienes entrevistas agendadas</p>
				</div>
			)}
		</article>
	);
};

export default Interviews;
