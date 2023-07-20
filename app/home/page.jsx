import NavBar from "../components/navbar";
import Home from "../components/home";

const HomePage = () => {
	return (
		<main className="h-screen homegrad flex flex-col justify-between">
			<NavBar />
			<Home />
		</main>
	);
};

export default HomePage;
