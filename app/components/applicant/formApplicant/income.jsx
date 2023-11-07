import NotListedLocationOutlinedIcon from "@mui/icons-material/NotListedLocationOutlined";

const Income = ({ userData, handleChange, inputIncome }) => {
	return (
		<div className="w-full">
			<label htmlFor="income" className="mr-2 font-semibold">
				¿Cuál es tu sueldo anual deseado bruto? {"(MXN)"}
			</label>
			<span className="dropdown dropdown-hover font-normal">
				<div tabIndex={0}>
					<NotListedLocationOutlinedIcon className="pb-1" />
				</div>
				<div tabIndex={0} className="w-52 px-2 py-1 dropdown-content -translate-x-44 z-[1] shadow bg-sec rounded-box">
					<p className="text-sm text-gray-500">Sueldo anual promedio (incluyendo comisiones)</p>
				</div>
			</span>
			<input
				type="text"
				inputMode="text"
				name="income"
				value={userData.income}
				placeholder="Ingese sueldo deseado (MXN)"
				disabled={!inputIncome}
				onChange={(event) => handleChange(event)}
				className="w-full px-3 py-1 text-pri bg-sec border border-[#ccc] rounded-[4px] focus:outline-none focus:bg-pri-100 focus:border-pri hover:border-pri disabled:text-[#888] disabled:hover:border-[#ccc]"
				required
			/>
		</div>
	);
};

export default Income;
