import NotListedLocationOutlinedIcon from "@mui/icons-material/NotListedLocationOutlined";

const Birthdate = ({ userData, handleChange, inputBirthdate }) => {
	return (
		<div className="w-full mb-2">
			<label htmlFor="birthdate" className="ml-2 font-semibold">
				¿Cuál es tu fecha de nacimiento?
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
			<div className="w-full h-8 bg-pri-100 rounded-lg">
				<input
					type="date"
					name="birthdate"
					value={userData.birthdate}
					placeholder="Seleccione una fecha"
					disabled={!inputBirthdate}
					onChange={(event) => handleChange(event)}
					className="w-full px-3 py-1 text-pri bg-sec border border-[#ccc] rounded-[4px] focus:outline-none focus:bg-pri-100 focus:border-pri hover:border-pri cursor-pointer"
				/>
			</div>
		</div>
	);
};

export default Birthdate;
