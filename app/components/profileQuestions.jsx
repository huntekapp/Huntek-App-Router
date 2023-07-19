"use client";
import Image from "next/image";
import {useState} from "react";

const FormQuestions = () => {
	const [userData, setUserData] = useState({
		mail: "",
		phone: "",
		birthdate: "",
		country: "",
		city: "",
		reubication: "",
		languages: [],
		profession: [],
		studies: "",
		university: "",
		degree: "",
		hobbies: [],
		years_xp: "",
		income: "",
		form_of_work: "",
		availability: "",
	});

	const handleLang = (event) => {
		const add = (event) => {
			if (userData.languages.includes(event.target.value)) {
				return [...userData.languages];
			} else {
				return [...userData.languages, event.target.value];
			}
		};
		setUserData({
			...userData,
			languages: add(event),
		});
	};

	const handleDeleteLang = (event) => {
		setUserData({
			...userData,
			languages: userData.languages.filter((temp) => temp !== event),
		});
	};

	const handleProf = (event) => {
		const add = (event) => {
			if (userData.profession.includes(event.target.value)) {
				return [...userData.profession];
			} else {
				return [...userData.profession, event.target.value];
			}
		};
		setUserData({
			...userData,
			profession: add(event),
		});
	};

	const handleDeleteProf = (event) => {
		setUserData({
			...userData,
			profession: userData.profession.filter((temp) => temp !== event),
		});
	};

	const handleHobbies = (event) => {
		const add = (event) => {
			if (userData.hobbies.includes(event.target.value)) {
				return [...userData.hobbies];
			} else {
				return [...userData.hobbies, event.target.value];
			}
		};
		setUserData({
			...userData,
			hobbies: add(event),
		});
	};

	const handleDeleteHobbies = (event) => {
		setUserData({
			...userData,
			hobbies: userData.hobbies.filter((temp) => temp !== event),
		});
	};

	const handleChange = (event) => {
		event.preventDefault();
		setUserData({
			...userData,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<section className="w-full min-h-screen bg-sec grid grid-cols-1 gap-4 p-2 place-content-center text-start rounded-md ">
			<h1 className="text-2xl text-center font-bold">Registro Candidato</h1>
			<h3 className="h-[5%] ml-2 font-semibold">Sube tu CV</h3>
			<label
				htmlFor="dropzone-file"
				className="w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
				<div className="flex flex-col items-center justify-center pt-5 pb-6">
					<Image src="utils/upload.svg" width={20} height={16} alt="upload" />
					<p className="mb-2 text-sm text-gray-500">
						<span className="font-semibold">Cliqueá aquí para subir un archivo</span>
					</p>
					<p className="text-sm text-gray-500 dark:text-gray-400"> o arrastre y suelte.</p>
				</div>
				<input id="dropzone-file" type="file" className="hidden" />
			</label>

			<h3 className="h-[5%] ml-2  font-semibold">Sube tu mejor foto</h3>
			<label
				htmlFor="dropzone-file"
				className="border-2 w-full border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
				<div className="flex flex-col items-center justify-center pt-5 pb-6">
					<Image src="utils/upload.svg" width={20} height={16} alt="upload" />
					<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
						<span className="font-semibold">Cliquee aquí para subir un archivo</span>
					</p>
					<p className="text-sm text-gray-500 dark:text-gray-400"> o arrastre y suelte.</p>
				</div>
				<input id="dropzone-file" type="file" className="hidden" />
			</label>

			<div className="w-full mb-2">
				<label htmlFor="mail" className="ml-2 font-semibold">
					¿Cuál es tu email?
				</label>
				<input
					type="text"
					inputMode="email"
					name="mail"
					value={userData.mail}
					onChange={(event) => handleChange(event)}
					className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none"
				/>
			</div>

			<div className="w-full mb-2">
				<label htmlFor="phone" className="ml-2 font-semibold">
					¿Cuál es tu teléfono?
				</label>
				<input
					type="text"
					inputMode="tel"
					name="phone"
					value={userData.phone}
					onChange={(event) => handleChange(event)}
					className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none"
				/>
			</div>
			<div className="w-full mb-2">
				<label htmlFor="birthdate" className="ml-2 font-semibold">
					¿Cuál es tu fecha de nacimiento?
				</label>
				<input
					type="date"
					name="birthdate"
					value={userData.birthdate}
					onChange={(event) => handleChange(event)}
					className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none"
				/>
			</div>
			<div className="w-full mb-2">
				<label htmlFor="country" className="ml-2 font-semibold">
					¿En que pais naciste?
				</label>
				<select
					name="country"
					value={userData.country}
					onChange={(event) => handleChange(event)}
					className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none">
					<option value="select" hidden>
						Selecciona un país
					</option>
					<option value="Afganistán">Afganistán</option>
					<option value="Albania">Albania</option>
					<option value="Alemania">Alemania</option>
					<option value="Andorra">Andorra</option>
					<option value="Angola">Angola</option>
					<option value="Antigua y Barbuda">Antigua y Barbuda</option>
					<option value="Arabia Saudita">Arabia Saudita</option>
					<option value="Argelia">Argelia</option>
					<option value="Argentina">Argentina</option>
					<option value="Armenia">Armenia</option>
					<option value="Australia">Australia</option>
					<option value="Austria">Austria</option>
					<option value="Azerbaiyán">Azerbaiyán</option>
					<option value="Bahamas">Bahamas</option>
					<option value="Bangladés">Bangladés</option>
					<option value="Barbados">Barbados</option>
					<option value="Baréin">Baréin</option>
					<option value="Bélgica">Bélgica</option>
					<option value="Belice">Belice</option>
					<option value="Benín">Benín</option>
					<option value="Bielorrusia">Bielorrusia</option>
					<option value="Birmania/Myanmar">Birmania/Myanmar</option>
					<option value="Bolivia">Bolivia</option>
					<option value="Bosnia y Herzegovina">Bosnia y Herzegovina</option>
					<option value="Botsuana">Botsuana</option>
					<option value="Brasil">Brasil</option>
					<option value="Brunéi">Brunéi</option>
					<option value="Bulgaria">Bulgaria</option>
					<option value="Burkina Faso">Burkina Faso</option>
					<option value="Burundi">Burundi</option>
					<option value="Bután">Bután</option>
					<option value="Cabo Verde">Cabo Verde</option>
					<option value="Camboya">Camboya</option>
					<option value="Camerún">Camerún</option>
					<option value="Canadá">Canadá</option>
					<option value="Catar">Catar</option>
					<option value="Chad">Chad</option>
					<option value="Chile">Chile</option>
					<option value="China">China</option>
					<option value="Chipre">Chipre</option>
					<option value="Ciudad del Vaticano">Ciudad del Vaticano</option>
					<option value="Colombia">Colombia</option>
					<option value="Comoras">Comoras</option>
					<option value="Corea del Norte">Corea del Norte</option>
					<option value="Corea del Sur">Corea del Sur</option>
					<option value="Costa de Marfil">Costa de Marfil</option>
					<option value="Costa Rica">Costa Rica</option>
					<option value="Croacia">Croacia</option>
					<option value="Cuba">Cuba</option>
					<option value="Dinamarca">Dinamarca</option>
					<option value="Dominica">Dominica</option>
					<option value="Ecuador">Ecuador</option>
					<option value="Egipto">Egipto</option>
					<option value="El Salvador">El Salvador</option>
					<option value="Emiratos Árabes Unidos">Emiratos Árabes Unidos</option>
					<option value="Eritrea">Eritrea</option>
					<option value="Eslovaquia">Eslovaquia</option>
					<option value="Eslovenia">Eslovenia</option>
					<option value="España">España</option>
					<option value="Estados Unidos">Estados Unidos</option>
					<option value="Estonia">Estonia</option>
					<option value="Etiopía">Etiopía</option>
					<option value="Filipinas">Filipinas</option>
					<option value="Finlandia">Finlandia</option>
					<option value="Fiyi">Fiyi</option>
					<option value="Francia">Francia</option>
					<option value="Gabón">Gabón</option>
					<option value="Gambia">Gambia</option>
					<option value="Georgia">Georgia</option>
					<option value="Ghana">Ghana</option>
					<option value="Granada">Granada</option>
					<option value="Grecia">Grecia</option>
					<option value="Guatemala">Guatemala</option>
					<option value="Guyana">Guyana</option>
					<option value="Guinea">Guinea</option>
					<option value="Guinea ecuatorial">Guinea ecuatorial</option>
					<option value="Guinea-Bisáu">Guinea-Bisáu</option>
					<option value="Haití">Haití</option>
					<option value="Honduras">Honduras</option>
					<option value="Hungría">Hungría</option>
					<option value="India">India</option>
					<option value="Indonesia">Indonesia</option>
					<option value="Irak">Irak</option>
					<option value="Irán">Irán</option>
					<option value="Irlanda">Irlanda</option>
					<option value="Islandia">Islandia</option>
					<option value="Islas Marshall">Islas Marshall</option>
					<option value="Islas Salomón">Islas Salomón</option>
					<option value="Israel">Israel</option>
					<option value="Italia">Italia</option>
					<option value="Jamaica">Jamaica</option>
					<option value="Japón">Japón</option>
					<option value="Jordania">Jordania</option>
					<option value="Kazajistán">Kazajistán</option>
					<option value="Kenia">Kenia</option>
					<option value="Kirguistán">Kirguistán</option>
					<option value="Kiribati">Kiribati</option>
					<option value="Kuwait">Kuwait</option>
					<option value="Laos">Laos</option>
					<option value="Lesoto">Lesoto</option>
					<option value="Letonia">Letonia</option>
					<option value="Líbano">Líbano</option>
					<option value="Liberia">Liberia</option>
					<option value="Libia">Libia</option>
					<option value="Liechtenstein">Liechtenstein</option>
					<option value="Lituania">Lituania</option>
					<option value="Luxemburgo">Luxemburgo</option>
					<option value="Macedonia del Norte">Macedonia del Norte</option>
					<option value="Madagascar">Madagascar</option>
					<option value="Malasia">Malasia</option>
					<option value="Malaui">Malaui</option>
					<option value="Maldivas">Maldivas</option>
					<option value="Malí">Malí</option>
					<option value="Malta">Malta</option>
					<option value="Marruecos">Marruecos</option>
					<option value="Mauricio">Mauricio</option>
					<option value="Mauritania">Mauritania</option>
					<option value="México">México</option>
					<option value="Micronesia">Micronesia</option>
					<option value="Moldavia">Moldavia</option>
					<option value="Mónaco">Mónaco</option>
					<option value="Mongolia">Mongolia</option>
					<option value="Montenegro">Montenegro</option>
					<option value="Mozambique">Mozambique</option>
					<option value="Namibia">Namibia</option>
					<option value="Nauru">Nauru</option>
					<option value="Nepal">Nepal</option>
					<option value="Nicaragua">Nicaragua</option>
					<option value="Níger">Níger</option>
					<option value="Nigeria">Nigeria</option>
					<option value="Noruega">Noruega</option>
					<option value="Nueva Zelanda">Nueva Zelanda</option>
					<option value="Omán">Omán</option>
					<option value="Países Bajos">Países Bajos</option>
					<option value="Pakistán">Pakistán</option>
					<option value="Palaos">Palaos</option>
					<option value="Panamá">Panamá</option>
					<option value="Papúa Nueva Guinea">Papúa Nueva Guinea</option>
					<option value="Paraguay">Paraguay</option>
					<option value="Perú">Perú</option>
					<option value="Polonia">Polonia</option>
					<option value="Portugal">Portugal</option>
					<option value="Reino Unido">Reino Unido</option>
					<option value="República Centroafricana">República Centroafricana</option>
					<option value="República Checa">República Checa</option>
					<option value="República del Congo">República del Congo</option>
					<option value="República Democrática del Congo">República Democrática del Congo</option>
					<option value="República Dominicana">República Dominicana</option>
					<option value="República Sudafricana">República Sudafricana</option>
					<option value="Ruanda">Ruanda</option>
					<option value="Rumanía">Rumanía</option>
					<option value="Rusia">Rusia</option>
					<option value="Samoa">Samoa</option>
					<option value="San Cristóbal y Nieves">San Cristóbal y Nieves</option>
					<option value="San Marino">San Marino</option>
					<option value="San Vicente y las Granadinas">San Vicente y las Granadinas</option>
					<option value="Santa Lucía">Santa Lucía</option>
					<option value="Santo Tomé y Príncipe">Santo Tomé y Príncipe</option>
					<option value="Senegal">Senegal</option>
					<option value="Serbia">Serbia</option>
					<option value="Seychelles">Seychelles</option>
					<option value="Sierra Leona">Sierra Leona</option>
					<option value="Singapur">Singapur</option>
					<option value="Siria">Siria</option>
					<option value="Somalia">Somalia</option>
					<option value="Sri Lanka">Sri Lanka</option>
					<option value="Suazilandia">Suazilandia</option>
					<option value="Sudán">Sudán</option>
					<option value="Sudán del Sur">Sudán del Sur</option>
					<option value="Suecia">Suecia</option>
					<option value="Suiza">Suiza</option>
					<option value="Surinam">Surinam</option>
					<option value="Tailandia">Tailandia</option>
					<option value="Tanzania">Tanzania</option>
					<option value="Tayikistán">Tayikistán</option>
					<option value="Timor Oriental">Timor Oriental</option>
					<option value="Togo">Togo</option>
					<option value="Tonga">Tonga</option>
					<option value="Trinidad y Tobago">Trinidad y Tobago</option>
					<option value="Túnez">Túnez</option>
					<option value="Turkmenistán">Turkmenistán</option>
					<option value="Turquía">Turquía</option>
					<option value="Tuvalu">Tuvalu</option>
					<option value="Ucrania">Ucrania</option>
					<option value="Uganda">Uganda</option>
					<option value="Uruguay">Uruguay</option>
					<option value="Uzbekistán">Uzbekistán</option>
					<option value="Vanuatu">Vanuatu</option>
					<option value="Venezuela">Venezuela</option>
					<option value="Vietnam">Vietnam</option>
					<option value="Yemen">Yemen</option>
					<option value="Yibuti">Yibuti</option>
					<option value="Zambia">Zambia</option>
					<option value="Zimbabue">Zimbabue</option>
				</select>
			</div>
			<div className="w-full mb-2">
				<label htmlFor="city" className="ml-2 font-semibolds">
					¿En qué ciudad te encuentras?
				</label>
				<select
					name="city"
					value={userData.city}
					onChange={(event) => handleChange(event)}
					className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none">
					<option value="select" hidden>
						Selecciona una ciudad
					</option>
					<option value="ciudaddemexico">Ciudad de México</option>
					<option value="estadodemexico">Estado de México</option>
					<option value="acapulco">Acapulco</option>
					<option value="aguascalientes">Aguascalientes</option>
					<option value="campeche">Campeche</option>
					<option value="cancun">Cancún</option>
					<option value="celaya">Celaya</option>
					<option value="chetumal">Chetumal</option>
					<option value="chihuahua">Chihuahua</option>
					<option value="chilpacingo">Chilpacingo</option>
					<option value="ciudaddelcarmen">Ciudad del Carmen</option>
					<option value="ciudadobregon">Ciudad Obregón</option>
					<option value="ciudadvictoria">Ciudad Victoria</option>
					<option value="coatzacoalcos">Coatzacoalcos</option>
					<option value="colima">Colima</option>
					<option value="cuautla">Cuautla</option>
					<option value="cuernavaca">Cuernavaca</option>
					<option value="cuilican">Cuilicán</option>
					<option value="cardenas">Cárdenas</option>
					<option value="cordoba">Córdoba</option>
					<option value="durango">Durango</option>
					<option value="ensenada">Ensenada</option>
					<option value="guadalajara">Guadalajara</option>
					<option value="guanajuato">Guanajuato</option>
					<option value="guayamas">Guayamas</option>
					<option value="hermosillo">Hermosillo</option>
					<option value="irapuato">Irapuato</option>
					<option value="juarez">Juárez</option>
					<option value="lalaguna">La Laguna</option>
					<option value="lapaz">La Paz</option>
					<option value="lapiedad">La Piedad</option>
					<option value="leon">León</option>
					<option value="loscabos">Los Cabos</option>
					<option value="losmochis">Los Mochis</option>
					<option value="manzanillo">Manzanillo</option>
					<option value="matamorros">Matamorros</option>
					<option value="mazatlan">Mazatlán</option>
					<option value="mexicali">Mexicali</option>
					<option value="minititlan">Minititlán</option>
					<option value="monclova">Monclova</option>
					<option value="monterrey">Monterrey</option>
					<option value="morelia">Morelia</option>
					<option value="merida">Mérida</option>
					<option value="nuevolaredo">Nuevo Leredo</option>
					<option value="oxaca">Oaxaca</option>
					<option value="ocotlan">Ocotlán</option>
					<option value="orizaba">Orizaba</option>
					<option value="pachuca">Pachuca</option>
					<option value="piedrasnegras">Piedras Negras</option>
					<option value="pozarica">Poza Rica</option>
					<option value="pueblatlaxcala">Puebla-Tlaxcala</option>
					<option value="puertovallarta">Puerto Vallarta</option>
					<option value="queretaro">Querétaro</option>
					<option value="reynosa">Reynosa</option>
					<option value="rioverde">Ríoverde</option>
					<option value="salamanca">Salamanca</option>
					<option value="saltillo">Saltillo</option>
					<option value="sanfranciscodelrincon">San Francisco del Rincón</option>
					<option value="sanjuandelrio">San Juan del Río</option>
					<option value="sanluispotosi">San Luis Potosí</option>
					<option value="tampico">Tampico</option>
					<option value="tapachula">Tapachula</option>
					<option value="tecoman">Tecomán</option>
					<option value="tehuacan">Tehuacán</option>
					<option value="tehuantepec">Tehuantepec</option>
					<option value="tepic">Tepic</option>
					<option value="tijuana">Tijuana</option>
					<option value="tlaxcala">Tlaxcala</option>
					<option value="toluca">Toluca</option>
					<option value="tula">Tula</option>
					<option value="tulacingo">Tulacingo</option>
					<option value="tulacingo">Tulacingo</option>
					<option value="tuxlagutierrez">Tuxtla Gutiérrez</option>
					<option value="uruapan">Uruapan</option>
					<option value="valledemexico">Valle de México</option>
					<option value="veracruz">Veracruz</option>
					<option value="villahermosa">Villahermosa</option>
					<option value="xalapa">Xalapa</option>
					<option value="zacatecas">Zacatecas</option>
					<option value="zamora">Zamora</option>
				</select>
			</div>
			<div className="w-full mb-2">
				<label htmlFor="reubication" className="ml-2 font-semibold">
					¿Podrías reubicarte en otra ciudad?
				</label>
				<select
					name="reubication"
					value={userData.reubication}
					onChange={(event) => handleChange(event)}
					className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none">
					<option value="select" hidden>
						Selecciona una opción
					</option>
					<option value="true">Si</option>
					<option value="false">No</option>
				</select>
			</div>
			<div className="w-full mb-2">
				<label htmlFor="languages" className="ml-2 font-semibold">
					¿Qué idiomas hablas y cuál es tu dominio?
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
									<Image src="utils/x_huntek.svg" width={16} height={16} alt="x" />
								</button>
							</div>
						);
					})}
				</div>
			</div>
			<div>
				<label htmlFor="profession" className="ml-2 font-semibold">
					¿En que área te gustaria trabajar?
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
			<div className="w-full mb-2">
				<label htmlFor="university" className="ml-2 font-semibold">
					¿Dónde estudiaste?
				</label>
				<select
					name="university"
					value={userData.university}
					onChange={(event) => handleChange(event)}
					className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none">
					<option value="select" hidden>
						Selecciona una opción
					</option>
					<option value={"Universidad Nacional Autónoma de México (UNAM)"}>
						Universidad Nacional Autónoma de México (UNAM)
					</option>
					<option value={"Anáhuac"}>Anáhuac</option>
					<option value={"Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)"}>
						Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)
					</option>
					<option value={"Universidad de Guadalajara (UDG)"}>Universidad de Guadalajara (UDG)</option>
					<option value={"Universidad Autónoma de Nuevo León (UANL)"}>Universidad Autónoma de Nuevo León (UANL)</option>
					<option value={"Instituto Politécnico Nacional (IPN)"}>Instituto Politécnico Nacional (IPN)</option>
					<option value={"Universidad Veracruzana (UV)"}>Universidad Veracruzana (UV)</option>
					<option value={"Universidad Autónoma del Estado de México (UAEMEX)"}>
						Universidad Autónoma del Estado de México (UAEMEX)
					</option>
					<option value={"Universidad Autónoma Metropolitana (UAM)"}>Universidad Autónoma Metropolitana (UAM)</option>
					<option value={"Universidad de las Américas Puebla (UDLA)"}>Universidad de las Américas Puebla (UDLA)</option>
					<option value={"Universidad Autónoma del Estado de Hidalgo (UAEH)"}>
						Universidad Autónoma del Estado de Hidalgo (UAEH)
					</option>
					<option value={"Benemérita Universidad Autónoma de Puebla (BUAP)"}>
						Benemérita Universidad Autónoma de Puebla (BUAP)
					</option>
					<option value={"Universidad Interamericana para el Desarrollo (UNID)"}>
						Universidad Interamericana para el Desarrollo (UNID)
					</option>
					<option value={"Instituto Tecnológico y de Estudios Superiores de Occidente (ITESO)"}>
						Instituto Tecnológico y de Estudios Superiores de Occidente (ITESO)
					</option>
					<option value={"Universidad Iberoamericana (UIA – IBERO)"}>Universidad Iberoamericana (UIA – IBERO)</option>
					<option value={"Universidad de Guanajuato (UGTO)"}>Universidad de Guanajuato (UGTO)</option>
					<option value={"Universidad de Sonora (USON)"}>Universidad de Sonora (USON)</option>
					<option value={"Universidad de Anáhuac del Norte (UAN)"}>Universidad de Anáhuac del Norte (UAN)</option>
					<option value={"Colegio de México (COLMEX)"}>Colegio de México (COLMEX)</option>
					<option value={"Universidad Autónoma de Baja California (UABC)"}>
						Universidad Autónoma de Baja California (UABC)
					</option>
					<option value={"Instituto Tecnológico Autónomo de México (ITAM)"}>
						Instituto Tecnológico Autónomo de México (ITAM)
					</option>
					<option value={"Universidad Autónoma de Yucatán (UADY)"}>Universidad Autónoma de Yucatán (UADY)</option>
					<option value={"Universidad Autónoma de Aguascalientes (UAA)"}>
						Universidad Autónoma de Aguascalientes (UAA)
					</option>
					<option value={"Universidad Michoacana de San Nicolás de Hidalgo (UMSNH)"}>
						Universidad Michoacana de San Nicolás de Hidalgo (UMSNH)
					</option>
					<option value={"Universidad de Colima (UCOL)"}>Universidad de Colima (UCOL)</option>
					<option value={"Universidad Autónoma de Ciudad Juárez (UACJ)"}>
						Universidad Autónoma de Ciudad Juárez (UACJ)
					</option>
					<option value={"Universidad Autónoma de Querétaro (UAQ)"}>Universidad Autónoma de Querétaro (UAQ)</option>
					<option value={"Centro de Investigación y Docencia Económicas (CIDE)"}>
						Centro de Investigación y Docencia Económicas (CIDE)
					</option>
					<option value={"Universidad TecMilenio (UTM)"}>Universidad TecMilenio (UTM)</option>
					<option value={"Universidad Autónoma de San Luis de Potosí (UASLP)"}>
						Universidad Autónoma de San Luis de Potosí (UASLP)
					</option>
					<option value={"Universidad Autónoma del Estado de Morelos (UAEM)"}>
						Universidad Autónoma del Estado de Morelos (UAEM)
					</option>
					<option value={"Universidad Autónoma de Chihuahua (UACH)"}>Universidad Autónoma de Chihuahua (UACH)</option>
					<option value={"Universidad Popular Autónoma del Estado de Puebla (UAPAEP)"}>
						Universidad Popular Autónoma del Estado de Puebla (UAPAEP)
					</option>
					<option value={"Universidad de Monterrey (UDEM)"}>Universidad de Monterrey (UDEM)</option>
					<option value={"Universidad del Valle de México (UVM)"}>Universidad del Valle de México (UVM)</option>
					<option value={"Universidad Panamericana (UP)"}>Universidad Panamericana (UP)</option>
					<option value={"Universidad Tecnológica de México (UNITEC)"}>
						Universidad Tecnológica de México (UNITEC)
					</option>
					<option value={"Centro de Enseñanza Técnica y Superior (CETYS)"}>
						Centro de Enseñanza Técnica y Superior (CETYS)
					</option>
					<option value={"Universidad Autónoma de Guadalajara (UAG)"}>Universidad Autónoma de Guadalajara (UAG)</option>
					<option value={"Universidad Autónoma de Coahuila (UADEC)"}>Universidad Autónoma de Coahuila (UADEC)</option>
					<option value={"Universidad Autónoma de Sinaloa (UAS)"}>Universidad Autónoma de Sinaloa (UAS)</option>
					<option value={"Instituto Tecnológico de Sonora (ITSON)"}>Instituto Tecnológico de Sonora (ITSON)</option>
					<option value={"Universidad Autónoma de Tamaulipas (UAT)"}>Universidad Autónoma de Tamaulipas (UAT)</option>
					<option value={"Universidad Autónoma de Chiapas (UNACH)"}>Universidad Autónoma de Chiapas (UNACH)</option>
					<option value={"Universidad Autónoma de Zacatecas (UAZ)"}>Universidad Autónoma de Zacatecas (UAZ)</option>
					<option value={"Universidad de Anáhuac Mayab (UA)"}>Universidad de Anáhuac Mayab (UA)</option>
					<option value={"Universidad de Juárez Autónoma de Tabasco (UJAT)"}>
						Universidad de Juárez Autónoma de Tabasco (UJAT)
					</option>
					<option value={"Universidad La Salle (ULSA)"}>Universidad La Salle (ULSA)</option>
					<option value={"Universidad Pedagógica Nacional (UPN)"}>Universidad Pedagógica Nacional (UPN)</option>
					<option value={"Universidad de Montemorelos (UM)"}>Universidad de Montemorelos (UM)</option>
					<option value={"Universidad Autónoma de Baja California Sur (UABCS)"}>
						Universidad Autónoma de Baja California Sur (UABCS)
					</option>
					<option value={"Universidad Autónoma de Chapingo (UACh)"}>Universidad Autónoma de Chapingo (UACh)</option>
					<option value={"Universidad Autónoma de Nayarit (UAN)"}>Universidad Autónoma de Nayarit (UAN)</option>
					<option value={"Instituto de Estudios Universitarios (IEU)"}>
						Instituto de Estudios Universitarios (IEU)
					</option>
					<option value={"Universidad del Valle de Atemajac (UNIVA)"}>Universidad del Valle de Atemajac (UNIVA)</option>
					<option value={"Universidad Latinoamericana (ULA)"}>Universidad Latinoamericana (ULA)</option>
					<option value={"Universidad de Quintana Roo (UQROO)"}>Universidad de Quintana Roo (UQROO)</option>
					<option value={"Universidad Autónoma del Carmen (UNACAR)"}>Universidad Autónoma del Carmen (UNACAR)</option>
					<option value={"Universidad Autónoma Benito Juárez de Oaxaca (UABJO)"}>
						Universidad Autónoma Benito Juárez de Oaxaca (UABJO)
					</option>
					<option value={"Universidad Autónoma de Campeche (UACAM)"}>Universidad Autónoma de Campeche (UACAM)</option>
					<option value={"Universidad Autónoma de Ciudad de México (UACM)"}>
						Universidad Autónoma de Ciudad de México (UACM)
					</option>
					<option value={"Universidad Juárez del Estado de Durango (UJED)"}>
						Universidad Juárez del Estado de Durango (UJED)
					</option>
					<option value={"Escuela Bancaria y Comercial (EBC)"}>Escuela Bancaria y Comercial (EBC)</option>
					<option value={"Universidad Intercontinental (UIC)"}>Universidad Intercontinental (UIC)</option>
					<option value={"Universidad Regiomontana (U-ERRE)"}>Universidad Regiomontana (U-ERRE)</option>
					<option value={"Universidad del Claustro de Sor Juana (UCJS)"}>
						Universidad del Claustro de Sor Juana (UCJS)
					</option>
					<option value={"Universidad Tecnológica Mixteca (UTM)"}>Universidad Tecnológica Mixteca (UTM)</option>
					<option value={"Instituto Tecnológico de Chihuahua (UTCH)"}>Instituto Tecnológico de Chihuahua (UTCH)</option>
					<option value={"Universidad Autónoma Agraria Antonio Narro (UAAAN)"}>
						Universidad Autónoma Agraria Antonio Narro (UAAAN)
					</option>
					<option value={"Universidad Autónoma de Occidente (UAdeO)"}>Universidad Autónoma de Occidente (UAdeO)</option>
					<option value={"Universidad Tecnológica de Aguascalientes (UTAGS)"}>
						Universidad Tecnológica de Aguascalientes (UTAGS)
					</option>
					<option value={"Universidad Internacional (UNINTER)"}>Universidad Internacional (UNINTER)</option>
					<option value={"Instituto Tecnológico de Saltillo (ITS)"}>Instituto Tecnológico de Saltillo (ITS)</option>
					<option value={"Instituto Tecnológico de Hermosillo (ITH)"}>Instituto Tecnológico de Hermosillo (ITH)</option>
					<option value={"Universidad Tecnológica de Querétaro (UTEQ)"}>
						Universidad Tecnológica de Querétaro (UTEQ)
					</option>
					<option value={"Universidad Cristóbal Colón (UCC)"}>Universidad Cristóbal Colón (UCC)</option>
					<option value={"Universidad del Caribe (UNICARIBE)"}>Universidad del Caribe (UNICARIBE)</option>
					<option value={"Centro de Estudios Universitarios de Xochicalco (CEUX)"}>
						Centro de Estudios Universitarios de Xochicalco (CEUX)
					</option>
					<option value={"El Colegio de Sonora (COLSON)"}>El Colegio de Sonora (COLSON)</option>
					<option value={"Universidad Metropolitana de Monterrey (UMM)"}>
						Universidad Metropolitana de Monterrey (UMM)
					</option>
					<option value={"Universidad Tecnológica de León (UTL)"}>Universidad Tecnológica de León (UTL)</option>
					<option value={"Instituto Tecnológico de La Paz (ITL)"}>Instituto Tecnológico de La Paz (ITL)</option>
					<option value={"Universidad Vasco de Quiroga (UVAQ)"}>Universidad Vasco de Quiroga (UVAQ)</option>
					<option value={"Instituto Tecnológico de Querétaro (ITQ)"}>Instituto Tecnológico de Querétaro (ITQ)</option>
					<option value={"Universidad Tecnológica Metropolitana (UTM)"}>
						Universidad Tecnológica Metropolitana (UTM)
					</option>
					<option value={"Universidad de España y México (UEM)"}>Universidad de España y México (UEM)</option>
					<option value={"Universidad Latina de América (UNLA)"}>Universidad Latina de América (UNLA)</option>
					<option value={"Universidad La Salle Benavente (ULSA – Puebla)"}>
						Universidad La Salle Benavente (ULSA – Puebla)
					</option>
					<option value={"Universidad Mexicana (UNIMEX)"}>Universidad Mexicana (UNIMEX)</option>
					<option value={"Universidad La Salle Pachuca (ULSA – Pachuca)"}>
						Universidad La Salle Pachuca (ULSA – Pachuca)
					</option>
					<option value={"Universidad Autónoma de La Laguna (UAL)"}>Universidad Autónoma de La Laguna (UAL)</option>
					<option value={"OTRA"}>OTRA</option>
				</select>
			</div>

			<div className="w-full mb-2">
				<label htmlFor="degree" className="ml-2 font-semibold">
					¿Qué carrera estudiaste?
				</label>
				<select
					name="degree"
					value={userData.degree}
					onChange={(event) => handleChange(event)}
					className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none">
					<option value="select" hidden>
						Selecciona una opción
					</option>
					<option value="Administración De Empresas">Administración De Empresas</option>
					<option value="Administración Pública">Administración Pública</option>
					<option value="Antropología">Antropología</option>
					<option value="Arqueología">Arqueología</option>
					<option value="Arquitectura">Arquitectura</option>
					<option value="Bellas Artes">Bellas Artes</option>
					<option value="Biblioteconomía">Biblioteconomía</option>
					<option value="Biología">Biología</option>
					<option value="Bioquímica">Bioquímica</option>
					<option value="Biotecnología">Biotecnología</option>
					<option value="Cine">Cine</option>
					<option value="Ciencia y Tecnología de los Alimentos">Ciencia y Tecnología de los Alimentos</option>
					<option value="Ciencias Biomédicas">Ciencias Biomédicas</option>
					<option value="Ciencias Ambientales">Ciencias Ambientales</option>
					<option value="Ciencias del Mar">Ciencias del Mar</option>
					<option value="Ciencias Políticas y de la Administración">Ciencias Políticas y de la Administración</option>
					<option value="Comercio">Comercio</option>
					<option value="Comunicación Audiovisual">Comunicación Audiovisual</option>
					<option value="Conservación y Restauración de Bienes Culturales">
						Conservación y Restauración de Bienes Culturales
					</option>
					<option value="Criminología">Criminología</option>
					<option value="Danza">Danza</option>
					<option value="Deporte">Deporte</option>
					<option value="Derecho">Derecho</option>
					<option value="Diseño">Diseño</option>
					<option value="Diseño de Interiores">Diseño de Interiores</option>
					<option value="Diseño de Moda">Diseño de Moda</option>
					<option value="Diseño y Desarrollo de Videojuegos">Diseño y Desarrollo de Videojuegos</option>
					<option value="Economía">Economía</option>
					<option value="Educación Infantil">Educación Infantil</option>
					<option value="Educación Primaria">Educación Primaria</option>
					<option value="Educación Social">Educación Social</option>
					<option value="Enfermería">Enfermería</option>
					<option value="Enología">Enología</option>
					<option value="Estadística">Estadística</option>
					<option value="Estudios Árabes e Islámicos">Estudios Árabes e Islámicos</option>
					<option value="Estudios de Asia y África">Estudios de Asia y África</option>
					<option value="Estudios de Asia Oriental">Estudios de Asia Oriental</option>
					<option value="Estudios Literarios">Estudios Literarios</option>
					<option value="Física">Física</option>
					<option value="Filosofía">Filosofía</option>
					<option value="Finanzas">Finanzas</option>
					<option value="Fisioterapia">Fisioterapia</option>
					<option value="Fotografía">Fotografía</option>
					<option value="Genética">Genética</option>
					<option value="Geografía">Geografía</option>
					<option value="Geología">Geología</option>
					<option value="Historia">Historia</option>
					<option value="Historia del Arte">Historia del Arte</option>
					<option value="Historia y Ciencias de la Música">Historia y Ciencias de la Música</option>
					<option value="Historia y Patrimonio">Historia y Patrimonio</option>
					<option value="Humanidades">Humanidades</option>
					<option value="Ingeniería Aeronáutica">Ingeniería Aeronáutica</option>
					<option value="Ingeniería Agrícola">Ingeniería Agrícola</option>
					<option value="Ingeniería Agroalimentaria">Ingeniería Agroalimentaria</option>
					<option value="Ingeniería Agroambiental">Ingeniería Agroambiental</option>
					<option value="Ingeniería Biomédica">Ingeniería Biomédica</option>
					<option value="Ingeniería Civil">Ingeniería Civil</option>
					<option value="Ingeniería de Computadores">Ingeniería de Computadores</option>
					<option value="Ingeniería de Diseño Industrial y Desarrollo del Producto">
						Ingeniería de Diseño Industrial y Desarrollo del Producto
					</option>
					<option value="Ingeniería de Edificación">Ingeniería de Edificación</option>
					<option value="Ingeniería de la Energia">Ingeniería de la Energia</option>
					<option value="Ingeniería de Materiales">Ingeniería de Materiales</option>
					<option value="Ingeniería de Minas y Energía">Ingeniería de Minas y Energía</option>
					<option value="Ingeniería de Organización Industrial">Ingeniería de Organización Industrial</option>
					<option value="Ingeniería de Sistemas de Telecomunicación">Ingeniería de Sistemas de Telecomunicación</option>
					<option value="Ingeniería de Sonido e Imagen">Ingeniería de Sonido e Imagen</option>
					<option value="Ingeniería del Software">Ingeniería del Software</option>
					<option value="Ingeniería Eléctrica">Ingeniería Eléctrica</option>
					<option value="Ingeniería Eléctrica y Electrónica">Ingeniería Eléctrica y Electrónica</option>
					<option value="Ingeniería Electrónica y Automática">Ingeniería Electrónica y Automática</option>
					<option value="Ingeniería Forestal">Ingeniería Forestal</option>
					<option value="Ingeniería Geológica">Ingeniería Geológica</option>
					<option value="Ingeniería Geomática y Topografía">Ingeniería Geomática y Topografía</option>
					<option value="Ingeniería Industrial">Ingeniería Industrial</option>
					<option value="Ingeniería Informática">Ingeniería Informática</option>
					<option value="Ingeniería Marítima">Ingeniería Marítima</option>
					<option value="Ingeniería Mecánica">Ingeniería Mecánica</option>
					<option value="Ingeniería Mecatrónica">Ingeniería Mecatrónica</option>
					<option value="Ingeniería Náutica">Ingeniería Náutica</option>
					<option value="Ingeniería Naval y Oceánica">Ingeniería Naval y Oceánica</option>
					<option value="Ingeniería Química">Ingeniería Química</option>
					<option value="Ingeniería Telemática">Ingeniería Telemática</option>
					<option value="Ingeniería Textil">Ingeniería Textil</option>
					<option value="Logopedia">Logopedia</option>
					<option value="Lengua Española y sus Literaturas">Lengua Española y sus Literaturas</option>
					<option value="Lengua y Literatura Catalanas">Lengua y Literatura Catalanas</option>
					<option value="Lengua y Literatura Gallegas">Lengua y Literatura Gallegas</option>
					<option value="Lengua y Literatura Vascas">Lengua y Literatura Vascas</option>
					<option value="Lenguas Modernas">Lenguas Modernas</option>
					<option value="Lenguas y Literaturas Clásicas">Lenguas y Literaturas Clásicas</option>
					<option value="Lingüística y Lenguas Aplicadas">Lingüística y Lenguas Aplicadas</option>
					<option value="Marketing">Marketing</option>
					<option value="Matemáticas">Matemáticas</option>
					<option value="Medicina">Medicina</option>
					<option value="Multimedia">Multimedia</option>
					<option value="Música">Música</option>
					<option value="Nutrición y Dietética">Nutrición y Dietética</option>
					<option value="Odontología">Odontología</option>
					<option value="Óptica y Optometría">Óptica y Optometría</option>
					<option value="Pedagogía">Pedagogía</option>
					<option value="Periodismo">Periodismo</option>
					<option value="Psicología">Psicología</option>
					<option value="Publicidad y Relaciones Públicas">Publicidad y Relaciones Públicas</option>
					<option value="Química">Química</option>
					<option value="Recursos Humanos">Recursos Humanos</option>
					<option value="Relaciones internacionales">Relaciones internacionales</option>
					<option value="Sociología">Sociología</option>
					<option value="Terapia Ocupacional">Terapia Ocupacional</option>
					<option value="Trabajo Social">Trabajo Social</option>
					<option value="Traducción">Traducción</option>
					<option value="Turismo">Turismo</option>
				</select>
			</div>
			<div className="w-full mb-2">
				<label htmlFor="hobbies" className="ml-2 font-semibold">
					¿Cuáles son tus Hobbies?
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
			<div className="w-full mb-2">
				<label htmlFor="years_xp" className="ml-2 font-semibold">
					Años de experiencia
				</label>
				<select
					name="years_xp"
					value={userData.years_xp}
					onChange={(event) => handleChange(event)}
					className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none">
					<option value="select" hidden>
						Selecciona una opción
					</option>
					<option value="0">0</option>
					<option value="1-4">1-4</option>
					<option value="4-6">4-6</option>
					<option value="6-9">6-9</option>
					<option value="10-15">10-15</option>
				</select>
			</div>
			<div className="w-full mb-2">
				<label htmlFor="income" className="ml-2 font-semibold">
					¿Cuál es tu sueldo anual deseado bruto?
				</label>
				<p className="text-sm text-gray-500 ml-4">(Ejm 20,000 x 12 = 240,000) Sin incluir prestaciones</p>
				<input
					type="text"
					inputMode="text"
					name="income"
					value={userData.income}
					onChange={(event) => handleChange(event)}
					className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none"
				/>
			</div>
			<div className="w-full mb-2">
				<label htmlFor="form_of_work" className="ml-2 font-semibold">
					¿Con qué forma de trabajo te sientes mas cómodo?
				</label>
				<select
					name="form_of_work"
					value={userData.form_of_work}
					onChange={(event) => handleChange(event)}
					className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none">
					<option value="select" hidden>
						Selecciona una opción
					</option>
					<option value="Remoto">Remoto</option>
					<option value="Presencial">Presencial</option>
					<option value="Híbrido">Híbrido</option>
				</select>
			</div>
			<div className="w-full mb-2">
				<label htmlFor="availability" className="ml-2 font-semibold">
					¿Qué disponibilidad tienes para trabajar?
				</label>
				<select
					name="availability"
					value={userData.availability}
					onChange={(event) => handleChange(event)}
					className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none">
					<option value="select" hidden>
						Selecciona una opción
					</option>
					<option value="Full time">Full time</option>
					<option value="Part time">Part time</option>
				</select>
			</div>
		</section>
	);
};

export default FormQuestions;
