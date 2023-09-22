import Link from "next/link";
import Image from "next/image";

const RoleSelection = () => {
	return (
		<section className="w-full max-w-md h-full text-sec text-center flex flex-col justify-evenly items-center">
			<Link href="/">
				<Image
					src={"/utils/back.svg"}
					height={1}
					width={1}
					alt="backArrow"
					loading={"eager"}
					className="btn btn-ghost btn-circle absolute left-2 top-2 w-[50px] h-[50px] p-2"
				/>
			</Link>
			<article className="w-11/12">
				<p className="m-2 text-xl font-bold">¡Bienvenido/a a Huntek!</p>
				<p className="m-2">Te ofrecemos la opción de elegir entre dos perfiles:</p>
			</article>
			<article className="w-11/12 h-2/3 flex flex-col justify-evenly items-center">
				<div className="max-w-md grid grid-cols-2 place-items-center">
					<div className="w-11/12 h-full p-6 border shadow-lg border-sec text-pri bg-pri-100 rounded-lg">
						<p className="m-2">Candidato en busca de trabajo</p>
						<button className="mx-auto my-4 px-2 py-1 text-lg font-normal hover:bg-pri hover:scale-110 transition duration-300 bg-pri shadow-md text-sec rounded-lg">
							<Link href="/signup/applicant">Candidato</Link>
						</button>
					</div>
					<div className="w-11/12 h-full p-6 border border-white shadow-lg text-pri-100 bg-trasnparent rounded-lg">
						<p className="m-2">Empresa en busca de talento</p>
						<button className="mx-auto my-4 px-2 py-1 text-lg font-normal hover:scale-110 transition duration-300 hover:bg-pri-100  bg-pri-100 shadow-md text-pri rounded-lg">
							<Link href="/signup/company">Empresa</Link>
						</button>
					</div>
				</div>
				<div className="w-11/12 flex flex-row justify-between items-center"></div>
				<p className="m-2 text-center">
					Configura tu perfil ahora y descubre cómo podemos ayudarte a alcanzar tus objetivos.
				</p>
			</article>
		</section>
	);
};

export default RoleSelection;
