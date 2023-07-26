import Image from "next/image";
import {useState} from "react";

const Availability = ({userData, handleChange, inputAvailability}) => {
	const options = ["Full time", "Part time"];
	const [selectedOption, setSelectedOption] = useState(null);

	const handleOptionClick = (option) => {
		setSelectedOption(option);
	};

	userData.availability = selectedOption;

	return (
		<div className="w-full mb-2">
			<label htmlFor="availability" className="ml-2 font-semibold">
				¿Qué disponibilidad tienes para trabajar?
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
								name="availability"
								disabled={!inputAvailability}
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

export default Availability;
