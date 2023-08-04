"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useGetInfoUserQuery } from "@/app/globalstore/services/user-info/useInfoUser";
import { usePostNewFilesMutation } from "@/app/globalstore/services/user-files/useNewFiles";
import { usePostResumeMutation } from "@/app/globalstore/services/user-profile/useResume";
import { useGetFilesQuery } from "@/app/globalstore/services/user-files/useFiles";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
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
  const [postResume] = usePostResumeMutation();
  const [postNewFiles] = usePostNewFilesMutation();
  const [cvFile, setCvFile] = useState(null);
  const [profilePictureFile, setProfilePictureFile] = useState(null);
  const { data: userInfo, isLoading } = useGetInfoUserQuery();
  const firstName = userInfo?.first_name.split(" ")[0];
  const lastName = userInfo?.last_name.split(" ")[0];
  const { data: filesInfo, refetch } = useGetFilesQuery(userInfo?.id);
	const router = useRouter();
  const handleCvChange = (event) => {
    setCvFile(event.target.files[0]);
  };
  const handleProfilePictureChange = (event) => {
    setProfilePictureFile(event.target.files[0]);
  };
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("cv", cvFile);
    formData.append("profile_picture", profilePictureFile);
    try {
      const response = await postNewFiles({ user_id: userInfo?.id, data: formData }).unwrap();
      console.log("Files uploaded successfully!");
      refetch();
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  const [activate, setActivate] = useState(false);

  const [userData, setUserData] = useState({
    mail: userInfo?.email,

    phone: "",
    birthdate: "",
    genre: "Hombre",
    country: "Argentina",

    studies: "",
    university: "",
    degree: "",

    city: "",
    languages: [],
    hobbies: [],

    reubication: "",
    profession: [],
    years_xp: "",

    income: "",
    availability: "",
    form_of_work: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await postResume(userData).unwrap();
      console.log(response);
			router.push("/home")
    } catch (error) {
      console.log(error)
    }
  };

  const [progress, setProgress] = useState(0);

  if (isLoading) {
    return (
      <div className="container">
        <div className="loader"></div>
      </div>
    );
  }
console.log(userData)
  return (
    <section className="w-full h-screen text-sec text-center flex flex-col lg:flex-row justify-between items-center">
      {!activate ? (
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
            <p>Tomate un tiempo</p>
            <div>
              <p>Mientras más preguntas hayas completado</p>
              <p>mejor posicionado estará tu perfil!</p>
            </div>
            <button
              className="w-fit px-2 py-1 bg-pri-100 text-pri rounded-lg hover:bg-sec"
              onClick={() => {setActivate(true)
							setUserData({
								...userData,
								mail: userInfo?.email,
							})}
							}>
              COMENZAR!
            </button>
          </div>
        </article>
      ) : (
        <article className="w-full h-full p-4 flex flex-col justify-evenly items-center">
          <form onSubmit={handleSubmit} className="w-full h-[90%] carousel carousel-center lg:gap-4 text-pri">
            <section
              id="Q1"
              className="carousel-item w-full lg:w-1/2 h-full bg-sec rounded-xl flex flex-col justify-between items-center">
              <h2 className="mt-[5%] text-xl font-medium">Información Importante</h2>
              <article className="w-full flex flex-col justify-around items-center">
                <div className="w-32 h-32 border-4 border-pri rounded-full relative">
                  <Image
                    src={
                      filesInfo === undefined || filesInfo[1]?.url === undefined
                        ? "/images/defaultPhoto.png"
                        : `${filesInfo[1].url}`
                    }
                    alt="profileImg"
                    fill={true}
                    className="rounded-full object-cover absolute"
                  />
                  <label className="w-8 h-8 bg-pri text-sec rounded-full shadow-lg grid place-content-center absolute left-[87px] top-[87px] cursor-pointer hover:bg-sec hover:text-pri">
                    <CloudUploadOutlinedIcon />
                    <input type="file" className="hidden" onChange={handleProfilePictureChange} />
                  </label>
                </div>
                <label className="text-lg font-medium" htmlFor="file_input">
                  Foto de Perfil
                </label>
              </article>
              <article className="h-1/4 flex flex-col justify-evenly items-center">
                <label className="w-fit h-16 px-4 flex flex-col justify-center items-center bg-pri text-sec rounded-lg shadow-lg cursor-pointer hover:bg-sec hover:text-pri">
                  <DriveFolderUploadOutlinedIcon />
                  <span>Seleccionar Archivo</span>
                  <input type="file" className="hidden" onChange={handleCvChange} />
                </label>
                <label className="text-lg font-medium" htmlFor="file_input">
                  Curriculum
                </label>
              </article>
              <a
                href="#Q2"
                onClick={() => {
                 handleUpload, setProgress(16.6);
                }}
                className="w-fit mb-[5%] px-2 py-1 bg-pri-200 text-pri rounded-lg shadow-lg hover:bg-pri hover:text-sec">
                Siguiente
              </a>
            </section>
            <section
              id="Q2"
              className="carousel-item w-full lg:w-1/2 h-full bg-sec rounded-xl flex flex-col justify-between items-center">
              <p className="mt-[5%] text-xl font-medium">Información Personal</p>
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
              <p className="mt-[5%] text-xl font-medium">Información Académica</p>
              <article className="w-11/12">
                <Academic userData={userData} handleChange={handleChange} inputAcademic={true} />
              </article>
              <article className="w-11/12">
                <Studies userData={userData} handleChange={handleChange} inputStudies={true} />
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
              <p className="mt-[5%] text-xl font-medium">Información Adicional</p>
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
              <p className="mt-[5%] text-xl font-medium">Información Adicional</p>
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
              <p className="mt-[5%] text-xl font-medium">Información Adicional</p>
              <article className="w-11/12">
                <Income userData={userData} handleChange={handleChange} inputIncome={true} />
              </article>
              <article className="w-11/12">
                <Availability userData={userData} handleChange={handleChange} inputAvailability={true} />
              </article>
              <article className="w-11/12">
                <FormOfWork userData={userData} handleChange={handleChange} inputFormOfWork={true} />
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
          <div className="w-full h-[10%] text-sec flex flex-row justify-center items-center relative">
            <progress className="w-full h-1/2 progress" value={progress} max="100"></progress>
            <p className="absolute">{`${progress}%`}</p>
          </div>
        </article>
      )}
    </section>
  );
};

export default ApplicantConfig;
