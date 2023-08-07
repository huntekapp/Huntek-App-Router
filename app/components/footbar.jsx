"use client";
import Image from "next/image";
import Link from "next/link";
import { IconButton } from "@mui/material";

const Footbar = () => {
	return (
		<footer className="w-full h-20 flex flex-col justify-between items-center relative">
			<Link href="/applicant/swipe" className="w-full flex flex-row justify-center items-center relative">
				<IconButton
					style={{ border: "2px solid #046266", background: "#ffffff" }}
					className="w-16 h-16 bg-sec rounded-full absolute top-1 z-10">
					<Image src="/huntek/logo/G.svg" alt="G" loading={"eager"} width={35} height={35} />
				</IconButton>
			</Link>
			<article className="w-full h-10 bg-pri shadow-[0px_-8px_12px_0px_#0004] fixed bottom-0"></article>
		</footer>
	);
};
export default Footbar;
