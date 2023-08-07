"use client";
import { useState } from "react";
import EastIcon from "@mui/icons-material/East";
import FirstData from "./optionsemp/namempmail";
import SecondData from "./optionsemp/phonempsi";

const CompanyQuestions = () => {
	const [companyUserData, setCompanyUserData] = useState({
		username: "",
		company: "",
		mail: "",
		phone: "",
		url: "",
		size: "",
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

	const handleChange = (event) => {
		event.preventDefault();
		setCompanyUserData({
			...companyUserData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSumbit = (event) => {
		event.preventDefault();
	};

	return (
		<section className="w-full min-h-screen bg-sec grid grid-cols-1 gap-4 p-2 place-content-center text-start rounded-md ">
			<h1 className="text-2xl text-center font-bold">Registro Empresa</h1>
			<FirstData companyUserData={companyUserData} handleChange={handleChange} />
			<SecondData companyUserData={companyUserData} handleChange={handleChange} />
			<button className="mx-auto my-4 px-2 py-1 bg-pri text-pri-100 rounded-lg items-center" onClick={handleSumbit}>
				Enviar <EastIcon />
			</button>
		</section>
	);
};

export default CompanyQuestions;
