// import Image from "next/image";
// const Hobbies = ({userData, handleHobbies, handleDeleteHobbies}) => {
// 	return (
// 		<div className="w-full mb-2">
// 			<label htmlFor="hobbies" className="ml-2 font-semibold">
// 				¿Cuáles son tus hobbies?
// 				<div className="group inline-block">
// 					<Image
// 						src="/utils/asterisk_huntek.svg"
// 						width={16}
// 						height={16}
// 						alt="asterisco"
// 						className="ml-2 aspect-square"
// 					/>
// 					<div className="opacity-0 group-hover:opacity-100 bg-pri text-sec text-center absolute p-1 rounded-md  flex justify-center items-center transition duration-300">
// 						<span>Requerido</span>
// 					</div>
// 				</div>
// 			</label>
// 			<select
// 				name="hobbies"
// 				multiple
// 				value={userData.hobbies}
// 				onChange={(event) => handleHobbies(event)}
// 				className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none scrollnice">
// 				<option value="select" hidden>
// 					Selecciona una opción
// 				</option>
// 				{[]}
// 			<div className="flex flex-row justify-start">
// 				{userData.hobbies?.map((item, index) => {
// 					return (
// 						<div key={index} className="flex flex-row justify-start">
// 							<p>{item} </p>
// 							<button
// 								onClick={() => {
// 									handleDeleteHobbies(item);
// 								}}>
// 								<Image src="utils/x_huntek.svg" width={16} height={16} alt="x" />
// 							</button>
// 						</div>
// 					);
// 				})}
// 			</div>
// 		</div>
// 	);
// };
// export default Hobbies;

import Image from "next/image";
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
