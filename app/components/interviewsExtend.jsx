"use client"
import Image from "next/image";
import Link from "next/link";
import AppleLogo from "@/public/images/apple-g44d4327db_1920.png";
import EcoLogo from "@/public/images/eco-ged3b25e46_1920.png";
import LinkedInLogo from "@/public/images/linkedin-gf141b6fe5_1920.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const InterviewExtend = () => {
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

	return (
		<section className="w-full h-screen text-pri flex flex-col">
			<nav className="w-full h-[10%] px-4 border-b flex flex-row justify-start items-center">
				<Link
					href="/home"
					className="p-1 grid place-content-center rounded-full hover:bg-pri-100 hover:scale-125 duration-150">
					<HomeOutlinedIcon className="w-6 h-6" />
				</Link>
				<h1 className="w-[95%] text-3xl font-bold grid place-content-center cursor-default">Entrevistas</h1>
			</nav>
			<article className="h-[90%] p-4 darkgradient-both-tb text-left flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-x-7 lg:px-8">
				{interviewInfo.length ? (
					interviewInfo.map((interview, index) => {
						return (
							<section
								key={index}
								className="w-full h-36 mb-4 p-2 bg-gray-50 border border-gray-400 rounded-lg shadow-xl flex flex-row items-center">
								<div>
									<Image
										loading={"eager"}
										alt="logo"
										src={interview.enterpriseLogo}
										width={90}
										height={100}
										className="mx-3 rounded-full border-1 border-gray-50 shadow-[0px_0px_6px_0px_#1a202c]"
									/>
								</div>
								<div className="flex flex-col mx-3">
									<a href={interview.enterpriseWebSite} target="_blank" className="text-cyan-700 text-lg">
										{interview.enterpriseName}
									</a>
									<p className="text-sm">{interview.interviewDate}</p>
									<p className="text-sm mb-2">{interview.vacant}</p>
									<p className="text-xs">
										Entrevistador/a: <span className="text-cyan-700">{interview.interviewer}</span>
									</p>
								</div>
							</section>
						);
					})
				) : (
					<article className="md:w-fit h-fit w-full absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] text-center flex flex-col justify-center items-center">
						<h2 className="font-medium text-sec mt-10 mb-3 text-xl xs:text-lg">Aún no tienes entrevistas agendadas.</h2>
						<p className="text-xs	font-semibold text-sec/60">Pero puedes empezar a buscar el trabajo de tus sueños</p>
						<Link className="w-fit" href={"/swipe"}>
							<button className="w-fit text-xs font-semibold rounded-lg mt-4 bg-pri text-sec p-2 border-none opacity-90">
								LET'S HUNT
							</button>
						</Link>
						<div className="bg-HKlogo bg-center bg-no-repeat bg-contain absolute w-[350px] h-[350px] translate-x-[-50%] translate-y-[-50%] left-2/4 top-2/4 opacity-10 -z-10" />
					</article>
				)}
			</article>
		</section>
	);
};

export default InterviewExtend;
