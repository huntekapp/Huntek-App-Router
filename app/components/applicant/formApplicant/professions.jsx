import { useEffect, useState } from "react";
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
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
	}),
};

const Profession = ({ userData, handleChange, inputProf }) => {
	const options = [
		"Servicios legales",
		"Comercial",
		"Innovación",
		"Servicio al cliente",
		"Control interno",
		"Logística",
		"Tecnologías de la información",
		"Ventas",
		"Sistemas",
		"Publicidad",
		"Investigación & Desarrollo",
		"Compras",
		"Distribución",
		"Comunicaciones",
		"Otras",
	];

	const selectOptions = options.map((profession) => ({ value: profession, label: profession }));

	const [selectedOption, setSelectedOption] = useState([]);

	useEffect(() => {
		const prof = selectedOption.map((opt) => opt.value);
		handleChange({
			target: {
				name: "profession",
				value: selectedOption ? prof : "",
			},
		});
	}, [selectedOption]);

	const handleSelectChange = (selectedOption) => {
		setSelectedOption(selectedOption);
	};

	return (
		<div>
			<label htmlFor="profession" className="ml-2 font-semibold">
				¿En qué área te gustaría trabajar?
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
				isMulti
				name="profession"
				value={selectedOption}
				options={selectOptions}
				menuPlacement="auto"
				placeholder="Selecciona una profesión"
				isDisabled={!inputProf}
				isClearable={selectedOption !== null}
				onChange={handleSelectChange}
				styles={customStyles}
			/>
		</div>
	);
};
export default Profession;
