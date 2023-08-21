"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AlertSuccess, AlertError } from "../../alertsforrequest";
import { useGetInfoUserQuery } from "@/app/globalstore/services/applicant/user-info/useInfoUser";
import { usePostNewFilesMutation } from "@/app/globalstore/services/applicant/user-files/useNewFiles";
import { usePostResumeMutation } from "@/app/globalstore/services/applicant/user-profile/useResume";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import CloseIcon from "@mui/icons-material/Close";
import Genres from "../formApplicant/genres";
import Country from "../formApplicant/country";
import OptionsCity from "../formApplicant/city";
import Phone from "../formApplicant/phone";
import Birthdate from "../formApplicant/birthdate";
import Academic from "../formApplicant/academic";
import University from "../formApplicant/university";
import Career from "../formApplicant/career";
import Languages from "../formApplicant/language";
import Hobbies from "../formApplicant/hobbies";
import Reubication from "../formApplicant/reubication";
import Profession from "../formApplicant/professions";
import Experience from "../formApplicant/yearsOfExperience";
import Income from "../formApplicant/income";
import FormOfWork from "../formApplicant/formOfWork";
import Availability from "../formApplicant/availability";
import { useEffect } from "react";

const ApplicantConfig = () => {
	const [postResume] = usePostResumeMutation();
	const [postNewFiles] = usePostNewFilesMutation();

	const [cvFile, setCvFile] = useState(null);
	const [cvFileName, setCvFileName] = useState(false);

	const [profilePictureFile, setProfilePictureFile] = useState(null);
	const [profilePicFileName, setProfilePicFileName] = useState(false);

	const [errorCatched, setErrorCatched] = useState(null);
	const [successReq, setSuccessReq] = useState(null);
	const { data: userInfo, isLoading } = useGetInfoUserQuery();
	const firstName = userInfo?.first_name.split(" ")[0];
	const lastName = userInfo?.last_name.split(" ")[0];
	const router = useRouter();

	const handleCvChange = (event) => {
		setCvFile(event.target.files[0]);
		setCvFileName(event.target.files[0].name);
		event.target.value = null;
	};
	const handleProfilePictureChange = (event) => {
		setProfilePictureFile(event.target.files[0]);
		setProfilePicFileName(event.target.files[0].name);
		event.target.value = null;
	};
	const [activate, setActivate] = useState(true);

	const [userData, setUserData] = useState({
		mail: userInfo?.email,
		phone: "",
		academic: "",
		birthdate: "",
		genre: "",
		country: "",
		city: "",
		reubication: "",
		languages: [],
		profession: [],
		university: "",
		career: "",
		hobbies: [],
		years_xp: "",
		income: "",
		form_of_work: "",
		availability: "",
	});

	useEffect(() => {
		window.addEventListener("beforeunload", (event) => {
			if (
				userData.phone.length ||
				userData.academic.length ||
				userData.birthdate.length ||
				userData.genre.length ||
				userData.country.length ||
				userData.city.length ||
				userData.reubication.length ||
				userData.languages.length ||
				userData.profession.length ||
				userData.university.length ||
				userData.career.length ||
				userData.hobbies.length ||
				userData.years_xp.length ||
				userData.income.length ||
				userData.form_of_work.length ||
				userData.availability.length
			) {
				event.preventDefault();
				event.returnValue = "";
			}
		});
		return window.removeEventListener("beforeunload", (event) => {
			event.preventDefault();
		});
	});

	const [progress, setProgress] = useState(0);

	const handleChange = (event) => {
		setUserData({
			...userData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append("cv", cvFile);
		formData.append("profile_picture", profilePictureFile);
		setErrorCatched(null);
		setSuccessReq(null);

		try {
			// Subir archivos
			const uploadResponse = await postNewFiles({ user_id: userInfo?.id, data: formData }).unwrap();

			// Guardar cambios
			const resumeResponse = await postResume(userData).unwrap();

			setSuccessReq("Archivos subidos y cambios guardados. Redireccionando...");

			setTimeout(() => {
				router.push("/applicant/home");
			}, 2000);
		} catch (error) {
			if (error.status === "FETCH_ERROR") {
				setErrorCatched("No se ha podido establecer conexión con el servidor.");
			} else if (error.data?.detail[0].msg) {
				setErrorCatched(error.data.detail[0].msg);
			} else {
				setErrorCatched(error.data?.detail);
			}
		}
	};
	if (isLoading) {
		return (
			<div className="container">
				<div className="loader"></div>
			</div>
		);
	}

	return (
		<section className="w-full h-screen text-sec text-center flex flex-col lg:flex-row justify-between items-center">
			{activate ? (
				<article className="w-full h-full flex flex-col lg:flex-row justify-evenly items-center">
					<div className="w-full h-1/2 lg:h-full flex flex-col justify-evenly items-center">
						<div className="w-full h-3/5 bg-HKlogo bg-contain bg-center bg-no-repeat"></div>
						<div>
							<h1 className="text-xl sm:text-2xl">
								Bienvenido <span className="font-bold">{`${firstName} ${lastName}`}</span>
							</h1>
							<h2 className="text-lg sm:text-xl text-pri-500">Gracias por unirte a Huntek!</h2>
						</div>
					</div>
					<div className="w-full h-1/2 lg:h-4/5 flex flex-col justify-evenly items-center">
						<div>
							<p>A continuacón tendrás que responder</p>
							<p>varias preguntas</p>
						</div>
						<p>Tómate un tiempo</p>
						<div>
							<p>Mientras más preguntas hayas completado</p>
							<p>mejor posicionado estará tu perfil!</p>
						</div>
						<button
							className="w-fit px-2 py-1 bg-pri-100 text-pri rounded-lg hover:bg-sec"
							onClick={() => {
								setActivate(!activate);
								setUserData({
									...userData,
									mail: userInfo?.email,
								});
							}}>
							Comenzar
						</button>
					</div>
				</article>
			) : (
				<article className="w-full h-full p-4 flex flex-col justify-around items-center">
					<div className="w-full h-[5%] text-sec flex flex-row justify-center items-center relative">
						<progress className="w-full h-full progress" value={progress} max="100"></progress>
						<p className="absolute">{`${progress}%`}</p>
					</div>
					<form onSubmit={handleSubmit} className="w-full h-[90%] carousel lg:gap-4 text-pri">
						<section
							id="Q1"
							className="carousel-item w-full lg:w-1/2 h-full bg-sec rounded-xl flex flex-col justify-between items-center">
							<h2 className="mt-[5%] text-xl font-medium">Información importante</h2>
							<article className="w-full flex flex-col justify-around items-center">
								<div className="w-32 h-32 border-4 border-pri rounded-full relative">
									<Image
										src={"/images/defaultPhoto.png"}
										alt="profileImg"
										fill={true}
										className="rounded-full object-contain absolute"
									/>
									<label className="w-8 h-8 bg-pri text-sec rounded-full shadow-lg grid place-content-center absolute left-[87px] top-[87px] cursor-pointer hover:bg-sec hover:text-pri">
										<CloudUploadOutlinedIcon />
										<input type="file" className="hidden" onChange={handleProfilePictureChange} />
									</label>
								</div>
								<label className="text-lg font-medium" htmlFor="file_input">
									Foto de perfil
								</label>
								{profilePicFileName && (
									<span className="">
										{profilePicFileName}
										<button
											onClick={() => {
												setProfilePictureFile(null);
												setProfilePicFileName(false);
											}}>
											<CloseIcon style={{ fontSize: "medium" }} />
										</button>
									</span>
								)}
							</article>
							<article className="h-1/4 flex flex-col justify-center items-center">
								<label className="w-fit h-16 px-4 flex flex-col justify-center items-center bg-pri text-sec rounded-lg shadow-lg cursor-pointer hover:bg-sec hover:text-pri">
									<DriveFolderUploadOutlinedIcon />
									<span>Seleccionar archivo</span>
									<input type="file" className="hidden" onChange={handleCvChange} />
								</label>
								<label className="text-lg font-medium" htmlFor="file_input">
									Currículum
								</label>
								{cvFileName && (
									<span className="">
										{cvFileName}
										<button
											onClick={() => {
												setCvFile(null);
												setCvFileName(false);
											}}>
											<CloseIcon style={{ fontSize: "medium" }} />
										</button>
									</span>
								)}
							</article>
							<a
								href="#Q2"
								onClick={() => {
									setProgress(16.6);
								}}
								className="w-fit mb-[5%] px-2 py-1 bg-pri-200 text-pri rounded-lg shadow-lg hover:bg-pri hover:text-sec">
								Siguiente
							</a>
						</section>
						<section
							id="Q2"
							className="carousel-item w-full lg:w-1/2 h-full bg-sec rounded-xl flex flex-col justify-between items-center">
							<p className="mt-[5%] text-xl font-medium">Información personal</p>
							<article className="w-11/12">
								<Phone userData={userData} handleChange={handleChange} inputPhone={true} />
							</article>
							<article className="w-11/12">
								<Birthdate userData={userData} handleChange={handleChange} inputBirthdate={true} />
							</article>
							<article className="w-11/12">
								<Genres userData={userData} handleChange={handleChange} inputGenre={true} />
							</article>
							<article className="w-11/12">
								<Country userData={userData} handleChange={handleChange} inputCountry={true} />
							</article>
							<article className="mb-[5%] flex flex-row gap-4">
								<a
									href="#Q1"
									onClick={() => {
										setProgress(0);
									}}
									className="w-fit px-2 py-1 bg-pri-200 text-pri rounded-lg shadow-lg hover:bg-pri hover:text-sec">
									Anterior
								</a>
								<a
									href="#Q3"
									onClick={() => {
										setProgress(33.3);
									}}
									className="w-fit px-2 py-1 bg-pri-200 text-pri rounded-lg shadow-lg hover:bg-pri hover:text-sec">
									Siguiente
								</a>
							</article>
						</section>
						<section
							id="Q3"
							className="carousel-item w-full lg:w-1/2 h-full bg-sec rounded-xl flex flex-col justify-between items-center">
							<p className="mt-[5%] text-xl font-medium">Información académica</p>
							<article className="w-11/12">
								<Academic userData={userData} handleChange={handleChange} inputAcademic={true} />
							</article>
							<article className="w-11/12">
								<University userData={userData} handleChange={handleChange} inputUniversity={true} />
							</article>
							<article className="w-11/12">
								<Career userData={userData} handleChange={handleChange} inputCareer={true} />
							</article>
							<article className="mb-[5%] flex flex-row gap-4">
								<a
									href="#Q2"
									onClick={() => {
										setProgress(16.6);
									}}
									className="w-fit px-2 py-1 bg-pri-200 text-pri rounded-lg shadow-lg hover:bg-pri hover:text-sec">
									Anterior
								</a>
								<a
									href="#Q4"
									onClick={() => {
										setProgress(50);
									}}
									className="w-fit px-2 py-1 bg-pri-200 text-pri rounded-lg shadow-lg hover:bg-pri hover:text-sec">
									Siguiente
								</a>
							</article>
						</section>
						<section
							id="Q4"
							className="carousel-item w-full lg:w-1/2 h-full bg-sec rounded-xl flex flex-col justify-between items-center">
							<p className="mt-[5%] text-xl font-medium">Información adicional</p>
							<article className="w-11/12">
								<OptionsCity userData={userData} handleChange={handleChange} inputCity={true} />
							</article>
							<article className="w-11/12">
								<Languages userData={userData} handleChange={handleChange} inputLanguages={true} />
							</article>
							<article className="w-11/12">
								<Hobbies userData={userData} handleChange={handleChange} inputHobbies={true} />
							</article>
							<article className="mb-[5%] flex flex-row gap-4">
								<a
									href="#Q3"
									onClick={() => {
										setProgress(33.3);
									}}
									className="w-fit px-2 py-1 bg-pri-200 text-pri rounded-lg shadow-lg hover:bg-pri hover:text-sec">
									Anterior
								</a>
								<a
									href="#Q5"
									onClick={() => {
										setProgress(66.6);
									}}
									className="w-fit px-2 py-1 bg-pri-200 text-pri rounded-lg shadow-lg hover:bg-pri hover:text-sec">
									Siguiente
								</a>
							</article>
						</section>
						<section
							id="Q5"
							className="carousel-item w-full lg:w-1/2 h-full bg-sec rounded-xl flex flex-col justify-between items-center">
							<p className="mt-[5%] text-xl font-medium">Información adicional</p>
							<article className="w-11/12">
								<Reubication userData={userData} handleChange={handleChange} inputReubication={true} />
							</article>
							<article className="w-11/12">
								<Profession userData={userData} handleChange={handleChange} inputProf={true} />
							</article>
							<article className="w-11/12">
								<Experience userData={userData} handleChange={handleChange} inputExperience={true} />
							</article>
							<article className="mb-[5%] flex flex-row gap-4">
								<a
									href="#Q4"
									onClick={() => {
										setProgress(50);
									}}
									className="w-fit px-2 py-1 bg-pri-200 text-pri rounded-lg shadow-lg hover:bg-pri hover:text-sec">
									Anterior
								</a>
								<a
									href="#Q6"
									onClick={() => {
										setProgress(83.3);
									}}
									className="w-fit px-2 py-1 bg-pri-200 text-pri rounded-lg shadow-lg hover:bg-pri hover:text-sec">
									Siguiente
								</a>
							</article>
						</section>
						<section
							id="Q6"
							className="carousel-item w-full lg:w-1/2 h-full bg-sec rounded-xl flex flex-col justify-between items-center">
							<p className="mt-[5%] text-xl font-medium">Información adicional</p>
							<article className="w-11/12">
								<Income userData={userData} handleChange={handleChange} inputIncome={true} />
							</article>
							<article className="w-11/12">
								<FormOfWork userData={userData} handleChange={handleChange} inputFormOfWork={true} />
							</article>
							<article className="w-11/12">
								<Availability userData={userData} handleChange={handleChange} inputAvailability={true} />
							</article>
							<article className="mb-[5%] flex flex-row gap-4">
								<a
									href="#Q5"
									onClick={() => {
										setProgress(66.6);
									}}
									className="w-fit px-2 py-1 bg-pri-200 text-pri rounded-lg shadow-lg hover:bg-pri hover:text-sec">
									Anterior
								</a>
								<button
									onClick={() => {
										setProgress(100);
									}}
									className="w-fit px-2 py-1 bg-pri-200 text-pri rounded-lg shadow-lg hover:bg-pri hover:text-sec">
									Finalizar
								</button>
							</article>
						</section>
					</form>
					{errorCatched && (
						<AlertError alertTitle={"Error!"} alertBody={errorCatched} setErrorCatched={setErrorCatched} />
					)}
					{successReq && <AlertSuccess alertTitle={"Success!"} alertBody={successReq} setSuccessReq={setSuccessReq} />}
				</article>
			)}
		</section>
	);
};

export default ApplicantConfig;
