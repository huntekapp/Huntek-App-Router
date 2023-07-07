import Link from "next/link";

const Interviews = () => {
	return (
		<section className="w-full h-36 my-6 flex flex-col justify-around mb-16">
			<article className="flex flex-row justify-between">
				<p>Mis entrevistas</p>
				<Link href="/interviews" className="font-medium">
					Ver todas
				</Link>
			</article>
			<article className="w-full shadow-lg">
				<div className="h-20 p-3 flex items-center just shadow-lg bg-sec border rounded-xl">
					<span className=" w-20 flex font-bold mr-8 text-sm items-center justify-center border-pri text-pri border-2 h-[3.9rem] rounded-full">
						18 SEP
					</span>
					<p className="text-xl flex w-full font-medium text-black">
						15:30HS | <span className="font-medium ml-2 text-pri"> Coca-Cola</span>
					</p>
				</div>
			</article>
		</section>
	);
};

export default Interviews;
