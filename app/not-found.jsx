import Image from "next/image";
const Error404 = () => {
	return (
		<div className="darkrightgrad text-white min-h-screen flex items-center">
			<div className="container mx-auto p-4 flex flex-wrap items-center">
				<div className="w-full  flex md:justify-end justify-center items-center md:w-5/12 lg:w-4/12 text-center ">
					<Image src="/huntek/logo/W.svg" alt="Not Found" width={288} height={30} className="h-72" />
				</div>
				<div className="w-full md:w-7/12 text-center md:text-left p-4">
					<div className="text-6xl font-medium">404</div>
					<div className="text-xl md:text-3xl font-medium mb-4">Ups. La URL requerida no se encontró.</div>
					<div className="text-lg mb-8">
						Puede ser que hayas ingresado incorrectamente la dirección o que la página se haya movido.
					</div>
					<a href="/applicant/home" className="border border-white rounded p-4">
						Home
					</a>
				</div>
			</div>
		</div>
	);
};
export default Error404;
