import NotListedLocationOutlinedIcon from "@mui/icons-material/NotListedLocationOutlined";

const Phone = ({ userData, handleChange, inputPhone }) => {
	return (
		<div className="w-full">
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
				value={userData.phone}
				placeholder="Ingrese su teléfono"
				disabled={!inputPhone}
				onChange={(event) => handleChange(event)}
				className="w-full px-3 py-1 text-pri bg-sec border border-[#ccc] rounded-[4px] focus:outline-none focus:bg-pri-100 focus:border-pri hover:border-pri disabled:text-[#888] disabled:hover:border-[#ccc]"
			/>
		</div>
	);
};

export default Phone;
