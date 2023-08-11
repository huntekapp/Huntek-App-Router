import { useState, useEffect } from "react";
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

const JobCareer = ({jobProps, handleChange}) => {
	const options = [
		"Administración De Empresas",
		"Administración Pública",
		"Antropología",
		"Arqueología",
		"Arquitectura",
		"Artes Escénicas",
		"Bellas Artes",
		"Biblioteconomía",
		"Biología",
		"Bioquímica",
		"Biotecnología",
		"Cine",
		"Ciencia y Tecnología de los Alimentos",
		"Ciencias Biomédicas",
		"Ciencias Ambientales",
		"Ciencias del Mar",
		"Ciencias Políticas y de la Administración",
		"Ciencias de la Computación",
		"Ciencias de la Información",
		"Ciencias Forenses",
		"Ciencias Policiales",
		"Comercio",
		"Comercio Internacional",
		"Comunicación Audiovisual",
		"Conservación y Restauración de Bienes Culturales",
		"Contabilidad",
		"Criminología",
		"Danza",
		"Deporte",
		"Derecho",
		"Diseño",
		"Diseño Gráfico",
		"Diseño de Interiores",
		"Diseño de Moda",
		"Diseño y Desarrollo de Videojuegos",
		"Economía",
		"Economía Ambiental",
		"Educación Física",
		"Educación Infantil",
		"Educación Primaria",
		"Educación Social",
		"Enfermería",
		"Enología",
		"Estadística",
		"Estadística Aplicada",
		"Estudios Árabes e Islámicos",
		"Estudios de Asia y África",
		"Estudios de Asia Oriental",
		"Estudios Literarios",
		"Estudios de Género",
		"Farmacia",
		"Física",
		"Física Nuclear",
		"Filosofía",
		"Finanzas",
		"Fisioterapia",
		"Fotografía",
		"Gastronomía",
		"Genética",
		"Geografía",
		"Geología",
		"Gestión Ambiental",
		"Gestión de Recursos Humanos",
		"Gestión Empresarial",
		"Historia",
		"Historia del Arte",
		"Historia y Ciencias de la Música",
		"Historia y Patrimonio",
		"Humanidades",
		"Ingeniería Aeronáutica",
		"Ingeniería Agrícola",
		"Ingeniería Agroalimentaria",
		"Ingeniería Agroambiental",
		"Ingeniería Biomédica",
		"Ingeniería Civil",
		"Ingeniería de Computadores",
		"Ingeniería de Diseño Industrial y Desarrollo del Producto",
		"Ingeniería de Edificación",
		"Ingeniería de la Energia",
		"Ingeniería de Materiales",
		"Ingeniería de Minas y Energía",
		"Ingeniería de Organización Industrial",
		"Ingeniería de Sistemas de Telecomunicación",
		"Ingeniería de Sonido e Imagen",
		"Ingeniería del Software",
		"Ingeniería Eléctrica",
		"Ingeniería Eléctrica y Electrónica",
		"Ingeniería Electrónica y Automática",
		"Ingeniería Forestal",
		"Ingeniería Geológica",
		"Ingeniería Geomática y Topografía",
		"Ingeniería Industrial",
		"Ingeniería Informática",
		"Ingeniería Marítima",
		"Ingeniería Mecánica",
		"Ingeniería Mecatrónica",
		"Ingeniería Náutica",
		"Ingeniería Naval y Oceánica",
		"Ingeniería Petrolera",
		"Ingeniería Química",
		"Ingeniería Telemática",
		"Ingeniería Textil",
		"Logopedia",
		"Lengua Española y sus Literaturas",
		"Lengua y Literatura Catalanas",
		"Lengua y Literatura Gallegas",
		"Lengua y Literatura Vascas",
		"Lenguas Modernas",
		"Lenguas y Literaturas Clásicas",
		"Lingüística y Lenguas Aplicadas",
		"Marketing",
		"Marketing Digital",
		"Matemáticas",
		"Medicina",
		"Medicina Veterinaria",
		"Multimedia",
		"Música",
		"Neurociencia",
		"Nutrición y Dietética",
		"Oceanografía",
		"Odontología",
		"Óptica y Optometría",
		"Pedagogía",
		"Periodismo",
		"Periodismo Deportivo",
		"Psicología",
		"Publicidad y Relaciones Públicas",
		"Química",
		"Recursos Humanos",
		"Relaciones internacionales",
		"Relaciones Laborales",
		"Seguridad Informática",
		"Sociología",
		"Terapia Física",
		"Terapia Ocupacional",
		"Trabajo Social",
		"Trabajo Social Comunitario",
		"Traducción",
		"Turismo",
		"Zoología",
	];

	const selectOptions = options.map((career) => ({ value: career, label: career }));

	const [selectedOption, setSelectedOption] = useState([]);

	useEffect(() => {
		const car = selectedOption.map((opt) => opt.value);
		handleChange({
			target: {
				name: "career", 
				value: {
					value: selectedOption ? car : "",
					determinant: true
				}
			},
		});
	}, [selectedOption]);

	const handleSelectChange = (selectedOption) => {
		setSelectedOption(selectedOption);
	};

	return (
		<div className="w-full mb-2">
			<label htmlFor="career" className="ml-2 font-semibold">
				Carrera o especialidad
				<span className="dropdown dropdown-hover font-normal">
					<div tabIndex={0}>
						<NotListedLocationOutlinedIcon className="pb-1" />
					</div>
					<div
						tabIndex={0}
						className="w-fit px-2 py-1 dropdown-content -translate-x-20 z-[1] shadow bg-sec text-pri text-xs rounded-box">
						Máximo 4
					</div>
				</span>
			</label>
			<Select
				isMulti
				name="career"
				value={selectedOption}
				options={selectOptions}
				menuPlacement="auto"
				placeholder="Selecciona hasta 4 carreras"
				isClearable={selectedOption !== null}
				onChange={handleSelectChange}
				styles={customStyles}
			/>
		</div>
	);
};
export default JobCareer;
