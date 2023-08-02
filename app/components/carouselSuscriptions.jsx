import Image from "next/image";

const CarouselPlan = ({ handleSelectedPlan }) => {
	return (
		<div className="carousel w-full max-w-xs h-4/5">
			<div id="slide1" className="carousel-item relative w-full mx-2">
				<label htmlFor="modalAdvance" className="text-lg font-light cursor-pointer w-full">
					<div className="bg-pri w-full h-full rounded-lg focus:bg-pri-800 flex flex-col justify-center items-center py-2">
						<h2 className="text-2xl text-center text-sec">Advance</h2>
						<p className="text-lg text-center text-sec">$199mxn</p>
						<div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
							<button className="btn btn-circle text-white bg-transparent border-none opacity-60">❮</button>
							<a href="#slide2" className="btn btn-circle text-white bg-transparent border-none">
								❯
							</a>
						</div>
					</div>
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
			</div>
			<div id="slide2" className="carousel-item relative w-full mx-2">
				<label htmlFor="modalPremium" className="text-lg font-light cursor-pointer w-full">
					<div className="bg-pri w-full h-full rounded-lg flex flex-col justify-center items-center py-2">
						<h2 className="text-2xl text-center text-sec">Premium</h2>
						<p className="text-lg text-center text-sec">$299mxn</p>
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
										<li className="text-md font-semibold text-start text-sec">
											Acceso gratuito a eventos de la comunidad
										</li>
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
					</div>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
						<a href="#slide1" className="btn btn-circle text-white bg-transparent border-none">
							❮
						</a>
						<button className="btn btn-circle text-white bg-transparent border-none opacity-60">❯</button>
					</div>
				</label>
			</div>
		</div>
	);
};

export default CarouselPlan;
