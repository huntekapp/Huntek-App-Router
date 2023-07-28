import { useState } from "react";
import NotListedLocationOutlinedIcon from "@mui/icons-material/NotListedLocationOutlined";

const Availability = ({ userData, handleChange, inputAvailability }) => {
	const options = ["Full time", "Part time"];
	const [selectedOption, setSelectedOption] = useState(null);

	const handleOptionClick = (option) => {
		setSelectedOption(option);
	};

	userData.availability = selectedOption;

	return (
		<div className="w-full mb-2">
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
			<div className="custom-select">
				<div className="w-full h-fit options bg-pri-100 rounded-md">
					{options.map((option) => (
						<div
							key={option}
							className={`carousel-item px-4 flex justify-between hover:bg-pri-200 ${
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
