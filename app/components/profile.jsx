import Image from "next/image";

const Profile = () => {
	return (
		<div className="bg-white h-screen text-hk">
				<div className="p-4 space-y-9 sm:p-6 sm:rounded-lg">
					<h1 className="text-hk p-2 text-center text-4xl mt-4">Huntek</h1>
				</div>
			<div className="w-full h-full px-4 mb-2 grid grid-cols-1">
				<div className="w-full">
					<div className="p-4 py-4 sm:p-6 sm:rounded-lg">
						<h2 className="p-2 text-2xl font-bold ml-4">Mi perfil</h2>
					</div>

					<div className="p-4 rounded-lg flex text-hk flex-row justify-between">
						<Image width={64} height={64} src="/next.svg" className="ml-12 rounded-full" />
						<div className="flex-row">
							<h3 className="p-2 text-lg font-medium text-center">Nombre Apellido</h3>
							<p className="text-sm font-light text-center">nombreape@email.com</p>
						</div>
						<Image width={32} height={32} src="/utils/pencil_huntek.svg" className="	text-hk hover:opacity-70 mr-8" />
					</div>
					<div className="flex-row p-4 mt-4 sm:rounded-lg">
						<div className="flex flex-row justify-between mx-8 my-8 hover:opacity-50 hover:scale-105">
							<div className="flex-wrap items-center">
								<a className="text-sm font-normal items-center">Notificaciones</a>
							</div>
							<Image width={16} height={16} src="/utils/goto_huntek.svg" className="" />
						</div>
						<div className="flex flex-row justify-between mx-8 my-8">
							<div className="flex-wrap items-center">
								<a className="text-sm font-normal text-red-500 items-center  hover:text-red-300">Cerrar sesión</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
