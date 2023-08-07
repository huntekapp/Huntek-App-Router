"use client";
import { useState } from "react";
import Premium from "./premium";
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
				<p className="text-lg text-center text-sec font-medium">ve al siguiente nivel</p>
			</article>
			<article className="w-11/12 h-1/5 flex flex-row justify-between items-start">
				<Advance handleSelectedPlan={handleSelectedPlan} />
				<Premium handleSelectedPlan={handleSelectedPlan} />
			</article>
			<article className="w-full min-h-[88px]">
				<div className="flex flex-col w-full h-full items-center">
					<h2 className="text-2xl font-semibold text-center text-pri">Plan seleccionado</h2>
					{selectedPlan === null ? (
						<p className="text-lg text-center text-pri mt-2">No ha seleccionado ningún plan</p>
					) : (
						<p className="text-2xl text-center text-pri mt-2">{selectedPlan}</p>
					)}
					{selectedPlan && (
						<button className="cursor-pointer text-xs text-center text-gray-500 w-fit" onClick={() => setSelectedPlan(null)}>
							Cancelar
						</button>
					)}
				</div>
			</article>
			<article className="h-[10px] pb-8">
				<button className="text-lg text-center text-pri-700 font-semibold underline">
					{selectedPlan === null ? `Continuar sin plan` : `Continuar con el pago`}
				</button>
			</article>
		</section>
	);
};

export default PlanSelector;
