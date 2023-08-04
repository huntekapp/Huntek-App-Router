"use client";
import Image from "next/image";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import PhoneIcon from "@mui/icons-material/Phone";
import MapIcon from "@mui/icons-material/Map";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import AbcIcon from "@mui/icons-material/Abc";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import AccountBalanceSharpIcon from "@mui/icons-material/AccountBalanceSharp";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HourglassTopRoundedIcon from "@mui/icons-material/HourglassTopRounded";
import PhonelinkRoundedIcon from "@mui/icons-material/PhonelinkRounded";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import SailingIcon from "@mui/icons-material/Sailing";
import TranslateIcon from "@mui/icons-material/Translate";
import FlagIcon from "@mui/icons-material/Flag";
import Studies from "./formApplicant/studies";
import Career from "./formApplicant/career";
import OptionsCity from "./formApplicant/optionsCity";
import Genres from "./formApplicant/genres";
import Phone from "./formApplicant/phone";
import Birthdate from "./formApplicant/birthdate";
import Reubication from "./formApplicant/reubication";
import Profession from "./formApplicant/professions";
import Experience from "./formApplicant/yearsOfExperience";
import Income from "./formApplicant/income";
import Availability from "./formApplicant/availability";
import FormOfWork from "./formApplicant/formOfWork";
import PhotoUpload from "./formApplicant/photoUpload";
import Languages from "./formApplicant/language";
import Hobbies from "./formApplicant/hobbies";
import Country from "./formApplicant/country";
import Academic from "./formApplicant/academic";
import { useGetInfoUserQuery } from "../globalstore/services/user-info/useInfoUser";

