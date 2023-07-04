import LogForm from "../components/login";
import Logo from "../components/logo";

const Login = () => {
	return (
		<div className="h-screen flex flex-col justify-evenly items-center">
			<Logo />
			<LogForm />
		</div>
	);
};

export default Login;
