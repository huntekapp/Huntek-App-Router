"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Login = () => {
	const router = useRouter();

	useEffect(() => {
		router.push("/login");
	}, []);

	return (
		<main className="h-screen darkrightgrad flex flex-col lg:flex-row justify-evenly items-center">
			<div
				id="logo"
				className="w-full h-2/5 lg:w-[450px] lg:h-[450px] bg-HKtext bg-contain bg-center bg-no-repeat"></div>
		</main>
	);
};

export default Login;
