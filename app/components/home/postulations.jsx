"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Postulations = () => {
	const [postulaciones, setPostulaciones] = useState([
		{ id: "Huntek", image: "/huntek/logo/G.svg" },
		{ id: "Google", image: "/social/google.svg" },
		{ id: "Facebook", image: "/social/facebook.svg" },
		{ id: "Linkedin", image: "/social/linkedin.svg" },
		{ id: "Youtube", image: "/images/youtube-g6a795f8e6_1920.png" },
		{ id: "Windows", image: "/images/windows-gc6d7a955d_1920.png" },
		{ id: "Apple", image: "/images/apple-g44d4327db_1920.png" },
		{ id: "Bitcoin", image: "/images/bitcoin-gfe80587d1_1920.png" },
	]);

	return (
		<article className="w-full h-28 flex flex-col justify-around">
			<div className="w-full px-4 mt-2 mb-1 flex flex-row justify-between">
				<p>Mis postulaciones</p>
				<Link href="/postulations" className="font-medium">
					Ver todas
				</Link>
			</div>
			<div className="w-full px-2 carousel carousel-center space-x-5">
				{postulaciones.map((post, index) => (
					<div key={index} className="carousel-item avatar">
						<Link
							href={`/postulations/${post.id}`}
							className="w-[70px] h-[70px] border-4 border-pri rounded-full shadow-md relative">
							<Image
								src={post.image}
								alt={post.id}
								fill={true}
								loading={"eager"}
								className="rounded-full object-cover absolute"
							/>
						</Link>
					</div>
				))}
			</div>
		</article>
	);
};

export default Postulations;