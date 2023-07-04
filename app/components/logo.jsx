import Image from "next/image";

const Logo = () => {
	return (
		<div>
			<div className="flex flex-row justify-center">
				<Image src="/huntek.svg" width={100} height={126} />
			</div>
			<h1 className="text-hk text-6xl mt-4">Huntek</h1>
		</div>
	);
};

export default Logo;
