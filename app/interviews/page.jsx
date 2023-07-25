import Image from "next/image";
import InterviewDetail from "../components/interviewDetail";
import AppleLogo from "@/public/images/apple-g44d4327db_1920.png";
import EcoLogo from "@/public/images/eco-ged3b25e46_1920.png";
import LinkedInLogo from "@/public/images/linkedin-gf141b6fe5_1920.png";

// Hardcoded Info / enterpiseLogo must be square image
const interviewInfo = [
	{
		enterpriseName: "Apple",
		enterpriseWebSite: "https://www.apple.com/",
		enterpriseLogo: AppleLogo,
		interviewDate: "Martes 16 de Junio | 16:00hs",
		vacant: "Desarrollador Front End",
		interviewer: "Mark Zuckerberg",
	},
	{
		enterpriseName: "Herbalife",
		enterpriseWebSite: "https://www.herbalife.com.mx/",
		enterpriseLogo: EcoLogo,
		interviewDate: "Domingo 15 de Abril | 12:00hs",
		vacant: "Gerente de ventas",
		interviewer: "Michelle Obama",
	},
	{
		enterpriseName: "LinkedIn",
		enterpriseWebSite: "https://www.linkedin.com/",
		enterpriseLogo: LinkedInLogo,
		interviewDate: "Lunes 22 de Septiembre | 8:30hs",
		vacant: "Database Mananger",
		interviewer: "Roberto G. Bolaños",
	},
];

const InterviewsPage = () => {
	return (
		<main>
			<section className="flex flex-row justify-start h-full w-full items-start py-2 border-y border-t-0">
					<a href="/home" className="h-12 w-12 flex justify-center rounded-full ml-2 hover:bg-pri-100">
						<Image loading={"eager"} alt="back" width={32} height={32} src="utils/back_huntek.svg" />
					</a>
					<h1 className="text-4xl font-bold mt-1 ml-2 text-pri cursor-default">Entrevistas</h1>
				</section>
			<section className="min-h-screen bg-sec flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-6 text-left">
				{interviewInfo.map((interview, index) => {
					return <InterviewDetail interviewInfo={interview} key={index}/>;
				})}
			</section>
		</main>
	);
};

export default InterviewsPage;
