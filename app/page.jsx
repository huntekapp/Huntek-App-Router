"use client";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function Landing() {
	const router = useRouter();
	const [ping, setPing] = useState(false);

	useEffect(() => {
		const handleAnimationEnd = () => {
			router.push("/login");
		};
		const animate = setTimeout(() => {
			setTimeout(() => {
				setPing(true);
				handleAnimationEnd();
			}, 200);
		}, 5000);
		return () => {
			clearTimeout(animate);
		};
	}, []);

	return (
		<section className="w-screen h-screen bg-pri grid place-content-center border-2 border-black">
			<div className={`w-[250px] h-[250px] bg-HKanimate ${ping && "animate-ping"}`}></div>
		</section>
	);
}
