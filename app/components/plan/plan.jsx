"use client";
import { useState } from "react";
import Premium from "./premuim";
import Advance from "./advance";

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
			<Advance handleSelectedPlan={handleSelectedPlan}/>	
			<Premium handleSelectedPlan={handleSelectedPlan}/>
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
