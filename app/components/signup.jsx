"use client";
import Link from "next/link";
import {useState} from "react";

const SignForm = () => {
	const [input, setInput] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});

	const handleChange = (event) => {
		event.preventDefault();
		setInput({
			...input,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		//dispatch(postRegister(input))
		setInput({
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		});
	};

	return (
		<section className="w-11/12 max-w-md h-screen font-medium text-sec flex flex-col items-center justify-evenly">
			<article className="flex flex-col justify-center items-center">
				<div className="w-40 h-40 bg-HKlogo bg-cover"></div>
				<p className="text-3xl">Sign Up</p>
			</article>
			<form onSubmit={handleSubmit} className="w-full h-[500px] flex flex-col justify-evenly">
				<label htmlFor="firstName">
					First Name
					<input
						type="text"
						name="firstName"
						value={input.firstName}
						className="w-full px-3 py-2 bg-transparent outline-none border-b"
						placeholder="Your First Name"
						onChange={handleChange}
					/>
				</label>
				<label htmlFor="lastName">
					Last Name
					<input
						type="text"
						name="lastName"
						value={input.lastName}
						className="w-full px-3 py-2 bg-transparent outline-none border-b"
						placeholder="Your Last Name"
						onChange={handleChange}
					/>
				</label>
				<label htmlFor="email">
					E-mail
					<input
						type="email"
						name="email"
						value={input.email}
						className="w-full px-3 py-2 bg-transparent outline-none border-b"
						placeholder="Your Email ✉️"
						onChange={handleChange}
					/>
				</label>
				<label htmlFor="password">
					Password
					<input
						type="password"
						name="password"
						value={input.password}
						className="w-full px-3 py-2 bg-transparent outline-none border-b"
						placeholder="Your Password 🔒"
						onChange={handleChange}
					/>
				</label>
				<p className="text-gray-400">
					By signing up you agree to our{" "}
					<Link href="/ter_cond" className="text-sec hover:underline">
						Terms & Condition and Privacy Policy.
					</Link>
				</p>
				<button className="w-full py-2 text-pri bg-sec hover:bg-gray-300 active:bg-lig rounded-lg duration-150">
					Continue
				</button>
			</form>
			<article>
				<p>
					Already signed up?{" "}
					<Link href="/login" className="hover:underline">
						Log In
					</Link>
				</p>
			</article>
		</section>
	);
};

export default SignForm;
