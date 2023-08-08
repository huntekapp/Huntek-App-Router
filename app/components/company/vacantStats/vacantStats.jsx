"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import VacantTable from "./vacantTable";
import PostulantCard from "./postulantCard";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const VacantStats = () => {
	const id = useParams();
	const vacant = id.vacant.replace(/%20/g, " ");

	const hardcodedPostulants = [
		{
			name: "Raúl Márquez",
			accuracy: 45,
			salary: "$400",
			degree: "Licenciado en Zapatos",
			city: "CDMX",
		},
		{
			name: "Tito Villanova",
			accuracy: 80,
			salary: "$1200",
			degree: "Bachiller en Comunicación",
			city: "Cancún",
		},
		{
			name: "Cassidy Fuentes Lugones",
			accuracy: 94,
			salary: "$230",
			degree: "Diplomatura en Política",
			city: "Oaxaca de Juarez",
		},
		{
			name: "Virginia Castro",
			accuracy: 26,
			salary: "$9000",
			degree: "Ingeniero en Software",
			city: "Guadalajara",
		},
		{
			name: "Héctor Máquina",
			accuracy: 15,
			salary: "$1600",
			degree: "Analista de Datos",
			city: "Mount King",
		},
		{
			name: "Marco Antonio Solís",
			accuracy: 78,
			salary: "$850",
			degree: "Licenciado en Trufas",
			city: "Mérida",
		},
		{
			name: "Pedro Picapiedra",
			accuracy: 38,
			salary: "$120",
			degree: "Licenciado en Marketing",
			city: "Tlaxcala",
		},
	];

	return (
		<section className="w-full h-[90%] center bg-gray-50">
			<article className="w-[70%] h-full flex flex-col">
				<div className="h-[10%] text-2xl flex items-center">
					<Link
						href="/company/dashboard"
						className="m-4 p-1 grid place-content-center rounded-full text-pri hover:bg-pri-100 hover:scale-110 duration-150">
						<ArrowBackOutlinedIcon className="w-6 h-6" />
					</Link>
					{vacant}
				</div>
				<VacantTable postulants={hardcodedPostulants} />
			</article>
			<article className="h-full w-[30%] center">
				<PostulantCard />
			</article>
		</section>
	);
};

export default VacantStats;
