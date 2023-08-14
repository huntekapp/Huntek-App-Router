import { useEffect, useState } from "react";
import Select from "react-select";
import NotListedLocationOutlinedIcon from "@mui/icons-material/NotListedLocationOutlined";
import { usePathname } from "next/navigation";

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

const Hobbies = ({ userData, handleChange, inputHobbies }) => {
	const options = [
		"Baile",
		"Cine",
		"Cocina",
		"Deportes",
		"Fotografía",
		"Lectura",
		"Musica",
		"Naturaleza",
		"Pintura",
		"Viajar",
	];

	const selectOptions = options.map((hobbies) => ({ value: hobbies, label: hobbies }));

	const [selectedOption, setSelectedOption] = useState([]);

	useEffect(() => {
		const hob = selectedOption.map((opt) => opt.value);
		handleChange({
			target: {
				name: "hobbies",
				value: selectedOption ? hob : "",
			},
		});
	}, [selectedOption]);

	const handleSelectChange = (selectedOption) => {
		setSelectedOption(selectedOption);
	};

	const pathname = usePathname()

	return (
		<div>
			<label htmlFor="hobbies" className="ml-2 font-semibold">
				¿Cuáles son tus hobbies?
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
				name="hobbies"
				value={selectedOption}
				options={selectOptions}
				menuPlacement="auto"
				placeholder={userData.hobbies.length ? "Has seleccionado" : "Selecciona un hobbie"}
				isDisabled={!inputHobbies}
				isClearable={selectedOption !== null}
				onChange={handleSelectChange}
				styles={customStyles}
			/>
			{!pathname.includes("userconfig") && userData.hobbies ? userData.hobbies.map((hobbie) => {
				return (
					<div className="mt-1 ml-1 text-gray-500/80 text-base">{hobbie}</div>
				)
			}): ""}
		</div>
	);
};
export default Hobbies;
