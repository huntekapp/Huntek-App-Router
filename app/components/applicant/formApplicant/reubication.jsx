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

const Reubication = ({ userData, handleChange, inputReubication }) => {
	const options = ["Sí, podría reubicarme", "No, no podría reubicarme"];

	const selectOptions = options.map((reubication) => ({ value: reubication, label: reubication }));

	const [selectedOption, setSelectedOption] = useState(null);

	const handleSelectChange = (selectedOption) => {
		setSelectedOption(selectedOption);
		handleChange({
			target: {
				name: "reubication",
				value: selectedOption ? selectedOption.value : "",
			},
		});
	};

	return (
		<div className="w-full mb-2">
			<label htmlFor="reubication" className="ml-2 font-semibold">
				¿Podrías reubicarte en otra ciudad?
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
				name="reubication"
				value={selectedOption}
				options={selectOptions}
				menuPlacement="auto"
				placeholder={userData.reubication ? userData.reubication : "Selecciona una respuesta"}
				isDisabled={!inputReubication}
				isClearable={selectedOption !== null}
				onChange={handleSelectChange}
				styles={customStyles}
			/>
		</div>
	);
};

export default Reubication;
