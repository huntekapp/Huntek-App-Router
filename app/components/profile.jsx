"use client";
import Image from "next/image";
import Link from "next/link";

const Profile = ({ user, closeProfile, setCloseProfile }) => {
	return (
		<section className="w-full h-screen text-pri flex flex-col">
			<article className="w-full h-[10%] border-b flex flex-row justify-between items-center">
				<h1 className="mx-2 text-3xl font-bold cursor-default">Mi Perfil</h1>
				<button
					onClick={() => {
						document.getElementById("profile").click();
						setCloseProfile(!closeProfile);
					}}
					className="w-6 h-6 mx-2 rounded-full flex flex-row justify-center items-center relative hover:bg-pri-100 hover:scale-125 duration-150">
					<Image src="/utils/x_huntek.svg" alt="close" fill={true} className="absolute" />
				</button>
			</article>
			<article className="w-full h-[90%] p-8 flex flex-col justify-around items-center">
				<div className="w-full h-1/4 flex flex-col justify-around items-center">
					<div className="w-16 h-16 relative">
						<Image
							src={user.image}
							alt="avatar"
							fill={true}
							loading={"eager"}
							className="object-cover rounded-full absolute"
						/>
					</div>
					<div className="flex flex-row items-center">
						<h3 className="text-2xl font-medium cursor-default">{user.name}</h3>
						<Link href="/profileExtend" className="w-4 h-4 ml-2 relative">
							<Image
								src="/utils/pencil_huntek.svg"
								alt="pencil"
								fill={true}
								className="absolute opacity-70 hover:opacity-100 hover:scale-125 duration-150"
							/>
						</Link>
					</div>
					<p className="text-xs font-normal cursor-default">{user.email}</p>
				</div>
				<div className="w-full h-3/4 text-base flex flex-col justify-around items-center">
					<Link href="/postulations" className="w-full h-1/4 flex justify-between items-center hover:opacity-70">
						Postulaciones
						<div className="w-4 h-4 relative">
							<Image src="/utils/goto_huntek.svg" alt="arrow right" fill={true} className="absolute" />
						</div>
					</Link>
					<Link href="/conversations" className="w-full h-1/4 flex justify-between items-center hover:opacity-70">
						Conversaciones
						<div className="w-4 h-4 relative">
							<Image src="/utils/goto_huntek.svg" alt="arrow right" fill={true} className="absolute" />
						</div>
					</Link>
					<Link href="/home" className="w-full h-1/4 flex justify-between items-center hover:opacity-70">
						Términos & Condiciones
						<div className="w-4 h-4 relative">
							<Image src="/utils/goto_huntek.svg" alt="arrow right" fill={true} className="absolute" />
						</div>
					</Link>
					<Link href={"/login"} className="text-red-700 hover:opacity-70">
						Cerrar sesión
					</Link>
				</div>
			</article>
		</section>
	);
};

export default Profile;
