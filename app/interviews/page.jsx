import Image from "next/image";
import InterviewDetail from "../components/interviewDetail";
import AppleLogo from "@/public/images/apple-g44d4327db_1920.png";
import EcoLogo from "@/public/images/eco-ged3b25e46_1920.png";
import LinkedInLogo from "@/public/images/linkedin-gf141b6fe5_1920.png";
import Link from "next/link";

// Hardcoded Info / enterpiseLogo must be square image
const interviewInfo = [
	// {
	// 	enterpriseName: "Apple",
	// 	enterpriseWebSite: "https://www.apple.com/",
	// 	enterpriseLogo: AppleLogo,
	// 	interviewDate: "Martes 16 de Junio | 16:00hs",
	// 	vacant: "Desarrollador Front End",
	// 	interviewer: "Mark Zuckerberg",
	// },
	// {
	// 	enterpriseName: "Herbalife",
	// 	enterpriseWebSite: "https://www.herbalife.com.mx/",
	// 	enterpriseLogo: EcoLogo,
	// 	interviewDate: "Domingo 15 de Abril | 12:00hs",
	// 	vacant: "Gerente de ventas",
	// 	interviewer: "Michelle Obama",
	// },
	// {
	// 	enterpriseName: "LinkedIn",
	// 	enterpriseWebSite: "https://www.linkedin.com/",
	// 	enterpriseLogo: LinkedInLogo,
	// 	interviewDate: "Lunes 22 de Septiembre | 8:30hs",
	// 	vacant: "Database Mananger",
	// 	interviewer: "Roberto G. Bolaños",
	// }
];

const InterviewsPage = () => {
	return (
		<main className="h-screen">
			<section className="h-[10%] flex flex-row justify-start w-full items-center py-2 border-y border-t-0">
				<a href="/home" className="h-12 w-12 flex justify-center rounded-full ml-2 hover:bg-pri-100">
					<Image loading={"eager"} alt="back" width={32} height={32} src="utils/back_huntek.svg" />
				</a>
				<h1 className="text-4xl font-bold mt-1 ml-2 text-pri cursor-default">Entrevistas</h1>
			</section>
			<section className="min-h-[90%] darkgradient-both-tb flex flex-col md:grid md:grid-cols-2 md:grid-rows-3 md:gap-x-7 md:px-8 text-left">
				{interviewInfo.length ? (
					interviewInfo.map((interview, index) => {
						return <InterviewDetail interviewInfo={interview} key={index} />;
					})
				) : (
						<article className="md:w-fit h-fit w-full absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] text-center flex flex-col justify-center items-center">
							<h2 className="font-medium text-sec mt-10 mb-3 text-xl xs:text-lg">Aún no tienes entrevistas agendadas.</h2>
							<p className="text-xs	font-semibold text-sec/60">Pero puedes empezar a buscar el trabajo de tus sueños</p>
							<Link className="w-fit" href={"/swipe"}>
								<button className="w-fit text-xs font-semibold rounded-lg mt-4 bg-pri text-sec p-2 border-none opacity-90">LET'S HUNT</button>
							</Link>
							<div className="bg-HKlogo bg-center bg-no-repeat bg-contain absolute w-[350px] h-[350px] translate-x-[-50%] translate-y-[-50%] left-2/4 top-2/4 opacity-10 -z-10"/>
						</article>
				)}
			</section>
		</main>
	);
};

export default InterviewsPage;
