"use client";
import Image from "next/image";
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
import SailingIcon from "@mui/icons-material/Sailing";
import TranslateIcon from "@mui/icons-material/Translate";
import FlagIcon from "@mui/icons-material/Flag";
import Studies from "./formApplicant/studies";
import {useState} from "react";
import Career from "./formApplicant/career";
import OptionsCity from "./formApplicant/optionsCity";
import Genres from "./formApplicant/genres";
import Phone from "./formApplicant/phone";
import Birthdate from "./formApplicant/birthdate";
import Reubication from "./formApplicant/reubication";
import Profession from "./formApplicant/professions";
import {useGetInfoUserQuery} from "../globalstore/services/user-info/useInfoUser";
import Experience from "./formApplicant/yearsOfExperience";
import Income from "./formApplicant/income";
import Availability from "./formApplicant/availability";
import FormOfWork from "./formApplicant/formOfWork";
import PhotoUpload from "./formApplicant/photoUpload";
import Languages from "./formApplicant/language";
import Hobbies from "./formApplicant/hobbies";
import Country from "./formApplicant/country";
import Academic from "./formApplicant/academic";
import Advance from "./plan/advance";
import Premium from "./plan/premuim";
import CarouselPlan from "./carouselSuscriptions";

const ProfileExt = () => {
	const {data, isError, isLoading, error} = useGetInfoUserQuery();
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

	const [selectedPlan, setSelectedPlan] = useState(null);
	const handleSelectedPlan = (plan) => {
		setSelectedPlan(plan);
	};

	const handleChange = (event) => {
		event.preventDefault();
		setUserData({
			...userData,
			[event.target.name]: event.target.value,
		});
	};
	console.log(userData);
	return (
		<main className="w-full px-4 lg:max-w-full h-full lg:gap-6 lg:grid lg:grid-cols-2 lg:items-center">
			<section className="lg:h-full text-pri text-center flex flex-col justify-start lg:justify-center items-center">
				<article className="w-11/12 flex flex-col justify-center items-center">
					<div className="relative border-8 border-pri rounded-full shadow-lg mt-5 lg:mt-0">
						<Image
							src={"/images/romelu-lukaku.jpg"}
							alt="avatar"
							width={150}
							height={150}
							loading={"eager"}
							className="rounded-full aspect-square"
						/>

						<div className="flex justify-between items-center">
							<label htmlFor="modalFotoUpload" className="text-lg font-light cursor-pointer w-full relative">
								<Image
									src={"/utils/upload.svg"}
									alt="upload"
									width={35}
									height={35}
									loading={"eager"}
									className="absolute right-0 bottom-1 aspect-square rounded-full bg-sec p-1 border-2 cursor-pointer"
								/>
							</label>
							<input type="checkbox" id="modalFotoUpload" className="modal-toggle" />
							<div className="modal">
								<div className="modal-box">
									<PhotoUpload />
									<div className="modal-action">
										<button
											className="btn  bg-pri text-sec  focus:text-pri focus:bg-pri-100"
											onClick={handleInputPhotoUpload}>
											{inputPhotoUpload === true ? "Guardar" : "Editar"}
										</button>
										<label htmlFor="modalFotoUpload" className="btn">
											Cerrar
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>
				<article className="flex flex-col justify-start items-center">
					<h2 className="text-2xl sm:text-3xl text-black line-clamp-2 font-bold my-2">
						Benito Antonio Martinez Ocasio Del Toro Pedro
					</h2>
					<h2 className="text-2xl w-fit px-4 py-2 rounded-md text-sec bg-pri">
						{userData.degree ? userData.degree : "Ingresa tus datos"}
					</h2>
					<p className="text-md text-gray-500 mt-2">{`${userData.mail}`}</p>
					<p className="text-sm text-gray-500 mt-2">{`Ubicación actual ${userData.city}`}</p>
				</article>
				<div className="mt-8">{`Tu plan actual: ${selectedPlan ? selectedPlan : "Starter"}`}</div>
				<article className="w-full h-1/6 mt-2 flex flex-row  items-center justify-around">
				<CarouselPlan handleSelectedPlan={handleSelectedPlan}/>
				</article>
			</section>
			<section className="flex flex-col lg:justify-around">
				<article className="grid grid-cols-1 gap-3 justify-start ">
					<h3 className="w-full text-2xl text-pri mt-5 text-start">Lo esencial</h3>

					<div className="flex justify-between items-center">
						<label htmlFor="modalEstudios" className="text-lg font-light cursor-pointer w-full relative">
							<AbcIcon /> Situación académica
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalEstudios" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box flex flex-col">
								<Academic handleChange={handleChange} userData={userData} inputAcademic={inputAcademic} />
								<div className="modal-action">
									<button
										className="btn  bg-pri text-sec  focus:text-pri focus:bg-pri-100"
										onClick={handleInputAcademic}>
										{inputAcademic === true ? "Guardar" : "Editar"}
									</button>
									<label htmlFor="modalEstudios" className="btn">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between items-center">
						<label htmlFor="modalDondeEstudiaste" className="text-lg font-light cursor-pointer w-full relative">
							<AccountBalanceSharpIcon /> Donde estudiaste?
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalDondeEstudiaste" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box flex flex-col">
								<Studies handleChange={handleChange} userData={userData} inputStudies={inputStudies} />
								<div className="modal-action">
									<button
										className="btn  bg-pri text-sec  focus:text-pri focus:bg-pri-100"
										onClick={handleInputStudies}>
										{inputStudies === true ? "Guardar" : "Editar"}
									</button>
									<label htmlFor="modalDondeEstudiaste" className="btn">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between items-center">
						<label htmlFor="modalIdiomas" className="text-lg font-light cursor-pointer w-full relative">
							<TranslateIcon /> Que idiomas hablas?
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalIdiomas" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box flex flex-col">
								<Languages handleChange={handleChange} userData={userData} inputLanguages={inputLanguages} />
								<div className="modal-action">
									<button
										className="btn  bg-pri text-sec  focus:text-pri focus:bg-pri-100"
										onClick={handleInputLanguages}>
										{inputLanguages === true ? "Guardar" : "Editar"}
									</button>
									<label htmlFor="modalIdiomas" className="btn">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between items-center">
						<label htmlFor="modalNacimiento" className="text-lg font-light cursor-pointer w-full relative">
							<FlagIcon /> Donde naciste?
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalNacimiento" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box">
								<Country handleChange={handleChange} userData={userData} inputCountry={inputCountry} />
								<div className="modal-action">
									<button
										className="btn  bg-pri text-sec  focus:text-pri focus:bg-pri-100"
										onClick={handleInputCountry}>
										{inputCountry === true ? "Guardar" : "Editar"}
									</button>
									<label htmlFor="modalNacimiento" className="btn">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between items-center">
						<label htmlFor="modalQueEstudias" className="text-lg font-light cursor-pointer w-full relative">
							<SchoolRoundedIcon /> Que estudias?
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalQueEstudias" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box">
								<Career handleChange={handleChange} userData={userData} inputCareer={inputCareer} />
								<div className="modal-action">
									<button className="btn  bg-pri text-sec  focus:text-pri focus:bg-pri-100" onClick={handleInputCareer}>
										{inputCareer === true ? "Guardar" : "Editar"}
									</button>
									<label htmlFor="modalQueEstudias" className="btn">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between items-center">
						<label htmlFor="modalDondeVives" className="text-lg font-light  cursor-pointer w-full relative">
							<LocationOnIcon /> Donde vives?
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalDondeVives" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box">
								<OptionsCity handleChange={handleChange} userData={userData} inputCity={inputCity} />
								<div className="modal-action">
									<button className="btn bg-pri text-sec hover:text-pri" onClick={handleInputCity}>
										{inputCity === true ? "Guardar" : "Editar"}
									</button>
									<label htmlFor="modalDondeVives" className="btn">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between items-center">
						<label htmlFor="modalHobbies" className="text-lg font-light cursor-pointer w-full relative">
							<SailingIcon /> Cuáles son tus hobbies?
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalHobbies" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box flex flex-col">
								<Hobbies handleChange={handleChange} userData={userData} inputHobbies={inputHobbies} />
								<div className="modal-action">
									<button
										className="btn  bg-pri text-sec  focus:text-pri focus:bg-pri-100"
										onClick={handleInputHobbies}>
										{inputHobbies === true ? "Guardar" : "Editar"}
									</button>
									<label htmlFor="modalHobbies" className="btn">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between items-center">
						<label htmlFor="modalGenero" className="text-lg font-light cursor-pointer w-full relative">
							<PersonIcon /> Género
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalGenero" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box">
								<Genres handleChange={handleChange} userData={userData} inputGenre={inputGenre} />
								<div className="modal-action">
									<button className="btn bg-pri text-sec hover:text-pri" onClick={handleInputGenre}>
										{inputGenre === true ? "Guardar" : "Editar"}
									</button>
									<label htmlFor="modalGenero" className="btn">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between items-center">
						<label htmlFor="modalTelefono" className="text-lg font-light cursor-pointer w-full relative">
							<PhoneIcon /> Teléfono
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalTelefono" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box">
								<Phone handleChange={handleChange} userData={userData} inputPhone={inputPhone} />
								<div className="modal-action">
									<button className="btn  bg-pri text-sec  focus:text-pri focus:bg-pri-100" onClick={handleInputPhone}>
										{inputPhone === true ? "Guardar" : "Editar"}
									</button>
									<label htmlFor="modalTelefono" className="btn">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between items-center">
						<label htmlFor="modalEdad" className="text-lg font-light cursor-pointer w-full relative">
							<EscalatorWarningIcon /> Edad
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalEdad" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box">
								<Birthdate handleChange={handleChange} userData={userData} inputBirthdate={inputBirthdate} />
								<div className="modal-action">
									<button
										className="btn  bg-pri text-sec  focus:text-pri focus:bg-pri-100"
										onClick={handleInputBirthdate}>
										{inputBirthdate === true ? "Guardar" : "Editar"}
									</button>
									<label htmlFor="modalEdad" className="btn">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>
				</article>
				<article className="grid grid-cols-1 gap-3 pb-6 justify-start">
					<h3 className="w-full text-2xl mt-6 text-pri text-start">Lo que importa</h3>

					<div className="flex justify-between items-center">
						<label htmlFor="modalReubicarte" className="text-lg font-light cursor-pointer w-full relative">
							<MapIcon /> Podrías reubicarte?
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalReubicarte" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box">
								<Reubication handleChange={handleChange} userData={userData} inputReubication={inputReubication} />
								<div className="modal-action">
									<button
										className="btn  bg-pri text-sec  focus:text-pri focus:bg-pri-100"
										onClick={handleInputReubication}>
										{inputReubication === true ? "Guardar" : "Editar"}
									</button>
									<label htmlFor="modalReubicarte" className="btn">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between items-center">
						<label htmlFor="modalAreasInteres" className="text-lg font-light cursor-pointer w-full relative">
							<ZoomInIcon /> Que áreas te interesan?
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalAreasInteres" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box">
								<Profession userData={userData} inputProf={inputProf} />
								<div className="modal-action">
									<button className="btn  bg-pri text-sec  focus:text-pri focus:bg-pri-100" onClick={handleInputProf}>
										{inputProf === true ? "Guardar" : "Editar"}
									</button>
									<label htmlFor="modalAreasInteres" className="btn">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between items-center">
						<label htmlFor="modalExperiencia" className="text-lg font-light cursor-pointer w-full relative">
							<AutoFixHighIcon /> Años de experiencia
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalExperiencia" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box">
								<Experience userData={userData} handleChange={handleChange} inputExperience={inputExperience} />
								<div className="modal-action">
									<button
										className="btn  bg-pri text-sec  focus:text-pri focus:bg-pri-100"
										onClick={handleInputExperience}>
										{inputExperience === true ? "Guardar" : "Editar"}
									</button>
									<label htmlFor="modalExperiencia" className="btn">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between items-center">
						<label htmlFor="modalSalario" className="text-lg font-light cursor-pointer w-full relative">
							<AttachMoneyIcon /> Salario deseado
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalSalario" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box">
								<Income userData={userData} handleChange={handleChange} inputIncome={inputIncome} />
								<div className="modal-action">
									<button className="btn  bg-pri text-sec  focus:text-pri focus:bg-pri-100" onClick={handleInputIncome}>
										{inputIncome === true ? "Guardar" : "Editar"}
									</button>
									<label htmlFor="modalSalario" className="btn">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between items-center">
						<label htmlFor="modalDisponibilidad" className="text-lg font-light cursor-pointer w-full relative">
							<HourglassTopRoundedIcon /> Disponibilidad
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalDisponibilidad" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box">
								<Availability userData={userData} handleChange={handleChange} inputAvailability={inputAvailability} />
								<div className="modal-action">
									<button
										className="btn  bg-pri text-sec  focus:text-pri focus:bg-pri-100"
										onClick={handleInputAvailability}>
										{inputAvailability === true ? "Guardar" : "Editar"}
									</button>
									<label htmlFor="modalDisponibilidad" className="btn">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between items-center">
						<label htmlFor="modalFormaTrabajo" className="text-lg font-light cursor-pointer w-full relative">
							<PhonelinkRoundedIcon /> Forma de trabajo
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalFormaTrabajo" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box">
								<FormOfWork userData={userData} handleChange={handleChange} inputFormOfWork={inputFormOfWork} />
								<div className="modal-action">
									<button
										className="btn  bg-pri text-sec  focus:text-pri focus:bg-pri-100"
										onClick={handleInputFormOfWork}>
										{inputFormOfWork === true ? "Guardar" : "Editar"}
									</button>
									<label htmlFor="modalFormaTrabajo" className="btn">
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
