"use client";
import Image from "next/image";
import TinderCard from "react-tinder-card";
import React, {useState, useMemo, useRef} from "react";
import FootbarSwipe from "./footbarswipe";

const Swipe = () => {
	const [info, setInfo] = useState(false);
	const [empresa, setEmpresa] = useState([
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
			puesto: "Desarrollador Fullstack",
			image: "/huntek/logo/G.svg",
			info: [
				"React, Next.js, Node.js, PostgreSQL, Sequelize y Python",
				"Jornada laboral de 40 horas semanales",
				"Trabajo remoto",
			],
			requirements: [],
			why: ["Fin de semanas libres", " Dos semanas de vacaciones al año", "Objetivos salariales"],
		},
	]);
	const [currentIndex, setCurrentIndex] = useState(empresa.length - 1);
	const [lastDirection, setLastDirection] = useState();
	const [hasSwipedBack, setHasSwipedBack] = useState(false);
	const [lastSwipeDirection, setLastSwipeDirection] = useState(null);
	const [lastLeftSwipeIndex, setLastLeftSwipeIndex] = useState(null); // Nueva variable de estado para rastrear el índice de la última carta deslizada hacia la izquierda
	const currentIndexRef = useRef(currentIndex);

	const childRefs = useMemo(
		() =>
			Array(empresa.length)
				.fill(0)
				.map((i) => React.createRef()),
		[]
	);

	const updateCurrentIndex = (val) => {
		setCurrentIndex(val);
		currentIndexRef.current = val;
	};

	const canGoBack = currentIndex < empresa.length - 1;

	const canSwipe = currentIndex >= 0;

	const swiped = (direction, nameToDelete, index) => {
		setLastDirection(direction);
		updateCurrentIndex(index - 1);
		if (direction === "left") {
			setHasSwipedBack(true);
			setLastLeftSwipeIndex(index); // Actualizar el índice de la última carta deslizada hacia la izquierda
		} else {
			setHasSwipedBack(false);
		}
		setLastSwipeDirection(direction);
	};

	const outOfFrame = (nombre, idx) => {
		console.log(`${nombre} (${idx}) left the screen!`, currentIndexRef.current);
		currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
	};

	const swipe = async (dir) => {
		if (canSwipe && currentIndex < empresa.length) {
			await childRefs[currentIndex].current.swipe(dir);
		}
	};

	const goBack = async () => {
		if (!canGoBack || !hasSwipedBack || lastSwipeDirection !== "left" || lastLeftSwipeIndex !== currentIndex + 1)
			return; // Verificar si el índice de la última carta deslizada hacia la izquierda es igual al índice de la carta que se está intentando recuperar
		const newIndex = currentIndex + 1;
		updateCurrentIndex(newIndex);
		await childRefs[newIndex].current.restoreCard();
		setHasSwipedBack(false);
	};

	const showInfo = () => {
		setInfo(!info);
	};

	return (
		<main className="w-full h-[90%]">
			<section className="w-full h-[93%] bg-pri/70 flex flex-col justify-center items-center relative overflow-hidden">
				{empresa.map((emp, index) => (
					<TinderCard
						ref={childRefs[index]}
						onSwipe={(dir) => swiped(dir, emp.nombre, index)}
						onCardLeftScreen={() => outOfFrame(emp.nombre, index)}
						swipeRequirementType="position"
						swipeThreshold={150}
						key={emp.nombre}
						preventSwipe={["down", "up", "left", "right"]}
						className={`no-drag w-11/12 max-w-sm ${
							info ? "h-[83%] mt-12" : "h-[90%] mt-4"
						} max-h-[500px] mb-10 bg-sec rounded-3xl shadow-lg flex flex-col justify-center items-center absolute duration-150`}>
						{info ? (
							<article className="w-full h-full p-2 flex flex-col justify-center items-center">
								<div className="w-full h-[12%] flex flex-row justify-center items-center -translate-y-[50%] duration-500">
									<div
										onDoubleClick={showInfo}
										onTouchStart={showInfo}
										className="w-3/4 p-2 bg-sec border-4 border-pri rounded-xl shadow-lg flex flex-row justify-evenly items-center absolute cursor-pointer">
										<Image src={emp.image} width={50} height={50} alt="Tinder" className="no-drag" />
										<div className="w-fit flex flex-col justify-center items-center">
											<p className="text-lg text-black">{emp.nombre}</p>
											<p className="line-clamp-3 text-sm/relaxed text-black/95">{emp.puesto}</p>
										</div>
									</div>
								</div>
								<div className="w-full h-[88%] text-black carousel carousel-vertical appearedInfo duration-1000">
									<div className="w-full h-96 p-4">
										<p className="text-xl text-center font-bold">¡Te estamos buscando!</p>
										<ul className="text-sm list-disc list-inside">
											{emp.info.map((point, index) => {
												return <li key={index}>{point}</li>;
											})}
										</ul>
									</div>
									<div className="w-full h-96 p-4 bg-pri-100">
										<p className="text-xl text-center font-bold">Requisitos</p>
										<ul className="text-sm list-disc list-inside">
											{emp.requirements.map((point, index) => {
												return <li key={index}>{point}</li>;
											})}
										</ul>
									</div>
									<div className="w-full h-96 p-4">
										<p className="text-lg text-center font-bold">¿Por qué nosotros?</p>
										<ul className="text-sm list-disc list-inside">
											{emp.why.map((point, index) => {
												return (
													<li key={index} className="">
														{point}
													</li>
												);
											})}
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
							</article>
						) : (
							<article className="w-full h-full p-8 appearedContent flex flex-col justify-between items-center duration-500">
								<div className="w-full h-3/4 grid place-content-center relative">
									<Image src={emp.image} alt="Tinder" fill="true" className="no-drag" />
								</div>
								<div className="w-full flex flex-col justify-center items-center">
									<p
										onDoubleClick={showInfo}
										onTouchStart={showInfo}
										className="text-3xl font-bold text-black cursor-pointer">
										{emp.nombre}
									</p>
									<p className="mt-1 text-lg text-black">Front end junior Developer </p>
								</div>
							</article>
						)}
					</TinderCard>
				))}
			</section>
			<footer className="w-full h-[7%] bg-sec">
				<FootbarSwipe
					hasSwipedBack={hasSwipedBack}
					canGoBack={canGoBack}
					canSwipe={canSwipe}
					swipe={swipe}
					goBack={goBack}
					showInfo={showInfo}
				/>
			</footer>
		</main>
	);
};

export default Swipe;
