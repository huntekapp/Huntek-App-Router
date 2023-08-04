import NotListedLocationOutlinedIcon from "@mui/icons-material/NotListedLocationOutlined";

const Income = ({ userData, handleChange, inputIncome }) => {
	return (
		<div className="w-full mb-2">
			<label htmlFor="income" className="mr-2 font-semibold">
				¿Cuál es tu sueldo deseado?
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
				disabled={!inputIncome}
				value={userData.income}
				onChange={(event) => handleChange(event)}
				className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none"
			/>
		</div>
	);
};

export default Income;
