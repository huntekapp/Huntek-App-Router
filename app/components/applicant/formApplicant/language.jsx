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

const Languagess = ({ userData, handleChange, inputLanguages }) => {
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

	const handleSelectChange = (selectedOption) => {
		setSelectedOption(selectedOption);
	};

	useEffect(() => {
		if (!selectedOption.length) {
			setLang([]);
			handleChange({
				target: {
					name: "languages",
					value: selectedOption ? lang : "",
				},
			});
		} else if (selectedOption.length < lang.length) {
			const selectValues = selectedOption.map((option) => option.value);
			const langValues = lang.map((option) => option.lang);
			const removed = langValues.filter((lang) => !selectValues.includes(lang));
			if (removed.length) {
				const newLang = lang.filter((opt) => !removed.includes(opt.lang));
				setLang(newLang);
				handleChange({
					target: {
						name: "languages",
						value: selectedOption ? newLang : "",
					},
				});
			}
		} else {
			selectedOption.map((opt) => {
				setLang([...lang, { lang: opt.value, level: "" }]);
				handleChange({
					target: {
						name: "languages",
						value: selectedOption ? lang : "",
					},
				});
			});
		}
	}, [selectedOption]);

	const handleRating = (event) => {
		const { name, value } = event.target;
		const updateLang = lang[name];
		updateLang.level = value;
		const updateArr = [...lang];
		updateArr[name] = updateLang;
		setLang(updateArr);
		handleChange({
			target: {
				name: "languages",
				value: selectedOption ? lang : "",
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
					{lang.map((opt, index) => {
						return (
							<div key={index} className="w-full h-8 flex flex-row justify-between items-center">
								<p>{opt.lang}</p>
								<div className="flex">
									{opt.level}
									<span className="rating">
										<input type="radio" name={index} value={""} className="hidden" checked={opt.level === ""} />
										<input
											type="radio"
											name={index}
											value={"Básico"}
											className="mask mask-star bg-pri hover:scale-110"
											checked={opt.level === "Básico"}
											onChange={handleRating}
										/>
										<input
											type="radio"
											name={index}
											value={"Intermedio"}
											className="mask mask-star bg-pri hover:scale-110"
											checked={opt.level === "Intermedio"}
											onChange={handleRating}
										/>
										<input
											type="radio"
											name={index}
											value={"Avanzado"}
											className="mask mask-star bg-pri hover:scale-110"
											checked={opt.level === "Avanzado"}
											onChange={handleRating}
										/>
										<input
											type="radio"
											name={index}
											value={"Nativo"}
											className="mask mask-star bg-pri hover:scale-110"
											checked={opt.level === "Nativo"}
											onChange={handleRating}
										/>
									</span>
								</div>
							</div>
						);
					})}
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Languagess;
