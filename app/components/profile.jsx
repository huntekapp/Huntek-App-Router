import Image from "next/image";
import Link from "next/link";

const Profile = () => {
	return (
		<div className="z-40 p-0 bg-sec text-pri">
			<div className="min-w-full h-1/2">
				<div className="flex justify-start mt-24 h-full gap-10 w-[100vw]  items-start flex-col flex-wrap ">
					<div className="flex-grow w-full">
						<h2 className="ml-10 text-4xl font-bold mb-12 cursor-default">Mi perfil</h2>

						<div className="rounded-lg w-full mb-6 justify-start gap-7 mt-4 flex-wrap flex items-center text-pri flex-row">
							<Link href="/profileExtend">
								<div className="w-16 h-16 ml-10 avatar ">
									<Image
										alt="avatar"
										width={100}
										height={100}
										quality={100}
										src="/images/pexels-monstera-5384445.jpg"
										className=" rounded-full cursor-pointer"
									/>
								</div>
							</Link>
							<div>
								<h3 className=" text-xl font-medium cursor-default">Nombre Apellido</h3>
								<p className="text-lg font-light cursor-default">nombreape@email.com</p>
							</div>
							<Link href="/profileExtend">
								<Image
									alt="pencil"
									width={25}
									height={25}
									src="/utils/pencil_huntek.svg"
									className="mx-auto	text-pri hover:opacity-70 mr-8 cursor-pointer ml-12"
								/>
							</Link>
						</div>
						<div className="flex-col  flex-wrap w-full ml-1 flex sm:rounded-lg">
							<div className="flex flex-grow justify-between mx-8 my-6 hover:opacity-50 cursor-pointer ">
								<div>
									<a className="text-md font-normal">Recompensas</a>
								</div>
								<Image alt="arrow right" width={16} height={16} src="/utils/goto_huntek.svg" className="" />
							</div>
							<div className="flex flex-row flex-grow justify-between mx-8 my-6 hover:opacity-50 cursor-pointer ">
								<div>
									<a className="text-md font-normal">Conversaciones</a>
								</div>
								<Image alt="arrow right" width={16} height={16} src="/utils/goto_huntek.svg" className="" />
							</div>
							<div className="flex flex-row flex-grow justify-between mx-8 my-6 hover:opacity-50 cursor-pointer ">
								<div>
									<a className="text-md font-normal">Notificaciones</a>
								</div>
								<Image alt="arrow right" width={16} height={16} src="/utils/goto_huntek.svg" className="" />
							</div>
							<div className="flex flex-row flex-grow justify-between mx-8 my-6 hover:opacity-50 cursor-pointer ">
								<div>
									<a className="text-md font-normal">Términos & Condiciones</a>
								</div>
								<Image alt="arrow right" width={16} height={16} src="/utils/goto_huntek.svg" className="" />
							</div>
							<div className="flex flex-row flex-grow justify-between mx-8 my-6">
								<div>
									<a className="text-md font-normal  text-red-500 cursor-pointer hover:opacity-50">Cerrar sesión</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
