import Link from "next/link";
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
			<div className="navbar shadow-xl bg-pri">
				<Link href="/home">
					<button className="btn btn-ghost z-0 btn-circle absolute left-2">
						<div className="indicator">
							<Image src="/utils/back.svg" alt="backArrow" width={25} height={25} />
						</div>
					</button>
				</Link>
				<div className="navbar-center absolute left-2/4 translate-x-[-50%]">
					<h1 className="font-medium text-sec z-50 normal-case text-3xl">Huntek</h1>
				</div>
				<button className="btn btn-ghost z-0 btn-circle absolute right-2">
					<div className="indicator">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="#ffffff">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
							/>
						</svg>
					</div>
				</button>
			</div>
			<section className="min-h-screen bg-sec flex flex-col text-left">
				<h1 className="font-semibold text-2xl mt-4 ml-6">Entrevistas confirmadas</h1>
				{interviewInfo.map((interview) => {
					return <InterviewDetail interviewInfo={interview} />;
				})}
			</section>
		</main>
	);
};

export default InterviewsPage;
