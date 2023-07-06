"use client";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

const LogForm = () => {
	const [input, setInput] = useState({
		email: "",
		password: "",
		rememberMe: false,
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		//dispatch(postLogin(input))
		setInput({
			email: "",
			password: "",
			rememberMe: false,
		});
	};

	const handleChange = (event) => {
		event.preventDefault();
		setInput({
			...input,
			[event.target.name]: event.target.value,
		});
	};

	const handleCheck = (event) => {
		setInput({
			...input,
			[event.target.name]: event.target.checked,
		});
	};

	return (
		<section className="w-11/12 max-w-md h-full font-medium text-sec flex flex-col items-center justify-center">
			<form onSubmit={handleSubmit} className="w-full h-80 flex flex-col justify-evenly">
				<label htmlFor="email">
					E-mail
					<input
						type="email"
						name="email"
						value={input.email}
						className="w-full px-3 py-2 bg-transparent outline-none border-b"
						placeholder="Your Email ✉️"
						onChange={handleChange}
						required
					/>
				</label>
				<article>
					<label htmlFor="password">
						Password
						<input
							type="password"
							name="password"
							value={input.password}
							className="w-full px-3 py-2 bg-transparent outline-none border-b"
							placeholder="Your Password 🔒"
							onChange={handleChange}
							required
						/>
					</label>
					<div className="m-2 flex flex-row justify-between">
						<label htmlFor="remember">
							<input type="checkbox" name="remember" className="mr-2" onChange={handleCheck} checked={input.remember} />
							Remember Me
						</label>
						<Link href="/forgot" className="hover:underline">
							Forgot password?
						</Link>
					</div>
				</article>
				<button className="w-full py-2 text-pri bg-sec hover:bg-gray-300 active:bg-lig rounded-lg duration-150">
					Log In
				</button>
			</form>
			<div className="w-full h-px mb-6 relative bg-gray-300">
				<p className="absolute -top-2.5 left-[36%] px-2 text-sm text-sec bg-pri">Or continue with</p>
			</div>
			<article className="w-full grid grid-cols-3 gap-x-3">
				<button className="flex items-center justify-center bg-sec py-2.5 border rounded-lg hover:bg-gray-300 duration-150 active:bg-lig">
					<Image src="/social/google.svg" width={25} height={25} alt="google" />
				</button>
				<button className="flex items-center justify-center bg-sec py-2.5 border rounded-lg hover:bg-gray-300 duration-150 active:bg-lig">
					<Image src="/social/facebook.svg" width={25} height={25} alt="facebook" />
				</button>
				<button className="flex items-center justify-center bg-sec py-2.5 border rounded-lg hover:bg-gray-300 duration-150 active:bg-lig">
					<Image src="/social/linkedin.svg" width={25} height={25} alt="linkedin" />
				</button>
			</article>
			<article className="text-center my-5 space-y-2">
				<p className="">
					Don't have an account?{" "}
					<Link href="/signup" className="hover:underline">
						Sign up
					</Link>
				</p>
			</article>
		</section>
	);
};

export default LogForm;
