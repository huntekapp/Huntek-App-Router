"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useGetInfoUserQuery } from "../../globalstore/services/user-info/useInfoUser";
import { useState } from "react";
import CarouselPlan from "../carouselSuscriptions";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Profile = ({ user, closeProfile, setCloseProfile }) => {
	const router = useRouter();

	const { data, isLoading } = useGetInfoUserQuery();
	const [selectedPlan, setSelectedPlan] = useState(null);

	const handleSelectedPlan = (plan) => {
		setSelectedPlan(plan);
	};

	if (isLoading) {
		return (
			<div className="container">
				<div className="loader2"></div>
			</div>
		);
	}

	return (
		<main className="w-full h-screen text-pri flex flex-col">
			<section className="w-full h-[10%] px-4 border-b flex flex-row justify-between items-center">
				<div className="w-6 h-6"></div>
				<h1 className="w-full text-center text-3xl font-bold cursor-default">Mi Perfil</h1>
				<button
					onClick={() => {
						document.getElementById("profile").click();
						setCloseProfile(!closeProfile);
					}}
					className="w-6 h-6 rounded-full grid place-content-center hover:bg-pri-100 hover:scale-125 duration-150">
					<CloseOutlinedIcon />
				</button>
			</section>
			<section className="w-full h-[90%] flex flex-col justify-around items-center">
				<article className="w-full h-2/6 p-2 flex flex-col justify-center items-center">
					<div className="w-24 h-24 radial-progress" style={{ "--value": 70, "--size": "12rem", "--thickness": "2px" }}>
						<div className="w-20 h-20 grid place-content-center relative">
							<Image
								src={user.image}
								alt="avatar"
								fill={true}
								loading={"eager"}
								className="rounded-full object-cover absolute"
							/>
						</div>
					</div>
					<div className="flex flex-row items-center">
						<h3 className="text-2xl font-medium cursor-default">
							{data?.first_name.split(" ")[0]} {data?.last_name.split(" ")[0]}
						</h3>
						<Link href="/applicant/profileExtend" className="ml-2">
							<EditOutlinedIcon className="w-5 h-5 opacity-70 hover:opacity-100 hover:scale-125 duration-150" />
						</Link>
					</div>
					<p className="text-xs font-normal cursor-default">{data?.email}</p>
				</article>
				<article className="w-full h-4/6 p-2 text-base flex flex-col justify-evenly items-center">
					<div className="w-11/12 h-1/6 flex flex-row justify-center gap-2 items-center">
						<p className="w-fit px-2 py-1 bg-pri text-sec rounded-lg">Mi plan</p>
						<KeyboardDoubleArrowRightOutlinedIcon />
						<p className="font-semibold">{selectedPlan ? selectedPlan : "Básico"}</p>
					</div>
					<div className="w-11/12 max-w-md md:max-w-full h-3/6 relative">
						<CarouselPlan handleSelectedPlan={handleSelectedPlan} />
						<section className="w-full flex flex-row justify-center items-center gap-10 absolute bottom-0">
							<a
								href="#advance"
								className="w-8 h-8 text-pri bg-transparent hover:bg-pri-100 rounded-full md:hidden grid place-content-center">
								<ArrowBackIosNewOutlinedIcon className="p-1" />
							</a>
							<a
								href="#premium"
								className="w-8 h-8 text-pri bg-transparent hover:bg-pri-100 rounded-full md:hidden grid place-content-center">
								<ArrowForwardIosOutlinedIcon className="p-1" />
							</a>
						</section>
					</div>
					<div className="w-full h-1/6 text-pri-500 flex flex-col justify-evenly items-center">
						<button
							className="text-red-700 hover:opacity-70"
							onClick={() => {
								document.cookie = "kTnKETkt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
								document.cookie = "AiOiJKV1Q=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
								router.push("/login");
							}}>
							Cerrar sesión
						</button>
						Copyright © 2023 Huntek App
					</div>
				</article>
			</section>
		</main>
	);
};

export default Profile;
