import { useEffect, useState } from "react";
import Select from "react-select";
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

const Languages = ({ userData, handleChange, inputLanguages }) => {
	const options = [
		"Alemán",
		"Bengalí",
		"Chino (Mandarín)",
		"Coreano",
		"Español",
		"Francés",
		"Hindi",
		"Inglés",
		"Italiano",
		"Japonés",
		"Panyabí",
		"Portugués",
		"Ruso",
		"Árabe",
	];

	const selectOptions = options.map((languages) => ({ value: languages, label: languages }));

	const [selectedOption, setSelectedOption] = useState([]);
const [lang, setLang] = useState([]);

useEffect(() => {
	if (!selectedOption.length) {
		setLang([]);
		handleChange({
			target: {
				name: "languages",
				value: selectedOption ? lang.map((opt) => `${opt.language}:${opt.rating}`) : "",
			},
		});
	} else {
		const selectValues = selectedOption.map((option) => option.value);
		const newLang = lang.filter((opt) => selectValues.includes(opt.language));
		selectValues.forEach((value) => {
			if (!newLang.some((opt) => opt.language === value)) {
				newLang.push({ language: value, rating: "" });
			}
		});
		setLang(newLang);
		handleChange({
			target: {
				name: "languages",
				value: newLang.map((opt) => `${opt.language}:${opt.rating}`),
			},
		});
	}
}, [selectedOption]);

const handleSelectChange = (selectedOption) => {
	setSelectedOption(selectedOption);
	const selectValues = selectedOption.map((option) => option.value);
	const newLang = lang.filter((opt) => selectValues.includes(opt.language));
	selectValues.forEach((value) => {
		if (!newLang.some((opt) => opt.language === value)) {
			newLang.push({ language: value, rating: "" });
		}
	});
	setLang(newLang);
	handleChange({
		target: {
			name: "languages",
			value: newLang.map((opt) => `${opt.language}:${opt.rating}`),
		},
	});
};

const handleRating = (event) => {
	const { name, value } = event.target;
	const newLang = [...lang];
	const index = newLang.findIndex((opt) => opt.language === name);
	if (index !== -1) {
		newLang[index] = { ...newLang[index], rating: value };
	}
	setLang(newLang);
	handleChange({
		target: {
			name: "languages",
			value: newLang.map((opt) => `${opt.language}:${opt.rating}`),
		},
	});
};

	return (
		<div>
			<label htmlFor="languagess" className="ml-2 font-semibold">
				¿Qué idiomas hablas?
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
				name="languages"
				value={selectedOption}
				options={selectOptions}
				menuPlacement="auto"
				placeholder="Selecciona un idioma"
				isDisabled={!inputLanguages}
				isClearable={selectedOption !== null}
				onChange={handleSelectChange}
				styles={customStyles}
			/>
			{lang.length ? (
    <div className="w-full max-h-[80px] px-4 bg-pri-100 carousel-vertical">
        {lang.map(({ language, rating }, index) => (
            <div key={index} className="w-full h-8 flex flex-row justify-between items-center">
                <p>{language}</p>
                <div className="flex">
                    {rating}
                    <span className="rating">
                        <input type="radio" name={language} value={""} className="hidden" checked={rating === ""} />
                        <input
                            type="radio"
                            name={language}
                            value={"Básico"}
                            className="mask mask-star bg-pri hover:scale-110"
                            checked={rating === "Básico"}
                            onChange={handleRating}
                        />
                        <input
                            type="radio"
                            name={language}
                            value={"Intermedio"}
                            className="mask mask-star bg-pri hover:scale-110"
                            checked={rating === "Intermedio"}
                            onChange={handleRating}
                        />
                        <input
                            type="radio"
                            name={language}
                            value={"Avanzado"}
                            className="mask mask-star bg-pri hover:scale-110"
                            checked={rating === "Avanzado"}
                            onChange={handleRating}
                        />
                        <input
                            type="radio"
                            name={language}
                            value={"Nativo"}
                            className="mask mask-star bg-pri hover:scale-110"
                            checked={rating === "Nativo"}
                            onChange={handleRating}
                        />
                    </span>
                </div>
            </div>
        ))}
    </div>
) : (
    ""
)}

		</div>
	);
};

export default Languages;
