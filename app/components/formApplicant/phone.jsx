import NotListedLocationOutlinedIcon from "@mui/icons-material/NotListedLocationOutlined";

const Phone = ({ userData, handleChange, inputPhone }) => {
	return (
		<div className="w-full mb-2">
			<label htmlFor="phone" className="ml-2 font-semibold">
				¿Cuál es tu teléfono?
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
			<input
				type="tel"
				inputMode="tel"
				name="phone"
				placeholder="Ingrese su teléfono"
				disabled={!inputPhone}
				value={userData.phone}
				onChange={(event) => handleChange(event)}
				className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none"
			/>
		</div>
	);
};

export default Phone;
