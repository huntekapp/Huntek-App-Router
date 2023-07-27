import NavBar from "../components/navbar";
import Home from "../components/home/home";

const HomePage = () => {
	return (
		<main className="h-home lightcentergrad flex flex-col justify-between">
			<NavBar />
			<Home />
		</main>
	);
};

export default HomePage;
