import Image from "next/image";
const Hobbies = ({userData, handleHobbies, handleDeleteHobbies}) => {
	return (
		<div className="w-full mb-2">
			<label htmlFor="hobbies" className="ml-2 font-semibold">
				¿Cuáles son tus Hobbies?
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
				name="hobbies"
				multiple
				value={userData.hobbies}
				onChange={(event) => handleHobbies(event)}
				className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none scrollnice">
				<option value="select" hidden>
					Selecciona una opción
				</option>
				<option value="Baile">Baile</option>
				<option value="Cine">Cine</option>
				<option value="Cocina">Cocina</option>
				<option value="Deportes">Deportes</option>
				<option value="Fotografía">Fotografía</option>
				<option value="Lectura">Lectura</option>
				<option value="Musica">Música</option>
				<option value="Naturaleza">Naturaleza</option>
				<option value="Pintura">Pintura</option>
				<option value="Viajar">Viajar</option>
			</select>
			<div className="flex flex-row justify-start">
				{userData.hobbies?.map((item, index) => {
					return (
						<div key={index} className="flex flex-row justify-start">
							<p>{item} </p>
							<button
								onClick={() => {
									handleDeleteHobbies(item);
								}}>
								<Image src="utils/x_huntek.svg" width={16} height={16} alt="x" />
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default Hobbies;
