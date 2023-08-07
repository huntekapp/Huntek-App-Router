import CompanyConfig from "../../components/company/userConfig/company";

const UserConfig = () => {
	const role = "company";

	return (
		<main className="w-full h-screen darkrightgrad flex flex-col lg:flex-row justify-evenly items-center">
			<CompanyConfig />
		</main>
	);
};

export default UserConfig;