const ProfileExt = () => {
	const { data, isError, isLoading, error } = useGetInfoUserQuery();
	const [userData, setUserData] = useState({
		mail: "",
		phone: "",
		birthdate: "",
		genre: "",
		country: "",
		city: "",
		reubication: "",
		languages: [],
		profession: [],
		studies: "",
		university: "",
		degree: "",
		hobbies: [],
		years_xp: "",
		income: "",
		form_of_work: "",
		availability: "",
	});

	const [inputPhotoUpload, setInputPhotoUpload] = useState(false);
	const handleInputPhotoUpload = () => {
		setInputPhotoUpload(!inputPhotoUpload);
	};

	const [inputStudies, setInputStudies] = useState(false);
	const handleInputStudies = () => {
		setInputStudies(!inputStudies);
	};

	const [inputCareer, setInputCareer] = useState(false);
	const handleInputCareer = () => {
		setInputCareer(!inputCareer);
	};

	const [inputCity, setInputCity] = useState(false);
	const handleInputCity = () => {
		setInputCity(!inputCity);
	};

	const [inputGenre, setInputGenre] = useState(false);
	const handleInputGenre = () => {
		setInputGenre(!inputGenre);
	};

	const [inputPhone, setInputPhone] = useState(false);
	const handleInputPhone = () => {
		setInputPhone(!inputPhone);
	};

	const [inputBirthdate, setInputBirthdate] = useState(false);
	const handleInputBirthdate = () => {
		setInputBirthdate(!inputBirthdate);
	};

	const [inputReubication, setInputReubication] = useState(false);
	const handleInputReubication = () => {
		setInputReubication(!inputReubication);
	};

	const [inputProf, setInputProf] = useState(false);
	const handleInputProf = () => {
		setInputProf(!inputProf);
	};

	const [inputExperience, setInputExperience] = useState(false);
	const handleInputExperience = () => {
		setInputExperience(!inputExperience);
	};

	const [inputIncome, setInputIncome] = useState(false);
	const handleInputIncome = () => {
		setInputIncome(!inputIncome);
	};

	const [inputAvailability, setInputAvailability] = useState(false);
	const handleInputAvailability = () => {
		setInputAvailability(!inputAvailability);
	};

	const [inputFormOfWork, setInputFormOfWork] = useState(false);
	const handleInputFormOfWork = () => {
		setInputFormOfWork(!inputFormOfWork);
	};

	const [inputLanguages, setInputLanguages] = useState(false);
	const handleInputLanguages = () => {
		setInputLanguages(!inputLanguages);
	};

	const [inputHobbies, setInputHobbies] = useState(false);
	const handleInputHobbies = () => {
		setInputHobbies(!inputHobbies);
	};

	const [inputCountry, setInputCountry] = useState(false);
	const handleInputCountry = () => {
		setInputCountry(!inputCountry);
	};

	const [inputAcademic, setInputAcademic] = useState(false);
	const handleInputAcademic = () => {
		setInputAcademic(!inputAcademic);
	};

	const handleChange = (event) => {
		event.preventDefault();
		setUserData({
			...userData,
			[event.target.name]: event.target.value,
		});
	};

	const [active, setActive] = useState("p");

	if (isLoading) {
		return (
			<div className="container">
				<div className="loader2"></div>
			</div>
		);
	}

	return (
		<main className="w-full h-[90%] flex flex-col lg:flex-row justify-around items-center">
			<section className="w-full lg:w-1/3 h-2/5 lg:h-5/6 flex flex-col justify-around items-center">
				<article className="w-11/12 flex flex-col justify-center items-center">
					<div></div>
					<div className="w-36 h-36 border-4 border-pri rounded-full shadow-lg relative">
						<Image
							src={"/images/defaultPhoto.png"}
							alt="avatar"
							fill={true}
							loading={"eager"}
							className="absolute object-cover rounded-full"
						/>
						<div className="flex justify-between items-center">
							<label
								htmlFor="modalPhotoUpload"
								className="w-8 h-8 bg-pri text-sec rounded-full shadow-lg grid place-content-center absolute left-[100px] top-[100px] cursor-pointer hover:bg-sec hover:text-pri">
								<CloudUploadOutlinedIcon />
							</label>
							<input type="checkbox" id="modalPhotoUpload" className="modal-toggle" />
							<div className="modal">
								<div className="modal-box bg-sec">
									<PhotoUpload handleID={data?.id} />
									<div className="modal-action">
										<button
											className="btn bg-pri text-sec focus:text-pri focus:bg-pri-100"
											onClick={handleInputPhotoUpload}>
											{inputPhotoUpload === true ? "Guardar" : "Editar"}
										</button>
										<label htmlFor="modalPhotoUpload" className="btn">
											Cerrar
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
					<h2 className="my-2 text-2xl lg:text-3xl text-black text-center font-bold line-clamp-2">
						{data?.first_name} {data?.last_name}
					</h2>
				</article>
				<article className="flex flex-col justify-start items-center">
					<h2 className="w-fit px-2 py-1 text-2xl lg:text-3xl text-sec bg-pri rounded-md">
						{userData.degree ? userData.degree : "Datos incompletos"}
					</h2>
					<p className="text-md text-gray-500 mt-2">{`${userData.mail}`}</p>
					<p className="text-sm text-gray-500 mt-2">{`Ubicación actual ${userData.city}`}</p>
				</article>
			</section>
			<article className="w-full flex flex-row justify-center lg:hidden absolute top-[46%]">
				<a
					href="#personal"
					className={`w-fit px-2 py-1 ${
						active === "p" ? "bg-pri text-sec" : "bg-pri-100 text-pri"
					} rounded-tl-lg rounded-bl-lg`}
					onClick={() => setActive("p")}>
					Personal
				</a>
				<a
					href="#laboral"
					className={`w-fit px-2 py-1 ${
						active === "l" ? "bg-pri text-sec" : "bg-pri-100 text-pri"
					} rounded-tr-lg rounded-br-lg`}
					onClick={() => setActive("l")}>
					Laboral
				</a>
			</article>
			<section className="w-full lg:w-2/3 h-3/5 lg:h-5/6 text-pri text-lg font-light flex flew-row carousel lg:grid lg:grid-cols-2 lg:gap-10">
				<article id="personal" className="w-11/12 h-[90%] px-6 carousel-item lg:h-full flex flex-col justify-between">
					<h3 className="w-full text-transparent lg:text-pri text-2xl lg:text-3xl text-center font-semibold">
						Lo esencial
					</h3>
					<div className="flex justify-between items-center">
						<label htmlFor="modalTelefono" className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<PhoneIcon /> Número de Celular
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalTelefono" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box bg-sec">
								<Phone handleChange={handleChange} userData={userData} inputPhone={inputPhone} />
								<div className="modal-action">
									<button
										className={`w-fit px-2 py-1 ${
											inputPhone ? "bg-red-500" : "bg-pri"
										} text-sec rounded-lg  hover:text-pri hover:bg-pri-100`}
										onClick={handleInputPhone}>
										{inputPhone ? "Guardar" : "Editar"}
									</button>
									<label
										htmlFor="modalTelefono"
										className="w-fit px-2 py-1 bg-gray-400 rounded-lg hover:bg-pri-100 cursor-pointer">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label htmlFor="modalGenero" className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<PersonIcon /> Género
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalGenero" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box bg-sec">
								<Genres handleChange={handleChange} userData={userData} inputGenre={inputGenre} />
								<div className="modal-action">
									<button
										className={`w-fit px-2 py-1 ${
											inputGenre ? "bg-red-500" : "bg-pri"
										} text-sec rounded-lg  hover:text-pri hover:bg-pri-100`}
										onClick={handleInputGenre}>
										{inputGenre ? "Guardar" : "Editar"}
									</button>
									<label
										htmlFor="modalGenero"
										className="w-fit px-2 py-1 bg-gray-400 rounded-lg hover:bg-pri-100 cursor-pointer">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label htmlFor="modalEdad" className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<EscalatorWarningIcon /> Fecha de Nacimiento
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalEdad" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box bg-sec">
								<Birthdate handleChange={handleChange} userData={userData} inputBirthdate={inputBirthdate} />
								<div className="modal-action">
									<button
										className={`w-fit px-2 py-1 ${
											inputBirthdate ? "bg-red-500" : "bg-pri"
										} text-sec rounded-lg  hover:text-pri hover:bg-pri-100`}
										onClick={handleInputBirthdate}>
										{inputBirthdate ? "Guardar" : "Editar"}
									</button>
									<label
										htmlFor="modalEdad"
										className="w-fit px-2 py-1 bg-gray-400 rounded-lg hover:bg-pri-100 cursor-pointer">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label
							htmlFor="modalNacimiento"
							className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<FlagIcon /> Lugar de Nacimiento
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalNacimiento" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box bg-sec">
								<Country handleChange={handleChange} userData={userData} inputCountry={inputCountry} />
								<div className="modal-action">
									<button
										className={`w-fit px-2 py-1 ${
											inputCountry ? "bg-red-500" : "bg-pri"
										} text-sec rounded-lg  hover:text-pri hover:bg-pri-100`}
										onClick={handleInputCountry}>
										{inputCountry ? "Guardar" : "Editar"}
									</button>
									<label
										htmlFor="modalNacimiento"
										className="w-fit px-2 py-1 bg-gray-400 rounded-lg hover:bg-pri-100 cursor-pointer">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label htmlFor="modalStatus" className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<AbcIcon /> Situación Académica
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalStatus" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box bg-sec">
								<Academic handleChange={handleChange} userData={userData} inputAcademic={inputAcademic} />
								<div className="modal-action">
									<button
										className={`w-fit px-2 py-1 ${
											inputAcademic ? "bg-red-500" : "bg-pri"
										} text-sec rounded-lg  hover:text-pri hover:bg-pri-100`}
										onClick={handleInputAcademic}>
										{inputAcademic ? "Guardar" : "Editar"}
									</button>
									<label
										htmlFor="modalStatus"
										className="w-fit px-2 py-1 bg-gray-400 rounded-lg hover:bg-pri-100 cursor-pointer">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label htmlFor="modalUniv" className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<AccountBalanceSharpIcon /> Institución de Estudios
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalUniv" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box bg-sec flex flex-col">
								<Studies handleChange={handleChange} userData={userData} inputStudies={inputStudies} />
								<div className="modal-action">
									<button
										className={`w-fit px-2 py-1 ${
											inputStudies ? "bg-red-500" : "bg-pri"
										} text-sec rounded-lg  hover:text-pri hover:bg-pri-100`}
										onClick={handleInputStudies}>
										{inputStudies ? "Guardar" : "Editar"}
									</button>
									<label
										htmlFor="modalUniv"
										className="w-fit px-2 py-1 bg-gray-400 rounded-lg hover:bg-pri-100 cursor-pointer">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label
							htmlFor="modalQueEstudias"
							className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<SchoolRoundedIcon /> Estudios
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalQueEstudias" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box bg-sec">
								<Career handleChange={handleChange} userData={userData} inputCareer={inputCareer} />
								<div className="modal-action">
									<button
										className={`w-fit px-2 py-1 ${
											inputCareer ? "bg-red-500" : "bg-pri"
										} text-sec rounded-lg  hover:text-pri hover:bg-pri-100`}
										onClick={handleInputCareer}>
										{inputCareer ? "Guardar" : "Editar"}
									</button>
									<label
										htmlFor="modalQueEstudias"
										className="w-fit px-2 py-1 bg-gray-400 rounded-lg hover:bg-pri-100 cursor-pointer">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label htmlFor="modalIdiomas" className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<TranslateIcon /> Idiomas
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalIdiomas" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box bg-sec flex flex-col">
								<Languages handleChange={handleChange} userData={userData} inputLanguages={inputLanguages} />
								<div className="modal-action">
									<button
										className={`w-fit px-2 py-1 ${
											inputLanguages ? "bg-red-500" : "bg-pri"
										} text-sec rounded-lg  hover:text-pri hover:bg-pri-100`}
										onClick={handleInputLanguages}>
										{inputLanguages ? "Guardar" : "Editar"}
									</button>
									<label
										htmlFor="modalIdiomas"
										className="w-fit px-2 py-1 bg-gray-400 rounded-lg hover:bg-pri-100 cursor-pointer">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>
				</article>
				<article id="laboral" className="w-11/12 h-[90%] px-6 carousel-item lg:h-full flex flex-col justify-between">
					<h3 className="w-full text-transparent lg:text-pri text-2xl lg:text-3xl text-center font-semibold">
						Lo que importa
					</h3>
					<div className="flex justify-between items-center">
						<label
							htmlFor="modalDondeVives"
							className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<LocationOnIcon /> Dirección Actual
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalDondeVives" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box bg-sec">
								<OptionsCity handleChange={handleChange} userData={userData} inputCity={inputCity} />
								<div className="modal-action">
									<button
										className={`w-fit px-2 py-1 ${
											inputCity ? "bg-red-500" : "bg-pri"
										} text-sec rounded-lg  hover:text-pri hover:bg-pri-100`}
										onClick={handleInputCity}>
										{inputCity ? "Guardar" : "Editar"}
									</button>
									<label
										htmlFor="modalDondeVives"
										className="w-fit px-2 py-1 bg-gray-400 rounded-lg hover:bg-pri-100 cursor-pointer">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label
							htmlFor="modalExperiencia"
							className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<AutoFixHighIcon /> Años de Experiencia
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalExperiencia" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box bg-sec">
								<Experience userData={userData} handleChange={handleChange} inputExperience={inputExperience} />
								<div className="modal-action">
									<button
										className={`w-fit px-2 py-1 ${
											inputExperience ? "bg-red-500" : "bg-pri"
										} text-sec rounded-lg  hover:text-pri hover:bg-pri-100`}
										onClick={handleInputExperience}>
										{inputExperience ? "Guardar" : "Editar"}
									</button>
									<label
										htmlFor="modalExperiencia"
										className="w-fit px-2 py-1 bg-gray-400 rounded-lg hover:bg-pri-100 cursor-pointer">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label htmlFor="modalSalario" className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<AttachMoneyIcon /> Salario Deseado
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalSalario" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box bg-sec">
								<Income userData={userData} handleChange={handleChange} inputIncome={inputIncome} />
								<div className="modal-action">
									<button
										className={`w-fit px-2 py-1 ${
											inputIncome ? "bg-red-500" : "bg-pri"
										} text-sec rounded-lg  hover:text-pri hover:bg-pri-100`}
										onClick={handleInputIncome}>
										{inputIncome ? "Guardar" : "Editar"}
									</button>
									<label
										htmlFor="modalSalario"
										className="w-fit px-2 py-1 bg-gray-400 rounded-lg hover:bg-pri-100 cursor-pointer">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label
							htmlFor="modalDisponibilidad"
							className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<HourglassTopRoundedIcon /> Disponibilidad
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalDisponibilidad" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box bg-sec">
								<Availability userData={userData} handleChange={handleChange} inputAvailability={inputAvailability} />
								<div className="modal-action">
									<button
										className={`w-fit px-2 py-1 ${
											inputAvailability ? "bg-red-500" : "bg-pri"
										} text-sec rounded-lg  hover:text-pri hover:bg-pri-100`}
										onClick={handleInputAvailability}>
										{inputAvailability ? "Guardar" : "Editar"}
									</button>
									<label
										htmlFor="modalDisponibilidad"
										className="w-fit px-2 py-1 bg-gray-400 rounded-lg hover:bg-pri-100 cursor-pointer">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label
							htmlFor="modalAreasInteres"
							className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<ZoomInIcon /> Áreas de Interés
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalAreasInteres" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box bg-sec">
								<Profession userData={userData} inputProf={inputProf} />
								<div className="modal-action">
									<button
										className={`w-fit px-2 py-1 ${
											inputProf ? "bg-red-500" : "bg-pri"
										} text-sec rounded-lg  hover:text-pri hover:bg-pri-100`}
										onClick={handleInputProf}>
										{inputProf ? "Guardar" : "Editar"}
									</button>
									<label
										htmlFor="modalAreasInteres"
										className="w-fit px-2 py-1 bg-gray-400 rounded-lg hover:bg-pri-100 cursor-pointer">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label
							htmlFor="modalFormaTrabajo"
							className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<PhonelinkRoundedIcon /> Forma de trabajo
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalFormaTrabajo" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box bg-sec">
								<FormOfWork userData={userData} handleChange={handleChange} inputFormOfWork={inputFormOfWork} />
								<div className="modal-action">
									<button
										className={`w-fit px-2 py-1 ${
											inputFormOfWork ? "bg-red-500" : "bg-pri"
										} text-sec rounded-lg  hover:text-pri hover:bg-pri-100`}
										onClick={handleInputFormOfWork}>
										{inputFormOfWork ? "Guardar" : "Editar"}
									</button>
									<label
										htmlFor="modalFormaTrabajo"
										className="w-fit px-2 py-1 bg-gray-400 rounded-lg hover:bg-pri-100 cursor-pointer">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label
							htmlFor="modalReubicarte"
							className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<MapIcon /> Podrías reubicarte?
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalReubicarte" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box bg-sec">
								<Reubication handleChange={handleChange} userData={userData} inputReubication={inputReubication} />
								<div className="modal-action">
									<button
										className={`w-fit px-2 py-1 ${
											inputReubication ? "bg-red-500" : "bg-pri"
										} text-sec rounded-lg  hover:text-pri hover:bg-pri-100`}
										onClick={handleInputReubication}>
										{inputReubication ? "Guardar" : "Editar"}
									</button>
									<label
										htmlFor="modalReubicarte"
										className="w-fit px-2 py-1 bg-gray-400 rounded-lg hover:bg-pri-100 cursor-pointer">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label htmlFor="modalHobbies" className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<SailingIcon /> Hobbies
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalHobbies" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box bg-sec flex flex-col">
								<Hobbies handleChange={handleChange} userData={userData} inputHobbies={inputHobbies} />
								<div className="modal-action">
									<button
										className={`w-fit px-2 py-1 ${
											inputHobbies ? "bg-red-500" : "bg-pri"
										} text-sec rounded-lg  hover:text-pri hover:bg-pri-100`}
										onClick={handleInputHobbies}>
										{inputHobbies ? "Guardar" : "Editar"}
									</button>
									<label
										htmlFor="modalHobbies"
										className="w-fit px-2 py-1 bg-gray-400 rounded-lg hover:bg-pri-100 cursor-pointer">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>
				</article>
			</section>
		</main>
	);
};

export default ProfileExt;
