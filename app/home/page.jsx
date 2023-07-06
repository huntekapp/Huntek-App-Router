import NavBar from "../components/navbar";
import Home from "../components/home";
import Footbar from "../components/footbar";

const HomePage = () => {
	return (
		<section className="min-h-screen bg-sec flex flex-col justify-start">
			<NavBar />
			<Home />
			<Footbar />
		</section>
	);
};

export default HomePage;
