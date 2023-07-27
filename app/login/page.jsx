import LogForm from "../components/login";

const Login = () => {
	return (
		<main className="h-screen darkrightgrad flex flex-col lg:flex-row justify-evenly items-center">
			<div className="w-1/2 h-2/5 lg:w-[450px] lg:h-[450px] bg-HKtext bg-contain bg-center bg-no-repeat"></div>
			<LogForm />
		</main>
	);
};

export default Login;
