import NavBar from "../../components/applicant/navbar/navbar";
import ProfileExt from "../../components/applicant/profile/profileExtend";

const ProfileExtPage = () => {
	return (
		<main className="w-full h-screen bg-sec flex flex-col justify-between items-center">
			<NavBar />
			<ProfileExt />
		</main>
	);
};

export default ProfileExtPage;
