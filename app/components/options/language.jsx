import Image from "next/image";
const Languages = ({handleLang, handleDeleteLang, userData}) => {
	return (
		<div className="w-full mb-2">
			<label htmlFor="languages" className="ml-2 font-semibold">
				¿Qué idiomas hablas y cuál es tu dominio?
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
				name="languages"
				multiple
				value={userData.languages}
				onChange={(event) => handleLang(event)}
				className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none scrollnice">
				<option value="select" hidden>
					Selecciona una o más opciones
				</option>
				<option value={"Ingles básico"}>Inglés básico</option>
				<option value={"Ingles intermedio"}>Inglés intermedio</option>
				<option value={"Ingles avanzado"}>Inglés avanzado</option>
				<option value={"Ingles nativo"}>Inglés nativo</option>
				<option value={"Español básico"}>Español básico</option>
				<option value={"Español intermedio"}>Español intermedio</option>
				<option value={"Español avanzado"}>Español avanzado</option>
				<option value={"Español nativo"}>Español nativo</option>
				<option value={"Frances básico"}>Francés básico</option>
				<option value={"Frances intermedio"}>Francés intermedio</option>
				<option value={"Frances avanzado"}>Francés avanzado</option>
				<option value={"Frances nativo"}>Francés nativo</option>
				<option value={"Portugues básico"}>Portugués básico</option>
				<option value={"Portugues intermedio"}>Portugués intermedio</option>
				<option value={"Portugues avanzado"}>Portugués avanzado</option>
				<option value={"Portugues nativo"}>Portugués nativo</option>
				<option value={"Italiano básico"}>Italiano básico</option>
				<option value={"Italiano intermedio"}>Italiano intermedio</option>
				<option value={"Italiano avanzado"}>Italiano avanzado</option>
				<option value={"Italiano nativo"}>Italiano nativo</option>
				<option value={"Chino básico"}>Chino básico</option>
				<option value={"Chino intermedio"}>Chino intermedio</option>
				<option value={"Chino avanzado"}>Chino avanzado</option>
				<option value={"Chino nativo"}>Chino nativo</option>
				<option value={"Mandarin básico"}>Mandarín básico</option>
				<option value={"Mandarin intermedio"}>Mandarín intermedio</option>
				<option value={"Mandarin avanzado"}>Mandarín avanzado</option>
				<option value={"Mandarin nativo"}>Mandarín nativo</option>
			</select>
			<div className="flex flex-row justify-start">
				{userData.languages?.map((item, index) => {
					return (
						<div key={index} className="flex flex-row justify-start">
							<p>{item} </p>
							<button
								onClick={() => {
									handleDeleteLang(item);
								}}>
								<Image src="/utils/x_huntek.svg" width={16} height={16} alt="x" />
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default Languages;
