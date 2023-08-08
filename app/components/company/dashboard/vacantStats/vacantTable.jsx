import accuracyOrder from "@/app/helpers/accuracyOrder";

const VacantTable = ({ postulants }) => {
  const orderedPostulants = accuracyOrder(postulants)

	return (
		<article className="w-full h-[89%] px-4">
			<table className="w-full h-full">
				<thead>
					<tr className="w-full h-10 bg-pri text-sec">
						<th>NOMBRE</th>
						<th>%EN COMÚN</th>
						<th>RANGO SALARIAL</th>
						<th>TÍTULO</th>
						<th>CIUDAD</th>
					</tr>
				</thead>
				<tbody>
					{orderedPostulants.map((postulant, index) => {
						if (index % 2 === 0) {
							return (
								<tr key={index} className="w-full h-6 bg-pri-100 text-center text-pri">
									<td>{postulant.name}</td>
									<td>{postulant.accuracy}%</td>
									<td>{postulant.salary}</td>
									<td>{postulant.degree}</td>
									<td>{postulant.city}</td>
								</tr>
							);
            } else {
              return (
								<tr key={index} className="w-full h-6 bg-pri-400 text-center text-pri">
									<td>{postulant.name}</td>
									<td>{postulant.accuracy}%</td>
									<td>{postulant.salary}</td>
									<td>{postulant.degree}</td>
									<td>{postulant.city}</td>
								</tr>
							);
						}
					})}
				</tbody>
			</table>
		</article>
	);
};
export default VacantTable;
