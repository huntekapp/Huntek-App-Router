"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import MovingComponent from "react-moving-text";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import FootbarSwipe from "./footbarswipe";
import getCookie from "../helpers/getCookies";
import { useCreateChatMutation } from "../globalstore/services/useCreateChat";

const Swipe = () => {
	const [createChat, { isLoading }] = useCreateChatMutation();
	const user_id = getCookie("AiOiJKV1Q");
	const handleMatch = async () => {
		//if(funcion que matchea usuario con empresa)
		try {
			const response = await createChat(match).unwrap();
			const success = response.data;
		} catch (error) {
			console.log(error);
		}
	};
	const [match, setMatch] = useState({
		sender_id: user_id,
		recipient_id: "",
	});
	const [empresa, setEmpresa] = useState([
		{
			nombre: "Youtube",
			puesto: "Influencer",
			image: "/images/youtube-g6a795f8e6_1920.png",
			info: [
				"Desarrollo de producto",
				"Construir sistemas eficientes",
				"Generar nuevos productos en equipo",
				"Identificar y comunicar las mejores prácticas para la ingeniería de frontend",
			],
			requirements: [
				"Ingeriero/a en Sistemas",
				"3 años de experiencia en el campo",
				"Conocimiento de Next 13 y Tailwind CSS",
				"NodeJS, Express, React, Sass, WPO y SEO",
			],
			why: [
				"Ser parte de una compañía con espíritu emprendedor, ambiciosa y a largo plazo",
				"Ser protagonista de tu desarrollo en un ambiente de proyectos desafiantes",
				"Trabajar junto a excelentes profesionales y especialistas",
				"Un gran clima de trabajo, con todo lo necesario para tener buenas experiencias :)",
			],
		},
		{
			nombre: "Linkedin",
			puesto: "Reclutador",
			image: "/social/linkedin.svg",
			info: [
				"Desarrollo de producto",
				"Construir sistemas eficientes",
				"Generar nuevos productos en equipo",
				"Identificar y comunicar las mejores prácticas para la ingeniería de frontend",
			],
			requirements: [
				"Ingeriero/a en Sistemas",
				"3 años de experiencia en el campo",
				"Conocimiento de Next 13 y Tailwind CSS",
				"NodeJS, Express, React, Sass, WPO y SEO",
			],
			why: [
				"Ser parte de una compañía con espíritu emprendedor, ambiciosa y a largo plazo",
				"Ser protagonista de tu desarrollo en un ambiente de proyectos desafiantes",
				"Trabajar junto a excelentes profesionales y especialistas",
				"Un gran clima de trabajo, con todo lo necesario para tener buenas experiencias :)",
			],
		},
		{
			nombre: "Facebook",
			puesto: "Metadatos",
			image: "/social/facebook.svg",
			info: [
				"Desarrollo de producto",
				"Construir sistemas eficientes",
				"Generar nuevos productos en equipo",
				"Identificar y comunicar las mejores prácticas para la ingeniería de frontend",
			],
			requirements: [
				"Ingeriero/a en Sistemas",
				"3 años de experiencia en el campo",
				"Conocimiento de Next 13 y Tailwind CSS",
				"NodeJS, Express, React, Sass, WPO y SEO",
			],
			why: [
				"Ser parte de una compañía con espíritu emprendedor, ambiciosa y a largo plazo",
				"Ser protagonista de tu desarrollo en un ambiente de proyectos desafiantes",
				"Trabajar junto a excelentes profesionales y especialistas",
				"Un gran clima de trabajo, con todo lo necesario para tener buenas experiencias :)",
			],
		},
		{
			nombre: "Google",
			puesto: "Buscador",
			image: "/social/google.svg",
			info: [
				"Desarrollo de producto",
				"Construir sistemas eficientes",
				"Generar nuevos productos en equipo",
				"Identificar y comunicar las mejores prácticas para la ingeniería de frontend",
			],
			requirements: [
				"Ingeriero/a en Sistemas",
				"3 años de experiencia en el campo",
				"Conocimiento de Next 13 y Tailwind CSS",
				"NodeJS, Express, React, Sass, WPO y SEO",
			],
			why: [
				"Ser parte de una compañía con espíritu emprendedor, ambiciosa y a largo plazo",
				"Ser protagonista de tu desarrollo en un ambiente de proyectos desafiantes",
				"Trabajar junto a excelentes profesionales y especialistas",
				"Un gran clima de trabajo, con todo lo necesario para tener buenas experiencias :)",
			],
		},
		{
			nombre: "Huntek",
			puesto: "Desarrollador FullStack",
			image: "/huntek/logo/G.svg",
			info: [
				"Desarrollo de producto",
				"Construir sistemas eficientes",
				"Generar nuevos productos en equipo",
				"Identificar y comunicar las mejores prácticas para la ingeniería de frontend",
			],
			requirements: [
				"Ingeriero/a en Sistemas",
				"3 años de experiencia en el campo",
				"Conocimiento de Next 13 y Tailwind CSS",
				"NodeJS, Express, React, Sass, WPO y SEO",
			],
			why: [
				"Ser parte de una compañía con espíritu emprendedor, ambiciosa y a largo plazo",
				"Ser protagonista de tu desarrollo en un ambiente de proyectos desafiantes",
				"Trabajar junto a excelentes profesionales y especialistas",
				"Un gran clima de trabajo, con todo lo necesario para tener buenas experiencias :)",
			],
		},
	]);
	const [currentIndex, setCurrentIndex] = useState(empresa.length - 1);
	const [lastIndex, setLastIndex] = useState(null);
	const [lastDirection, setLastDirection] = useState(null);

	const currentCard = empresa[currentIndex];
	const prevCard = empresa[lastIndex];
	const nextCard = empresa[currentIndex - 1];

	const [info, setInfo] = useState(false);
	const [alert, setAlert] = useState(false);
	const [acceptedCards, setAcceptedCards] = useState([]);
	const [rejectedCards, setRejectedCards] = useState([]);
	const [supLikeCards, setSupLikeCards] = useState([]);

	const canSwipe = currentIndex >= 0;
	const canGoBack = currentIndex < empresa.length - 1 && lastIndex !== null && lastDirection === "left";

	const swipe = (dir) => {
		if (canSwipe) {
			if (dir === "up") {
				setSupLikeCards([...supLikeCards, empresa[currentIndex]]);
				confetti({
					particleCount: 400,
					spread: 100,
					startVelocity: 80,
					colors: ["#fbbf24", "#fde68a"],
					shapes: ["square", "circle", "star"],
					scalar: 1.2,
					origin: { y: 1.2 },
					zIndex: 100,
					disableForReducedMotion: false,
					useWorker: true,
				}),
					setPrevOffsetY(-1000),
					setLastIndex(currentIndex),
					setAlert(true),
					setTimeout(() => {
						setAlert(false);
						setCurrentIndex(currentIndex - 1);
					}, 2000);
			} else if (dir === "right") {
				setAcceptedCards([...acceptedCards, empresa[currentIndex]]);
				setPrevOffsetX(1500);
				setLastIndex(currentIndex);
				setCurrentIndex(currentIndex - 1);
			} else if (dir === "left") {
				setRejectedCards([...rejectedCards, empresa[currentIndex]]);
				setPrevOffsetX(-1500);
				setLastIndex(currentIndex);
				setCurrentIndex(currentIndex - 1);
			}
			setLastDirection(dir);
			setInfo(false);
		}
	};

	const goBack = () => {
		if (!canGoBack || !lastDirection === "left" || !lastIndex === "null") return;
		rejectedCards.pop();
		setLastIndex(null);
		setCurrentIndex(currentIndex + 1);
	};

	const [startX, setStartX] = useState(null);
	const [startY, setStartY] = useState(null);
	const [currentX, setCurrentX] = useState(0);
	const [currentY, setCurrentY] = useState(0);
	const [offsetX, setOffsetX] = useState(0);
	const [offsetY, setOffsetY] = useState(0);
	const [prevOffsetX, setPrevOffsetX] = useState(0);
	const [prevOffsetY, setPrevOffsetY] = useState(0);
	const [isInteracting, setIsInteracting] = useState(false);

	const handleTouchStart = (e) => {
		setIsInteracting(true);
		setStartX(e.touches ? e.touches[0].clientX : e.clientX);
		setStartY(e.touches ? e.touches[0].clientY : e.clientY);
	};

	const handleTouchMove = (e) => {
		if (startX === 0 && startY === 0) return;
		if (info) return;

		setCurrentX(e.touches ? e.touches[0].clientX : e.clientX);
		currentX && setOffsetX(currentX - startX);

		setCurrentY(e.touches ? e.touches[0].clientY : e.clientY);
		currentY && setOffsetY(currentY - startY);
	};

	const handleTouchEnd = () => {
		setIsInteracting(false);
		if (offsetX >= 50) {
			swipe("right");
		} else if (offsetX <= -50) {
			swipe("left");
		} else if (offsetY <= -100) {
			swipe("up");
		}

		setCurrentX(0);
		setStartX(null);
		setOffsetX(0);
		setCurrentY(0);
		setStartY(null);
		setOffsetY(0);
	};

	const showInfo = () => {
		setInfo(!info);
	};

	const containerRef = useRef();

	const handleTouch = (event) => {
		event.preventDefault();
	};

	useEffect(() => {
		const containerElement = containerRef.current;
		if (containerElement && !info) {
			containerElement.addEventListener("touchmove", handleTouch, { passive: false });
		} else if (containerElement && info) {
			containerElement.removeEventListener("touchmove", handleTouch, { passive: false });
		}

		return () => {
			if (containerElement) {
				containerElement.removeEventListener("touchmove", handleTouch, { passive: false });
			}
		};
	}, [info]);

	return (
		<main className="w-full h-[90%]" ref={containerRef}>
			<section className="w-full h-[93%] pb-10 bg-pri/70 flex flex-col justify-end items-center relative overflow-hidden">
				{!alert && nextCard && (
					<article
						key={nextCard.nombre}
						className="no-drag w-1/2 max-w-xs h-[50%] bg-sec rounded-3xl shadow-lg blur-lg flex flex-col justify-center items-center absolute top-[22%] duration-1000">
						<div className="w-full h-full p-8 flex flex-col justify-between items-center">
							<div className="w-full h-3/4 grid place-content-center relative">
								<Image src={nextCard.image} alt="Tinder" fill="true" className="no-drag object-contain absolute" />
							</div>
							<div className="w-full flex flex-col justify-center items-left">
								<button className="w-fit btn text-xl bg-sec font-bold text-sec cursor-pointer">
									{nextCard.nombre}
									<InfoOutlinedIcon style={{ fontSize: "1.5rem" }} />
								</button>
								<p className="mt-1 text-lg text-black">{nextCard.puesto}</p>
							</div>
						</div>
					</article>
				)}
				{alert ? (
					<article className="w-full h-full flex flex-col justify-center items-center appearedAlert">
						<article className="no-drag w-full max-w-sm h-[80%] p-8 rounded-3xl flex flex-col justify-between items-center z-10">
							<div className="w-full h-[60%] grid place-content-center relative">
								<Image src={currentCard.image} alt="Tinder" fill="true" className="no-drag object-contain absolute" />
							</div>
							<p className="w-full h-[30%] font-super text-shadow text-sec text-5xl text-center z-10">SUPER LIKE!</p>
						</article>
					</article>
				) : (
					currentCard && (
						<article
							key={currentCard.nombre}
							className={`no-drag w-11/12 max-w-sm ${
								!info ? "h-[96%]" : "h-[90%]"
							} bg-sec rounded-3xl shadow-lg flex flex-col justify-center items-center`}
							style={{
								transform: `translateX(${offsetX}px) translateY(${offsetY}px) rotate(${offsetX / 10}deg)`,
								transition: isInteracting ? "none" : "1s",
							}}
							onTouchStart={handleTouchStart}
							onTouchMove={handleTouchMove}
							onTouchEnd={handleTouchEnd}>
							{!info ? (
								<div className={`w-full h-full p-8 flex flex-col space-y-8 justify-between items-center duration-1000`}>
									<div className="w-full h-3/4 grid place-content-center relative">
										<Image
											src={currentCard.image}
											alt="Tinder"
											fill="true"
											className="no-drag object-contain absolute"
										/>
									</div>
									<div className="w-full flex flex-col justify-center items-left">
										<button
											onClick={showInfo}
											onTouchStart={showInfo}
											className="w-fit text-2xl btn bg-pri font-bold text-sec cursor-pointer">
											{currentCard.nombre}
											<InfoOutlinedIcon style={{ fontSize: "1.5rem" }} />
										</button>
										<p className="mt-1 text-lg font-medium text-black">{currentCard.puesto}</p>
										<p className="line-clamp-3 text-sm/relaxed text-black/60">Guadalajara, México.</p>
									</div>
								</div>
							) : (
								<div className="w-full h-full p-2 flex flex-col justify-center items-center">
									<div className="w-full h-[5%] flex flex-row justify-center items-center relative duration-1000">
										<div
											onDoubleClick={showInfo}
											onTouchStart={showInfo}
											className="w-3/4 h-20 p-2 bg-sec border-4 border-pri rounded-xl shadow-lg flex flex-row justify-evenly items-center -translate-y-[25%] absolute cursor-pointer">
											<div className="w-10 h-10 relative">
												<Image
													src={currentCard.image}
													alt="Tinder"
													fill="true"
													className="no-drag object-contain absolute"
												/>
											</div>
											<div className="w-fit flex flex-col justify-center items-center">
												<p className="text-lg text-black">{currentCard.nombre}</p>
												<p className="line-clamp-3 text-sm/relaxed text-black/95">{currentCard.puesto}</p>
											</div>
										</div>
									</div>
									<div className="w-full h-[95%] mt-4 text-black carousel carousel-vertical appearedInfo">
										<div className="w-full h-96 p-4 pt-0">
											<p className="text-xl text-center font-bold pb-1">¡Te estamos buscando!</p>
											<ul className="text-sm list-disc list-inside">
												{currentCard.info.map((point, index) => (
													<li className="pb-1" key={index}>
														{point}
													</li>
												))}
											</ul>
										</div>
										<div className="w-full h-96 px-4 py-2 rounded-md bg-pri-100">
											<p className="text-xl text-center font-bold pb-1">Requisitos</p>
											<ul className="text-sm list-disc list-inside">
												{currentCard.requirements.map((point, index) => (
													<li className="pb-1" key={index}>
														{point}
													</li>
												))}
											</ul>
										</div>
										<div className="w-full h-96 p-4">
											<p className="text-lg text-center font-bold pb-1">¿Por qué nosotros?</p>
											<ul className="text-sm list-disc list-inside">
												{currentCard.why.map((point, index) => (
													<li className="pb-1" key={index}>
														{point}
													</li>
												))}
											</ul>
										</div>
										<div className="w-full h-96 p-2 bg-pri-100 rounded-bl-box rounded-br-box">
											<iframe
												width="350"
												height="195"
												src="https://www.youtube.com/embed/O8RTHwOEqJA"
												title="YouTube video player"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
												className="w-full h-40 rounded-bl-box rounded-br-box"
												allowFullScreen></iframe>
										</div>
									</div>
								</div>
							)}
						</article>
					)
				)}
				{prevCard && (
					<article
						key={prevCard.nombre}
						className={`no-drag w-11/12 max-w-sm h-[10%] bg-sec rounded-3xl shadow-lg flex flex-col absolute duration-1000`}
						style={{
							transform: `${
								lastDirection === "up"
									? `translateY(${prevOffsetY}px)`
									: `translateX(${prevOffsetX}px) rotate(${prevOffsetX / 10}deg)`
							}`,
						}}>
						<div className={`w-full h-full p-8 flex flex-col justify-between items-center`}>
							<div className="w-full h-3/4 grid place-content-center relative">
								<Image src={prevCard.image} alt="Tinder" fill="true" className="no-drag object-contain w-auto h-auto" />
							</div>
							<div className="w-full flex flex-col justify-center items-left">
								<button className="w-fit btn bg-pri text-xl text-sec font-bold cursor-pointer">
									{prevCard.nombre}
									<InfoOutlinedIcon style={{ fontSize: "1.5rem" }} />
								</button>
								<p className="mt-1 text-lg text-black">{prevCard.puesto}</p>
							</div>
						</div>
					</article>
				)}
			</section>
			<footer className="w-full h-[7%] bg-sec">
				<FootbarSwipe canGoBack={canGoBack} canSwipe={canSwipe} swipe={swipe} goBack={goBack} showInfo={showInfo} />
			</footer>
		</main>
	);
};

export default Swipe;
