import Image from "next/image";

const Genres = ({ userData, handleChange, inputGenre }) => {
	return (
		<div className="w-full mb-2">
			<label htmlFor="genre" className="ml-2 font-semibold">
				¿Cuál es tu género?
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
				name="genre"
				value={userData.genre}
				disabled={!inputGenre}
				onChange={(event) => handleChange(event)}
				className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none">
				<option value="select" hidden>
					Selecciona una opción
				</option>
				<option value="Femenino">Femenino</option>
				<option value="Masculino">Masculino</option>
				<option value="Otro">Otro</option>
			</select>
		</div>
	);
};

export default Genres;
