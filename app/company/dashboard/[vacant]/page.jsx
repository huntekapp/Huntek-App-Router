import Navbar from "@/app/components/company/navbar/navbar";
import VacantStats from "@/app/components/company/vacantStats/vacantStats";

const vacantId = () => {
	return (
		<main className="w-full h-screen bg-sec flex flex-col justify-between">
			<Navbar />
			<VacantStats />
		</main>
	);
};

export default vacantId;
