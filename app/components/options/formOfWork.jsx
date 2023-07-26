import Image from "next/image";
import {useState} from "react";

const FormOfWork = ({userData, handleChange, inputFormOfWork}) => {
	const options = ["Presencial", "Híbrido", "Remoto"];
	const [selectedOption, setSelectedOption] = useState(null);

	const handleOptionClick = (option) => {
		setSelectedOption(option);
	};

	userData.form_of_work = selectedOption;

	return (
		<div className="w-full mb-2">
			<label htmlFor="form_of_work" className="ml-2 font-semibold">
				¿Con qué forma de trabajo estás más cómodo?
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
			<select
				name="form_of_work"
				disabled={!inputFormOfWork}
				onChange={(event) => handleChange(event)}
				className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none">
				<option value="select" hidden>
					Selecciona una opción
				</option>
				<option value="Remoto">Remoto</option>
				<option value="Presencial">Presencial</option>
				<option value="Híbrido">Híbrido</option>
			</select>
			<div className="custom-select">
				<div className="w-full h-fit options bg-pri-100 px-2 rounded-md">
					{options.map((option) => (
						<div
							key={option}
							className={`carousel-item flex justify-between hover:bg-pri-200 ${
								selectedOption === option ? "bg-pri-200" : ""
							}`}
							onClick={() => handleOptionClick(option)}>
							<span>{option}</span>
							<input
								type="radio"
								name="form_of_work"
								value={userData.form_of_work}
								disabled={!inputFormOfWork}
								checked={selectedOption === option}
								onChange={() => handleOptionClick(option)}
								className="radio radio-sm"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default FormOfWork;
