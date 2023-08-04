import { useState } from "react";
import NotListedLocationOutlinedIcon from "@mui/icons-material/NotListedLocationOutlined";

const Experience = ({ userData, inputExperience }) => {
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
					<div className="w-full h-12 options carousel carousel-vertical bg-pri-100 rounded-md">
						{options.map((option) => (
							<div
								key={option}
								className={`carousel-item flex px-2 justify-between hover:bg-pri-200 ${
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
