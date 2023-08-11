"use client";
import Image from "next/image";
import {useState} from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import JobCareer from "../../company/jobOffer/formJobOffer/jobcareer";
import JobSalary from "./formJobOffer/jobsalary";
import JobStatus from "./formJobOffer/jobstatus";
import JobSkills from "./formJobOffer/jobskills";
// import Genres from "../formApplicant/genres";
// import Country from "../formApplicant/country";
// import OptionsCity from "../formApplicant/optionsCity";
// import Phone from "../formApplicant/phone";
// import Birthdate from "../formApplicant/birthdate";
// import Academic from "../formApplicant/academic";
// import Studies from "../formApplicant/studies";
// import Career from "../formApplicant/career";
// import Languages from "../formApplicant/language";
// import Hobbies from "../formApplicant/hobbies";
// import Reubication from "../formApplicant/reubication";
// import Profession from "../formApplicant/professions";
// import Experience from "../formApplicant/yearsOfExperience";
// import Salary from "../formApplicant/Salary";
// import FormOfWork from "../formApplicant/formOfWork";
// import Availability from "../formApplicant/availability";

const JobOffer = () => {
	const [activate, setActivate] = useState(true);
	const [jobProps, setJobProps] = useState({
		career: {
			value: [],
			determinant: true,
		},
		status: {
			value: "",
			determinant: false,
		},
		skills: {
			value: [],
			determinant: false,
		},
		job_type: {
			value: "",
			determinant: true,
		},
		salary: {
			value: {
				min: 0,
				max: 0,
			},
			determinant: false,
		},
		language: {
			value: [],
			determinant: false,
		},
		responsibilities: {
			value: [],
			determinant: false,
		},
		availability: {
			value: "",
			determinant: true,
		},
		relocation: {
			value: "",
			determinant: false,
		},
		sector: {
			value: [],
			determinant: false,
		},
		video_link: {
			value: "",
			determinant: false,
		},
		current_location: {
			value: "",
			determinant: true,
		},
		why_us: {
			value: [],
			determinant: false,
		},
		company_link: {
			value: "",
			determinant: false,
		},
	});
	console.log(jobProps);
	const [progress, setProgress] = useState(0);

	const handleChange = (event) => {
		setJobProps({
			...jobProps,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<section className="w-full h-screen text-sec bg-pri text-center flex flex-col lg:flex-row justify-between items-center">
			<article className="flex flex-col items-center justify-center">
				<div className="flex flex-col items-center justify-center">
					<h2 className="text-center">Vacante de Trabajo</h2>
					<JobCareer jobProps={jobProps} handleChange={handleChange} />
					<JobSalary jobProps={jobProps} handleChange={handleChange} />
					<JobStatus jobProps={jobProps} handleChange={handleChange} />
					<JobSkills jobProps={jobProps} setJobProps={setJobProps} handleChange={handleChange} />
				</div>
			</article>
		</section>
	);
};

export default JobOffer;
