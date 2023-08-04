import Image from "next/image";

const Academic = ({ userData, handleChange, inputAcademic }) => {
	return (
		<div className="w-full text-pri">
			<label htmlFor="studies" className="ml-2 font-semibold">
				¿Cuál es tu situación academica?
				<div className="group inline-block">
					<Image
						src="/utils/asterisk_huntek.svg"
						width={16}
						height={16}
						alt="asterisco"
						className="ml-2 aspect-square"
					/>
					<div className="opacity-0 group-hover:opacity-100 bg-pri text-sec text-center absolute p-1 rounded-md  flex justify-center items-center transition duration-300">
						<span>Requerido</span>
					</div>
				</div>
			</label>
			<select
				name="studies"
				value={userData.studies}
				disabled={!inputAcademic}
				onChange={(event) => handleChange(event)}
				className="w-full px-2 py-1 bg-pri-100 text-pri rounded-md focus:outline-none">
				<option value="select" hidden>
					Selecciona una opción
				</option>
				<option value="Egresado">Egresado</option>
				<option value="Estudiante">Estudiante</option>
				<option value="Sin estudios">Sin estudios</option>
			</select>
		</div>
	);
};

export default Academic;
