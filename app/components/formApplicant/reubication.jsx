import NotListedLocationOutlinedIcon from "@mui/icons-material/NotListedLocationOutlined";

const Reubication = ({ userData, handleChange, inputReubication }) => {
	return (
		<div className="w-full mb-2">
			<label htmlFor="reubication" className="ml-2 font-semibold">
				¿Podrías reubicarte en otra ciudad?
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
				name="reubication"
				value={userData.reubication}
				disabled={!inputReubication}
				onChange={(event) => handleChange(event)}
				className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none">
				<option value="select" hidden>
					Selecciona una opción
				</option>
				<option value="true">Si</option>
				<option value="false">No</option>
			</select>
		</div>
	);
};

export default Reubication;
