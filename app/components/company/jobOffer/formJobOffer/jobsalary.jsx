import NotListedLocationOutlinedIcon from "@mui/icons-material/NotListedLocationOutlined";

const JobSalary = ({jobProps, handleChange}) => {
	return (
		<div className="w-full mb-2">
			<label htmlFor="income" className="mr-2 font-semibold">
				Salario
			</label>
			<span className="dropdown dropdown-hover font-normal">
				<div tabIndex={0}>
					<NotListedLocationOutlinedIcon className="pb-1" />
				</div>
				<div tabIndex={0} className="w-52 px-2 py-1 dropdown-content -translate-x-44 z-[1] shadow bg-sec rounded-box">
					<p className="text-sm text-gray-500">Sueldo anual promedio (incluyendo comisiones)</p>
				</div>
			</span>
			<div>
				<input
					type="text"
					inputMode="text"
					name="salary"
					value={jobProps?.salary.value?.min}
					placeholder="minimo"
					onChange={(event) => handleChange(event)}
					className="w-1/2 px-3 py-1 text-pri bg-sec border border-[#ccc] rounded-[4px] focus:outline-none focus:bg-pri-100 focus:border-pri hover:border-pri"
				/>
				<input
					type="text"
					inputMode="text"
					name="salary"
					value={jobProps?.salary.value?.max}
					placeholder="maximo"
					onChange={(event) => handleChange(event)}
					className="w-1/2 px-3 py-1 text-pri bg-sec border border-[#ccc] rounded-[4px] focus:outline-none focus:bg-pri-100 focus:border-pri hover:border-pri"
				/>
			</div>
		</div>
	);
};

export default JobSalary;
