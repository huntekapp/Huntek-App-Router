import Image from "next/image";

const Footbar = () => {
	return (
		<div className="flex justify-center absolute bottom-0 bg-pri w-full">
			<div className="bg-white rounded-full border-[hk]">
				<Image src="/huntek/logo/G.svg" width={50} height={50} alt="huntekLogo" className="rounded-full"/>
			</div>
		</div>
	);
};
export default Footbar;
