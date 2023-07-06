"use client";
import Image from "next/image";
import TinderCard from "react-tinder-card";
const Swipe = () => {
	const onSwipe = (direction) => {
		console.log("You swiped: " + direction);
	};

	return (
		<section className="p-6">
			<TinderCard
				onSwipe={onSwipe}
				preventSwipe={["right", "left"]}
				className="border-sec bg-sec rounded-lg shadow-lg transition hover:shadow-lg">
				<Image
					width={500}
					height={100}
					alt="Office"
					src="/social/google.svg"
					className=" inset-0 h-full object-contain"
				/>
				<article className="">
					<div className="p-4 flex flex-col justify-end  ">
						<time datetime="2022-10-10" className="block text-xs text-black/90">
							10th Oct 2022
						</time>
						<a href="/informacion">
							<h3 className="mt-0.5 text-lg text-black">Huntek</h3>
						</a>
						<p className="mt-2 line-clamp-3 text-sm/relaxed text-black/95">Easter egg numero 3 no se </p>
					</div>
				</article>
			</TinderCard>
		</section>
	);
};
export default Swipe;
