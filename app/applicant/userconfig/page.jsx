import ApplicantConfig from "../../components/userConfig/applicant";
import CompanyConfig from "../../components/userConfig/company";

const UserConfig = () => {
	const role = "applicant";

	return (
		<main className="w-full h-screen darkrightgrad flex flex-col lg:flex-row justify-evenly items-center">
			{role === "applicant" ? <ApplicantConfig /> : <CompanyConfig />}
		</main>
	);
};

export default UserConfig;
