"use client";
import { gsap } from "gsap";
import { useEffect } from "react";
import LogForm from "../components/login";

const Login = () => {
	const hi = () => {
		var tl = gsap.timeline();
		tl.from("#logo", { x: 300 }, "+=1");
		tl.from("#form", { x: -200, opacity: 0 });
	};

	useEffect(() => {
		hi();
	}, []);

	return (
		<main className="h-screen darkrightgrad flex flex-col lg:flex-row justify-evenly items-center">
			<div
				id="logo"
				className="w-1/2 h-2/5 lg:w-[450px] lg:h-[450px] bg-HKtext bg-contain bg-center bg-no-repeat"></div>
			<LogForm />
		</main>
	);
};

export default Login;
