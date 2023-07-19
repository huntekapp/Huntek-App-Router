"use client";
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";

const Postulations = () => {
	const [postulaciones, setPostulaciones] = useState([
		{id: "Huntek", image: "/huntek/logo/G.svg"},
		{id: "Youtube", image: "/images/youtube-g6a795f8e6_1920.png"},
		{id: "Google", image: "/images/google-ga4b7784ab_1920.png"},
		{id: "Bitcoin", image: "/images/bitcoin-gfe80587d1_1920.png"},
		{id: "Linkedin", image: "/images/linkedin-gf141b6fe5_1920.png"},
		{id: "Windows", image: "/images/windows-gc6d7a955d_1920.png"},
		{id: "apple", image: "/images/apple-g44d4327db_1920.png"},
	]);

	return (
		<article className="w-full h-1/5 flex flex-col justify-evenly">
			<div className="px-4 flex flex-row justify-between">
				<p>Mis postulaciones</p>
				<Link href="/postulations" className="font-medium">
					Ver todas
				</Link>
			</div>
			<div className="w-full h-3/4 px-2 carousel carousel-center space-x-5">
				{postulaciones.map((post, index) => (
					<div key={index} className="w-20 h-full carousel-item avatar">
						<div className="border-4 border-pri rounded-full shadow-md relative">
							<Link href={`/postulations/${post.id}`}>
								<Image
									loading={"eager"}
									key={post.id}
									alt={post.id}
									src={post.image}
									fill={true}
									objectFit="cover"
									objectPosition="center"
								/>
							</Link>
						</div>
					</div>
				))}
			</div>
		</article>
	);
};

export default Postulations;
