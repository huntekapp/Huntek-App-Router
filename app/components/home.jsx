import Postulations from "./postulations";
import Conversations from "./conversations";
import Interviews from "./interviews";

const Home = () => {
	return (
		<section className="w-full p-4 text-pri flex flex-col justify-evenly items-left">
			<p className="text-xl">¡Hola!</p>
			<p className="font-medium  text-3xl">Luis Sanchez</p>
			<Postulations />
			<Conversations />
			<Interviews />
		</section>
	);
};

export default Home;
