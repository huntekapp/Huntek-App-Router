import Image from "next/image";

const FootbarSwipe = () => {
	return (
		<footer className="w-full p-7 mt-3 bg-sec shadow-[0px_-10px_12px_0px_#00000024] ">
			<div className="w-full border-3 ">
				<div className="flex justify-center gap-16">
					<button className="border-2  bg-pri flex justify-center items-center   mt-[-52px] rounded-full w-14 h-14 hover:scale-105 shadow-xl#00000024">
						<Image src="/utils/briefcase.svg" width={40} height={10} className="h-auto" />
					</button>

					<button className="border-2  bg-pri flex justify-center items-center  mt-[-52px] rounded-full w-14 h-14 hover:scale-105 shadow-xl#00000024">
						<Image src="/huntek/logo/W.svg" width={44} height={10} className="h-auto" />
					</button>

					<button className="border-2  bg-pri flex justify-center  items-center mt-[-52px] rounded-full w-14 h-14 hover:scale-105 shadow-xl#00000024">
						<Image src="/huntek/logo/W.svg" width={44} height={10} className="h-auto" />
					</button>
				</div>
			</div>
		</footer>
	);
};

export default FootbarSwipe;
