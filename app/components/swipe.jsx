"use client";
import {useState, useEffect, useRef} from "react";
import Image from "next/image";
import FootbarSwipe from "./footbarswipe";

const Swipe = () => {
	const [empresa, setEmpresa] = useState([
		{
			nombre: "Youtube",
			puesto: "Influencer",
			image: "/images/youtube-g6a795f8e6_1920.png",
			info: [
				"Participar del ciclo completo de desarrollo de producto desde el análisis, prototipado y pruebas con usuarios hasta la mejora continua de las soluciones",
				"Construir sistemas de frontend eficientes y reutilizables",
				"Colaborar en la generación de nuevos productos, junto a profesionales de diseño y desarrollo de software",
				"Identificar y comunicar las mejores prácticas para la ingeniería de frontend, formando parte del diseño y revisión del código",
			],
			requirements: [
				"Ser profesional de Ingeniería en Sistemas o carreras afines",
				"Poseer 5 años de experiencia de trabajo en frontend en ambientes de alto desempeño",
				"Contar con experiencia de trabajo con tecnologías web abiertas como JavaScript, HTML y CSS",
				"Tener experiencia en la utilización de NodeJS, Express, React, Sass, WPO y SEO",
				"Residir en cualquier localidad de Argentina",
			],
			why: [
				"Ser parte de una compañía con espíritu emprendedor en la que nos encanta pensar en grande y a largo plazo",
				"Ser protagonista de tu desarrollo en un ambiente de oportunidades, aprendizaje, crecimiento, expansión y proyectos desafiantes",
				"Compartir y aprender en equipo junto a grandes profesionales y especialistas",
				"Un excelente clima de trabajo, con todo lo necesario para que vivas una gran experiencia :)",
			],
		},
		{
			nombre: "Linkedin",
			puesto: "Reclutador",
			image: "/social/linkedin.svg",
			info: [
				"Participar del ciclo completo de desarrollo de producto desde el análisis, prototipado y pruebas con usuarios hasta la mejora continua de las soluciones",
				"Construir sistemas de frontend eficientes y reutilizables",
				"Colaborar en la generación de nuevos productos, junto a profesionales de diseño y desarrollo de software",
				"Identificar y comunicar las mejores prácticas para la ingeniería de frontend, formando parte del diseño y revisión del código",
			],
			requirements: [
				"Ser profesional de Ingeniería en Sistemas o carreras afines",
				"Poseer 5 años de experiencia de trabajo en frontend en ambientes de alto desempeño",
				"Contar con experiencia de trabajo con tecnologías web abiertas como JavaScript, HTML y CSS",
				"Tener experiencia en la utilización de NodeJS, Express, React, Sass, WPO y SEO",
				"Residir en cualquier localidad de Argentina",
			],
			why: [
				"Ser parte de una compañía con espíritu emprendedor en la que nos encanta pensar en grande y a largo plazo",
				"Ser protagonista de tu desarrollo en un ambiente de oportunidades, aprendizaje, crecimiento, expansión y proyectos desafiantes",
				"Compartir y aprender en equipo junto a grandes profesionales y especialistas",
				"Un excelente clima de trabajo, con todo lo necesario para que vivas una gran experiencia :)",
			],
		},
		{
			nombre: "Facebook",
			puesto: "Metadatos",
			image: "/social/facebook.svg",
			info: [
				"Participar del ciclo completo de desarrollo de producto desde el análisis, prototipado y pruebas con usuarios hasta la mejora continua de las soluciones",
				"Construir sistemas de frontend eficientes y reutilizables",
				"Colaborar en la generación de nuevos productos, junto a profesionales de diseño y desarrollo de software",
				"Identificar y comunicar las mejores prácticas para la ingeniería de frontend, formando parte del diseño y revisión del código",
			],
			requirements: [
				"Ser profesional de Ingeniería en Sistemas o carreras afines",
				"Poseer 5 años de experiencia de trabajo en frontend en ambientes de alto desempeño",
				"Contar con experiencia de trabajo con tecnologías web abiertas como JavaScript, HTML y CSS",
				"Tener experiencia en la utilización de NodeJS, Express, React, Sass, WPO y SEO",
				"Residir en cualquier localidad de Argentina",
			],
			why: [
				"Ser parte de una compañía con espíritu emprendedor en la que nos encanta pensar en grande y a largo plazo",
				"Ser protagonista de tu desarrollo en un ambiente de oportunidades, aprendizaje, crecimiento, expansión y proyectos desafiantes",
				"Compartir y aprender en equipo junto a grandes profesionales y especialistas",
				"Un excelente clima de trabajo, con todo lo necesario para que vivas una gran experiencia :)",
			],
		},
		{
			nombre: "Google",
			puesto: "Buscador",
			image: "/social/google.svg",
			info: [
				"Participar del ciclo completo de desarrollo de producto desde el análisis, prototipado y pruebas con usuarios hasta la mejora continua de las soluciones",
				"Construir sistemas de frontend eficientes y reutilizables",
				"Colaborar en la generación de nuevos productos, junto a profesionales de diseño y desarrollo de software",
				"Identificar y comunicar las mejores prácticas para la ingeniería de frontend, formando parte del diseño y revisión del código",
			],
			requirements: [
				"Ser profesional de Ingeniería en Sistemas o carreras afines",
				"Poseer 5 años de experiencia de trabajo en frontend en ambientes de alto desempeño",
				"Contar con experiencia de trabajo con tecnologías web abiertas como JavaScript, HTML y CSS",
				"Tener experiencia en la utilización de NodeJS, Express, React, Sass, WPO y SEO",
				"Residir en cualquier localidad de Argentina",
			],
			why: [
				"Ser parte de una compañía con espíritu emprendedor en la que nos encanta pensar en grande y a largo plazo",
				"Ser protagonista de tu desarrollo en un ambiente de oportunidades, aprendizaje, crecimiento, expansión y proyectos desafiantes",
				"Compartir y aprender en equipo junto a grandes profesionales y especialistas",
				"Un excelente clima de trabajo, con todo lo necesario para que vivas una gran experiencia :)",
			],
		},
		{
			nombre: "Huntek",
			puesto: "Desarrollador FullStack",
			image: "/huntek/logo/G.svg",
			info: [
				"Participar del ciclo completo de desarrollo de producto desde el análisis, prototipado y pruebas con usuarios hasta la mejora continua de las soluciones",
				"Construir sistemas de frontend eficientes y reutilizables",
				"Colaborar en la generación de nuevos productos, junto a profesionales de diseño y desarrollo de software",
				"Identificar y comunicar las mejores prácticas para la ingeniería de frontend, formando parte del diseño y revisión del código",
			],
			requirements: [
				"Ser profesional de Ingeniería en Sistemas o carreras afines",
				"Poseer 5 años de experiencia de trabajo en frontend en ambientes de alto desempeño",
				"Contar con experiencia de trabajo con tecnologías web abiertas como JavaScript, HTML y CSS",
				"Tener experiencia en la utilización de NodeJS, Express, React, Sass, WPO y SEO",
				"Residir en cualquier localidad de Argentina",
			],
			why: [
				"Ser parte de una compañía con espíritu emprendedor en la que nos encanta pensar en grande y a largo plazo",
				"Ser protagonista de tu desarrollo en un ambiente de oportunidades, aprendizaje, crecimiento, expansión y proyectos desafiantes",
				"Compartir y aprender en equipo junto a grandes profesionales y especialistas",
				"Un excelente clima de trabajo, con todo lo necesario para que vivas una gran experiencia :)",
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
	const [acceptedCards, setAcceptedCards] = useState([]);
	const [rejectedCards, setRejectedCards] = useState([]);

	const canSwipe = currentIndex >= 0;
	const canGoBack = currentIndex < empresa.length - 1 && lastIndex !== null && lastDirection === "left";

	const swipe = (dir) => {
		if (canSwipe && currentIndex < empresa.length) {
			if (dir === "right") {
				setAcceptedCards([...acceptedCards, empresa[currentIndex]]);
				setPrevOffsetX(1500);
			} else if (dir === "left") {
				setRejectedCards([...rejectedCards, empresa[currentIndex]]);
				setPrevOffsetX(-1500);
			}

			setLastDirection(dir);
			setLastIndex(currentIndex);
			setCurrentIndex(currentIndex - 1);
			setInfo(false);
		}
	};

	const goBack = () => {
		if (!canGoBack || !lastDirection === "left" || !lastIndex === "null") return;
		rejectedCards.pop();
		setLastIndex(null);
		setCurrentIndex(currentIndex + 1);
	};

	const [startX, setStartX] = useState(0);
	const [currentX, setCurrentX] = useState(0);
	const [offsetX, setOffsetX] = useState(0);
	const [prevOffsetX, setPrevOffsetX] = useState(0);

	const handleTouchStart = (e) => {
		setStartX(e.touches ? e.touches[0].clientX : e.clientX);
	};

	const handleTouchMove = (e) => {
		if (startX === null) return;
		if (info) return;

		setCurrentX(e.touches ? e.touches[0].clientX : e.clientX);
		setOffsetX(currentX - startX);
	};

	const handleTouchEnd = () => {
		if (offsetX >= 150) {
			swipe("right");
		} else if (offsetX <= -150) {
			swipe("left");
		}

		setCurrentX(0);
		setStartX(0);
		setOffsetX(0);
	};

	const showInfo = () => {
		setInfo(!info);
	};
	
	const containerRef = useRef();

  const handleTouchMoveX= (event) => {
    event.preventDefault();
  }

  useEffect(() => {
    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener('touchmove', handleTouchMoveX, { passive: false });
    }

    return () => {
      if (containerElement) {
        containerElement.removeEventListener('touchmove', handleTouchMoveX, { passive: false });
      }
    }
  }, []);

	return (
		<main className="w-full h-[90%]" ref={containerRef}>
			<section className="w-full h-[93%] pb-10 bg-pri/70 flex flex-col justify-end items-center relative overflow-hidden">
				{nextCard && (
					<article
						key={nextCard.nombre}
						className={`no-drag w-1/2 max-w-xs h-[50%] mb-10 bg-sec rounded-3xl shadow-lg blur-xl flex flex-col justify-center items-center absolute duration-500`}>
						<div className={`w-full h-full p-8 flex flex-col justify-between items-center`}>
							<div className="w-full h-3/4 grid place-content-center relative">
								<Image src={nextCard.image} alt="Tinder" fill="true" className="no-drag object-contain w-auto h-auto" />
							</div>
							<div className="w-full flex flex-col justify-center items-left">
								<p
									onDoubleClick={showInfo}
									onTouchStart={showInfo}
									className="w-fit text-3xl font-bold text-black cursor-pointer">
									{nextCard.nombre}
								</p>
								<p className="mt-1 text-lg text-black">{nextCard.puesto}</p>
							</div>
						</div>
					</article>
				)}
				{currentCard && (
					<article
						key={currentCard.nombre}
						className={`no-drag w-11/12 max-w-sm ${
							!info ? "h-[96%]" : "h-[90%]"
						} bg-sec rounded-3xl shadow-lg flex flex-col justify-center items-center duration-500`}
						style={{transform: `translateX(${offsetX}px) rotate(${offsetX / 10}deg)`}}
						onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}
						onTouchEnd={handleTouchEnd}>
						{!info ? (
							<div className={`w-full h-full p-8 flex flex-col justify-between items-center duration-500`}>
								<div className="w-full h-3/4 grid place-content-center relative">
									<Image
										src={currentCard.image}
										alt="Tinder"
										fill="true"
										className="no-drag object-contain w-auto h-auto"
									/>
								</div>
								<div className="w-full flex flex-col justify-center items-left">
									<p
										onDoubleClick={showInfo}
										onTouchStart={showInfo}
										className="w-fit text-3xl font-bold text-black cursor-pointer">
										{currentCard.nombre}
									</p>
									<p className="mt-1 text-lg text-black">{currentCard.puesto}</p>
								</div>
							</div>
						) : (
							<div className="w-full h-full p-2 flex flex-col justify-center items-center">
								<div className="w-full h-[5%] flex flex-row justify-center items-center relative duration-500">
									<div
										onDoubleClick={showInfo}
										onTouchStart={showInfo}
										className="w-3/4 h-20 p-2 bg-sec border-4 border-pri rounded-xl shadow-lg flex flex-row justify-evenly items-center -translate-y-[25%] absolute cursor-pointer">
										<div className="w-10 h-10 relative">
											<Image
												src={currentCard.image}
												alt="Tinder"
												fill="true"
												className="no-drag object-contain w-auto h-auto"
											/>
										</div>
										<div className="w-fit flex flex-col justify-center items-center">
											<p className="text-lg text-black">{currentCard.nombre}</p>
											<p className="line-clamp-3 text-sm/relaxed text-black/95">{currentCard.puesto}</p>
										</div>
									</div>
								</div>
								<div className="w-full h-[95%] text-black carousel carousel-vertical appearedInfo duration-1000">
									<div className="w-full h-96 p-4">
										<p className="text-xl text-center font-bold">¡Te estamos buscando!</p>
										<ul className="text-sm list-disc list-inside">
											{currentCard.info.map((point, index) => (
												<li key={index}>{point}</li>
											))}
										</ul>
									</div>
									<div className="w-full h-96 p-4 bg-pri-100">
										<p className="text-xl text-center font-bold">Requisitos</p>
										<ul className="text-sm list-disc list-inside">
											{currentCard.requirements.map((point, index) => (
												<li key={index}>{point}</li>
											))}
										</ul>
									</div>
									<div className="w-full h-96 p-4">
										<p className="text-lg text-center font-bold">¿Por qué nosotros?</p>
										<ul className="text-sm list-disc list-inside">
											{currentCard.why.map((point, index) => (
												<li key={index}>{point}</li>
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
				)}
				{prevCard && (
					<article
						key={prevCard.nombre}
						className={`no-drag w-11/12 max-w-sm h-[83%] mt-12 max-h-[450px] mb-10 bg-sec rounded-3xl shadow-lg flex flex-col justify-center items-center absolute`}
						style={{transform: `translateX(${prevOffsetX}px) rotate(${prevOffsetX / 10}deg)`, transition: `1s`}}>
						<div className={`w-full h-full p-8 flex flex-col justify-between items-center`}>
							<div className="w-full h-3/4 grid place-content-center relative">
								<Image src={prevCard.image} alt="Tinder" fill="true" className="no-drag object-contain w-auto h-auto" />
							</div>
							<div className="w-full flex flex-col justify-center items-left">
								<p
									onDoubleClick={showInfo}
									onTouchStart={showInfo}
									className="w-fit text-3xl font-bold text-black cursor-pointer">
									{prevCard.nombre}
								</p>
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
