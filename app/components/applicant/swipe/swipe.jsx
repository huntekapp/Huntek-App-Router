"use client";
import { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import SwipeCards from "./swipeCards";
import FootbarSwipe from "../footbar/footbarswipe";
import getCookie from "../../../helpers/getCookies";
import { useCreateChatMutation } from "../../../globalstore/services/chats-msg/useCreateChat";

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
		<section className="w-full h-[90%]" ref={containerRef}>
			<SwipeCards
				alert={alert}
				nextCard={nextCard}
				currentCard={currentCard}
				info={info}
				offsetX={offsetX}
				offsetY={offsetY}
				isInteracting={isInteracting}
				handleTouchStart={handleTouchStart}
				handleTouchMove={handleTouchMove}
				handleTouchEnd={handleTouchEnd}
				showInfo={showInfo}
				prevCard={prevCard}
				lastDirection={lastDirection}
				prevOffsetX={prevOffsetX}
				prevOffsetY={prevOffsetY}
			/>
			<footer className="w-full h-[7%] bg-sec">
				<FootbarSwipe canGoBack={canGoBack} canSwipe={canSwipe} swipe={swipe} goBack={goBack} showInfo={showInfo} />
			</footer>
		</section>
	);
};

export default Swipe;
