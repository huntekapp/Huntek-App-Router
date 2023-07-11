import LogForm from "../components/login";

const Login = () => {
	return (
		<section className="h-screen bg-pri flex flex-col lg:flex-row justify-evenly items-center">
			<article className="w-1/2 h-2/5 lg:w-[450px] lg:h-[450px] bg-HKtext bg-contain bg-center bg-no-repeat"></article>
			<LogForm />
		</section>
	);
};

export default Login;
