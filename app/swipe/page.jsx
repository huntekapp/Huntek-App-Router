import FootbarSwipe from "../components/footbarswipe";
import NavBar from "../components/navbar";
import Swipe from "../components/swipe";

const SwipePage = () => {
	return (
		<section className="min-h-screen bg-pri flex flex-col justify-between items-center">
			<NavBar />
			<Swipe />
			<FootbarSwipe />
		</section>
	);
};
export default SwipePage;
