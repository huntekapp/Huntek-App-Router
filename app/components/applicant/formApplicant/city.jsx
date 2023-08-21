import Select from "react-select";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
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
	singleValue: (provided, state) => ({
		...provided,
		color: state.isDisabled ? "#888" : "#046255",
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
		color: state.isSelected ? "#fff" : "#000",
		"&:hover": {
			backgroundColor: "#c7dcd9",
			color: "#000",
		},
		cursor: "pointer",
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
	}),
};

const City = ({ userData, handleChange, inputCity, setOpen }) => {
	const options = [
		"Ciudad de México",
		"Estado de México",
		"Acapulco",
		"Aguascalientes",
		"Campeche",
		"Cancún",
		"Celaya",
		"Chetumal",
		"Chihuahua",
		"Chilpacingo",
		"Ciudad del Carmen",
		"Ciudad Obregón",
		"Ciudad Victoria",
		"Coatzacoalcos",
		"Colima",
		"Cuautla",
		"Cuernavaca",
		"Cuilicán",
		"Cárdenas",
		"Córdoba",
		"Durango",
		"Ensenada",
		"Guadalajara",
		"Guanajuato",
		"Guayamas",
		"Hermosillo",
		"Irapuato",
		"Juárez",
		"La Laguna",
		"La Paz",
		"La Piedad",
		"León",
		"Los Cabos",
		"Los Mochis",
		"Manzanillo",
		"Matamorros",
		"Mazatlán",
		"Mexicali",
		"Minititlán",
		"Monclova",
		"Monterrey",
		"Morelia",
		"Mérida",
		"Nuevo Laredo",
		"Oaxaca",
		"Ocotlán",
		"Orizaba",
		"Pachuca",
		"Piedras Negras",
		"Poza Rica",
		"Puebla-Tlaxcala",
		"Puerto Vallarta",
		"Querétaro",
		"Reynosa",
		"Río Verde",
		"Salamanca",
		"Saltillo",
		"San Francisco del Rincón",
		"San Juan del Río",
		"San Luis Potosí",
		"Tampico",
		"Tapachula",
		"Tecomán",
		"Tehuacán",
		"Tehuantepec",
		"Tepic",
		"Tijuana",
		"Tlaxcala",
		"Toluca",
		"Tula",
		"Tulancingo",
		"Tulancingo",
		"Tuxtla Gutiérrez",
		"Uruapan",
		"Valle de México",
		"Veracruz",
		"Villahermosa",
		"Xalapa",
		"Zacatecas",
		"Zamora",
	];

	const [selectedOption, setSelectedOption] = useState(null);
	const selectOptions = options.map((city) => ({ value: city, label: city }));

	const path = usePathname();
	useEffect(() => {
		if (path === "/applicant/profileExtend") {
			setSelectedOption({ value: userData.city, label: userData.city });
		}
	}, [userData]);

	const handleSelectChange = (selectedOption) => {
		setSelectedOption(selectedOption);
		handleChange({
			target: {
				name: "city",
				value: selectedOption ? selectedOption.value : "",
			},
		});
	};

	return (
		<div className="w-full">
			<label htmlFor="city" className="ml-2 font-semibold">
				¿En qué ciudad vives?
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
				name="city"
				value={selectedOption}
				options={selectOptions}
				menuPlacement="auto"
				placeholder="Selecciona una ciudad"
				isDisabled={!inputCity}
				isClearable={selectedOption !== null}
				onChange={handleSelectChange}
				onMenuOpen={() => path === "/applicant/profileExtend" && setOpen(true)}
				onMenuClose={() => path === "/applicant/profileExtend" && setOpen(false)}
				styles={customStyles}
			/>
		</div>
	);
};
export default City;
