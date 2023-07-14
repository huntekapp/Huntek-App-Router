"use client";
import Image from "next/image";
import {usePostNewPasswordMutation} from "../globalstore/services/useNewPassword";
import {usePathname, useRouter} from "next/navigation";
import {useState} from "react";

const NewPassword = () => {
	const router = useRouter();
	const pathname = usePathname();
	const [postNewPassword, {isLoading}] = usePostNewPasswordMutation();
	const [showPassword, setShowPassword] = useState(false);
	const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
	const token = pathname.split("'")[1];
	const [repeated, setRepeated] = useState({
		repeatedPassword: "",
	});
	const [input, setInput] = useState({
		token,
		password: "",
	});

	const handleChange = (event) => {
		setInput({
			...input,
			[event.target.name]: event.target.value,
		});
		setRepeated({
			...repeated,
			[event.target.name]: event.target.value,
		});
	};

	const handleShowPassword = (event) => {
		event.preventDefault();
		setShowPassword(!showPassword);
	};

	const handleShowPasswordRepeat = (event) => {
		event.preventDefault();
		setShowPasswordRepeat(!showPasswordRepeat);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const result = await postNewPassword(input).unwrap();
			console.log(result);
			router.push("/login");
		} catch (error) {
			console.log(error);
		}
		setInput({
			token,
			password: "",
		});
	};

	return (
		<section className="w-full h-full text-pri flex flex-col items-center justify-center">
			<article className="w-11/12 h-3/4 max-h-[450px] bg-sec rounded-lg shadow-2xl flex flex-col justify-center items-center">
				<div className="w-20 h-20 p-4 border-4 rounded-full shadow-lg grid place-content-center">
					<Image src={"/huntek/logo/G.svg"} alt="logo" width={35} height={35} />
				</div>
				<form onSubmit={handleSubmit} className="w-full h-3/5 flex flex-col justify-evenly items-center">
					<p className="text-xl">Cambiar contraseña</p>
					<div className="w-11/12 max-w-sm flex flex-col justify-center items-center">
						<div className="w-10/12 flex flex-row justify-around border-b border-pri">
							<input
								type={showPassword ? "text" : "password"}
								name="password"
								value={input.password}
								placeholder="Nueva Contraseña"
								className="w-11/12 pb-2 bg-transparent outline-none"
								onChange={handleChange}
								autoFocus
							/>
							<button onClick={handleShowPassword} className="inset-y-0 end-0 place-content-center">
								<Image
									src={showPassword ? "/utils/blink_huntek.svg" : "/utils/notblink_huntek.svg"}
									width={20}
									height={20}
									alt="blink"
								/>
							</button>
						</div>
					</div>
					<div className="w-11/12 max-w-sm flex flex-col justify-center items-center">
						<div className="w-10/12 flex flex-row justify-around border-b border-pri">
							<input
								type={showPassword ? "text" : "password"}
								name="password"
								value={input.password}
								placeholder="Confirmar Contraseña"
								className="w-11/12 pb-2 bg-transparent outline-none"
								onChange={handleChange}
							/>
							<button onClick={handleShowPassword} className="inset-y-0 end-0 place-content-center">
								<Image
									src={showPassword ? "/utils/blink_huntek.svg" : "/utils/notblink_huntek.svg"}
									width={20}
									height={20}
									alt="blink"
								/>
							</button>
						</div>
						<button
							disabled={!input.password !== repeated.repeatedPassword}
							className="w-fit px-2 py-1 mt-2 text-pri bg-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-gray-300 duration-150">
							Restaurar
						</button>
					</div>
				</form>
			</article>
		</section>
	);
};

export default NewPassword;
