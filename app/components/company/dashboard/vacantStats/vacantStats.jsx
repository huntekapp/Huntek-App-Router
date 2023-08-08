"use client";
import { useParams } from "next/navigation";
import VacantTable from "./vacantTable";
import PostulantCard from "./postulantCard";
import Link from "next/link";
import Image from "next/image";

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
			<article className="h-full w-[70%] flex flex-col">
				<div className="text-2xl ml-4 my-2 flex items-center">
					<Link href="/company/dashboard">
						<Image
							src={"/utils/back_huntek.svg"}
							height={1}
							width={1}
							alt="backArrow"
							loading={"eager"}
							className="w-[20px] h-[20px] mr-3 rounded-full hover:scale-110 duration-200 hover:bg-black/5"
						/>
					</Link>
					{vacant}
				</div>
				<VacantTable postulants={hardcodedPostulants} />
			</article>
      <article className="h-full w-[30%] center">
        <PostulantCard/>
      </article>
		</section>
	);
};

export default VacantStats;
