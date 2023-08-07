import NavBar from "../../components/applicant/navbar/navbar";
import Home from "../../components/applicant/home/home";
import Footbar from "@/app/components/applicant/footbar/footbar";

const HomePage = () => {
	return (
		<main className="w-full h-screen lightcentergrad flex flex-col justify-between">
			<NavBar />
			<Home />
			<Footbar />
		</main>
	);
};

export default HomePage;
