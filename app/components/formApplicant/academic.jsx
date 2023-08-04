import NotListedLocationOutlinedIcon from "@mui/icons-material/NotListedLocationOutlined";

const Academic = ({ userData, handleChange, inputAcademic }) => {
	return (
		<div className="w-full text-pri">
			<label htmlFor="studies" className="ml-2 font-semibold">
				¿Cuál es tu situación academica?
				<span className="dropdown dropdown-hover font-normal">
					<div tabIndex={0}>
						<NotListedLocationOutlinedIcon className="pb-1" />
					</div>
					<div
						tabIndex={0}
						className="w-fit px-2 py-1 dropdown-content -translate-x-20 z-[1] shadow bg-sec rounded-box">
						Requerido
					</div>
				</span>
			</label>
			<select
				name="studies"
				value={userData.studies}
				disabled={!inputAcademic}
				onChange={(event) => handleChange(event)}
				className="w-full px-2 py-1 bg-pri-100 text-pri rounded-md focus:outline-none">
				<option value="select" hidden>
					Selecciona una opción
				</option>
				<option value="Egresado">Egresado</option>
				<option value="Estudiante">Estudiante</option>
				<option value="Sin estudios">Sin estudios</option>
			</select>
		</div>
	);
};

export default Academic;
