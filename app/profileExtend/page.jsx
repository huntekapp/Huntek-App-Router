import NavBar from "../components/navbar";
import ProfileExt from "../components/profileExtend";

const ProfileExtPage = () => {
	return (
		<section className="w-full h-screen bg-sec flex flex-col justify-between items-center">
			<NavBar />
			<ProfileExt />
		</section>
	);
};

export default ProfileExtPage;
