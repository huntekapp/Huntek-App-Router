"use client";
import Link from "next/link";
import { useState } from "react";
import { setEmail } from "../globalstore/features/emailSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { usePostUsersMutation } from "../globalstore/services/both/log-reg-val/useRegister";
import { AlertSuccess, AlertError } from "./alertsforrequest";
import verifySignupInputs from "../helpers/verifySignUpInputs";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const CompanyForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [errorCatched, setErrorCatched] = useState(null);
	const [successReq, setSuccessReq] = useState(null);
	const [postUsers, { isLoading }] = usePostUsersMutation();
	const dispatch = useDispatch();
	const router = useRouter();
	const [input, setInput] = useState({
		first_name: "",
		email: "",
		password: "",
		role_name: "company",
	});
	console.log(input);
	const handleChange = (event) => {
		event.preventDefault();
		setInput({
			...input,
			[event.target.name]: event.target.value,
		});
	};

	const handleShowPassword = (event) => {
		event.preventDefault();
		setShowPassword(!showPassword);
	};

	const handleKeypress = (event) => {
		if (event.keyCode === 13) {
			handleSubmit(event);
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const fixedInput = { ...input, email: input.email.toLowerCase() };
		let inputValid = verifySignupInputs(input);
		if (inputValid !== "valid") return setErrorCatched(inputValid);
		setErrorCatched(null);
		setSuccessReq(null);
		try {
			await postUsers(fixedInput).unwrap();
			dispatch(setEmail(fixedInput.email));
			localStorage.setItem("email", fixedInput.email);
			setSuccessReq("Email enviado con éxito");
			setTimeout(() => {
				router.push("/emailvalidate");
			}, 2000);
		} catch (error) {
			if (error.status === "FETCH_ERROR")
				return setErrorCatched("No se ha podido establecer conexión con el servidor.");
			setErrorCatched(error.data?.detail);
		}
	};

	return (
		<section className="w-11/12 max-w-md h-5/6 lg:max-h-[375px] font-medium text-sec flex flex-col justify-evenly items-center">
			<form onSubmit={handleSubmit} className="w-full lg:h-full flex flex-col justify-evenly gap-2">
				<label className="mb-2" htmlFor="first_name">
					Nombre de la empresa
					<input
						type="text"
						name="first_name"
						id="first_name"
						value={input.first_name}
						className="w-full px-3 bg-transparent outline-none border-b"
						placeholder="Mercedes-AMG PETRONAS Formula One Team"
						onChange={handleChange}
						autoComplete="off"
					/>
				</label>
				<label className="mb-2" htmlFor="email">
					E-mail
					<input
						type="text"
						name="email"
						id="email"
						value={input.email}
						className="w-full px-3 bg-transparent outline-none border-b rounded-none"
						placeholder="Tu email"
						onChange={handleChange}
						autoComplete="off"
					/>
				</label>
				<label htmlFor="password">
					Contraseña
					<div className="relative">
						<input
							type={showPassword ? "text" : "password"}
							name="password"
							id="password"
							value={input.password}
							className="w-full px-3 bg-transparent outline-none border-b rounded-none"
							placeholder="Tu contraseña"
							onChange={handleChange}
							onKeyUp={handleKeypress}
						/>
						<button onClick={handleShowPassword} className="absolute right-3" type="button">
							{showPassword ? (
								<VisibilityOffOutlinedIcon className="w-5 h-5 text-gray-500" />
							) : (
								<VisibilityOutlinedIcon className="w-5 h-5 text-gray-500" />
							)}
						</button>
					</div>
				</label>
				<p className="text-xs text-gray-400 py-2 cursor-default">
					Registrándote aceptas nuestros{" "}
					<Link href="/ter_cond" className="text-sec hover:underline">
						Términos, Condiciones y Políticas de Privacidad.
					</Link>
				</p>
				<button
					className="w-full py-2 text-pri bg-sec hover:bg-gray-300 active:bg-lig rounded-lg duration-150 disabled:opacity-40 disabled:hover:bg-sec"
					onClick={() => setErrorCatched(null)}
					disabled={!input.email.length}>
					Continuar
				</button>
			</form>
			<article>
				<p className="cursor-default lg:mt-4">
					Ya tienes cuenta?{" "}
					<Link href="/" className="hover:underline">
						Iniciar sesión
					</Link>
				</p>
			</article>
			{errorCatched && <AlertError alertTitle={"Error!"} alertBody={errorCatched} setErrorCatched={setErrorCatched} />}
			{successReq && <AlertSuccess alertTitle={"Success!"} alertBody={successReq} setSuccessReq={setSuccessReq} />}
		</section>
	);
};

export default CompanyForm;
