import Image from "next/image";
import Link from "next/link";

const Footbar = () => {
	return (
		<footer className="w-full h-12 bg-pri shadow-[0px_-8px_12px_0px_#0004] flex flex-row justify-center fixed bottom-0">
			<article className="absolute bottom-4">
				<Link href="/swipe">
					<button className="w-16 h-16 bg-sec rounded-full border-2 border-pri grid place-content-center hover:scale-105 duration-150">
						<Image alt="G" src="/huntek/logo/G.svg" width={35} height={35} />
					</button>
				</Link>
			</article>
		</footer>
	);
};
export default Footbar;
