import Image from "next/image";
import { useState } from "react";
const Languages = ({ userData, inputLanguages }) => {
	const options = [
		"Ingles básico",
		"Ingles intermedio",
		"Ingles avanzado",
		"Ingles nativo",
		"Español básico",
		"Español intermedio",
		"Español avanzado",
		"Español nativo",
		"Frances básico",
		"Frances intermedio",
		"Frances avanzado",
		"Frances nativo",
		"Portugues básico",
		"Portugues intermedio",
		"Portugues avanzado",
		"Portugues nativo",
		"Italiano básico",
		"Italiano intermedio",
		"Italiano avanzado",
		"Italiano nativo",
		"Chino básico",
		"Chino intermedio",
		"Chino avanzado",
		"Chino nativo",
		"Mandarin básico",
		"Mandarin intermedio",
		"Mandarin avanzado",
		"Mandarin nativo",
	];
	const [selectedOptions, setSelectedOptions] = useState([]);

	const handleOptionClick = (option) => {
		if (selectedOptions.includes(option)) {
			setSelectedOptions((prevSelected) => prevSelected.filter((item) => item !== option));
		} else {
			setSelectedOptions((prevSelected) => [...prevSelected, option]);
		}
	};
	userData.languages = selectedOptions;
	return (
		<>
			<div>
				<label htmlFor="languages" className="ml-2 font-semibold">
					¿Que idiomas hablas?
					<div className="group inline-block">
						<Image
							src="/utils/asterisk_huntek.svg"
							width={16}
							height={16}
							alt="asterisco"
							className="ml-2 aspect-square"
						/>
						<div className="opacity-0 group-hover:opacity-100 bg-pri text-sec text-center absolute p-1 rounded-md  flex justify-center items-center transition duration-300">
							<span>Requerido</span>
						</div>
					</div>
				</label>
				<div className="custom-select">
					<div className="w-full h-24 options carousel carousel-vertical bg-pri-100 rounded-md">
						{options.map((option) => (
							<div key={option} className="carousel-item px-4 flex justify-between hover:bg-pri-200">
								<span>{option}</span>
								<input
									type="checkbox"
									disabled={!inputLanguages}
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
export default Languages;
