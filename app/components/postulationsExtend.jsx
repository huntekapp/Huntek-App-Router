import PostulationDetail from "./postulationdetail";
import NavBar from "./navbar";
import AppleLogo from "@/public/images/apple-g44d4327db_1920.png";
import EcoLogo from "@/public/images/eco-ged3b25e46_1920.png";
import LinkedInLogo from "@/public/images/linkedin-gf141b6fe5_1920.png";

const userPostulations = [
	{
		enterpriseName: "Apple",
		enterpriseWebSite: "https://www.apple.com/",
		enterpriseLogo: AppleLogo,
		vacant: "Desarrollador Front End",
		vacantInfo: "Se necesita desarrollador Front End especializado en React, Next.js, Node.js, PostgreSQL, Sequelize y Python. Jornada laboral de 40 horas semanales, fin de semanas libres. Dos semanas de vacaciones al año. Trabajo remoto. Objetivos salariales.",
		interviewDate: "28 de Febrero / 2024",
  },
  {
		enterpriseName: "Herbalife",
		enterpriseWebSite: "https://www.herbalife.com.mx/",
		enterpriseLogo: EcoLogo,
		vacant: "Desarrollador Back End",
		vacantInfo: "Estamos en busca de un web developer especializado en Back End. Actualmente la webpage de la empresa maneja MongoDB, Python, Alembic y FastAPI, por lo tanto el postulante debe saber utilizar esas herramientas. Puesto remoto y salario por objetivos. Jornada sin horarios, con objetivos a cumplir.",
		interviewDate: "22 de Septiembre / 2024",
  },
  {
		enterpriseName: "LinkedIn",
		enterpriseWebSite: "https://www.linkedin.com/",
		enterpriseLogo: LinkedInLogo,
		vacant: "Desarrollador Full Stack",
		vacantInfo: "Tecnologías que debe saber el postulante: PHP, JavaScript, PostgreSQL, Alembic, Sequelize, MongoDB, Webpack, Node.js, Python, Ruby, C++, Java y un postgrado en física cuántica firmado por Barack Obama impreso en Lisboa entre las 20:00 y 02:00hs. Competencias requeridas: ganas de trabajar. Jornada de 16 horas diarias en remoto. Remuneración aceptable.",
		interviewDate: "32 de Diciembre / 2024",
	}
];

const PostulationsExtend = () => {
	return (
		<main>
			<NavBar />
			<section className="h-full bg-sec flex flex-col text-left">
				<b className="font-semibold text-3xl mt-4 ml-5 cursor-default">Mis postulaciones</b>
        {userPostulations.map((postulation, index) => {
          return <PostulationDetail postulationInfo={postulation} key={index}/>;
        })}
			</section>
		</main>
	);
};
export default PostulationsExtend;
