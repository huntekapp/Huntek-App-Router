"use client";
import {useState} from "react";
import {useGetRecoveryMutation} from "../globalstore/services/useRecoverPw";
import Image from "next/image";

const RecoverPW = () => {
	const [input, setInput] = useState({
		email: "",
	});
	const [getRecovery, {isLoading}] = useGetRecoveryMutation();
	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const result = await getRecovery(input.email);
		} catch (error) {
			alert(error);
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
			<section className="bg-sec text-pri h-[400px] w-10/12 flex flex-col items-center justify-center rounded-lg opacity-90">
				<form onSubmit={handleSubmit} className="h-full w-full flex flex-col items-center justify-center">
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
							className="w-full px-3 pb-2 bg-transparent outline-none border-b border-pri"
						/>
						<button className="w-14 py-1 text-pri bg-sec hover:bg-gray-300 active:bg-lig rounded-lg duration-150">
							{" "}
							Send{" "}
						</button>
					</div>
				</form>
			</section>
		</main>
	);
};
export default RecoverPW;
