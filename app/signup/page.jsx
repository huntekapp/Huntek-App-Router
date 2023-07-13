import SignForm from "../components/signup";

const Signup = () => {
	return (
		<section className="h-screen text-sec bg-pri flex flex-col lg:flex-row justify-evenly items-center">
			<article className="w-1/2 h-1/4 lg:w-[500px] lg:h-[500px] flex flex-col justify-center items-center mt-6 lg:mt-0">
				<div className="w-11/12 h-2/3 bg-HKlogo bg-contain bg-center bg-no-repeat"></div>
				<p className="text-3xl lg:text-5xl">Registrarme</p>
			</article>
			<SignForm />
		</section>
	);
};

export default Signup;
