import ApplicantForm from "../../components/signup/applicant";

const Signup = () => {
	return (
		<section className="h-screen text-sec darkrightgrad flex flex-col lg:flex-row justify-evenly items-center">
			<article className="w-1/2 h-1/4 lg:w-[500px] lg:h-[500px] flex flex-col justify-center items-center mt-6 lg:mt-0">
				<div className="w-11/12 h-2/3 bg-HKlogo bg-contain bg-center bg-no-repeat"></div>
				<h1 className="text-3xl lg:text-5xl">Registrarme</h1>
			</article>
			<ApplicantForm />
		</section>
	);
};

export default Signup;
