import Image from "next/image";
import {useState} from "react";

const Experience = ({userData, inputExperience}) => {
	const options = ["0", "1-4", "4-6", "6-9", "10-15"];
	const [selectedOption, setSelectedOption] = useState(null);

	const handleOptionClick = (option) => {
		setSelectedOption(option);
	};

	userData.years_xp = selectedOption;

	return (
		<>
			<div>
				<label htmlFor="years_xp" className="ml-2 font-semibold">
					Selecciona tus años de experiencia
					<div className="group inline-block">
						<Image
							src="/utils/asterisk_huntek.svg"
							width={16}
							height={16}
							alt="asterisco"
							className="ml-2 aspect-square"
						/>
						<div className="opacity-0 group-hover:opacity-100 bg-pri text-sec text-center absolute p-1 rounded-md flex justify-center items-center transition duration-300">
							<span>Requerido</span>
						</div>
					</div>
				</label>
				<div className="custom-select">
					<div className="w-full h-20 options carousel carousel-vertical bg-pri-100 px-2 rounded-md">
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
									name="years_xp"
									disabled={!inputExperience}
									checked={selectedOption === option}
									onChange={() => handleOptionClick(option)}
									className="radio radio-sm"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Experience;
