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
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
	}),
};

const Experience = ({ userData, handleChange, inputExperience }) => {
	const options = ["0", "1-4 años", "4-6 años", "6-9 años", "10-15 años"];

	const selectOptions = options.map((years_xp) => ({ value: years_xp, label: years_xp }));

	const [selectedOption, setSelectedOption] = useState(null);

	const handleSelectChange = (selectedOption) => {
		setSelectedOption(selectedOption);
		handleChange({
			target: {
				name: "years_xp",
				value: selectedOption ? selectedOption.value : "",
			},
		});
	};

	return (
		<div>
			<label htmlFor="years_xp" className="ml-2 font-semibold">
				¿Cuántos años de experiencia tienes?
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
				name="years_xp"
				value={selectedOption}
				options={selectOptions}
				menuPlacement="auto"
				placeholder="Selecciona una respuesta"
				isDisabled={!inputExperience}
				isClearable={selectedOption !== null}
				onChange={handleSelectChange}
				styles={customStyles}
			/>
		</div>
	);
};

export default Experience;
