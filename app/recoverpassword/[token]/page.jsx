"use client";
import Image from "next/image";
import {usePostNewPasswordMutation} from "../../globalstore/services/useNewPassword";
import {usePathname, useRouter} from "next/navigation";
import {useState} from "react";

const Token = () => {
	const router = useRouter();
	const pathname = usePathname();
	const [postNewPassword, {isLoading}] = usePostNewPasswordMutation();
	const [showPassword, setShowPassword] = useState(false); 
	const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
	const token = pathname.split("'")[1];
	const [repeated, setRepeated] = useState({
		repeatedPassword: "",
	})
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
		})
	};
	
	const handleShowPassword = (e) => {
		e.preventDefault();
		setShowPassword(!showPassword);
	};

	const handleShowPasswordRepeat = (e) => {
		e.preventDefault();
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
			password: ""
		});
	};
	
	console.log(input.password, repeated.repeatedPassword);
	return (
		<main className="bg-pri min-h-screen w-full flex justify-center items-center">
			<section className="bg-sec text-pri h-[400px] w-10/12 flex flex-col items-center justify-center rounded-lg opacity-90">
				<form onSubmit={handleSubmit} className="h-full w-10/12 flex flex-col items-center justify-center">
					<div className="flex flex-col items-center justify-center gap-2 w-96">
					<Image
					src={"/huntek/logo/G.svg"}
					width={90}
					height={90}
					alt="logo"
					className=" rounded-full border-4 shadow-lg p-1"
				/>
						<p className="text-sm py-4 opacity-100">Escribe tu nueva contraseña</p>
						<div className="w-10/12 flex flex-row justify-around border-b border-pri">
							{showPassword ? (
								<input
									type="text"
									name="password"
									value={input.password}
									onChange={handleChange}
									autoFocus
									className="w-11/12 pb-2 bg-transparent outline-none"
								/>
							) : (
								<input
									type="password"
									name="password"
									value={input.password}
									onChange={handleChange}
									autoFocus
									className="w-11/12 pb-2 bg-transparent outline-none"
								/>
							)}
							<button onClick={handleShowPassword} className="inset-y-0 end-0 place-content-center">
								{showPassword ? (
									<Image src={"/utils/blink_huntek.svg"} width={20} height={20} alt="blink" unoptimized={true} />
								) : (
									<Image src={"/utils/notblink_huntek.svg"} width={20} height={20} alt="notblink" />
								)}
							</button>
						</div>
						<p className="text-sm pt-2 opacity-100">Repite tu nueva contraseña</p>
						<div className="w-10/12 flex flex-row justify-around border-b border-pri">
							{showPasswordRepeat ? (
								<input
									type="text"
									name="repeatedPassword"
									value={repeated.repeatedPassword}
									onChange={handleChange}
									autoFocus
									className="w-11/12 pb-2 bg-transparent outline-none"
								/>
							) : (
								<input
									type="password"
									name="repeatedPassword"
									value={repeated.repeatedPassword}
									onChange={handleChange}
									autoFocus
									className="w-11/12 pb-2 bg-transparent outline-none "
								/>
							)}
							<button onClick={handleShowPasswordRepeat} className="inset-y-0 end-0 place-content-center">
								{showPasswordRepeat ? (
									<Image src={"/utils/blink_huntek.svg"} width={20} height={20} alt="blink" unoptimized={true} />
								) : (
									<Image src={"/utils/notblink_huntek.svg"} width={20} height={20} alt="notblink" />
								)}
							</button>
						</div>
						{input.password !== repeated.repeatedPassword ? 
						<button
						disabled
						className="w-fit p-1 text-pri bg-pri-100 textarea-md hover:bg-pri-200 shadow-sm active:bg-lig rounded-lg duration-150">
						Restaurar contraseña
					</button>
						: <button
						type="submit"
						className="w-fit p-1 text-pri bg-pri-100 textarea-md hover:bg-pri-200 shadow-sm active:bg-lig rounded-lg duration-150">
						Restaurar contraseña
					</button>}
						
					</div>
				</form>
			</section>
		</main>
	);
};

export default Token;
