import NavBar from "../../components/navbar/navbar";
import Home from "../../components/home/home";
import Footbar from "../../components/footbar";

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
