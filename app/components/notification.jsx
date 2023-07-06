"use client";
import Image from "next/image";
import NavBar from "./navbar";
import {useEffect, useState} from "react";

const Notification = () => {
	const [notis, setNotis] = useState([
		{
			name: "NotifiLorem",
			value:
				"Esta es una notificación. Notifica acciones. Nicofront easteregg parte dos. Me parece que quedo lagra lanoti. No acciona notas, no.",
		},
		{
			name: "Notificacion",
			value:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio debitis numquam asperiores dolore ea, vitae",
		},
		{
			name: "Notife",
			value: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis beatae atque qui. Expedita recusandae
	perferendis cum nihil quos`,
		},
		{
			name: "Notifiuno",
			value: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis beatae atque qui. Expedita recusandae
	perferendis cum nihil quos, odio nemo illo eos earum voluptatem fugiat, enim, repudiandae amet ad
	suscipit.`,
		},
		{
			name: "Notifid",
			value: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis beatae atque qui. Expedita recusandae
	perferendis cum nihil quos, odio nemo illo eos earum voluptatem fugiat, enim, repudiandae amet ad
	suscipit.`,
		},
	]);

	const handleClick = (nombre) => {
		let filteredNotis = notis.filter((noti) => noti.name !== nombre);
		setNotis([...filteredNotis]);
	};

	return (
		<div className=" bg-sec text-pri  w-full ">
			<div className=" bg-sec bg-opacity-5 min-h-screen">
				<div className="flex justify-start mt-8 gap-4 h-full w-full items-start flex-col flex-wrap ">
					<h2 className="ml-10 text-4xl font-bold mb-6 ">Notificaciones</h2>
					<div className="p-6 flex-grow">
						{!notis.length && <h2 className="bg-pri p-2 bg-opacity-5 text-xl flex justify-between  items-center font-bold">No hay notificaciones...</h2>}
						{notis.map((e, index) => {
							  return (
								<div key={index}>
									<div className="shadow hover:shadow-pri rounded-md">
										<h2 className="bg-pri p-2 bg-opacity-5 text-xl flex justify-between  items-center font-bold">
											{e.name && `${e.name}`}
											<button onClick={() => handleClick(e.name)} className="btn z-50 btn-ghost btn-circle ">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 z-50 w-6"
													fill="none"
													viewBox="0 0 24 24"
													stroke="#046255">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
												</svg>
											</button>
										</h2>
										<p className="bg-pri px-4 pb-2 bg-opacity-5">{e.value && e.value}</p>
									</div>
									<p className=" text-sec bg-opacity-5">a</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Notification;
