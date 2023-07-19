import NavBar from "../components/navbar";
import Home from "../components/home";

const HomePage = () => {
	return (
		<main className="h-screen bg-sec flex flex-col justify-between">
			<NavBar />
			<Home />
		</main>
	);
};

export default HomePage;
