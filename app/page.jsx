"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Landing() {
	const router = useRouter();
	const [ping, setPing] = useState(false);

	useEffect(() => {
		router.push("/login");
	}, []);

	return (
		<section className="w-screen h-screen darkrightgrad grid place-content-center border-2 border-black"></section>
	);
}
