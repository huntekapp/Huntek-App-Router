"use client";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function Landing() {
	const router = useRouter();

	const animate = () => {
		const timeout = setTimeout(() => {
			router.push("/login");
		}, 4000);
		return () => clearTimeout(timeout);
	};

	useEffect(() => {
		animate();
	}, []);

	return (
		<section className="h-screen bg-pri grid place-content-center">
			<article className="w-64 h-64 bg-HKanimate"></article>
		</section>
	);
}
