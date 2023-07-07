"use client";
import {useState} from "react";
import Image from "next/image";
import NavBar from "./navbar";

const ProfileExt = () => {
	const [userData, setUserData] = useState({
		sexo: "",
		situacion: "",
	});

	const handleChange = (event) => {
		setUserData({
			...userData,
			[event.target.name]: event.target.value,
		});
		console.log(userData);
	};

	return (
		<div className="min-w-screen text-pri min-h-screen">
			<NavBar/>
			<h2 className=" text-xl font-bold text-center text-hk mt-4 mb-2">Mi perfil</h2>
			<div className="flex flex-col justify-center items-center h-22">
				<div className="w-20 h-20 avatar">
					<Image
						alt="avatar"
						src="/images/pexels-monstera-5384445.jpg"
						width={100}
						height={100}
						quality={100}
						className="rounded-full"
					/>
				</div>
				<button className="text-pri text-xs mt-1 mb-6">Subir foto</button>
			</div>
			<div className="flex-grow flex flex-col justify-between px-8 mt-">
				<div>
					<label htmlFor="sexo" className="ml-0.5">
						Sexo
					</label>
					<select
						name="sexo"
						value={userData.sexo}
						onChange={(event) => handleChange(event)}
						className="bg-transparent text-gray-400 w-full px-1 border-gray-200 border-2 rounded-md mb-5 h-9 focus:outline-none">
						<option key="0" hidden value="">
							Respuesta
						</option>
						<option key="1" value="Masculino">
							Masculino
						</option>
						<option key="2" value="Femenino">
							Femenino
						</option>
						<option key="3" value="Prefiero no decirlo">
							Prefiero no decirlo
						</option>
					</select>
				</div>
				<div>
					<label htmlFor="situacion" className="ml-0.5">
						Situacion laboral
					</label>
					<select
						name="situacion"
						value={userData.situacion}
						onChange={(event) => handleChange(event)}
						className="bg-transparent text-gray-400 w-full px-1 border-gray-200 border-2 rounded-md mb-5 h-9 focus:outline-none">
						<option key="0" hidden value="">
							Respuesta
						</option>
						<option key="1" value="Desempleado">
							Desempleado
						</option>
						<option key="2" value="Trabajando">
							Trabajando
						</option>
						<option key="3" value="Porque me preguntan eso">
							Porque me preguntan eso
						</option>
					</select>
				</div>
				<div>
					<label htmlFor="situacion" className="ml-0.5">
						Otra pregunta 1
					</label>
					<select
						name="situacion"
						value={1}
						// onChange={(event) => handleChange(event)}
						className="bg-transparent text-gray-400 w-full px-1 border-gray-200 border-2 rounded-md mb-5 h-9 focus:outline-none">
						<option key="0" hidden value="">
							Respuesta
						</option>
						<option key="1" value="Pancho">
							Pancho
						</option>
						<option key="2" value="Mati">
							Mati
						</option>
						<option key="3" value="Tinacho">
							Tinacho
						</option>
					</select>
				</div>
				<div>
					<label htmlFor="situacion" className="ml-0.5">
						Otra pregunta 2
					</label>
					<select
						name="situacion"
						value={2}
						// onChange={(event) => handleChange(event)}
						className="bg-transparent text-gray-400 w-full px-1 border-gray-200 border-2 rounded-md mb-5 h-9 focus:outline-none">
						<option key="0" hidden value="">
							Respuesta
						</option>
						<option key="1" value="Harry">
							Harry
						</option>
						<option key="2" value="Ron">
							Ron
						</option>
						<option key="3" value="Hermione">
							Hermione
						</option>
					</select>
				</div>
				<div>
					<label htmlFor="situacion" className="ml-0.5">
						Otra pregunta 3
					</label>
					<select
						name="situacion"
						value={3}
						// onChange={(event) => handleChange(event)}
						className="bg-transparent text-gray-400 w-full px-1 border-gray-200 border-2 rounded-md mb-5 h-9 focus:outline-none">
						<option key="0" hidden value="">
							Respuesta
						</option>
						<option key="1" value="Tierra">
							Tierra
						</option>
						<option key="2" value="Aire">
							Aire
						</option>
						<option key="3" value="Agua">
							Agua
						</option>
					</select>
				</div>
			</div>
		</div>
	);
};
export default ProfileExt;
