import Postulations from "./postulations";
import Conversations from "./conversations";
import Interviews from "./interviews";

const Home = () => {
	return (
		<section className="w-full h-screen text-pri flex flex-col justify-around items-left">
			<article className="h-[15%] p-4">
				<p className="text-xl">¡Hola!</p>
				<p className="font-medium  text-3xl">Luis Sanchez</p>
			</article>
			<Postulations />
			<Conversations />
			<Interviews />
		</section>
	);
};

export default Home;
