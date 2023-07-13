import InterviewDetail from "../components/interviewDetail";
import AppleLogo from "@/public/images/apple-g44d4327db_1920.png";
import EcoLogo from "@/public/images/eco-ged3b25e46_1920.png";
import LinkedInLogo from "@/public/images/linkedin-gf141b6fe5_1920.png";
import NavBar from "../components/navbar";

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
			<NavBar/>
			<section className="min-h-screen bg-sec flex flex-col text-left">
				<h1 className="font-semibold text-2xl mt-4 ml-6">Entrevistas confirmadas</h1>
				{interviewInfo.map((interview, index) => {
					return <InterviewDetail interviewInfo={interview} key={index}/>;
				})}
			</section>
		</main>
	);
};

export default InterviewsPage;
