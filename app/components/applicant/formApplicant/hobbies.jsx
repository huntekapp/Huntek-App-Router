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

const Hobbies = ({ userData, handleChange, inputHobbies, setOpen }) => {
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

	const [selectedOption, setSelectedOption] = useState([]);
	const selectOptions = options.map((hobbies) => ({ value: hobbies, label: hobbies }));

	const path = usePathname();
	useEffect(() => {
		if (path === "/applicant/profileExtend") {
			const oldData = [];
			userData.hobbies.length &&
				userData.hobbies.map((hob) => {
					oldData.push({ value: hob, label: hob });
				});
			setSelectedOption(oldData);
		}
	}, [userData]);

	const handleSelectChange = (selectedOption) => {
		setSelectedOption(selectedOption);
		handleChange({
			target: {
				name: "hobbies",
				value: selectedOption.map((opt) => opt.value),
			},
		});
	};

	return (
		<div className="w-full">
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
				placeholder="Selecciona un hobbie"
				isDisabled={!inputHobbies}
				isClearable={selectedOption !== null}
				onChange={handleSelectChange}
				onMenuOpen={() => path === "/applicant/profileExtend" && setOpen(true)}
				onMenuClose={() => path === "/applicant/profileExtend" && setOpen(false)}
				styles={customStyles}
			/>
		</div>
	);
};
export default Hobbies;
