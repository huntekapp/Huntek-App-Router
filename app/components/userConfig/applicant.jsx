"use client";
import { useState } from "react";
import Image from "next/image";
import { useGetInfoUserQuery } from "@/app/globalstore/services/user-info/useInfoUser";

import PersonIcon from "@mui/icons-material/Person";
import Genres from "../formApplicant/genres";
import Country from "../formApplicant/country";
import OptionsCity from "../formApplicant/optionsCity";
import Phone from "../formApplicant/phone";
import Birthdate from "../formApplicant/birthdate";
import Academic from "../formApplicant/academic";
import Studies from "../formApplicant/studies";
import Career from "../formApplicant/career";
import Languages from "../formApplicant/language";
import Hobbies from "../formApplicant/hobbies";
import Reubication from "../formApplicant/reubication";
import Profession from "../formApplicant/professions";
import Experience from "../formApplicant/yearsOfExperience";
import Income from "../formApplicant/income";
import FormOfWork from "../formApplicant/formOfWork";
import Availability from "../formApplicant/availability";

const ApplicantConfig = () => {
	const [needData, setNeedData] = useState({
		image: "",
		cv: "",
	});

	const [userData, setUserData] = useState({
		phone: "",
		birthdate: "",
		genre: "",
		country: "",

		city: "",
		studies: "",
		university: "",
		profession: [],

		languages: [],
		hobbies: [],
	});

	const handleChange = (event) => {
		event.preventDefault();
		setUserData({
			...userData,
			[event.target.name]: event.target.value,
		});
	};

	const { data, isLoading } = useGetInfoUserQuery();
	const firstName = data?.first_name.split(" ")[0];
	const lastName = data?.last_name.split(" ")[0];

	if (isLoading) {
		return (
			<div className="container">
				<div className="loader"></div>
			</div>
		);
	}

	return (
		<section className="w-full h-full p-4 text-sec text-center flex flex-col justify-between items-center">
			<article className="w-full h-[30%] flex flex-col justify-evenly items-center">
				<div className="w-full h-full bg-HKlogo bg-contain bg-center bg-no-repeat"></div>
				<div>
					<h1 className="text-xl sm:text-2xl">
						Bienvenido <span className="font-bold">{`${firstName} ${lastName}`}</span>
					</h1>
					<h2 className="text-lg sm:text-xl text-pri-500">Gracias por unirte a Huntek!</h2>
				</div>
			</article>
			<article className="w-full h-[65%] flex flex-col justify-evenly items-center">
				<h2 className="w-full h-[5%] text-base sm:text-lg">Completa tu perfil para comenzar</h2>
				<main className="w-full max-w-md h-[90%] carousel carousel-vertical rounded-box text-pri bg-pri-100 flex flex-col justify-start items-center border-2">
					<section className="carousel-item w-full h-full bg-pri-100 rounded-box flex flex-col justify-evenly items-center">
						<div className="w-full flex flex-col justify-around items-center">
							<div className="w-28 h-28 border-4 border-pri rounded-full relative">
								<Image
									src={needData.image === "" ? "/images/defaultPhoto.png" : `${needData.image}`}
									alt="profileImg"
									fill={true}
									className="rounded-full object-cover absolute"
								/>
							</div>
							<label class="text-lg font-medium" htmlFor="file_input">
								Sube tu mejor foto
							</label>
						</div>
						<div className="h-1/4 flex flex-col justify-evenly items-center">
							<label class="text-lg font-medium" htmlFor="file_input">
								Carga tu Curriculum
							</label>
							<input type="file" className="w-11/12 h-12 file-input-huntek text-gray-400" />
						</div>
					</section>
					<section className="carousel-item w-full h-full bg-pri-400 flex flex-col justify-evenly items-center">
						<p className="text-xl font-medium">Información Personal</p>
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
					</section>
					<section className="carousel-item w-full h-full text-sec bg-pri-800 flex flex-col justify-evenly items-center">
						<p className="text-xl font-medium">Información Académica</p>
						<article className="w-11/12">
							<Academic userData={userData} handleChange={handleChange} inputAcademic={true} />
						</article>
						<article className="w-11/12">
							<Studies userData={userData} handleChange={handleChange} inputStudies={true} />
						</article>
						<article className="w-11/12">
							<Career userData={userData} handleChange={handleChange} inputCareer={true} />
						</article>
					</section>
					<section className="carousel-item w-full h-full bg-pri-400 flex flex-col justify-evenly items-center">
						<p className="text-xl font-medium">Información Adicional</p>
						<article className="w-11/12">
							<OptionsCity userData={userData} handleChange={handleChange} inputCity={true} />
						</article>
						<article className="w-11/12">
							<Languages userData={userData} handleChange={handleChange} inputLanguages={true} />
						</article>
						<article className="w-11/12">
							<Hobbies userData={userData} handleChange={handleChange} inputHobbies={true} />
						</article>
					</section>
					<section className="carousel-item w-full h-full text-sec bg-pri-800 flex flex-col justify-evenly items-center">
						<p className="text-xl font-medium">Información Adicional</p>
						<article className="w-11/12">
							<Reubication userData={userData} handleChange={handleChange} inputReubication={true} />
						</article>
						<article className="w-11/12">
							<Profession userData={userData} handleChange={handleChange} inputProf={true} />
						</article>
						<article className="w-11/12">
							<Experience userData={userData} handleChange={handleChange} inputExperience={true} />
						</article>
					</section>
					<section className="carousel-item w-full h-full bg-pri-400 flex flex-col justify-evenly items-center">
						<p className="text-xl font-medium">Información Adicional</p>
						<article className="w-11/12">
							<Income userData={userData} handleChange={handleChange} inputIncome={true} />
						</article>
						<article className="w-11/12">
							<Availability userData={userData} handleChange={handleChange} inputAvailability={true} />
						</article>
						<article className="w-11/12">
							<FormOfWork userData={userData} handleChange={handleChange} inputFormOfWork={true} />
						</article>
					</section>
				</main>
			</article>
		</section>
	);
};

export default ApplicantConfig;
