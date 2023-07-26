"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePostVerifMutation } from "../globalstore/services/useVerifCode";
import { usePutResendCodeMutation } from "../globalstore/services/useResendCode";
import { AlertSuccess, AlertError } from "./alertsforrequest";

const EmailCode = () => {
	const router = useRouter();
	const [email, setEmail] = useState("");

	useEffect(() => {
		setEmail(localStorage.getItem("email"));
		setUserCode({ ...userCode, email });
		setResendCode({ ...resendCode, email });
	}, [email]);

	const [successReq, setSuccessReq] = useState(null);
	const [errorCatched, setErrorCatched] = useState(null);
	const [enableButton, setEnableButton] = useState(0);
	const [postVerif, { isLoading }] = usePostVerifMutation();
	const [putResendCode] = usePutResendCodeMutation();
	const inputRefs = useRef([]);
	const [userCode, setUserCode] = useState({
		code: { 0: "", 1: "", 2: "", 3: "", 4: "", 5: "" },
		email: `${email}`,
	});
	const [resendCode, setResendCode] = useState({
		email: `${email}`,
		order: "account_activation",
	});

	const handleUserCode = (event, index) => {
		if (/^[0-9]+$/.test(event.target.value) || event.keyCode == 8) {
			if (event.keyCode != 8) {
				setUserCode({
					...userCode,
					code: {
						...userCode.code,
						[index]: event.target.value,
					},
				});
				enableButton === 6 ? "" : setEnableButton(enableButton + 1);
			} else if (event.keyCode === 8 && event.target.value === "") {
				setUserCode({
					...userCode,
					code: {
						...userCode.code,
						[index]: "",
					},
				});
				enableButton === 0 ? "" : setEnableButton(enableButton - 1);
			}
		} else {
			event.target.value = "";
		}
	};

	const handleKeyUp = (event, index) => {
		const input = inputRefs.current[index];
		if (event.keyCode === 8 && input.value === "") {
			if (index > 0) {
				inputRefs.current[index - 1].focus();
			}
		} else if (input.value.length === input.maxLength) {
			if (index < inputRefs.current.length - 1) {
				inputRefs.current[index + 1].focus();
			}
		}
	};

	const handleSubmitVerify = async (event) => {
		event.preventDefault();
		setErrorCatched(null);
		try {
			let userNumber = Object.values(userCode.code).join("");
			const response = await postVerif({ email: userCode.email, code: userNumber }).unwrap();
			router.push("/login");
		} catch (error) {
			if (error.status === "FETCH_ERROR")
				return setErrorCatched("No se ha podido establecer conexión con el servidor.");
			if (error.data?.detail[0].msg) return setErrorCatched(error.data.detail[0].msg);
			setErrorCatched(error.data?.detail);
		}
		setUserCode({
			code: { 0: "", 1: "", 2: "", 3: "", 4: "", 5: "" },
			email: userCode.email,
		});
	};

	const handleSubmitResend = async (event) => {
		event.preventDefault();
		try {
			const response = await putResendCode(resendCode).unwrap();
			setSuccessReq(response.message);
		} catch (error) {
			setErrorCatched(error.data?.detail);
		}
	};

	return (
		<section className="w-11/12 max-w-md min-h-screen font-medium text-sec relative flex flex-col items-center justify-evenly overflow-hidden">
			<Link href="/signup">
				<button className="btn btn-ghost z-0 btn-circle absolute left-0 top-2">
					<div className="indicator">
						<Image loading={"eager"} src="/utils/back.svg" alt="backArrow" width={25} height={25} />
					</div>
				</button>
			</Link>
			<article className="w-full flex flex-col items-center">
				<div className="w-40 h-40 bg-HKlogo bg-cover mt-10"></div>
				<p className="text-3xl">Revisa tu email</p>
				<p className="text-gray-400 text-center mt-2">
					Hemos enviado un código de verificación de seis dígitos a<b className="text-gray-200">{` ${email}`}</b>.<br />
					Asegúrate de ingresar correctamente el código.
				</p>
			</article>
			<form className="w-full h-80 flex flex-col justify-evenly">
				<article>
					<div className="w-full flex flex-row justify-evenly">
						{[0, 1, 2, 3, 4, 5].map((index) => (
							<input
								autoFocus={index === 0 ? true : false}
								key={index}
								type="text"
								inputMode="numeric"
								maxLength="1"
								className="w-11 h-14 px-3 py-2 text-sec bg-lig outline-none border focus:border-hk focus:border-1 shadow-sm rounded-md text-center text-lg"
								ref={(ref) => (inputRefs.current[index] = ref)}
								onKeyUp={(event) => {
									handleKeyUp(event, index), handleUserCode(event, index);
								}}
								required
							/>
						))}
					</div>
					<p className="mt-4 text-center text-sm">
						No has recibido el código?{" "}
						<button onClick={handleSubmitResend} className="hover:underline">
							Enviar de nuevo
						</button>
					</p>
				</article>
				<button
					onClick={handleSubmitVerify}
					disabled={enableButton !== 6}
					className="w-full py-2 text-pri bg-sec hover:bg-gray-300 active:bg-lig rounded-lg duration-150 disabled:opacity-40 disabled:hover:bg-sec">
					Verificar
				</button>
			</form>
			{errorCatched && <AlertError alertTitle={"Error!"} alertBody={errorCatched} setErrorCatched={setErrorCatched} />}
			{successReq && <AlertSuccess alertTitle={"Success!"} alertBody={successReq} setSuccessReq={setSuccessReq} />}
		</section>
	);
};

export default EmailCode;
