import { useState } from "react";
import NotListedLocationOutlinedIcon from "@mui/icons-material/NotListedLocationOutlined";

const Hobbies = ({ userData, inputHobbies }) => {
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
	const [selectedOptions, setSelectedOptions] = useState([]);

	const handleOptionClick = (option) => {
		if (selectedOptions.includes(option)) {
			setSelectedOptions((prevSelected) => prevSelected.filter((item) => item !== option));
		} else {
			setSelectedOptions((prevSelected) => [...prevSelected, option]);
		}
	};
	userData.hobbies = selectedOptions;
	return (
		<>
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
				<div className="custom-select">
					<div className="w-full h-[70px] options carousel carousel-vertical bg-pri-100 rounded-md">
						{options.map((option) => (
							<div key={option} className="carousel-item px-4 flex justify-between hover:bg-pri-200">
								<span>{option}</span>
								<input
									type="checkbox"
									disabled={!inputHobbies}
									checked={selectedOptions.includes(option)}
									onChange={() => handleOptionClick(option)}
									className="checkbox checkbox-sm"
								/>
							</div>
						))}
					</div>
					<div className="selected-option">
						{selectedOptions.length === 0 ? "Selecciona una opción" : selectedOptions.join(", ")}
					</div>
				</div>
			</div>
		</>
	);
};
export default Hobbies;
