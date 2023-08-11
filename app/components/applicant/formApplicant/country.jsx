import { useState } from "react";
import Select from "react-select";
import NotListedLocationOutlinedIcon from "@mui/icons-material/NotListedLocationOutlined";

const customStyles = {
	control: (provided, state) => ({
		...provided,
		textAlign: "left",
		backgroundColor: state.isFocused ? "#e3eeec" : "#fff",
		borderColor: state.isFocused ? "#046255" : "#ccc",
		boxShadow: state.isFocused && "none",
		"&:hover": {
			borderColor: "#046255",
		},
		cursor: "pointer",
	}),
	singleValue: (provided) => ({
		...provided,
		color: "#046255",
	}),
	menu: (provided) => ({
		...provided,
		backgroundColor: "#e3eeec",
	}),
	option: (provided, state) => ({
		...provided,
		height: "35px",
		textAlign: "left",
		backgroundColor: state.isSelected ? "#046255" : "#e3eeec",
		color: state.isSelected ? "#fff" : "#333",
		"&:hover": {
			backgroundColor: "#c7dcd9",
		},
		cursor: "pointer",
	}),
};

const Country = ({ userData, handleChange, inputCountry }) => {
	const options = [
		"Afganistán",
		"Albania",
		"Alemania",
		"Andorra",
		"Angola",
		"Antigua y Barbuda",
		"Arabia Saudita",
		"Argelia",
		"Argentina",
		"Armenia",
		"Australia",
		"Austria",
		"Azerbaiyán",
		"Bahamas",
		"Bangladés",
		"Barbados",
		"Baréin",
		"Bélgica",
		"Belice",
		"Benín",
		"Bielorrusia",
		"Birmania/Myanmar",
		"Bolivia",
		"Bosnia y Herzegovina",
		"Botsuana",
		"Brasil",
		"Brunéi",
		"Bulgaria",
		"Burkina Faso",
		"Burundi",
		"Bután",
		"Cabo Verde",
		"Camboya",
		"Camerún",
		"Canadá",
		"Catar",
		"Chad",
		"Chile",
		"China",
		"Chipre",
		"Ciudad del Vaticano",
		"Colombia",
		"Comoras",
		"Corea del Norte",
		"Corea del Sur",
		"Costa de Marfil",
		"Costa Rica",
		"Croacia",
		"Cuba",
		"Dinamarca",
		"Dominica",
		"Ecuador",
		"Egipto",
		"El Salvador",
		"Emiratos Árabes Unidos",
		"Eritrea",
		"Eslovaquia",
		"Eslovenia",
		"España",
		"Estados Unidos",
		"Estonia",
		"Etiopía",
		"Filipinas",
		"Finlandia",
		"Fiyi",
		"Francia",
		"Gabón",
		"Gambia",
		"Georgia",
		"Ghana",
		"Granada",
		"Grecia",
		"Guatemala",
		"Guyana",
		"Guinea",
		"Guinea ecuatorial",
		"Guinea-Bisáu",
		"Haití",
		"Honduras",
		"Hungría",
		"India",
		"Indonesia",
		"Irak",
		"Irán",
		"Irlanda",
		"Islandia",
		"Islas Marshall",
		"Islas Salomón",
		"Israel",
		"Italia",
		"Jamaica",
		"Japón",
		"Jordania",
		"Kazajistán",
		"Kenia",
		"Kirguistán",
		"Kiribati",
		"Kuwait",
		"Laos",
		"Lesoto",
		"Letonia",
		"Líbano",
		"Liberia",
		"Libia",
		"Liechtenstein",
		"Lituania",
		"Luxemburgo",
		"Macedonia del Norte",
		"Madagascar",
		"Malasia",
		"Malaui",
		"Maldivas",
		"Malí",
		"Malta",
		"Marruecos",
		"Mauricio",
		"Mauritania",
		"México",
		"Micronesia",
		"Moldavia",
		"Mónaco",
		"Mongolia",
		"Montenegro",
		"Mozambique",
		"Namibia",
		"Nauru",
		"Nepal",
		"Nicaragua",
		"Níger",
		"Nigeria",
		"Noruega",
		"Nueva Zelanda",
		"Omán",
		"Países Bajos",
		"Pakistán",
		"Palaos",
		"Panamá",
		"Papúa Nueva Guinea",
		"Paraguay",
		"Perú",
		"Polonia",
		"Portugal",
		"Reino Unido",
		"República Centroafricana",
		"República Checa",
		"República del Congo",
		"República Democrática del Congo",
		"República Dominicana",
		"República Sudafricana",
		"Ruanda",
		"Rumanía",
		"Rusia",
		"Samoa",
		"San Cristóbal y Nieves",
		"San Marino",
		"San Vicente y las Granadinas",
		"Santa Lucía",
		"Santo Tomé y Príncipe",
		"Senegal",
		"Serbia",
		"Seychelles",
		"Sierra Leona",
		"Singapur",
		"Siria",
		"Somalia",
		"Sri Lanka",
		"Suazilandia",
		"Sudán",
		"Sudán del Sur",
		"Suecia",
		"Suiza",
		"Surinam",
		"Tailandia",
		"Tanzania",
		"Tayikistán",
		"Timor Oriental",
		"Togo",
		"Tonga",
		"Trinidad y Tobago",
		"Túnez",
		"Turkmenistán",
		"Turquía",
		"Tuvalu",
		"Ucrania",
		"Uganda",
		"Uruguay",
		"Uzbekistán",
		"Vanuatu",
		"Venezuela",
		"Vietnam",
		"Yemen",
		"Yibuti",
		"Zambia",
		"Zimbabue",
	];

	const selectOptions = options.map((country) => ({ value: country, label: country }));

	const [selectedOption, setSelectedOption] = useState(null);

	const handleSelectChange = (selectedOption) => {
		setSelectedOption(selectedOption);
		handleChange({
			target: {
				name: "country",
				value: selectedOption ? selectedOption.value : "",
			},
		});
	};

	return (
		<div className="w-full flex flex-col">
			<label htmlFor="country" className="ml-2 mb-2 font-semibold">
				¿En qué país naciste?
				<span className="dropdown dropdown-hover font-normal">
					<div tabIndex={0}>
						<NotListedLocationOutlinedIcon className="pb-1" />
					</div>
					<div
						tabIndex={0}
						className="w-fit px-2 py-1 dropdown-content -translate-x-20 z-[1] shadow bg-sec rounded-box">
						Requerido
					</div>
				</span>
			</label>
			<Select
				name="country"
				value={selectedOption}
				options={selectOptions}
				menuPlacement="auto"
				placeholder={userData ? userData.country : "Selecciona un país"}
				isDisabled={!inputCountry}
				isClearable={selectedOption !== null}
				onChange={handleSelectChange}
				styles={customStyles}
			/>
		</div>
	);
};

export default Country;
