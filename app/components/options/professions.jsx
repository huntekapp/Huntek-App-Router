import Image from "next/image";
const Profession = ({userData, handleProf, handleDeleteProf}) => {
	return (
		<>
			<div>
				<label htmlFor="profession" className="ml-2 font-semibold">
					¿En que área te gustaria trabajar?
					<div class="group inline-block">
						<Image
							src="/utils/asterisk_huntek.svg"
							width={16}
							height={16}
							alt="asterisco"
							className="ml-2 aspect-square"
						/>
						<div class="opacity-0 group-hover:opacity-100 bg-pri text-sec text-center absolute p-1 rounded-md  flex justify-center items-center transition duration-300">
							<span>Requerido</span>
						</div>
					</div>
				</label>
				<select
					name="profession"
					multiple
					value={userData.profession}
					onChange={(event) => handleProf(event)}
					className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none scrollnice">
					<option value="select" hidden>
						Selecciona una o más opciones
					</option>
					<option value={"Servicios legales"}>Servicios legales</option>
					<option value={"Comercial"}>Comercial</option>
					<option value={"Innovación"}>Innovación</option>
					<option value={"Servicio al cliente"}>Servicio al cliente</option>
					<option value={"Control interno"}>Control interno</option>
					<option value={"Logística"}>Logística</option>
					<option value={"Tecnologías de la información"}>Tecnologías de la información</option>
					<option value={"Ventas"}>Ventas</option>
					<option value={"Sistemas"}>Sistemas</option>
					<option value={"Publicidad"}>Publicidad</option>
					<option value={"Investigación & Desarrollo"}>Investigación & Desarrollo</option>
					<option value={"Compras"}>Compras</option>
					<option value={"Distribución"}>Distribución</option>
					<option value={"Comunicaciones"}>Comunicaciones</option>
					<option value={"Otras"}>Otras</option>
				</select>
				<div className="flex flex-row justify-start">
					{userData.profession?.map((item, index) => {
						return (
							<div key={index} className="flex flex-row justify-start">
								<p>{item} </p>
								<button
									onClick={() => {
										handleDeleteProf(item);
									}}>
									<Image src="utils/x_huntek.svg" width={16} height={16} alt="x" />
								</button>
							</div>
						);
					})}
				</div>
			</div>
			<div className="w-full mb-2">
				<label htmlFor="studies" className="ml-2 font-semibold">
					¿Cuál es tu situación academica?
					<div class="group inline-block">
						<Image
							src="/utils/asterisk_huntek.svg"
							width={16}
							height={16}
							alt="asterisco"
							className="ml-2 aspect-square"
						/>
						<div class="opacity-0 group-hover:opacity-100 bg-pri text-sec text-center absolute p-1 rounded-md  flex justify-center items-center transition duration-300">
							<span>Requerido</span>
						</div>
					</div>
				</label>
				<select
					name="studies"
					value={userData.studies}
					onChange={(event) => handleChange(event)}
					className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none">
					<option value="select" hidden>
						Selecciona una opción
					</option>
					<option value="Egresado">Egresado</option>
					<option value="Estudiante">Estudiante</option>
					<option value="Sin estudios">Sin estudios</option>
				</select>
			</div>
		</>
	);
};
export default Profession;
