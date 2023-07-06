"use client";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function Landing() {
	const router = useRouter();
	const [activatePing, setActivatePing] = useState(false);

	const animate = () => {
		const timeout = setTimeout(() => {
			setActivatePing(true);
			setTimeout(() => {
				router.push("/login");
			}, 200);
		}, 4600);
		return () => clearTimeout(timeout);
	};

	useEffect(() => {
		animate();
	}, []);

	return (
		<section className="h-screen bg-pri grid place-content-center">
			<article className={`w-64 h-64 bg-HKanimate ${activatePing && "animate-ping duration-200"}`}></article>
		</section>
	);
}
