import Table from "./table";
import Analytics from "./analytics";

const Dashboard = () => {
	const vacants = [
		{
			name: "Desarrollador Front End",
			match: "10",
			quanty: "15",
			reject: "30%",
		},
		{
			name: "Desarrollador Back End",
			match: "10",
			quanty: "15",
			reject: "30%",
		},
		{
			name: "Analista de Datos",
			match: "10",
			quanty: "15",
			reject: "30%",
		},
		{
			name: "Desarrollador FullStack",
			match: "10",
			quanty: "15",
			reject: "30%",
		},
	];

	return (
		<section className="w-full h-[90%] flex flex-col justify-between items-center">
			<article className="w-full h-[20%] flex flex-row justify-evenly items-center">
				<div className="w-fit px-2 py-1 border-2 border-pri rounded-xl text-pri text-center grid place-content-center">
					<p className="text-xl">
						# Vacantes <br />
						<span className="text-2xl font-semibold">{vacants.length}</span>
					</p>
				</div>
				<div className="w-fit px-2 py-1 border-2 border-pri rounded-xl text-pri text-center grid place-content-center">
					<p className="text-xl">
						# Aceptados <br />
						<span className="text-2xl font-semibold">{vacants.length}</span>
					</p>
				</div>
				<div className="w-fit px-2 py-1 border-2 border-pri rounded-xl text-pri text-center grid place-content-center">
					<p className="text-xl">
						# Mensajes no respondidos <br />
						<span className="text-2xl font-semibold">{vacants.length}</span>
					</p>
				</div>
				<div className="w-fit px-2 py-1 border-2 border-pri rounded-xl text-pri text-center grid place-content-center">
					<p className="text-xl">
						# Feedbacks Faltantes <br />
						<span className="text-2xl font-semibold">{vacants.length}</span>
					</p>
				</div>
			</article>
			<article className="w-full h-[80%] flex flex-row justify-between items-start">
				<Table vacants={vacants} />
				<Analytics />
			</article>
		</section>
	);
};

export default Dashboard;
