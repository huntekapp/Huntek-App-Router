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
	}),
};

const Availability = ({ userData, handleChange, inputAvailability, setOpen }) => {
	const options = ["Full time", "Part time"];

	const [selectedOption, setSelectedOption] = useState(null);
	const selectOptions = options.map((availability) => ({ value: availability, label: availability }));

	const path = usePathname();
	useEffect(() => {
		if (path === "/applicant/profileExtend") {
			setSelectedOption({ value: userData.availability, label: userData.availability });
		}
	}, [userData]);

	const handleSelectChange = (selectedOption) => {
		setSelectedOption(selectedOption);
		handleChange({
			target: {
				name: "availability",
				value: selectedOption ? selectedOption.value : "",
			},
		});
	};

	return (
		<div className="w-full">
			<label htmlFor="availability" className="mr-2 font-semibold">
				¿Qué disponibilidad tienes?
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
				name="availability"
				value={selectedOption}
				options={selectOptions}
				menuPlacement="auto"
				placeholder="Selecciona una respuesta"
				isDisabled={!inputAvailability}
				isClearable={selectedOption !== null}
				onChange={handleSelectChange}
				onMenuOpen={() => path === "/applicant/profileExtend" && setOpen(true)}
				onMenuClose={() => path === "/applicant/profileExtend" && setOpen(false)}
				styles={customStyles}
				required
			/>
		</div>
	);
};

export default Availability;
