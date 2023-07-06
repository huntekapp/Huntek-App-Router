import NavBar from "../components/navbar";
import Footbar from "../components/footbar";
import Home from "../components/home";

const HomePage = () => {
	return (
		<div className="min-h-screen bg-sec">
			<NavBar />
			<Home />
			<Footbar />
		</div>
	);
};
export default HomePage;
