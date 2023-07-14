"use client";
import {useState} from "react";
import Image from "next/image";
import {IconButton} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";

const ChatUi = ({pan, selectedChat}) => {
	const [close, setClose] = useState(false);

	return (
		<main className="flex flex-col flex-auto bg-pri-200 w-full justify-start min-h-screen ">
			<nav className="flex bg-sec shadow-lg pl-6  justify-between h-16  items-center border ">
				<h1 className="font-medium text-3xl">{pan[selectedChat].name} </h1>
				<IconButton
					onClick={() => {
						document.getElementById("my-drawer-2").click();
						setClose(!close);
					}}
					className="mr-4">
					<CloseIcon style={{fontSize: "1.2rem", color: "black"}} />
				</IconButton>
			</nav>
			<section className="p-4">
				<article className="flex flex-col p-1  border h-[90vh] h-max-[90vh] bg-sec shadow-lg rounded-2xl ">
					<div className="flex flex-col h-full overflow-x-auto mb-4">
						<ul className="grid grid-cols-12 gap-y-1">
							<li className="col-start-1 col-end-8 p-3 rounded-lg">
								<div className="flex flex-row items-center">
									<Image
										src="/images/pexels-monstera-5384445.jpg"
										width={40}
										height={1}
										quality={100}
										className="flex items-center justify-center h-10 rounded-full   flex-shrink-0"
									/>
									<div className="relative flex  ml-3 text-sm bg-white p-3  shadow rounded-xl">
										<p className=" flex-grow w-auto h-auto "> me contratan? </p>
									</div>
								</div>
							</li>
							<li className="col-start-6 col-end-13 p-3 rounded-lg">
								<div className="flex items-center justify-start flex-row-reverse">
									<Image
										src="/huntek/logo/G.svg"
										width={20}
										height={20}
										quality={100}
										className="flex items-center justify-center h-10 rounded-full   flex-shrink-0"
									/>
									<div className="relative flex mr-3 text-sm bg-indigo-100 p-3  shadow rounded-xl">
										<p className=" flex-grow w-auto h-auto">orale que padre</p>
									</div>
								</div>
							</li>
							<li className="col-start-1 col-end-8 p-3 rounded-lg">
								<div className="flex flex-row items-center">
									<Image
										src="/images/pexels-monstera-5384445.jpg"
										width={40}
										height={1}
										quality={100}
										className="flex items-center justify-center h-10 rounded-full   flex-shrink-0"
									/>
									<div className="relative flex  ml-3 text-sm bg-white p-3  shadow rounded-xl">
										<p className=" flex-grow w-auto h-auto ">ME OLVIDE DE DECIRTE ME Contrataron!</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<footer>
						<article className="flex w-full rounded-xl bg-white  px-4   items-center h-16">
							<button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
								</svg>
							</button>
							<div className="relative w-full flex-grow ml-4">
								<input
									type="text"
									className="flex w-full bg-sec border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
								/>
							</div>
							<div className="flex items-center justify-center ml-4 rounded-xl text-white    sm:px-2 sm:py-2  flex-shrink-0">
								<IconButton>
									<SendIcon style={{color: "#046255"}} />
								</IconButton>
							</div>
						</article>
					</footer>
				</article>
			</section>
		</main>
	);
};
export default ChatUi;
