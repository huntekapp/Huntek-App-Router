"use client";
import {useState} from "react";
import {useGetRecoveryMutation} from "../globalstore/services/useRecoverPw";
import Image from "next/image";
import Link from "next/link";

const RecoverPW = () => {
	const [input, setInput] = useState({
		email: "",
	});
	const [getRecovery, { isLoading }] = useGetRecoveryMutation();
	
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const result = await getRecovery(input.email).unwrap()
			console.log(result)
		} catch (error) {
			console.log(error);
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
	return (
		<main className="bg-pri min-h-screen w-full flex justify-center items-center">
			<Link href="/login">
				<button className="btn btn-ghost z-0 btn-circle absolute left-2 top-2">
					<div className="indicator">
						<Image src="/utils/back.svg" alt="backArrow" width={25} height={25} />
					</div>
				</button>
			</Link>
			<section className="bg-sec text-pri h-[400px] w-10/12 flex flex-col items-center rounded-lg opacity-90 shadow-2xl">
				<Image
					src={"/huntek/logo/G.svg"}
					width={90}
					height={90}
					alt="logo"
					className=" rounded-full border-4 shadow-lg p-1 mt-7"
				/>
				<form onSubmit={handleSubmit} className="h-full w-full flex flex-col items-center mt-6">
					<p className="text-xl mb-4 opacity-100">¿Ovidaste tu contraseña?</p>
					<p className="text-sm opacity-100">No hay de que preocuparse,</p>
					<p className="text-sm opacity-100">escribe tu email debajo</p>
					<p className="text-sm opacity-100 ">y te enviaremos las instrucciones</p>
					<p className="text-sm opacity-100">para recuperarla.</p>
					<div className="flex flex-col items-center justify-center gap-2 mt-8 w-96">
						<input
							type="email"
							name="email"
							onChange={handleChange}
							value={input.email}
							autoFocus
							className="w-full px-3 pb-2 bg-transparent outline-none border-b border-pri text-center text-black"
						/>
						<button disabled={false} className="w-14 py-1 text-pri bg-sec hover:bg-gray-300 active:bg-lig rounded-lg duration-150">
							Enviar
						</button>
					</div>
				</form>
			</section>
		</main>
	);
};
export default RecoverPW;
