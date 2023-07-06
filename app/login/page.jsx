import LogForm from "../components/login";
import Logo from "../components/logo";

const Login = () => {
	return (
		<section className="min-h-screen bg-pri flex flex-col lg:flex-row justify-evenly items-center">
			<Logo />
			<LogForm />
		</section>
	);
};

export default Login;
