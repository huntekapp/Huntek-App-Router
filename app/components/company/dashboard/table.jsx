import Link from "next/link";

const Table = ({ vacants }) => {
	return (
		<table className="w-full h-full flex flex-col">
			<thead className="w-full h-[10%]">
				<tr className="w-full h-full bg-pri text-sec flex flex-row items-center">
					<th className="w-[40%]">Vacantes</th>
					<th className="w-[20%]"># Match</th>
					<th className="w-[20%]"># Vacantes</th>
					<th className="w-[20%]">% Abandono</th>
				</tr>
			</thead>
			<tbody className="w-full h-[90%] carousel carousel-vertical">
				{vacants.map((vac, index) => {
					if (index % 2 === 0) {
						return (
							<tr key={index} className="w-full h-12 bg-pri-100 text-center text-pri carousel-item items-center">
								<td className="w-[40%]">
									<Link href={`/company/dashboard/${vac.name}`} className="underline font-semibold">
										{vac.name}
									</Link>
								</td>
								<td className="w-[20%]">{vac.match}</td>
								<td className="w-[20%]">{vac.quanty}</td>
								<td className="w-[20%]">{vac.reject}</td>
							</tr>
						);
					} else {
						return (
							<tr key={index} className="w-full h-12 bg-pri-200 text-center text-pri carousel-item items-center">
								<td className="w-[40%]">
									<Link href={`/company/dashboard/${vac.name}`} className="underline font-semibold">
										{vac.name}
									</Link>
								</td>
								<td className="w-[20%]">{vac.match}</td>
								<td className="w-[20%]">{vac.quanty}</td>
								<td className="w-[20%]">{vac.reject}</td>
							</tr>
						);
					}
				})}
			</tbody>
		</table>
	);
};

export default Table;
