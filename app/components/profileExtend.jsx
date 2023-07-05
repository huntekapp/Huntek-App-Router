"use client"
import NavBar from "./navbar";
import { useState } from "react";

const ProfileExt = () => {
	const [userData, setUserData] = useState({
		sexo: "",
		situacion: ""

	})

	const handleChange = (e) => {
		setUserData({
			...userData,
			[e.target.name]: e.target.value
		})
		console.log(userData);
	}

	return (
		<div className="min-w-screen min-h-screen">
			<NavBar />
			<h2 className="py-2 text-xl font-bold text-center text-hk ">Nombre Apellido</h2>
			<div className="h-[80vh] flex-grow flex flex-col justify-between m-4">
				<div>
					<label htmlFor="sexo">Sexo</label>
					<br></br>
					<select
						name="sexo"
						value={userData.sexo}
						onChange={(e) => handleChange(e)}
						className="w-full px-1 border-gray-200 shadow-md rounded-xl focus:outline-none">
						<option key="0" hidden value="">Seleccione una</option>
						<option key="1" value="Masculino">Masculino</option>
						<option key="2" value="Femenino">Femenino</option>
						<option key="3" value="Prefiero no decirlo">Prefiero no decirlo</option>
					</select>
				</div>
				<div>
					<label htmlFor="situacion">Situacion laboral</label>
					<br></br>
					<select
						name="situacion"
						value={userData.situacion}
						onChange={(e) => handleChange(e)}
						className="w-full px-1 border-gray-200 shadow-md rounded-xl focus:outline-none">
						<option key="0" hidden value="">Seleccione una</option>
						<option key="1" value="Desempleado">Desempleado</option>
						<option key="2" value="Trabajando">Trabajando</option>
						<option key="3" value="Porque me preguntan eso">Porque me preguntan eso</option>
					</select>
				</div>
				<div>
					<label>Pregunta 3</label>
					<br></br>
					<input
						placeholder="Respuesta"
						className="w-full px-1 border-gray-200 shadow-md rounded-xl focus:outline-none"></input>
				</div>
			</div>
		</div>
	);
};
export default ProfileExt;
