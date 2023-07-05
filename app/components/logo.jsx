import Image from "next/image";

const Logo = () => {
	return (
		<div className="mt-5 pt-3">
			<Image src="/huntek/logo-text/W.svg" width={250} height={250} alt="Huntek" />
		</div>
	);
};

export default Logo;
