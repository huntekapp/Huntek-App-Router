"use client";
import {useState} from "react";

const PlanSelector = () => {
	const [selectedPlan, setSelectedPlan] = useState(null);

	const handleSelectedPlan = (plan) => {
		setSelectedPlan(plan);
	};

	return (
		<section className="w-full h-screen flex flex-col justify-evenly items-center">
			<article className="bg-pri w-11/12 h-1/6 rounded-lg flex flex-col justify-center items-center">
				<h2 className="text-2xl text-center text-sec">Selecciona tu plan ideal</h2>
				<p className="text-lg text-center text-sec font-semibold underline">ve al siguiente nivel</p>
			</article>
			<article className="w-11/12 h-1/5 flex flex-row justify-between items-start">
				<div className="bg-pri-500 w-5/12 h-full rounded-lg hover:bg-pri-400 flex flex-col justify-center items-center">
					<label
						htmlFor="modalAdvance"
						className="text-lg font-light cursor-pointer w-full">
						<h2 className="text-2xl text-center text-sec">Advance</h2>
						<p className="text-lg text-center text-sec">$199mxn</p>
					</label>
					<input type="checkbox" id="modalAdvance" className="modal-toggle" />
					<div className="modal">
						<div className="modal-box bg-pri-100 ">
							<div className="gap-6 flex flex-col justify-center items-center ">
								<div className="w-11/12 gap-4 bg-pri rounded-md flex flex-col justify-center items-center">
									<h1 className="text-2xl font-semibold text-center text-sec">Advance</h1>
									<p className="px-6 text-md text-center text-sec">
										Para aquellos que buscan proactivamente su proximo desafío
									</p>
								</div>
								<ul className="w-11/12 p-2 bg-pri-600 rounded-md list-disc list-inside flex flex-col">
									<li className="text-md font-semibold text-start text-sec">Suscripción gratis</li>
									<li className="text-md font-semibold text-start text-sec">15 matches por mes</li>
									<li className="text-md font-semibold text-start text-sec">2 one o one (Mentoría)</li>
									<li className="text-md font-semibold text-start text-sec">2 fast pass (no pases desapercibid@)</li>
									<li className="text-md font-semibold text-start text-sec">2 mensajes directos a RRHH</li>
									<li className="text-md font-semibold text-start text-sec">
										Acceso gratuito a eventos de la comunidad
									</li>
								</ul>
								<button
									onClick={() => handleSelectedPlan("Advance")}
									className="w-1/2 rounded-md bg-pri-800 text-2xl border-4 border-pri-800 text-sec font-semibold text-center flex flex-col justify-center items-center focus:bg-pri-200 focus:text-pri focus:animate-bounce">
									Lo quiero!
								</button>
							</div>
							<div className="modal-action">
								<label htmlFor="modalAdvance" className="btn">
									Cerrar
								</label>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-pri-700 w-5/12  h-full rounded-lg hover:bg-pri-600 flex flex-col justify-center items-center">
					<label
						htmlFor="modalPremium"
						className="text-lg font-light cursor-pointer w-full">
						<h2 className="text-2xl text-center text-sec">Premium</h2>
						<p className="text-lg text-center text-sec">$299mxn</p>
					</label>
					<input type="checkbox" id="modalPremium" className="modal-toggle" />
					<div className="modal">
						<div className="modal-box bg-pri-100 ">
							<div className="gap-6 flex flex-col justify-center items-center ">
								<div className="w-11/12 gap-4 bg-pri rounded-md flex flex-col justify-center items-center">
									<h1 className="text-2xl font-semibold text-center text-sec">Premium</h1>
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
									className="w-1/2 rounded-md bg-pri-800 text-2xl border-4 border-pri-800 text-sec font-semibold text-center flex flex-col justify-center items-center focus:bg-pri-200 focus:text-pri focus:animate-bounce">
									Lo quiero!
								</button>
							</div>
							<div className="modal-action">
								<label htmlFor="modalPremium" className="btn">
									Cerrar
								</label>
							</div>
						</div>
					</div>
				</div>
			</article>
			<article>
				<div className="flex flex-col">
					<h2 className="text-2xl font-semibold text-center text-pri">Plan seleccionado</h2>
					<p className="px-6 text-md text-center text-pri">{selectedPlan === null ? `No ha seleccionado ningún plan` : selectedPlan}</p>
				</div>
			</article>
			<article className="h-[10px] pb-8">
				<button className="text-lg text-center text-pri-700 font-semibold underline">{selectedPlan === null ? `Continuar sin plan` : `Continuar con el pago`}</button>
			</article>
		</section>
	); 
};

export default PlanSelector;
