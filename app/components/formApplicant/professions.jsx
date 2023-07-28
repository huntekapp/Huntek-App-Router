import Image from "next/image";
import { useState } from "react";
const Profession = ({ userData, inputProf }) => {
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
	const [selectedOptions, setSelectedOptions] = useState([]);

	const handleOptionClick = (option) => {
		if (selectedOptions.includes(option)) {
			setSelectedOptions((prevSelected) => prevSelected.filter((item) => item !== option));
		} else {
			setSelectedOptions((prevSelected) => [...prevSelected, option]);
		}
	};
	userData.profession = selectedOptions;
	return (
		<>
			<div>
				<label htmlFor="profession" className="ml-2 font-semibold">
					¿En que área te gustaria trabajar?
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
									disabled={!inputProf}
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
export default Profession;
