"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
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
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import TranslateIcon from "@mui/icons-material/Translate";
import FlagIcon from "@mui/icons-material/Flag";
import University from "../formApplicant/university";
import Career from "../formApplicant/career";
import City from "../formApplicant/city";
import Genres from "../formApplicant/genres";
import Phone from "../formApplicant/phone";
import Birthdate from "../formApplicant/birthdate";
import Reubication from "../formApplicant/reubication";
import Profession from "../formApplicant/professions";
import Experience from "../formApplicant/yearsOfExperience";
import Income from "../formApplicant/income";
import Availability from "../formApplicant/availability";
import FormOfWork from "../formApplicant/formOfWork";
import PhotoUpload from "../formApplicant/photoUpload";
import Languages from "../formApplicant/language";
import Hobbies from "../formApplicant/skills";
import Country from "../formApplicant/country";
import Academic from "../formApplicant/academic";
import { useGetInfoUserQuery } from "../../../globalstore/services/applicant/user-info/useInfoUser";
import { useGetResumeQuery } from "@/app/globalstore/services/applicant/user-profile/useGetResume";
import { useGetFilesQuery } from "@/app/globalstore/services/applicant/user-files/useFiles";
import { usePutResumeMutation } from "@/app/globalstore/services/applicant/user-profile/useEditResume";
import { useEditFilesMutation } from "@/app/globalstore/services/applicant/user-files/useEditFiles";

