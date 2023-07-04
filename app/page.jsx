"use client";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function Landing() {
	const router = useRouter();
	const [activatePing, setActivatePing] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setActivatePing(true);
			setTimeout(() => {
				router.push("/login");
			}, 500);
		}, 3000);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<div className="h-screen bg-hk grid place-content-center">
			<Image
				src="/huntek.svg"
				width={240}
				height={266}
				className={`${activatePing ? "animate-ping" : "animate-pulse"} transition-all duration-500`}
				alt="Huntek"
			/>
		</div>
	);
}
