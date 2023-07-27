"use client"
import { useState } from "react";
import { usePostNewFilesMutation } from "@/app/globalstore/services/user-info/useNewFiles";
import { useGetFilesQuery } from "@/app/globalstore/services/user-info/useFiles";
import Image from "next/image";

const PhotoUpload = ({handleID}) => {
	const {data, isError, isLoading, error} = useGetFilesQuery(handleID);
	const [postNewFiles] = usePostNewFilesMutation();
	const [imagen, subirImagen] = useState({
		cv:"Sin título.png",
		profile_picture:""
	})
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await postNewFiles({user_id: handleID, data:imagen}).unwrap();
		} catch (error) {
			//nada
		}
	}
	const handleChange =(e) => {
subirImagen({
	...imagen,
	[e.target.name]: e.target.value
})
	}
	return (
		<div>
			<label className="ml-2 font-semibold">
				Sube tu mejor foto
				<div className="group inline-block">
					<Image
						src="/utils/asterisk_huntek.svg"
						width={16}
						height={16}
						alt="asterisco"
						className="ml-2 aspect-square"
					/>
					<div className="opacity-0 group-hover:opacity-100 bg-pri text-sec text-center absolute p-1 rounded-md  flex justify-center items-center transition duration-300">
						<span>Requerido</span>
					</div>
				</div>
			</label>
			<label
				htmlFor="dropzone-file"
				className="border-2 w-full rounded-lg cursor-pointer">
				<div className="flex flex-col items-center justify-center pt-5 pb-6">
					<Image src="utils/upload.svg" width={20} height={16} alt="upload" />
					<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
						<span className="font-semibold">Cliquee aquí para subir un archivo</span>
					</p>
					<p className="text-sm text-gray-500 dark:text-gray-400"> o arrastre y suelte.</p>
				</div>
				<form onSubmit={handleSubmit}>
					<input id="dropzone-file" name="profile_picture" type="file" onChange={handleChange} value={imagen.profile_picture} className="hidden" />
					<button className="absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2">Subit foto</button>
					</form>
			</label>
		</div>
	);
};

export default PhotoUpload;