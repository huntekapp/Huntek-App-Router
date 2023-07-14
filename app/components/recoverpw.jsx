"use client";
import {useState} from "react";
import {useGetRecoveryMutation} from "../globalstore/services/useRecoverPw";
import Image from "next/image";
import Link from "next/link";
import {AlertSuccess, AlertError} from "./alertsforrequest";

const RecoverPW = () => {
	const [input, setInput] = useState({email: ""});
	const [errorCatched, setErrorCatched] = useState(null);
	const [successReq, setSuccessReq] = useState(null);
	const [getRecovery, {isLoading}] = useGetRecoveryMutation();

	const handleSubmit = async (event) => {
		setSuccessReq(null);
		setErrorCatched(null);
		event.preventDefault();
		try {
			const result = await getRecovery(input.email).unwrap();
			setSuccessReq(result.msg);
		} catch (error) {
			if (error.status === "FETCH_ERROR")
				return setErrorCatched("No se ha podido establecer conexión con el servidor.");
			setErrorCatched(error.data?.detail);
		}
		setInput({
			email: "",
		});
	};

	const handleChange = (event) => {
		event.preventDefault();
		setInput({
			...input,
			[event.target.name]: event.target.value,
		});
	};

	const validateMail = (email) => {
		const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
		return regex.test(email);
	};
	let emailValid = validateMail(input.email);

	return (
		<section className="w-full h-full text-pri flex flex-col items-center justify-center">
			<Link href="/login">
				<button className="btn btn-ghost z-0 btn-circle absolute left-2 top-2">
					<div className="indicator">
						<Image src="/utils/back.svg" alt="backArrow" width={25} height={25} />
					</div>
				</button>
			</Link>
			<article className="w-11/12 h-3/4 max-h-[450px] bg-sec rounded-lg shadow-2xl flex flex-col justify-center items-center">
				<div className="w-20 h-20 p-4 border-4 rounded-full shadow-lg grid place-content-center">
					<Image src={"/huntek/logo/G.svg"} alt="logo" width={35} height={35} />
				</div>
				<form onSubmit={handleSubmit} className="w-full h-3/5 flex flex-col justify-evenly items-center">
					<p className="text-xl opacity-100">¿Ovidaste tu contraseña?</p>
					<div className="text-center">
						<p className="text-sm opacity-100">No hay de que preocuparse,</p>
						<p className="text-sm opacity-100">escribe tu email debajo</p>
						<p className="text-sm opacity-100 ">y te enviaremos las instrucciones</p>
						<p className="text-sm opacity-100">para recuperarla.</p>
					</div>
					<div className="w-full max-w-xs flex flex-col items-center justify-center">
						<input
							type="email"
							name="email"
							value={input.email}
							onChange={handleChange}
							autoFocus
							autoComplete="off"
							className="w-full px-3 pb-2 bg-transparent outline-none border-b border-pri text-center text-black"
						/>
						<button
							disabled={!emailValid}
							className="w-fit px-2 py-1 mt-2 text-pri bg-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-gray-300 duration-150">
							Enviar
						</button>
						{errorCatched && (
							<AlertError alertTitle={"Error!"} alertBody={errorCatched} setErrorCatched={setErrorCatched} />
						)}
						{successReq && (
							<AlertSuccess alertTitle={"Success!"} alertBody={successReq} setSuccessReq={setSuccessReq} />
						)}
					</div>
				</form>
			</article>
		</section>
	);
};
export default RecoverPW;
