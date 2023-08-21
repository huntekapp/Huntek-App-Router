import Select from "react-select";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
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
	singleValue: (provided, state) => ({
		...provided,
		color: state.isDisabled ? "#888" : "#046255",
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
		color: state.isSelected ? "#fff" : "#000",
		"&:hover": {
			backgroundColor: "#c7dcd9",
			color: "#000",
		},
		cursor: "pointer",
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
	}),
};

const University = ({ userData, handleChange, inputUniversity, setOpen }) => {
	const options = [
		"Anáhuac",
		"Benemérita Universidad Autónoma de Puebla (BUAP)",
		"Centro de Enseñanza Técnica y Superior (CETYS)",
		"Centro de Estudios Universitarios de Xochicalco (CEUX)",
		"Centro de Investigación y Docencia Económicas (CIDE)",
		"Colegio de México (COLMEX)",
		"El Colegio de Sonora (COLSON)",
		"Escuela Bancaria y Comercial (EBC)",
		"Instituto Politécnico Nacional (IPN)",
		"Instituto Tecnológico Autónomo de México (ITAM)",
		"Instituto Tecnológico de Chihuahua (UTCH)",
		"Instituto Tecnológico de Hermosillo (ITH)",
		"Instituto Tecnológico de La Paz (ITL)",
		"Instituto Tecnológico de Querétaro (ITQ)",
		"Instituto Tecnológico de Saltillo (ITS)",
		"Instituto Tecnológico de Sonora (ITSON)",
		"Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)",
		"Instituto Tecnológico y de Estudios Superiores de Occidente (ITESO)",
		"Instituto de Estudios Universitarios (IEU)",
		"Universidad Autónoma Agraria Antonio Narro (UAAAN)",
		"Universidad Autónoma Benito Juárez de Oaxaca (UABJO)",
		"Universidad Autónoma Metropolitana (UAM)",
		"Universidad Autónoma de Aguascalientes (UAA)",
		"Universidad Autónoma de Baja California (UABC)",
		"Universidad Autónoma de Baja California Sur (UABCS)",
		"Universidad Autónoma de Campeche (UACAM)",
		"Universidad Autónoma de Chapingo (UACh)",
		"Universidad Autónoma de Chiapas (UNACH)",
		"Universidad Autónoma de Chihuahua (UACH)",
		"Universidad Autónoma de Ciudad Juárez (UACJ)",
		"Universidad Autónoma de Ciudad de México (UACM)",
		"Universidad Autónoma de Coahuila (UADEC)",
		"Universidad Autónoma de Guadalajara (UAG)",
		"Universidad Autónoma de La Laguna (UAL)",
		"Universidad Autónoma de Nayarit (UAN)",
		"Universidad Autónoma de Nuevo León (UANL)",
		"Universidad Autónoma de Occidente (UAdeO)",
		"Universidad Autónoma de Querétaro (UAQ)",
		"Universidad Autónoma de San Luis de Potosí (UASLP)",
		"Universidad Autónoma de Sinaloa (UAS)",
		"Universidad Autónoma de Tamaulipas (UAT)",
		"Universidad Autónoma de Yucatán (UADY)",
		"Universidad Autónoma de Zacatecas (UAZ)",
		"Universidad Autónoma del Carmen (UNACAR)",
		"Universidad Autónoma del Estado de Hidalgo (UAEH)",
		"Universidad Autónoma del Estado de Morelos (UAEM)",
		"Universidad Autónoma del Estado de México (UAEMEX)",
		"Universidad Cristóbal Colón (UCC)",
		"Universidad Iberoamericana (UIA - IBERO)",
		"Universidad Interamericana para el Desarrollo (UNID)",
		"Universidad Intercontinental (UIC)",
		"Universidad Internacional (UNINTER)",
		"Universidad Juárez del Estado de Durango (UJED)",
		"Universidad La Salle (ULSA)",
		"Universidad La Salle Benavente (ULSA - Puebla)",
		"Universidad La Salle Pachuca (ULSA - Pachuca)",
		"Universidad Latina de América (UNLA)",
		"Universidad Latinoamericana (ULA)",
		"Universidad Metropolitana de Monterrey (UMM)",
		"Universidad Mexicana (UNIMEX)",
		"Universidad Michoacana de San Nicolás de Hidalgo (UMSNH)",
		"Universidad Nacional Autónoma de México (UNAM)",
		"Universidad Panamericana (UP)",
		"Universidad Pedagógica Nacional (UPN)",
		"Universidad Popular Autónoma del Estado de Puebla (UAPAEP)",
		"Universidad Regiomontana (U-ERRE)",
		"Universidad TecMilenio (UTM)",
		"Universidad Tecnológica Metropolitana (UTM)",
		"Universidad Tecnológica Mixteca (UTM)",
		"Universidad Tecnológica de Aguascalientes (UTAGS)",
		"Universidad Tecnológica de León (UTL)",
		"Universidad Tecnológica de México (UNITEC)",
		"Universidad Tecnológica de Querétaro (UTEQ)",
		"Universidad Vasco de Quiroga (UVAQ)",
		"Universidad Veracruzana (UV)",
		"Universidad de Anáhuac Mayab (UA)",
		"Universidad de Anáhuac del Norte (UAN)",
		"Universidad de Colima (UCOL)",
		"Universidad de España y México (UEM)",
		"Universidad de Guadalajara (UDG)",
		"Universidad de Guanajuato (UGTO)",
		"Universidad de Juárez Autónoma de Tabasco (UJAT)",
		"Universidad de Montemorelos (UM)",
		"Universidad de Monterrey (UDEM)",
		"Universidad de Quintana Roo (UQROO)",
		"Universidad de Sonora (USON)",
		"Universidad de las Américas Puebla (UDLA)",
		"Universidad del Caribe (UNICARIBE)",
		"Universidad del Claustro de Sor Juana (UCJS)",
		"Universidad del Valle de Atemajac (UNIVA)",
		"Universidad del Valle de México (UVM)",
		"Otra",
	];

	const [selectedOption, setSelectedOption] = useState(null);
	const selectOptions = options.map((studies) => ({ value: studies, label: studies }));

	const path = usePathname();
	useEffect(() => {
		if (path === "/applicant/profileExtend") {
			setSelectedOption({ value: userData.university, label: userData.university });
		}
	}, [userData]);

	const handleSelectChange = (selectedOption) => {
		setSelectedOption(selectedOption);
		handleChange({
			target: {
				name: "university",
				value: selectedOption ? selectedOption.value : "",
			},
		});
	};

	return (
		<div className="w-full">
			<label htmlFor="university" className="ml-2 font-semibold">
				{userData.academic === "Egresado" ? "¿Dónde estudiaste?" : "¿Dónde estudias?"}
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
				name="studies"
				value={selectedOption}
				options={selectOptions}
				menuPlacement="auto"
				placeholder="Selecciona una institución"
				isDisabled={!inputUniversity}
				isClearable={selectedOption !== null}
				onChange={handleSelectChange}
				onMenuOpen={() => path === "/applicant/profileExtend" && setOpen(true)}
				onMenuClose={() => path === "/applicant/profileExtend" && setOpen(false)}
				styles={customStyles}
			/>
		</div>
	);
};
export default University;
