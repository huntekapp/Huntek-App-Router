import NavBar from "./navbar";
import PseudoSelect from "./select";

const ProfileExt = () => {
	return (
		<div className="min-w-screen min-h-screen">
			<NavBar />
			<h2 className="py-2 text-xl font-bold text-center text-hk ">Nombre Apellido</h2>
			<div className="h-[80vh] flex-wrap flex flex-col justify-between m-4">
				<div>
					<label>Pregunta</label>
					<br></br>
					<PseudoSelect />
				</div>
				<div>
					<label>Pregunta</label>
					<br></br>
					<PseudoSelect />
				</div>
				<div>
					<label>Pregunta</label>
					<br></br>
					<PseudoSelect />
				</div>
				
				<div>
					<label>Pregunta 2</label>
					<br></br>
					<input
						placeholder="Respuesta"
						className="w-full px-1 border-gray-200 shadow-md rounded-xl focus:outline-none"></input>
				</div>
				<div>
					<label>Pregunta 3</label>
					<br></br>
					<input
						placeholder="Respuesta"
						className="w-full px-1 border-gray-200 shadow-md rounded-xl focus:outline-none"></input>
				</div>
			</div>
		</div>
	);
};
export default ProfileExt;
