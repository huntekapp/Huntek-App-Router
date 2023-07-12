"use client";
import {usePostNewPasswordMutation} from "../../globalstore/services/useNewPassword";
import {usePathname, useRouter} from "next/navigation";
import {useState} from "react";

const Token = () => {
	const router = useRouter();
	const pathname = usePathname();
	const [postNewPassword, {isLoading}] = usePostNewPasswordMutation();
	const token = pathname.split("'")[1];

	const [input, setInput] = useState({
		token,
		password: "",
	});
	console.log(input);
	const handleChange = (event) => {
		setInput({
			...input,
			[event.target.name]: event.target.value,
		});
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
		<section>
			<form onSubmit={handleSubmit} className="flex flex-col">
				<label htmlFor="newPassword">Nueva Contraseña</label>
				<input type="text" name="password" value={input.password} onChange={handleChange} />
				<button type="submit" className="btn btn-primary">
					Restaurar Contraseña
				</button>
			</form>
		</section>
	);
};

export default Token;
