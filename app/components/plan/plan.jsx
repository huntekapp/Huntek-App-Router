const PlanSelector = () => {
	return (
		<section className="w-full h-screen flex flex-col justify-between items-center">
			<article className="bg-pri w-11/12 h-1/6 rounded-lg flex flex-col justify-center items-center">
				<h2 className="text-2xl text-center text-sec">Selecciona tu plan ideal</h2>
				<p className="text-lg text-center text-sec font-semibold underline">ve al siguiente nivel</p>
			</article>
			<article className="w-11/12 h-4/6 flex flex-row justify-between items-start">
				<div className="bg-pri-500 w-5/12 h-1/4 rounded-lg hover:bg-pri-400">
					<label htmlFor="modalAdvance" className="text-lg font-light cursor-pointer w-full flex flex-col justify-evenly">
						<h2 className="text-2xl text-center text-sec">Advance</h2>
						<p className="text-lg text-center text-sec">$199mxn</p>
					</label>
					<input type="checkbox" id="modalAdvance" className="modal-toggle" />
					<div className="modal">
						<div className="modal-box">
							Donde estudiaste titan?
							<div className="modal-action">
								<label htmlFor="modalAdvance" className="btn">
									Cerrar
								</label>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-pri-700 w-5/12 h-1/4 rounded-lg hover:bg-pri-600">
					<label htmlFor="modalAdvance" className="text-lg font-light cursor-pointer w-full flex flex-col justify-evenly">
						<h2 className="text-2xl text-center text-sec">Premium</h2>
						<p className="text-lg text-center text-sec">$299mxn</p>
					</label>
					<input type="checkbox" id="modalAdvance" className="modal-toggle" />
					<div className="modal">
						<div className="modal-box">
							<div className="bg-pri-700 w-5/12 h-1/4 rounded-lg">
							<h2 className="text-2xl text-center text-sec">Advance</h2>
							</div>
							<div className="modal-action">
								<label htmlFor="modalAdvance" className="btn">
									Cerrar
								</label>
							</div>
						</div>
					</div>
				</div>
			</article>
			<article className="h-[10px] pb-8">
				<p className="text-lg text-center text-pri-700 font-semibold underline">Continuar sin plan</p>
			</article>
		</section>
	);
};

export default PlanSelector;
