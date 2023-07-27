import AppleLogo from "@/public/images/apple-g44d4327db_1920.png";
import EcoLogo from "@/public/images/eco-ged3b25e46_1920.png";
import LinkedInLogo from "@/public/images/linkedin-gf141b6fe5_1920.png";
import Link from "next/link";
import PostulationDetail from "./postulationdetail";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const userPostulations = [
	{
		enterpriseName: "Apple",
		enterpriseWebSite: "https://www.apple.com/",
		enterpriseLogo: AppleLogo,
		vacant: "Desarrollador Front End",
		vacantInfo: [
			"Participar del ciclo completo de desarrollo de producto desde el análisis, prototipado y pruebas con usuarios hasta la mejora continua de las soluciones",
			"Construir sistemas de frontend eficientes y reutilizables",
			"Colaborar en la generación de nuevos productos, junto a profesionales de diseño y desarrollo de software",
			"Identificar y comunicar las mejores prácticas para la ingeniería de frontend, formando parte del diseño y revisión del código",
		],
		vacantRequire: [
			"Ser profesional de Ingeniería en Sistemas o carreras afines",
			"Poseer 5 años de experiencia de trabajo en frontend en ambientes de alto desempeño",
			"Contar con experiencia de trabajo con tecnologías web abiertas como JavaScript, HTML y CSS",
			"Tener experiencia en la utilización de NodeJS, Express, React, Sass, WPO y SEO",
			"Residir en cualquier localidad de Argentina",
		],
		whyUs: [
			"Ser parte de una compañía con espíritu emprendedor en la que nos encanta pensar en grande y a largo plazo",
			"Ser protagonista de tu desarrollo en un ambiente de oportunidades, aprendizaje, crecimiento, expansión y proyectos desafiantes",
			"Compartir y aprender en equipo junto a grandes profesionales y especialistas",
			"Un excelente clima de trabajo, con todo lo necesario para que vivas una gran experiencia :)",
		],
		ubication: "Silicon Valey, California",
	},
	{
		enterpriseName: "Herbalife",
		enterpriseWebSite: "https://www.herbalife.com.mx/",
		enterpriseLogo: EcoLogo,
		vacant: "Desarrollador Back End",
		vacantInfo: ["React", "Node.js", "Next.js", "PostgreSQL", "Sequelize", "Python"],
		vacantRequire: [
			"Ser profesional de Ingeniería en Sistemas o carreras afines",
			"Poseer 5 años de experiencia de trabajo en frontend en ambientes de alto desempeño",
			"Contar con experiencia de trabajo con tecnologías web abiertas como JavaScript, HTML y CSS",
			"Tener experiencia en la utilización de NodeJS, Express, React, Sass, WPO y SEO",
			"Residir en cualquier localidad de Argentina",
		],
		whyUs: [
			"Ser parte de una compañía con espíritu emprendedor en la que nos encanta pensar en grande y a largo plazo",
			"Ser protagonista de tu desarrollo en un ambiente de oportunidades, aprendizaje, crecimiento, expansión y proyectos desafiantes",
			"Compartir y aprender en equipo junto a grandes profesionales y especialistas",
			"Un excelente clima de trabajo, con todo lo necesario para que vivas una gran experiencia :)",
		],
		ubication: "Wisconsin, United States",
	},
	{
		enterpriseName: "LinkedIn",
		enterpriseWebSite: "https://www.linkedin.com/",
		enterpriseLogo: LinkedInLogo,
		vacant: "Desarrollador Full Stack",
		vacantInfo: ["React", "Node.js", "Next.js", "PostgreSQL", "Sequelize", "Python"],
		vacantRequire: [
			"Ser profesional de Ingeniería en Sistemas o carreras afines",
			"Poseer 5 años de experiencia de trabajo en frontend en ambientes de alto desempeño",
			"Contar con experiencia de trabajo con tecnologías web abiertas como JavaScript, HTML y CSS",
			"Tener experiencia en la utilización de NodeJS, Express, React, Sass, WPO y SEO",
			"Residir en cualquier localidad de Argentina",
		],
		whyUs: [
			"Ser parte de una compañía con espíritu emprendedor en la que nos encanta pensar en grande y a largo plazo",
			"Ser protagonista de tu desarrollo en un ambiente de oportunidades, aprendizaje, crecimiento, expansión y proyectos desafiantes",
			"Compartir y aprender en equipo junto a grandes profesionales y especialistas",
			"Un excelente clima de trabajo, con todo lo necesario para que vivas una gran experiencia :)",
		],
		ubication: "London, UK",
	},
	{
		enterpriseName: "Manzana",
		enterpriseWebSite: "https://www.apple.com/",
		enterpriseLogo: AppleLogo,
		vacant: "Desarrollador Front End",
		vacantInfo: ["React", "Node.js", "Next.js", "PostgreSQL", "Sequelize", "Python"],
		vacantRequire: [
			"Ser profesional de Ingeniería en Sistemas o carreras afines",
			"Poseer 5 años de experiencia de trabajo en frontend en ambientes de alto desempeño",
			"Contar con experiencia de trabajo con tecnologías web abiertas como JavaScript, HTML y CSS",
			"Tener experiencia en la utilización de NodeJS, Express, React, Sass, WPO y SEO",
			"Residir en cualquier localidad de Argentina",
		],
		whyUs: [
			"Ser parte de una compañía con espíritu emprendedor en la que nos encanta pensar en grande y a largo plazo",
			"Ser protagonista de tu desarrollo en un ambiente de oportunidades, aprendizaje, crecimiento, expansión y proyectos desafiantes",
			"Compartir y aprender en equipo junto a grandes profesionales y especialistas",
			"Un excelente clima de trabajo, con todo lo necesario para que vivas una gran experiencia :)",
		],
		ubication: "La Recoleta, Buenos Aires",
	},
	{
		enterpriseName: "Hierbavida",
		enterpriseWebSite: "https://www.herbalife.com.mx/",
		enterpriseLogo: EcoLogo,
		vacant: "Desarrollador Back End",
		vacantInfo: ["React", "Node.js", "Next.js", "PostgreSQL", "Sequelize", "Python", "Alembic", "Carnet de Cabify"],
		vacantRequire: [
			"Ser profesional de Ingeniería en Sistemas o carreras afines",
			"Poseer 5 años de experiencia de trabajo en frontend en ambientes de alto desempeño",
			"Contar con experiencia de trabajo con tecnologías web abiertas como JavaScript, HTML y CSS",
			"Tener experiencia en la utilización de NodeJS, Express, React, Sass, WPO y SEO",
			"Residir en cualquier localidad de Argentina",
		],
		whyUs: [
			"Ser parte de una compañía con espíritu emprendedor en la que nos encanta pensar en grande y a largo plazo",
			"Ser protagonista de tu desarrollo en un ambiente de oportunidades, aprendizaje, crecimiento, expansión y proyectos desafiantes",
			"Compartir y aprender en equipo junto a grandes profesionales y especialistas",
			"Un excelente clima de trabajo, con todo lo necesario para que vivas una gran experiencia :)",
		],
		ubication: "Córdoba, Argentina",
	},
];

const PostulationsExtend = () => {
	return (
		<section className="w-full min-h-screen text-pri flex flex-col">
			<nav className="w-full h-[10%] px-4 border-b flex flex-row justify-start items-center">
				<Link
					href="/home"
					className="p-1 grid place-content-center rounded-full hover:bg-pri-100 hover:scale-125 duration-150">
					<HomeOutlinedIcon className="w-6 h-6" />
				</Link>
				<h1 className="w-[95%] text-3xl font-bold grid place-content-center cursor-default">Postulaciones</h1>
			</nav>
			<article className="h-[90%] w-full darkgradient-both-tb flex flex-col px-3 md:px-6 md:grid md:grid-rows-2 md:grid-cols-2 md:gap-y-40 md:gap-x-7 md:pb-[180px] pb-7 text-left">
				{userPostulations.length ? (
					userPostulations.map((postulation, index) => {
						return <PostulationDetail postulationInfo={postulation} key={index} />;
					})
				) : (
					<article className="md:w-fit h-fit w-full absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] text-center flex flex-col justify-center items-center">
						<h2 className="font-medium text-sec mt-10 mb-3 text-xl xs:text-lg">Aún no tienes postulaciones.</h2>
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
export default PostulationsExtend;
