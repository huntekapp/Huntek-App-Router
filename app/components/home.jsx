import Postulations from "./postulations";
import Conversations from "./conversations";
import Interviews from "./interviews";
import Footbar from "./footbar";

const Home = () => {
	return (
		<main className="h-[90%]">
			<section className="w-full h-[90%] text-pri flex flex-col justify-around items-left">
				<article className="h-1/6 px-4 flex flex-col justify-center">
					<p className="text-xl">¡Hola!</p>
					<p className="text-3xl font-medium">Luis Sanchez</p>
				</article>
				<Postulations />
				<Conversations />
				<Interviews />
			</section>
			<footer className="h-[10%] min-h-[200px]">
				<Footbar />
			</footer>
		</main>
	);
};

export default Home;
