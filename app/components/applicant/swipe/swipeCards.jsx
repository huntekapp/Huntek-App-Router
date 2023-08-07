import Image from "next/image";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const SwipeCards = ({
	alert,
	nextCard,
	currentCard,
	info,
	offsetX,
	offsetY,
	isInteracting,
	handleTouchStart,
	handleTouchMove,
	handleTouchEnd,
	showInfo,
	prevCard,
	lastDirection,
	prevOffsetX,
	prevOffsetY,
}) => {
	return (
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
						<p className="w-full h-[30%] font-super text-sec text-5xl text-center z-10">SUPER LIKE!</p>
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
									<Image src={currentCard.image} alt="Tinder" fill="true" className="no-drag object-contain absolute" />
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
	);
};

export default SwipeCards;
