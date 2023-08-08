import accuracyOrder from "@/app/helpers/accuracyOrder";

const VacantTable = ({ postulants }) => {
	const orderedPostulants = accuracyOrder(postulants);

	return (
		<table className="w-full h-[90%] flex flex-col">
			<thead className="w-full h-[10%]">
				<tr className="w-full h-full bg-pri text-sec flex flex-row items-center">
					<th className="w-[30%]">NOMBRE</th>
					<th className="w-[20%]">%EN COMÚN</th>
					<th className="w-[20%]">RANGO SALARIAL</th>
					<th className="w-[20%]">TÍTULO</th>
					<th className="w-[20%]">CIUDAD</th>
				</tr>
			</thead>
			<tbody className="w-full h-[90%] carousel-vertical scrollnice">
				{orderedPostulants.map((postulant, index) => {
					if (index % 2 === 0) {
						return (
							<tr key={index} className="w-full h-14 bg-pri-100 text-center text-pri carousel-item items-center">
								<td className="w-[30%]">{postulant.name}</td>
								<td className="w-[20%]">{postulant.accuracy}%</td>
								<td className="w-[20%]">{postulant.salary}</td>
								<td className="w-[20%]">{postulant.degree}</td>
								<td className="w-[20%]">{postulant.city}</td>
							</tr>
						);
					} else {
						return (
							<tr key={index} className="w-full h-14 bg-pri-400 text-center text-pri carousel-item items-center">
								<td className="w-[30%]">{postulant.name}</td>
								<td className="w-[20%]">{postulant.accuracy}%</td>
								<td className="w-[20%]">{postulant.salary}</td>
								<td className="w-[20%]">{postulant.degree}</td>
								<td className="w-[20%]">{postulant.city}</td>
							</tr>
						);
					}
				})}
			</tbody>
		</table>
	);
};
export default VacantTable;
