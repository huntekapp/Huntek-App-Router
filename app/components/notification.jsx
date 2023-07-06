import Image from "next/image";
import NavBar from "./navbar";

const Notification = () => {
	return (
		<div className=" bg-sec text-pri">
			<div className=" bg-sec border border-black w-full min-h-screen">
				<div className="flex justify-start mt-8 gap-4 h-full w-[100vw] items-start flex-col flex-wrap ">
					<h2 className="ml-10 text-4xl font-bold mb-6 ">Notificaciones</h2>
					<div className="p-6 flex-grow">
						<h2 className="text-xl font-bold">Notificación</h2>
						<p className="mb-4">
							Esta es una notificación. Notifica acciones. Nicofront easteregg parte dos. Me parece que quedo lagra la
							noti. No acciona notificaciones, no.
						</p>
						<h2 className="text-xl font-bold">Continuación</h2>
						<p className="mb-4">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio debitis numquam asperiores dolore ea, vitae
							minus, distinctio obcaecati reprehenderit eaque voluptatibus deleniti impedit provident possimus, vel quia
							suscipit! Officia, commodi.
						</p>
						<h2 className="text-xl font-bold">Continuación de la continuación</h2>
						<p className="mb-4">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis beatae atque qui. Expedita recusandae
							perferendis cum nihil quos, odio nemo illo eos earum voluptatem fugiat, enim, repudiandae amet ad
							suscipit.
            </p>
            <h2 className="text-xl font-bold">Continuación de la continuación de la continuación</h2>
						<p className="mb-4">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis beatae atque qui. Expedita recusandae
							perferendis cum nihil quos, odio nemo illo eos earum voluptatem fugiat, enim, repudiandae amet ad
							suscipit.
            </p>
            <h2 className="text-xl font-bold">Continuación de la continuación de la continuación de la continuación</h2>
						<p className="mb-4">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis beatae atque qui. Expedita recusandae
							perferendis cum nihil quos, odio nemo illo eos earum voluptatem fugiat, enim, repudiandae amet ad
							suscipit.
            </p>
            <Image width={100} height={100} src="/images/egg.jpg" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Notification;