const ProfileExt = () => {
	const { data, isLoading } = useGetInfoUserQuery();
	const [putResume] = usePutResumeMutation();
	const [editFiles] = useEditFilesMutation();

	const { data: filesInfo, refetch } = useGetFilesQuery(data?.id);

	const { data: resumeInfo } = useGetResumeQuery();
	let initialResumeJson = {};

	if (resumeInfo && resumeInfo.resume) {
		initialResumeJson = JSON.parse(resumeInfo.resume);
	}

	const [userData, setUserData] = useState({
		mail: "",
		phone: "",
		genre: "",
		birthdate: "",
		country: "",
		academic: "",
		university: "",
		city: "",
		reubication: "",
		languages: "",
		profession: "",
		career: "",
		hobbies: "",
		years_xp: "",
		income: "",
		form_of_work: "",
		availability: "",
	});

	useEffect(() => {
		if (resumeInfo && resumeInfo.resume) {
			const resumeJson = JSON.parse(resumeInfo.resume);
			setUserData({
				mail: resumeJson.mail || "",
				phone: resumeJson.phone || "",
				genre: resumeJson.genre || "",
				birthdate: resumeJson.birthdate || "",
				country: resumeJson.country || "",
				academic: resumeJson.academic || "",
				university: resumeJson.university || "",
				city: resumeJson.city || "",
				reubication: resumeJson.reubication || "",
				languages: resumeJson.languages || "",
				profession: resumeJson.profession || "",
				career: resumeJson.career || "",
				hobbies: resumeJson.hobbies || "",
				years_xp: resumeJson.years_xp || "",
				income: resumeJson.income || "",
				form_of_work: resumeJson.form_of_work || "",
				availability: resumeJson.availability || "",
			});
		}
	}, [resumeInfo]);

	const [allow, setAllow] = useState(false);
	const [open, setOpen] = useState(false);
	const [updated, setUpdated] = useState("");
	const [active, setActive] = useState("p");

	const [newValue, setNewValue] = useState({
		property_name: "",
		new_value: "",
	});

	const [newFile, setNewFile] = useState({
		cv: "",
		profile_picture: "",
	});

	const handleChange = (event) => {
		setUserData({
			...userData,
			[event.target.name]: event.target.value,
		});
		setNewValue({
			...newValue,
			new_value: event.target.value,
		});
	};

	const handleUpdPhoto = async () => {
		const formData = new FormData();
		formData.append("cv", newFile.cv);
		formData.append("profile_picture", newFile.profile_picture);
		try {
			const response = await editFiles({ user_id: data?.id, data: formData }).unwrap();
			refetch();
			setUpdated("Actualización exitosa");
			setAllow(false);
		} catch (error) {
			setUpdated("Error en la actualización");
		}
	};

	const handlePut = async () => {
		try {
			const response = await putResume({ user_id: data?.id, data: newValue }).unwrap();
			setUpdated("Actualización exitosa");
			setAllow(false);
		} catch (error) {
			setUpdated("Error en la actualización");
		}
	};

	if (isLoading) {
		return (
			<div className="container">
				<div className="loader2"></div>
			</div>
		);
	}

	return (
		<main className="w-full h-[90%] flex flex-col lg:flex-row justify-between items-center">
			<section className="w-full lg:w-1/3 h-1/2 lg:h-5/6 flex flex-col justify-between lg:justify-around items-center">
				<article className="w-11/12 flex flex-col justify-center items-center mt-3">
					<div className="w-24 lg:w-36 h-24 lg:h-36 border-4 border-pri rounded-full shadow-lg relative">
						{filesInfo && filesInfo[0]?.profile_picture_url ? (
							<Image
								src={filesInfo[0]?.profile_picture_url}
								alt="avatar"
								fill={true}
								loading={"eager"}
								placeholder="empty"
								blurDataURL="/images/defaultPhoto.png"
								className="rounded-full object-contain absolute"
							/>
						) : (
							<Image
								src={"/images/defaultPhoto.png"}
								alt="avatar"
								fill={true}
								loading={"eager"}
								className="rounded-full object-contain absolute"
							/>
						)}
						<div className="flex justify-between items-center">
							<label
								htmlFor="modalPhotoUpload"
								className="w-8 h-8 bg-pri text-sec rounded-full shadow-lg grid place-content-center absolute left-[60px] lg:left-[100px] top-[60px] lg:top-[100px] cursor-pointer hover:bg-sec hover:text-pri">
								<CloudUploadOutlinedIcon />
							</label>
							<input type="checkbox" id="modalPhotoUpload" className="modal-toggle" />
							<div className="modal">
								<div className="modal-box bg-sec">
									<PhotoUpload handleID={data?.id} allow={allow} setNewFile={setNewFile} newFile={newFile} />
									<div className="modal-action">
										<div className="w-full flex justify-between">
											<p>{updated}</p>
											{allow ? (
												<div className="w-[50%] flex justify-end gap-5">
													<button
														className="w-fit px-2 py-1 bg-pri text-sec rounded-lg hover:scale-105 hover:bg-pri-800 active:scale-90 duration-100"
														onClick={handleUpdPhoto}>
														Guardar
													</button>
													<button
														className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100"
														onClick={() => {
															setAllow(false);
														}}>
														Cancelar
													</button>
												</div>
											) : (
												<div className="w-[50%] flex justify-end gap-5">
													<button
														className="w-fit px-2 py-1 bg-pri-200 text-pri rounded-lg hover:scale-105 hover:bg-pri-300 active:scale-90 duration-100"
														onClick={() => {
															setAllow(true);
															setUpdated("");
														}}>
														Editar
													</button>
													<label
														htmlFor="modalPhotoUpload"
														className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100 cursor-pointer">
														Cerrar
													</label>
												</div>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<h2 className="mt-2 text-2xl lg:text-3xl text-black text-center font-bold line-clamp-2">
						{data?.first_name} {data?.last_name}
					</h2>
					<p className="text-md text-gray-500">{`${userData.mail}`}</p>
				</article>
				<article className="flex flex-col justify-start items-center">
					<h2 className="w-fit px-1 mx-4 py-1 text-xl lg:text-2xl text-sec bg-pri rounded-md text-center">
						{userData.career ? userData.career : "Datos incompletos"}
					</h2>
					<p className="text-sm text-gray-500 mt-2">{`Ubicación actual ${userData.city}`}</p>
				</article>
				<article className="w-full flex flex-row justify-center lg:hidden">
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
			</section>
			<section className="w-full lg:w-2/3 h-1/2 lg:h-5/6 text-pri text-lg font-light flex flew-row items-center carousel lg:grid lg:grid-cols-2 lg:gap-10">
				<article id="personal" className="w-11/12 h-[90%] px-6 carousel-item lg:h-full flex flex-col justify-between">
					<h3 className="w-full hidden lg:flex lg:justify-center lg:text-pri text-2xl lg:text-3xl text-center font-semibold">
						Lo esencial
					</h3>
					<div className="flex justify-between items-center">
						<label htmlFor="modalTelefono" className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<PhoneIcon /> Número de celular
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalTelefono" className="modal-toggle" onClick={() => setUpdated("")} />
						<div className="modal">
							<div className="modal-box flex flex-col justify-evenly bg-sec">
								<Phone userData={userData} handleChange={handleChange} inputPhone={allow} />
								<div className="modal-action">
									<div className="w-full flex justify-between">
										<p>{updated}</p>
										{allow ? (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri text-sec rounded-lg hover:scale-105 hover:bg-pri-800 active:scale-90 duration-100"
													onClick={handlePut}>
													Guardar
												</button>
												<button
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100"
													onClick={() => {
														setAllow(false);
														setNewValue({ ...newValue, property_name: "" });
														setUserData({ ...userData, phone: initialResumeJson.phone });
													}}>
													Cancelar
												</button>
											</div>
										) : (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri-200 text-pri rounded-lg hover:scale-105 hover:bg-pri-300 active:scale-90 duration-100"
													onClick={() => {
														setAllow(true);
														setUpdated("");
														setNewValue({ ...newValue, property_name: "phone" });
													}}>
													Editar
												</button>
												<label
													htmlFor="modalTelefono"
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100 cursor-pointer">
													Cerrar
												</label>
											</div>
										)}
									</div>
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
						<input type="checkbox" id="modalGenero" className="modal-toggle" onClick={() => setUpdated("")} />
						<div className="modal">
							<div className={`modal-box ${open && "h-[230px]"} flex flex-col justify-between bg-sec`}>
								<Genres userData={userData} handleChange={handleChange} inputGenre={allow} setOpen={setOpen} />
								<div className="modal-action">
									<div className="w-full flex justify-between">
										<p>{updated}</p>
										{allow ? (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri text-sec rounded-lg hover:scale-105 hover:bg-pri-800 active:scale-90 duration-100"
													onClick={handlePut}>
													Guardar
												</button>
												<button
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100"
													onClick={() => {
														setAllow(false);
														setNewValue({ ...newValue, property_name: "" });
														setUserData({ ...userData, genre: initialResumeJson.genre });
													}}>
													Cancelar
												</button>
											</div>
										) : (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri-200 text-pri rounded-lg hover:scale-105 hover:bg-pri-300 active:scale-90 duration-100"
													onClick={() => {
														setAllow(true);
														setUpdated("");
														setNewValue({ ...newValue, property_name: "genre" });
													}}>
													Editar
												</button>
												<label
													htmlFor="modalGenero"
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100 cursor-pointer">
													Cerrar
												</label>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label htmlFor="modalAge" className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<EscalatorWarningIcon /> Fecha de nacimiento
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalAge" className="modal-toggle" onClick={() => setUpdated("")} />
						<div className="modal">
							<div className="modal-box flex flex-col justify-evenly bg-sec">
								<Birthdate userData={userData} handleChange={handleChange} inputBirthdate={allow} />
								<div className="modal-action">
									<div className="w-full flex justify-between">
										<p>{updated}</p>
										{allow ? (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri text-sec rounded-lg hover:scale-105 hover:bg-pri-800 active:scale-90 duration-100"
													onClick={handlePut}>
													Guardar
												</button>
												<button
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100"
													onClick={() => {
														setAllow(false);
														setNewValue({ ...newValue, property_name: "" });
														setUserData({ ...userData, birthdate: initialResumeJson.birthdate });
													}}>
													Cancelar
												</button>
											</div>
										) : (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri-200 text-pri rounded-lg hover:scale-105 hover:bg-pri-300 active:scale-90 duration-100"
													onClick={() => {
														setAllow(true);
														setUpdated("");
														setNewValue({ ...newValue, property_name: "birthdate" });
													}}>
													Editar
												</button>
												<label
													htmlFor="modalAge"
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100 cursor-pointer">
													Cerrar
												</label>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label htmlFor="modalBorn" className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<FlagIcon /> Lugar de nacimiento
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalBorn" className="modal-toggle" onClick={() => setUpdated("")} />
						<div className="modal">
							<div className={`modal-box ${open && "h-[425px]"} flex flex-col justify-between bg-sec`}>
								<Country userData={userData} handleChange={handleChange} inputCountry={allow} setOpen={setOpen} />
								<div className="modal-action">
									<div className="w-full flex justify-between">
										<p>{updated}</p>
										{allow ? (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri text-sec rounded-lg hover:scale-105 hover:bg-pri-800 active:scale-90 duration-100"
													onClick={handlePut}>
													Guardar
												</button>
												<button
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100"
													onClick={() => {
														setAllow(false);
														setNewValue({ ...newValue, property_name: "" });
														setUserData({ ...userData, country: initialResumeJson.country });
													}}>
													Cancelar
												</button>
											</div>
										) : (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri-200 text-pri rounded-lg hover:scale-105 hover:bg-pri-300 active:scale-90 duration-100"
													onClick={() => {
														setAllow(true);
														setUpdated("");
														setNewValue({ ...newValue, property_name: "country" });
													}}>
													Editar
												</button>
												<label
													htmlFor="modalBorn"
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100 cursor-pointer">
													Cerrar
												</label>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label htmlFor="modalStatus" className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<AbcIcon /> Situación académica
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalStatus" className="modal-toggle" onClick={() => setUpdated("")} />
						<div className="modal">
							<div className={`modal-box ${open && "h-[235px]"} flex flex-col justify-between bg-sec`}>
								<Academic userData={userData} handleChange={handleChange} inputAcademic={allow} setOpen={setOpen} />
								<div className="modal-action">
									<div className="w-full flex justify-between">
										<p>{updated}</p>
										{allow ? (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri text-sec rounded-lg hover:scale-105 hover:bg-pri-800 active:scale-90 duration-100"
													onClick={handlePut}>
													Guardar
												</button>
												<button
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100"
													onClick={() => {
														setAllow(false);
														setNewValue({ ...newValue, property_name: "" });
														setUserData({ ...userData, academic: initialResumeJson.academic });
													}}>
													Cancelar
												</button>
											</div>
										) : (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri-200 text-pri rounded-lg hover:scale-105 hover:bg-pri-300 active:scale-90 duration-100"
													onClick={() => {
														setAllow(true);
														setUpdated("");
														setNewValue({ ...newValue, property_name: "academic" });
													}}>
													Editar
												</button>
												<label
													htmlFor="modalStatus"
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100 cursor-pointer">
													Cerrar
												</label>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label htmlFor="modalUniv" className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<AccountBalanceSharpIcon /> Institución de estudios
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalUniv" className="modal-toggle" onClick={() => setUpdated("")} />
						<div className="modal">
							<div className={`modal-box ${open && "h-[420px]"} flex flex-col justify-between bg-sec`}>
								<University userData={userData} handleChange={handleChange} inputUniversity={allow} setOpen={setOpen} />
								<div className="modal-action">
									<div className="w-full flex justify-between">
										<p>{updated}</p>
										{allow ? (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri text-sec rounded-lg hover:scale-105 hover:bg-pri-800 active:scale-90 duration-100"
													onClick={handlePut}>
													Guardar
												</button>
												<button
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100"
													onClick={() => {
														setAllow(false);
														setNewValue({ ...newValue, property_name: "" });
														setUserData({ ...userData, university: initialResumeJson.university });
													}}>
													Cancelar
												</button>
											</div>
										) : (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri-200 text-pri rounded-lg hover:scale-105 hover:bg-pri-300 active:scale-90 duration-100"
													onClick={() => {
														setAllow(true);
														setUpdated("");
														setNewValue({ ...newValue, property_name: "university" });
													}}>
													Editar
												</button>
												<label
													htmlFor="modalUniv"
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100 cursor-pointer">
													Cerrar
												</label>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label htmlFor="modalCareer" className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<SchoolRoundedIcon /> Estudios
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalCareer" className="modal-toggle" onClick={() => setUpdated("")} />
						<div className="modal">
							<div className={`modal-box ${open && "h-[420px]"} flex flex-col justify-between bg-sec`}>
								<Career userData={userData} handleChange={handleChange} inputCareer={allow} setOpen={setOpen} />
								<div className="modal-action">
									<div className="w-full flex justify-between">
										<p>{updated}</p>
										{allow ? (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri text-sec rounded-lg hover:scale-105 hover:bg-pri-800 active:scale-90 duration-100"
													onClick={handlePut}>
													Guardar
												</button>
												<button
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100"
													onClick={() => {
														setAllow(false);
														setNewValue({ ...newValue, property_name: "" });
														setUserData({ ...userData, career: initialResumeJson.career });
													}}>
													Cancelar
												</button>
											</div>
										) : (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri-200 text-pri rounded-lg hover:scale-105 hover:bg-pri-300 active:scale-90 duration-100"
													onClick={() => {
														setAllow(true);
														setUpdated("");
														setNewValue({ ...newValue, property_name: "career" });
													}}>
													Editar
												</button>
												<label
													htmlFor="modalCareer"
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100 cursor-pointer">
													Cerrar
												</label>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label htmlFor="modalLang" className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<TranslateIcon /> Idiomas
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalLang" className="modal-toggle" onClick={() => setUpdated("")} />
						<div className="modal">
							<div className={`modal-box ${open && "h-[425px]"} flex flex-col justify-between bg-sec`}>
								<Languages userData={userData} handleChange={handleChange} inputLanguages={allow} setOpen={setOpen} />
								<div className="modal-action">
									<div className="w-full flex justify-between">
										<p>{updated}</p>
										{allow ? (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri text-sec rounded-lg hover:scale-105 hover:bg-pri-800 active:scale-90 duration-100"
													onClick={handlePut}>
													Guardar
												</button>
												<button
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100"
													onClick={() => {
														setAllow(false);
														setNewValue({ ...newValue, property_name: "" });
														setUserData({ ...userData, languages: initialResumeJson.languages });
													}}>
													Cancelar
												</button>
											</div>
										) : (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri-200 text-pri rounded-lg hover:scale-105 hover:bg-pri-300 active:scale-90 duration-100"
													onClick={() => {
														setAllow(true);
														setUpdated("");
														setNewValue({ ...newValue, property_name: "languages" });
													}}>
													Editar
												</button>
												<label
													htmlFor="modalLang"
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100 cursor-pointer">
													Cerrar
												</label>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>
				<article id="laboral" className="w-11/12 h-[90%] px-6 carousel-item lg:h-full flex flex-col justify-between">
					<h3 className="w-full hidden lg:flex lg:justify-center lg:text-pri text-2xl lg:text-3xl text-center font-semibold">
						Lo que importa
					</h3>
					<div className="flex justify-between items-center">
						<label htmlFor="modalCity" className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<LocationOnIcon /> Ciudad actual
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalCity" className="modal-toggle" onClick={() => setUpdated("")} />
						<div className="modal">
							<div className={`modal-box ${open && "h-[425px]"} flex flex-col justify-between bg-sec`}>
								<City userData={userData} handleChange={handleChange} inputCity={allow} setOpen={setOpen} />
								<div className="modal-action">
									<div className="w-full flex justify-between">
										<p>{updated}</p>
										{allow ? (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri text-sec rounded-lg hover:scale-105 hover:bg-pri-800 active:scale-90 duration-100"
													onClick={handlePut}>
													Guardar
												</button>
												<button
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100"
													onClick={() => {
														setAllow(false);
														setNewValue({ ...newValue, property_name: "" });
														setUserData({ ...userData, city: initialResumeJson.city });
													}}>
													Cancelar
												</button>
											</div>
										) : (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri-200 text-pri rounded-lg hover:scale-105 hover:bg-pri-300 active:scale-90 duration-100"
													onClick={() => {
														setAllow(true);
														setUpdated("");
														setNewValue({ ...newValue, property_name: "city" });
													}}>
													Editar
												</button>
												<label
													htmlFor="modalCity"
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100 cursor-pointer">
													Cerrar
												</label>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label
							htmlFor="modalExperience"
							className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<AutoFixHighIcon /> Años de experiencia
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalExperience" className="modal-toggle" onClick={() => setUpdated("")} />
						<div className="modal">
							<div className={`modal-box ${open && "h-[305px]"} flex flex-col justify-between bg-sec`}>
								<Experience userData={userData} handleChange={handleChange} inputExperience={allow} setOpen={setOpen} />
								<div className="modal-action">
									<div className="w-full flex justify-between">
										<p>{updated}</p>
										{allow ? (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri text-sec rounded-lg hover:scale-105 hover:bg-pri-800 active:scale-90 duration-100"
													onClick={handlePut}>
													Guardar
												</button>
												<button
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100"
													onClick={() => {
														setAllow(false);
														setNewValue({ ...newValue, property_name: "" });
														setUserData({ ...userData, years_xp: initialResumeJson.years_xp });
													}}>
													Cancelar
												</button>
											</div>
										) : (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri-200 text-pri rounded-lg hover:scale-105 hover:bg-pri-300 active:scale-90 duration-100"
													onClick={() => {
														setAllow(true);
														setUpdated("");
														setNewValue({ ...newValue, property_name: "years_xp" });
													}}>
													Editar
												</button>
												<label
													htmlFor="modalExperience"
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100 cursor-pointer">
													Cerrar
												</label>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label htmlFor="modalSalario" className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<AttachMoneyIcon /> Salario deseado
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalSalario" className="modal-toggle" onClick={() => setUpdated("")} />
						<div className="modal">
							<div className="modal-box flex flex-col justify-evenly bg-sec">
								<Income userData={userData} handleChange={handleChange} inputIncome={allow} />
								<div className="modal-action">
									<div className="w-full flex justify-between">
										<p>{updated}</p>
										{allow ? (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri text-sec rounded-lg hover:scale-105 hover:bg-pri-800 active:scale-90 duration-100"
													onClick={handlePut}>
													Guardar
												</button>
												<button
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100"
													onClick={() => {
														setAllow(false);
														setNewValue({ ...newValue, property_name: "" });
														setUserData({ ...userData, income: initialResumeJson.income });
													}}>
													Cancelar
												</button>
											</div>
										) : (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri-200 text-pri rounded-lg hover:scale-105 hover:bg-pri-300 active:scale-90 duration-100"
													onClick={() => {
														setAllow(true);
														setUpdated("");
														setNewValue({ ...newValue, property_name: "income" });
													}}>
													Editar
												</button>
												<label
													htmlFor="modalSalario"
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100 cursor-pointer">
													Cerrar
												</label>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label
							htmlFor="modalAvailability"
							className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<HourglassTopRoundedIcon /> Disponibilidad
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalAvailability" className="modal-toggle" onClick={() => setUpdated("")} />
						<div className="modal">
							<div className={`modal-box ${open && "h-[200px]"} flex flex-col justify-between bg-sec`}>
								<Availability
									userData={userData}
									handleChange={handleChange}
									inputAvailability={allow}
									setOpen={setOpen}
								/>
								<div className="modal-action">
									<div className="w-full flex justify-between">
										<p>{updated}</p>
										{allow ? (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri text-sec rounded-lg hover:scale-105 hover:bg-pri-800 active:scale-90 duration-100"
													onClick={handlePut}>
													Guardar
												</button>
												<button
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100"
													onClick={() => {
														setAllow(false);
														setNewValue({ ...newValue, property_name: "" });
														setUserData({ ...userData, availability: initialResumeJson.availability });
													}}>
													Cancelar
												</button>
											</div>
										) : (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri-200 text-pri rounded-lg hover:scale-105 hover:bg-pri-300 active:scale-90 duration-100"
													onClick={() => {
														setAllow(true);
														setUpdated("");
														setNewValue({ ...newValue, property_name: "availability" });
													}}>
													Editar
												</button>
												<label
													htmlFor="modalAvailability"
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100 cursor-pointer">
													Cerrar
												</label>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label htmlFor="modalAreas" className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<ZoomInIcon /> Áreas de interés
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalAreas" className="modal-toggle" onClick={() => setUpdated("")} />
						<div className="modal">
							<div className={`modal-box ${open && "h-[425px]"} flex flex-col justify-between bg-sec`}>
								<Profession handleChange={handleChange} userData={userData} inputProf={allow} setOpen={setOpen} />
								<div className="modal-action">
									<div className="w-full flex justify-between">
										<p>{updated}</p>
										{allow ? (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri text-sec rounded-lg hover:scale-105 hover:bg-pri-800 active:scale-90 duration-100"
													onClick={handlePut}>
													Guardar
												</button>
												<button
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100"
													onClick={() => {
														setAllow(false);
														setNewValue({ ...newValue, property_name: "" });
														setUserData({ ...userData, profession: initialResumeJson.profession });
													}}>
													Cancelar
												</button>
											</div>
										) : (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri-200 text-pri rounded-lg hover:scale-105 hover:bg-pri-300 active:scale-90 duration-100"
													onClick={() => {
														setAllow(true);
														setUpdated("");
														setNewValue({ ...newValue, property_name: "profession" });
													}}>
													Editar
												</button>
												<label
													htmlFor="modalAreas"
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100 cursor-pointer">
													Cerrar
												</label>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label htmlFor="modalForm" className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<PhonelinkRoundedIcon /> Forma de trabajo
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalForm" className="modal-toggle" onClick={() => setUpdated("")} />
						<div className="modal">
							<div className={`modal-box ${open && "h-[235px]"} flex flex-col justify-between bg-sec`}>
								<FormOfWork userData={userData} handleChange={handleChange} inputFormOfWork={allow} setOpen={setOpen} />
								<div className="modal-action">
									<div className="w-full flex justify-between">
										<p>{updated}</p>
										{allow ? (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri text-sec rounded-lg hover:scale-105 hover:bg-pri-800 active:scale-90 duration-100"
													onClick={handlePut}>
													Guardar
												</button>
												<button
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100"
													onClick={() => {
														setAllow(false);
														setNewValue({ ...newValue, property_name: "" });
														setUserData({ ...userData, form_of_work: initialResumeJson.form_of_work });
													}}>
													Cancelar
												</button>
											</div>
										) : (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri-200 text-pri rounded-lg hover:scale-105 hover:bg-pri-300 active:scale-90 duration-100"
													onClick={() => {
														setAllow(true);
														setUpdated("");
														setNewValue({ ...newValue, property_name: "form_of_work" });
													}}>
													Editar
												</button>
												<label
													htmlFor="modalForm"
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100 cursor-pointer">
													Cerrar
												</label>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label
							htmlFor="modalReubication"
							className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<MapIcon /> Podrías reubicarte?
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalReubication" className="modal-toggle" onClick={() => setUpdated("")} />
						<div className="modal">
							<div className={`modal-box ${open && "h-[200px]"} flex flex-col justify-between bg-sec`}>
								<Reubication
									handleChange={handleChange}
									userData={userData}
									inputReubication={allow}
									setOpen={setOpen}
								/>
								<div className="modal-action">
									<div className="w-full flex justify-between">
										<p>{updated}</p>
										{allow ? (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri text-sec rounded-lg hover:scale-105 hover:bg-pri-800 active:scale-90 duration-100"
													onClick={handlePut}>
													Guardar
												</button>
												<button
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100"
													onClick={() => {
														setAllow(false);
														setNewValue({ ...newValue, property_name: "" });
														setUserData({ ...userData, reubication: initialResumeJson.reubication });
													}}>
													Cancelar
												</button>
											</div>
										) : (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri-200 text-pri rounded-lg hover:scale-105 hover:bg-pri-300 active:scale-90 duration-100"
													onClick={() => {
														setAllow(true);
														setUpdated("");
														setNewValue({ ...newValue, property_name: "reubication" });
													}}>
													Editar
												</button>
												<label
													htmlFor="modalReubication"
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100 cursor-pointer">
													Cerrar
												</label>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label htmlFor="modalHobbies" className="w-full flex flex-row justify-between items-center cursor-pointer">
							<span>
								<StarBorderOutlinedIcon /> Aptitudes
							</span>
							<NavigateNextOutlinedIcon />
						</label>
						<input type="checkbox" id="modalHobbies" className="modal-toggle" onClick={() => setUpdated("")} />
						<div className="modal">
							<div className={`modal-box ${open && "h-[230px]"} flex flex-col justify-between bg-sec`}>
								<Hobbies handleChange={handleChange} userData={userData} inputHobbies={allow} setOpen={setOpen} />
								<div className="modal-action">
									<div className="w-full flex justify-between">
										<p>{updated}</p>
										{allow ? (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri text-sec rounded-lg hover:scale-105 hover:bg-pri-800 active:scale-90 duration-100"
													onClick={handlePut}>
													Guardar
												</button>
												<button
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100"
													onClick={() => {
														setAllow(false);
														setNewValue({ ...newValue, property_name: "" });
														setUserData({ ...userData, hobbies: initialResumeJson.hobbies });
													}}>
													Cancelar
												</button>
											</div>
										) : (
											<div className="w-[50%] flex justify-end gap-5">
												<button
													className="w-fit px-2 py-1 bg-pri-200 text-pri rounded-lg hover:scale-105 hover:bg-pri-300 active:scale-90 duration-100"
													onClick={() => {
														setAllow(true);
														setUpdated("");
														setNewValue({ ...newValue, property_name: "hobbies" });
													}}>
													Editar
												</button>
												<label
													htmlFor="modalHobbies"
													className="w-fit px-2 py-1 bg-red-500 text-sec rounded-lg hover:scale-105 hover:bg-red-400 active:scale-90 duration-100 cursor-pointer">
													Cerrar
												</label>
											</div>
										)}
									</div>
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
