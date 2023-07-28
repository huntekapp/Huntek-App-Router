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
				<div tabIndex={0} className="w-fit px-2 py-1 dropdown-content -translate-x-20 z-[1] shadow bg-sec rounded-box">
					Requerido
					<p className="text-sm text-gray-500">(Ejm 20,000 x 12 = 240,000) Sin incluir prestaciones</p>
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
