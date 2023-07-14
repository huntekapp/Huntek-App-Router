import Image from "next/image";
import Link from "next/link";

const Profile = () => {
	return (
		<section className="z-40 p-0 bg-sec text-pri">
			<div className="min-w-full h-1/2 ">
				<div className="flex justify-start mt-10 h-full gap-10 w-[100vw]  items-start flex-col flex-wrap ">
					<div className="flex-grow w-full">
						<h2 className="ml-10 text-4xl font-bold mb-12 cursor-default">Mi perfil</h2>
						<div className="rounded-lg  w-full mb-6 justify-start gap-4 mt-4 relative flex items-center text-pri flex-row">
							<Link href="/profileExtend">
								<div className="w-16 h-16 ml-8 avatar">
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
								<h3 className=" text-xl font-medium cursor-default">Luis Sanchez</h3>
								<p className="text-md font-light cursor-default">louissaintchess@gmail.com</p>
							</div>
							<Link href="/profileExtend">
								<Image
									alt="pencil"
									width={25}
									height={25}
									src="/utils/pencil_huntek.svg"
									className="absolute right-0 top-5	text-pri hover:opacity-70 mr-5 cursor-pointer "
								/>
							</Link>
						</div>
						<div className="flex-col  flex-wrap w-full ml-1 flex sm:rounded-lg">
							<Link href="/postulations">
								<div className="flex flex-grow justify-between mx-8 my-6 hover:opacity-50 cursor-pointer ">
									<p className="text-md font-normal">Postulaciones</p>
									<Image alt="arrow right" width={16} height={16} src="/utils/goto_huntek.svg" />
								</div>
							</Link>
							<Link href="/conversations">
								<div className="flex flex-row flex-grow justify-between mx-8 my-6 hover:opacity-50 cursor-pointer ">
									<p className="text-md font-normal">Conversaciones</p>
									<Image alt="arrow right" width={16} height={16} src="/utils/goto_huntek.svg" />
								</div>
							</Link>
							<Link href="/notifications">
								<div className="flex flex-row flex-grow justify-between mx-8 my-6 hover:opacity-50 cursor-pointer ">
									<p className="text-md font-normal">Notificaciones</p>
									<Image alt="arrow right" width={16} height={16} src="/utils/goto_huntek.svg" />
								</div>
							</Link>
							<Link href="/home">
								<div className="flex flex-row flex-grow justify-between mx-8 my-6 hover:opacity-50 cursor-pointer ">
									<p className="text-md font-normal">Términos & Condiciones</p>
									<Image alt="arrow right" width={16} height={16} src="/utils/goto_huntek.svg"/>
								</div>
							</Link>
							<div className="flex flex-row flex-grow justify-between mx-8 my-6">
								<div>
									<p className="text-md font-normal  text-red-500 cursor-pointer hover:opacity-50">Cerrar sesión</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Profile;
