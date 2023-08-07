import Navbar from "@/app/components/company/navbar/navbar";
import Dashboard from "@/app/components/company/dashboard/dashboard";

const DashboardHome = () => {
	return (
		<main className="w-full h-screen bg-sec flex flex-col justify-between">
			<Navbar />
			<Dashboard />
		</main>
	);
};

export default DashboardHome;
