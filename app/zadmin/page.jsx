import { useGetUsersQuery } from "../globalstore/services/admin/useGetUsers";

const Admin = () => {
	const { data: users } = useGetUsersQuery();

	console.log(users);
	return (
		<main className="w-full h-screen">
			<section>
				<article></article>
			</section>
		</main>
	);
};
export default Admin;
