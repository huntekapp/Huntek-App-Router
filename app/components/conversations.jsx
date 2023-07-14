import Image from "next/image";
import Link from "next/link";

const Conversations = () => {
	return (
		<article className="w-full h-52 px-4 flex flex-col justify-around">
			<div className="flex flex-row justify-between">
				<p>Mis conversaciones</p>
				<Link href="/conversations" className="font-medium">
					Ver todas
				</Link>
			</div>
			<div className="w-full h-4/5 px-4 text-xs xs:text-sm text-pri border rounded-xl shadow-md flex flex-col justify-around">
				<div className="w-full flex flex-row justify-between items-center">
					<div className="w-[70%] flex flex-row justify-start items-center">
						<div className="w-8 h-8 mr-4 rounded-full truncate relative">
							<Image
								alt="profile"
								src="/images/pexels-monstera-5384445.jpg"
								fill={true}
								objectFit="cover"
								className="rounded-full"
							/>
						</div>
						Nico Front | Google
					</div>
					<div className="flex flex-col justify-evenly items-center">
						<p className="">17:00</p>
						<span className="w-5 h-5 grid place-content-center text-sec bg-pri rounded-full cursor-pointer">2</span>
					</div>
				</div>
				<div className="w-full flex flex-row justify-between items-center">
					<div className="w-4/5 flex flex-row justify-start items-center">
						<div className="w-8 h-8 mr-4 truncate rounded-full relative">
							<Image
								alt="profile"
								src="/images/pexels-monstera-5384445.jpg"
								fill={true}
								objectFit="cover"
								className="rounded-full"
							/>
						</div>
						Agus Cabral | Huntek
					</div>
					<div className="flex flex-col justify-evenly items-center">
						<p className="">16:47</p>
						<span className="w-5 h-5 grid place-content-center text-sec bg-pri rounded-full cursor-pointer">4</span>
					</div>
				</div>
			</div>
		</article>
	);
};

export default Conversations;
