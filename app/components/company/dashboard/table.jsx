import Link from "next/link";

const Table = ({ vacants }) => {
	return (
		<table className="w-full h-full">
			<thead>
				<tr className="w-full h-10 bg-pri text-sec">
					<th>Vacantes</th>
					<th># Match</th>
					<th># Vacantes</th>
					<th>% Abandono</th>
				</tr>
			</thead>
			<tbody>
				{vacants.map((vac, index) => {
					if (index % 2 === 0) {
						return (
							<tr key={index} className="w-full h-6 bg-pri-100 text-center text-pri">
								<td>
									<Link href={`/company/dashboard/${vac.name}`}>
										{vac.name}
									</Link>
								</td>
								<td>{vac.match}</td>
								<td>{vac.quanty}</td>
								<td>{vac.reject}</td>
							</tr>
						);
					} else {
						return (
							<tr key={index} className="w-full h-6 bg-pri-400 text-center text-pri">
								<td>
									<Link href={`/company/dashboard/${vac.name}`}>
										{vac.name}
									</Link>
								</td>
								<td>{vac.match}</td>
								<td>{vac.quanty}</td>
								<td>{vac.reject}</td>
							</tr>
						);
					}
				})}
			</tbody>
		</table>
	);
};

export default Table;
