"use client";
import Image from "next/image";
import { useState } from "react";
import { useGetFilesQuery } from "@/app/globalstore/services/applicant/user-files/useFiles";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

const PhotoUpload = ({ handleID, allow, setNewFile, newFile }) => {
	const { data: filesInfo } = useGetFilesQuery(handleID);
	const [profilePicture, setProfilePicture] = useState("");

	const handleChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (event) => {
				setProfilePicture(event.target.result);
			};
			reader.readAsDataURL(file);
		}
		setNewFile({
			...newFile,
			[event.target.name]: file,
		});
		event.target.value = null;
	};

	return (
		<div className="w-full flex flex-row justify-around items-center">
			<label className="text-center font-semibold">
				Tu foto actual
				<div className="w-36 h-36 border-4 border-pri rounded-full shadow-lg relative">
					<Image
						src={filesInfo && filesInfo[0]?.profile_picture_url}
						alt="avatar"
						fill={true}
						loading={"eager"}
						placeholder="empty"
						blurDataURL="/images/defaultPhoto.png"
						className="rounded-full object-contain absolute"
					/>
				</div>
			</label>
			{allow && (
				<label className="text-center font-semibold">
					Tu nueva foto
					<div className="w-36 h-36 border-4 border-pri rounded-full shadow-lg relative">
						<Image
							src={profilePicture ? profilePicture : "/images/defaultPhoto.png"}
							alt="avatar"
							fill={true}
							loading={"eager"}
							className="rounded-full object-contain absolute"
						/>
						<label className="w-8 h-8 bg-pri text-sec rounded-full shadow-lg grid place-content-center absolute right-[5px] bottom-[5px] cursor-pointer hover:bg-sec hover:text-pri">
							<CloudUploadOutlinedIcon />
							<input type="file" name="profile_picture" className="hidden" onChange={handleChange} />
						</label>
					</div>
				</label>
			)}
		</div>
	);
};

export default PhotoUpload;
