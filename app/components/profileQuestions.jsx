"use client";
import { useState } from "react";
import Options from "./options/optionsQ&A";
import OptionsCity from "./options/optionsCity";
import Languages from "./options/language";
import Profession from "./options/professions";
import Studies from "./options/studies";
import Carreer from "./options/carreer";
import Hobbies from "./options/hobbies";
import LastQuestions from "./options/lastquestion";
import FirstQuestions from "./options/firstquestions";

const FormQuestions = () => {
  const [userData, setUserData] = useState({
    mail: "",
    phone: "",
    birthdate: "",
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

  const handleLang = (event) => {
    const add = (event) => {
      if (userData.languages.includes(event.target.value)) {
        return [...userData.languages];
      } else {
        return [...userData.languages, event.target.value];
      }
    };
    setUserData({
      ...userData,
      languages: add(event),
    });
  };

  const handleDeleteLang = (event) => {
    setUserData({
      ...userData,
      languages: userData.languages.filter((temp) => temp !== event),
    });
  };

  const handleProf = (event) => {
    const add = (event) => {
      if (userData.profession.includes(event.target.value)) {
        return [...userData.profession];
      } else {
        return [...userData.profession, event.target.value];
      }
    };
    setUserData({
      ...userData,
      profession: add(event),
    });
  };

  const handleDeleteProf = (event) => {
    setUserData({
      ...userData,
      profession: userData.profession.filter((temp) => temp !== event),
    });
  };

  const handleHobbies = (event) => {
    const add = (event) => {
      if (userData.hobbies.includes(event.target.value)) {
        return [...userData.hobbies];
      } else {
        return [...userData.hobbies, event.target.value];
      }
    };
    setUserData({
      ...userData,
      hobbies: add(event),
    });
  };

  const handleDeleteHobbies = (event) => {
    setUserData({
      ...userData,
      hobbies: userData.hobbies.filter((temp) => temp !== event),
    });
  };

  const handleChange = (event) => {
    event.preventDefault();
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSumbit = (event) => {
		event.preventDefault();
		console.log("submitting form data");
	};

  return (
    <section className="w-full min-h-screen bg-sec grid grid-cols-1 gap-4 p-2 place-content-center text-start rounded-md ">
      <h1 className="text-2xl text-center font-bold">Registro Candidato</h1>
      <FirstQuestions userData={userData} handleChange={handleChange}/>
      <Options userData={userData} handleChange={handleChange} />
      <OptionsCity userData={userData} handleChange={handleChange} />
      <Languages handleDeleteLang={handleDeleteLang} handleLang={handleLang} userData={userData} />
      <Profession userData={userData} handleDeleteProf={handleDeleteProf} handleProf={handleProf} />
      <Studies userData={userData} handleChange={handleChange} />
      <Carreer userData={userData} handleChange={handleChange} />
      <Hobbies userData={userData} handleHobbies={handleHobbies} handleDeleteHobbies={handleDeleteHobbies} />
      <LastQuestions userData={userData} handleChange={handleChange} />
      <button className="mx-auto my-4 px-2 py-1 bg-pri text-pri-100 rounded-lg items-center" onClick={handleSumbit}>
				Enviar <EastIcon />
			</button>
    </section>
  );
};

export default FormQuestions;
