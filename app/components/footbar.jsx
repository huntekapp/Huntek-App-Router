import Image from "next/image";

const Footbar = () => {
	return (
		<footer className="p-7 mt-3 bg-sec shadow-[0px_-10px_12px_0px_#00000024] relative">
			<div className="w-full border-3 ">
				<div className="flex justify-center ">
					<button className="border-2 bg-pri flex justify-center items-center absolute top-0 mt-[-20px] rounded-full w-16 h-16 hover:scale-105 shadow-xl#00000024">
						<Image src="/huntek/logo/W.svg" width={48} height={10} className="h-18" />
					</button>
				</div>
			</div>
		</footer>
	);
};
export default Footbar;
