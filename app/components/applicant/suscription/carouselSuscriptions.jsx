import Image from "next/image";

const CarouselPlan = ({ handleSelectedPlan }) => {
	return (
		<main className="w-full h-full carousel carousel-left gap-2 md:flex md:flex-row md:justify-center md:gap-6 relative">
			<section
				id="advance"
				className="carousel-item w-[95%] md:w-[45%] h-4/5 text-center text-black advance-grad rounded-xl flex flex-col justify-evenly items-center">
				<h1 className="text-2xl font-semibold">Advance</h1>
				<h2 className="px-16">Para aquellos que buscan proactivamente su próximo desafío</h2>
				<label htmlFor="modalAdvance" className=" cursor-pointer">
					<p className="w-fit px-2 py-1 bg-sec text-pri hover:bg-pri-100 hover:text-pri rounded-lg">$199mxn</p>
				</label>
				<input type="checkbox" id="modalAdvance" className="modal-toggle" />
				<div className="modal cursor-default">
					<div className="modal-box bg-sec">
						<div className="gap-6 flex flex-col justify-center items-center">
							<div className="w-11/12 bg-pri rounded-md flex flex-col justify-center items-center py-3 mt-4">
								<h1 className="text-2xl font-semibold text-center text-sec mb-1">Advance</h1>
								<p className="px-6 text-md text-center text-sec">
									Para aquellos que buscan proactivamente su próximo desafío
								</p>
							</div>
							<ul className="w-11/12 p-2 bg-pri-600 rounded-md list-disc list-inside flex flex-col">
								<li className="text-md font-semibold text-start text-sec">Suscripción gratis</li>
								<li className="text-md font-semibold text-start text-sec">15 matches por mes</li>
								<li className="text-md font-semibold text-start text-sec">2 one o one (Mentoría)</li>
								<li className="text-md font-semibold text-start text-sec">2 fast pass (no pases desapercibid@)</li>
								<li className="text-md font-semibold text-start text-sec">2 mensajes directos a RRHH</li>
								<li className="text-md font-semibold text-start text-sec">Acceso gratuito a eventos de la comunidad</li>
							</ul>
							<button
								onClick={() => handleSelectedPlan("Advance")}
								className="w-fit bg-transparent text-2xl text-pri font-semibold text-center border-pri border-b-2 mt-2">
								LO QUIERO
							</button>
						</div>
						<div className="modal-action">
							<label htmlFor="modalAdvance">
								<Image
									src={"/utils/back_huntek.svg"}
									height={1}
									width={1}
									alt="backArrow"
									loading={"eager"}
									className="btn-ghost rounded-full cursor-pointer absolute left-2 top-2 w-[35px] h-[35px] p-2"
								/>
							</label>
						</div>
					</div>
				</div>
			</section>
			<section
				id="premium"
				className="carousel-item w-[95%] md:w-[45%] h-4/5 text-center text-black premium-grad rounded-xl flex flex-col justify-evenly items-center">
				<h1 className="text-2xl font-semibold">Premium</h1>
				<h2 className="px-20">Para aquellos que quieren superarse y cambiar su vida</h2>
				<label htmlFor="modalPremium" className="cursor-pointer">
					<p className="w-fit px-2 py-1 bg-sec text-pri hover:bg-pri-100 hover:text-pri rounded-lg">$299mxn</p>
				</label>
				<input type="checkbox" id="modalPremium" className="modal-toggle" />
				<div className="modal cursor-default">
					<div className="modal-box bg-sec">
						<div className="gap-6 flex flex-col justify-center items-center ">
							<div className="w-11/12 bg-pri rounded-md flex flex-col justify-center items-center py-3 mt-4">
								<h1 className="text-2xl font-semibold text-center text-sec mb-1">Premium</h1>
								<p className="px-6 text-md text-center text-sec">
									Para aquellos que quieren superarse y cambiar su vida
								</p>
							</div>
							<ul className="w-11/12 p-2 bg-pri-600 rounded-md list-disc list-inside flex flex-col">
								<li className="text-md font-semibold text-start text-sec">Suscripción gratis</li>
								<li className="text-md font-semibold text-start text-sec">Matches ilimitados</li>
								<li className="text-md font-semibold text-start text-sec">4 one o one (Mentoría)</li>
								<li className="text-md font-semibold text-start text-sec">4 fast pass (no pases desapercibid@)</li>
								<li className="text-md font-semibold text-start text-sec">3 mensajes directos a RRHH</li>
								<li className="text-md font-semibold text-start text-sec">Acceso gratuito a eventos de la comunidad</li>
							</ul>
							<button
								onClick={() => handleSelectedPlan("Premium")}
								className="w-fit bg-transparent text-2xl text-pri font-semibold text-center border-pri border-b-2">
								LO QUIERO
							</button>
						</div>
						<div className="modal-action">
							<label htmlFor="modalPremium">
								<Image
									src={"/utils/back_huntek.svg"}
									height={1}
									width={1}
									alt="backArrow"
									loading={"eager"}
									className="btn-ghost rounded-full cursor-pointer absolute left-2 top-2 w-[35px] h-[35px] p-2"
								/>
							</label>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default CarouselPlan;
