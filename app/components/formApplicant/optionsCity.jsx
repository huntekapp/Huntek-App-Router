import Image from "next/image";

const OptionsCity = ({userData, handleChange, inputCity}) => {
	return (
		<>
			<div className="w-full mb-2">
				<label htmlFor="city" className="ml-2 font-semibold">
					¿En qué ciudad te encuentras?
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
					name="city"
					value={userData.city}
					disabled={!inputCity}
					onChange={(event) => handleChange(event)}
					className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none">
					<option value="select" hidden>
						Selecciona una ciudad
					</option>
					<option value="Ciudad de México">Ciudad de México</option>
					<option value="Estado de México">Estado de México</option>
					<option value="Acapulco">Acapulco</option>
					<option value="Aguascalientes">Aguascalientes</option>
					<option value="Campeche">Campeche</option>
					<option value="Cancún">Cancún</option>
					<option value="Celaya">Celaya</option>
					<option value="Chetumal">Chetumal</option>
					<option value="Chihuahua">Chihuahua</option>
					<option value="Chilpacingo">Chilpacingo</option>
					<option value="Ciudad del Carmen">Ciudad del Carmen</option>
					<option value="Ciudad Obregón">Ciudad Obregón</option>
					<option value="Ciudad Victoria">Ciudad Victoria</option>
					<option value="Coatzacoalcos">Coatzacoalcos</option>
					<option value="Colima">Colima</option>
					<option value="Cuautla">Cuautla</option>
					<option value="Cuernavaca">Cuernavaca</option>
					<option value="Cuilicán">Cuilicán</option>
					<option value="Cárdenas">Cárdenas</option>
					<option value="Córdoba">Córdoba</option>
					<option value="Durango">Durango</option>
					<option value="Ensenada">Ensenada</option>
					<option value="Guadalajara">Guadalajara</option>
					<option value="Guanajuato">Guanajuato</option>
					<option value="Guayamas">Guayamas</option>
					<option value="Hermosillo">Hermosillo</option>
					<option value="Irapuato">Irapuato</option>
					<option value="Juárez">Juárez</option>
					<option value="La Laguna">La Laguna</option>
					<option value="La Paz">La Paz</option>
					<option value="La Piedad">La Piedad</option>
					<option value="León">León</option>
					<option value="Los Cabos">Los Cabos</option>
					<option value="Los Mochis">Los Mochis</option>
					<option value="Manzanillo">Manzanillo</option>
					<option value="Matamorros">Matamorros</option>
					<option value="Mazatlán">Mazatlán</option>
					<option value="Mexicali">Mexicali</option>
					<option value="Minititlán">Minititlán</option>
					<option value="Monclova">Monclova</option>
					<option value="Monterrey">Monterrey</option>
					<option value="Morelia">Morelia</option>
					<option value="Mérida">Mérida</option>
					<option value="Nuevo Laredo">Nuevo Laredo</option>
					<option value="Oaxaca">Oaxaca</option>
					<option value="Ocotlán">Ocotlán</option>
					<option value="Orizaba">Orizaba</option>
					<option value="Pachuca">Pachuca</option>
					<option value="Piedras Negras">Piedras Negras</option>
					<option value="Poza Rica">Poza Rica</option>
					<option value="Puebla-Tlaxcala">Puebla-Tlaxcala</option>
					<option value="Puerto Vallarta">Puerto Vallarta</option>
					<option value="Querétaro">Querétaro</option>
					<option value="Reynosa">Reynosa</option>
					<option value="Río Verde">Río Verde</option>
					<option value="Salamanca">Salamanca</option>
					<option value="Saltillo">Saltillo</option>
					<option value="San Francisco del Rincón">San Francisco del Rincón</option>
					<option value="San Juan del Río">San Juan del Río</option>
					<option value="San Luis Potosí">San Luis Potosí</option>
					<option value="Tampico">Tampico</option>
					<option value="Tapachula">Tapachula</option>
					<option value="Tecomán">Tecomán</option>
					<option value="Tehuacán">Tehuacán</option>
					<option value="Tehuantepec">Tehuantepec</option>
					<option value="Tepic">Tepic</option>
					<option value="Tijuana">Tijuana</option>
					<option value="Tlaxcala">Tlaxcala</option>
					<option value="Toluca">Toluca</option>
					<option value="Tula">Tula</option>
					<option value="Tulancingo">Tulancingo</option>
					<option value="Tulancingo">Tulancingo</option>
					<option value="Tuxtla Gutiérrez">Tuxtla Gutiérrez</option>
					<option value="Uruapan">Uruapan</option>
					<option value="Valle de México">Valle de México</option>
					<option value="Veracruz">Veracruz</option>
					<option value="Villahermosa">Villahermosa</option>
					<option value="Xalapa">Xalapa</option>
					<option value="Zacatecas">Zacatecas</option>
					<option value="Zamora">Zamora</option>
				</select>
			</div>
		</>
	);
};
export default OptionsCity;
