import NavBar from "../components/navbar";
import ProfileExt from "../components/profileExtend";

const ProfileExtPage = () => {
	return (
		<main className="w-full min-h-screen bg-sec flex flex-col justify-between items-center">
			<NavBar />
			<ProfileExt />
		</main>
	);
};

export default ProfileExtPage;
