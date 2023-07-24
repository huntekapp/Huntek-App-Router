import AppleLogo from "@/public/images/apple-g44d4327db_1920.png";
import EcoLogo from "@/public/images/eco-ged3b25e46_1920.png";
import LinkedInLogo from "@/public/images/linkedin-gf141b6fe5_1920.png";
import NavBar from "./navbar";
import PostulationDetail from "./postulationdetail";

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
		ubication: "Silicon Valey, California"
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
		ubication: "Wisconsin, United States"
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
		ubication: "London, UK"
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
		ubication: "La Recoleta, Buenos Aires"
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
		ubication: "Córdoba, Argentina"
	}
];

const PostulationsExtend = () => {
	return (
		<main className="screen conta">
			<NavBar />
			<section className="h-full bg-sec flex flex-col text-left">
				<h1 className="text-3xl font-bold p-4 cursor-default border-b-2 text-pri">Mis postulaciones</h1>
				<div className="w-full">
					{userPostulations.map((postulation, index) => {
						return <PostulationDetail postulationInfo={postulation} key={index} />;
					})}
				</div>
			</section>
		</main>
	);
};
export default PostulationsExtend;
