"use client";
import NavBar from "../../components/navbar/navbar";
import Swipe from "../../components/swipe/swipe";

const SwipePage = () => {
	return (
		<main className="h-screen bg-black flex flex-col justify-between items-center">
			<NavBar />
			<Swipe />
		</main>
	);
};
export default SwipePage;
