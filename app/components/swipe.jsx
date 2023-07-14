"use client";
import Image from "next/image";
import TinderCard from "react-tinder-card";
import React, {useState, useMemo, useRef} from "react";
import FootbarSwipe from "./footbarswipe";
const Swipe = () => {
	const [info, setInfo] = useState(false);
	const [empresa, setEmpresa] = useState([
		{nombre: "Google", image: "/social/google.svg", parrafo: "htpps://huntek.com"},
		{nombre: "Huntek", image: "/huntek/logo/G.svg", parrafo: "https://www.google.com/"},
	]);
	const [currentIndex, setCurrentIndex] = useState(empresa.length - 1);
	const [lastDirection, setLastDirection] = useState();
	const [hasSwipedBack, setHasSwipedBack] = useState(false);
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
		}
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
		if (!canGoBack || !hasSwipedBack) return;
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
			<section className="w-full h-[94%] bg-pri/70 flex justify-center items-start relative overflow-hidden">
				{empresa.map((emp, index) => (
					<TinderCard
						ref={childRefs[index]}
						onSwipe={(dir) => swiped(dir, emp.nombre, index)}
						onCardLeftScreen={() => outOfFrame(emp.nombre, index)}
						swipeRequirementType="position"
						swipeThreshold={150}
						key={emp.nombre}
						preventSwipe={["down"]}
						className={`no-drag w-11/12 max-w-sm  ${
							info ? "h-[85.8%] mt-10" : "h-[90%] mt-4"
						} bg-sec rounded-xl shadow-lg flex flex-col justify-center items-center absolute duration-100`}>
						{info ? (
							<article className="w-11/12 h-full flex flex-col justify-center items-center -translate-y-60 duration-500">
								<div className="w-4/5 p-2 bg-sec border-4 border-pri rounded-xl shadow-lg flex flex-row justify-evenly items-center absolute">
									<Image src={emp.image} width={50} height={50} alt="Tinder" className="no-drag object-cover" />
									<div className="w-fit flex flex-col justify-center items-center">
										<p className="text-lg text-black">{emp.nombre}</p>
										<p className="line-clamp-3 text-sm/relaxed text-black/95">FullStack Dev</p>
									</div>
								</div>
								<div className="w-full text-black flex flex-col justify-evenly items-center appearedInfo translate-y-52 duration-1000">
									<p className="text-xl font-bold">¡Te estamos buscando!</p>
									<p className="">¡Te estamos buscando!</p>
									<p className="">¡Te estamos buscando!</p>
									<p className="">¡Te estamos buscando!</p>
									<p className="">¡Te estamos buscando!</p>
									<p className="">¡Te estamos buscando!</p>
									<p className="">¡Te estamos buscando!</p>
									<p className="">¡Te estamos buscando!</p>
									<p className="">¡Te estamos buscando!</p>
									<p className="">¡Te estamos buscando!</p>
									<p className="">¡Te estamos buscando!</p>
								</div>
							</article>
						) : (
							<article className="w-full h-full p-4 appearedContent grid place-content-center duration-500">
								<button>
									<Image src={emp.image} width={320} height={320} alt="Tinder" className="no-drag object-cover" />
								</button>
								<div className="w-full p-4 flex flex-col justify-start">
									<time dateTime="2022-10-10" className="block text-xs text-black/90">
										10th Oct 2022
									</time>
									<a href="/informacion">
										<h3 className="mt-0.5 text-lg text-black">{emp.nombre}</h3>
									</a>
									<a
										href={`${emp.parrafo}`}
										target="_blank"
										className="mt-2 line-clamp-3 text-sm/relaxed text-indigo-500">
										{emp.parrafo}
									</a>
									<p className="mt-2 line-clamp-3 text-sm/relaxed text-black/95">Easter egg numero 3 no se </p>
								</div>
							</article>
						)}
					</TinderCard>
				))}
			</section>
			<footer className="w-full h-[6%] bg-sec">
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
