"use client";
import Image from "next/image";
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
		<div className=" bg-sec text-pri p-4  w-full ">
			<div className=" bg-sec bg-opacity-5 min-h-screen">
				<div className="flex justify-start h-full w-full items-start flex-col flex-wrap ">
					<div className="px-2 py-3 space-y-6 flex-grow">
						<a href="/home" className="h-12 w-12 flex justify-center rounded-full hover:bg-pri-100">
							<Image alt="back"width={32} height={32} src="utils/back_huntek.svg" />
						</a>
						<h2 className=" text-4xl font-bold mb-6 ">Notificaciones</h2>
						{!notis.length && (
							<h2 className="text-xl flex justify-between  items-center font-bold">No hay notificaciones...</h2>
						)}
						{notis.map((e, index) => {
							return (
								<div key={index}>
									<div className="shadow shadow-pri rounded-lg">
										<h2 className="bg-pri-100 rounded-t-lg px-4 text-lg py-1 flex justify-between  items-center font-bold">
											{e.name && `${e.name}`}
											<button onClick={() => handleClick(e.name)} className="h-4 z-50 w-4 hover:scale-125 duration-300">
												<Image alt="x" width={24} height={24} src="utils/x_huntek.svg" />
											</button>
										</h2>
										<p className="bg-pri-200 rounded-b-lg px-4 p-2">{e.value && e.value}</p>
									</div>
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
