"use client";
import Image from "next/image";
import {useState} from "react";
import EastIcon from "@mui/icons-material/East";

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
		console.log("submitting form data");
	};

	return (
		<section className="w-full min-h-screen bg-sec grid grid-cols-1 gap-4 p-2 place-content-center text-start rounded-md ">
			<h1 className="text-2xl text-center font-bold">Registro Empresa</h1>
			<div className="w-full mb-2">
				<label htmlFor="company" className="ml-2 font-semibold inline-flex items-center">
					¿Cuál es tu nombre?
					<div class="group inline-block">
						<Image
							src="/utils/asterisk_huntek.svg"
							width={16}
							height={16}
							alt="asterisco"
							className="ml-2 aspect-square"
						/>
						<div class="opacity-0 group-hover:opacity-100 bg-pri text-sec text-center absolute p-1 rounded-md  flex justify-center items-center transition duration-300">
							<span>Requerido</span>
						</div>
					</div>
				</label>
				<input
					type="text"
					inputMode="text"
					name="company"
					value={companyUserData.company}
					onChange={(event) => handleChange(event)}
					className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none"
				/>
			</div>
			<div className="w-full mb-2">
				<label htmlFor="username" className="ml-2 font-semibold inline-flex items-center">
					¿Cómo se llama tu empresa?
					<div class="group inline-block">
						<Image
							src="/utils/asterisk_huntek.svg"
							width={16}
							height={16}
							alt="asterisco"
							className="ml-2 aspect-square"
						/>
						<div class="opacity-0 group-hover:opacity-100 bg-pri text-sec text-center absolute p-1 rounded-md  flex justify-center items-center transition duration-300">
							<span>Requerido</span>
						</div>
					</div>
				</label>
				<input
					type="text"
					inputMode="text"
					name="username"
					value={companyUserData.username}
					onChange={(event) => handleChange(event)}
					className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none"
				/>
			</div>
			<div className="w-full mb-2">
				<label htmlFor="mail" className="ml-2 font-semibold inline-flex items-center">
					¿Cuál es tu email?
					<div class="group inline-block">
						<Image
							src="/utils/asterisk_huntek.svg"
							width={16}
							height={16}
							alt="asterisco"
							className="ml-2 aspect-square"
						/>
						<div class="opacity-0 group-hover:opacity-100 bg-pri text-sec text-center absolute p-1 rounded-md  flex justify-center items-center transition duration-300">
							<span>Requerido</span>
						</div>
					</div>
				</label>
				<input
					type="text"
					inputMode="email"
					name="mail"
					value={companyUserData.mail}
					onChange={(event) => handleChange(event)}
					className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none"
				/>
			</div>
			<div className="w-full mb-2">
				<label htmlFor="phone" className="ml-2 font-semibold inline-flex items-center">
					¿Cuál es tu teléfono?
					<div class="group inline-block">
						<Image
							src="/utils/asterisk_huntek.svg"
							width={16}
							height={16}
							alt="asterisco"
							className="ml-2 aspect-square"
						/>
						<div class="opacity-0 group-hover:opacity-100 bg-pri text-sec text-center absolute p-1 rounded-md  flex justify-center items-center transition duration-300">
							<span>Requerido</span>
						</div>
					</div>
				</label>
				<input
					required
					type="text"
					inputMode="tel"
					name="phone"
					value={companyUserData.phone}
					onChange={(event) => handleChange(event)}
					className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none"
				/>
			</div>
			<div className="w-full mb-2">
				<label htmlFor="url" className="ml-2 font-semibold inline-flex items-center">
					¿Cuál es la página web de la empresa?
					<div class="group inline-block">
						<Image
							src="/utils/asterisk_huntek.svg"
							width={16}
							height={16}
							alt="asterisco"
							className="ml-2 aspect-square"
						/>
						<div class="opacity-0 group-hover:opacity-100 bg-pri text-sec text-center absolute p-1 rounded-md  flex justify-center items-center transition duration-300">
							<span>Requerido</span>
						</div>
					</div>
				</label>
				<input
					required
					type="text"
					inputMode="url"
					name="url"
					value={companyUserData.url}
					onChange={(event) => handleChange(event)}
					className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none"
				/>
			</div>
			<label className="ml-2 font-semibold inline-flex items-center">
				¿Cuál es el logotipo de la empresa?
				<div class="group inline-block">
					<Image
						src="/utils/asterisk_huntek.svg"
						width={16}
						height={16}
						alt="asterisco"
						className="ml-2 aspect-square"
					/>
					<div class="opacity-0 group-hover:opacity-100 bg-pri text-sec text-center absolute p-1 rounded-md  flex justify-center items-center transition duration-300">
						<span>Requerido</span>
					</div>
				</div>
			</label>
			<label
				htmlFor="dropzone-file"
				className="w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
				<div className="flex flex-col items-center justify-center pt-5 pb-6">
					<p className="mb-2 text-sm text-gray-500">
						<span className="font-semibold">Cliqueá aquí para subir un archivo</span>
					</p>
					<p className="text-sm text-gray-500 dark:text-gray-400"> o arrastre y suelte.</p>
				</div>
				<input id="dropzone-file" type="file" className="hidden" />
			</label>
			<div className="w-full mb-2">
				<label htmlFor="size" className="ml-2 font-semibold inline-flex items-center">
					¿De que tamaño es la empresa?
					<div class="group inline-block">
						<Image
							src="/utils/asterisk_huntek.svg"
							width={16}
							height={16}
							alt="asterisco"
							className="ml-2 aspect-square"
						/>
						<div class="opacity-0 group-hover:opacity-100 bg-pri text-sec text-center absolute p-1 rounded-md  flex justify-center items-center transition duration-300">
							<span>Requerido</span>
						</div>
					</div>
				</label>
				<input
					required
					type="text"
					inputMode="text"
					name="size"
					value={companyUserData.size}
					onChange={(event) => handleChange(event)}
					className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none"
				/>
			</div>
			<button className="mx-auto my-4 px-2 py-1 bg-pri text-pri-100 rounded-lg items-center" onClick={handleSumbit}>
				Enviar <EastIcon />
			</button>
		</section>
	);
};

export default CompanyQuestions;
