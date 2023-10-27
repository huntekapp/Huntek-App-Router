import Image from "next/image";
import ApplicantForm from "../../components/applicant";
import Link from "next/link";

const Signup = () => {
	return (
		<section className="w-full h-screen text-sec darkrightgrad flex flex-col lg:flex-row justify-evenly items-center relative">
			<article className="w-1/2 h-1/4 lg:w-[500px] lg:h-[500px] flex flex-col justify-center items-center mt-6 lg:mt-0">
				<div className="w-11/12 h-2/3 bg-HKlogo bg-contain bg-center bg-no-repeat"></div>
				<h1 className="text-3xl lg:text-5xl">Regístrate</h1>
			</article>
			<ApplicantForm />
			<Link href="/signup" className="absolute left-2 top-2">
				<Image
					src={"/utils/back.svg"}
					height={1}
					width={1}
					alt="backArrow"
					loading={"eager"}
					className="w-[50px] h-[50px] p-2 btn btn-ghost btn-circle"
				/>
			</Link>
		</section>
	);
};

export default Signup;
