"use client";
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import {usePostUsersMutation} from "../globalstore/services/useRegister";
import {useRouter} from "next/navigation";
import {setEmail} from "../globalstore/features/emailSlice";
import {useDispatch} from "react-redux";

const SignForm = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const [showPassword, setShowPassword] = useState(false);
	const [check, setCheck] = useState(false);
	const [postUsers, {isLoading}] = usePostUsersMutation();
	const [input, setInput] = useState({
		first_name: "",
		last_name: "",
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

	const handleCheck = (event) => {
		setCheck(!check);
		setInput({
			...input,
			[event.target.name]: event.target.checked,
		});
	};

	const handleShowPassword = (event) => {
		event.preventDefault();
		setShowPassword(!showPassword);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await postUsers(input).unwrap();
			dispatch(setEmail(input.email));
		} catch (error) {
			console.log(error);
		}
		setInput({
			first_name: "",
			last_name: "",
			email: "",
			password: "",
		});
		router.push("/verifymail");
	};

	return (
		<section className="w-11/12 max-w-md h-3/4 max-h-[375px] font-medium text-sec flex flex-col justify-evenly items-center">
			<form onSubmit={handleSubmit} className="w-full h-3/4 lg:h-full flex flex-col justify-evenly">
				<label htmlFor="firstName">
					First Name
					<input
						type="text"
						name="first_name"
						value={input.first_name}
						className="w-full px-3 py-1 bg-transparent outline-none border-b"
						placeholder="Your First Name"
						onChange={handleChange}
					/>
				</label>
				<label htmlFor="lastName">
					Last Name
					<input
						type="text"
						name="last_name"
						value={input.last_name}
						className="w-full px-3 py-1 bg-transparent outline-none border-b"
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
						className="w-full px-3 py-1 bg-transparent outline-none border-b"
						placeholder="Your Email"
						onChange={handleChange}
					/>
				</label>
				<label htmlFor="password">
					Password
					<div className="relative">
						{showPassword ? (
							<input
								type="text"
								name="password"
								value={input.password}
								className="w-full px-3 py-1 bg-transparent outline-none border-b"
								placeholder="Your Password"
								onChange={handleChange}
								required
							/>
						) : (
							<input
								type="password"
								name="password"
								value={input.password}
								className="w-full px-3 py-1 bg-transparent outline-none border-b"
								placeholder="Your Password"
								onChange={handleChange}
								required
							/>
						)}
						<button onClick={handleShowPassword} className="absolute inset-y-0 end-0 grid place-content-center px-4">
							{showPassword ? (
								<Image src={"/utils/blink.svg"} width={20} height={20} alt="blink" unoptimized={true} />
							) : (
								<Image src={"/utils/notblink.svg"} width={20} height={20} alt="notblink" />
							)}
						</button>
					</div>
				</label>
				<div className="flex flex-row">
					{check ? (
						<Image
							src={"/utils/checked.svg"}
							width={15}
							height={15}
							className="me-2"
							alt="checked"
							onClick={handleCheck}
						/>
					) : (
						<Image
							src={"/utils/unchecked.svg"}
							width={15}
							height={15}
							className="me-2"
							alt="unchecked"
							onClick={handleCheck}
						/>
					)}
					<Link href={"/terms"}>
						<p className="text-sec hover:underline">Terms & Condition and Privacy Policy</p>
					</Link>
				</div>
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
