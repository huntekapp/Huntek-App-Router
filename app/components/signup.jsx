"use client";
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import {usePostUsersMutation} from "../globalstore/services/useRegister";
import {useRouter} from "next/navigation";
import {setEmail} from "../globalstore/features/emailSlice";
import {useDispatch} from "react-redux";
import verifySignupInputs from "../helpers/verifySignUpInputs";
import {AlertError} from "./alertsforrequest";

const SignForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [errorCatched, setErrorCatched] = useState(null);
	const [check, setCheck] = useState(false);
	const [postUsers, {isLoading}] = usePostUsersMutation();
	const dispatch = useDispatch();
	const router = useRouter();
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
		let inputValid = verifySignupInputs(input);
		if (inputValid !== "valid") return setErrorCatched(inputValid);
		try {
			await postUsers(input).unwrap();
			dispatch(setEmail(input.email));
			setInput({
				first_name: "",
				last_name: "",
				email: "",
				password: "",
			});
			router.push("/verifymail");
		} catch (error) {
			setErrorCatched(error.data.detail);
		}
	};

	return (
		<section className="w-11/12 max-w-md h-3/4 max-h-[375px] font-medium text-sec flex flex-col justify-evenly items-center">
			<form onSubmit={handleSubmit} className="w-full h-3/4 lg:h-full flex flex-col justify-evenly">
				<label htmlFor="firstName">
					Nombre
					<input
						type="text"
						name="first_name"
						value={input.first_name}
						className="w-full px-3 pb-2 bg-transparent outline-none border-b"
						placeholder="Tu nombre"
						onChange={handleChange}
						autocomplete="off"
					/>
				</label>
				<label htmlFor="lastName">
					Apellido
					<input
						type="text"
						name="last_name"
						value={input.last_name}
						className="w-full px-3 pb-2 bg-transparent outline-none border-b"
						placeholder="Tu apellido"
						onChange={handleChange}
						autocomplete="off"
					/>
				</label>
				<label htmlFor="email">
					E-mail
					<input
						type="text"
						name="email"
						value={input.email}
						className="w-full px-3 pb-2 bg-transparent outline-none border-b"
						placeholder="Tu email"
						onChange={handleChange}
						autocomplete="off"
					/>
				</label>
				<label htmlFor="password">
					Contraseña
					<div className="relative">
						{showPassword ? (
							<input
								type="text"
								name="password"
								value={input.password}
								className="w-full px-3 pb-2 bg-transparent outline-none border-b"
								placeholder="Tu contraseña"
								onChange={handleChange}
							/>
						) : (
							<input
								type="password"
								name="password"
								value={input.password}
								className="w-full px-3 pb-2 bg-transparent outline-none border-b"
								placeholder="Tu contraseña"
								onChange={handleChange}
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
				<p className="text-sm text-gray-400">
					Registrándote aceptas nuestros{" "}
					<Link href="/ter_cond" className="text-sec hover:underline">
						Términos, Condiciones y Políticas de Privacidad.
					</Link>
				</p>
				<button
					className="w-full py-2 text-pri bg-sec hover:bg-gray-300 active:bg-lig rounded-lg duration-150 disabled:opacity-40 disabled:hover:bg-sec"
					onClick={() => setErrorCatched(null)}>
					Continuar
				</button>
			</form>
			<article>
				<p>
					Ya tienes cuenta?{" "}
					<Link href="/login" className="hover:underline">
						Iniciar sesión
					</Link>
				</p>
			</article>
			{errorCatched && <AlertError alertTitle={"Error!"} alertBody={errorCatched} setErrorCatched={setErrorCatched} />}
		</section>
	);
};

export default SignForm;
