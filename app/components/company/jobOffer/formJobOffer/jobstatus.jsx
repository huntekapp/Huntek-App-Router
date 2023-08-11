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

const JobStatus = ({ userData, handleChange}) => {
	const options = ["Estudiante", "Egresado", "Curando especialidad"];

	const selectOptions = options.map((status) => ({ value: status, label: status }));

	const [selectedOption, setSelectedOption] = useState(null);

	const handleSelectChange = (selectedOption) => {
		setSelectedOption(selectedOption);
		handleChange({
			target: {
				name: "status", 
				value: {
					value: selectedOption ? selectedOption.value : "",
					determinant: false
				}
			},
		});
	};

	return (
		<div className="w-full text-sec">
			<label htmlFor="studies" className="ml-2 font-semibold">
				¿Cuál es tu situación académica?
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
				name="status"
				value={selectedOption}
				options={selectOptions}
				menuPlacement="auto"
				placeholder="Selecciona una situación académica"
				isClearable={selectedOption !== null}
				onChange={handleSelectChange}
				styles={customStyles}
			/>
		</div>
	);
};

export default JobStatus;
