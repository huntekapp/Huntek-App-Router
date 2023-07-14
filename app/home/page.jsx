import NavBar from "../components/navbar";
import Home from "../components/home";
import Footbar from "../components/footbar";

const HomePage = () => {
	return (
		<main className="h-screen bg-sec flex flex-col justify-start">
			<NavBar />
			<Home />
			<Footbar />
		</main>
	);
};

export default HomePage;
