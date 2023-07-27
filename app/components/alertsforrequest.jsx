export const AlertSuccess = ({alertTitle, alertBody, setSuccessReq}) => {
	return (
		<div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded absolute top-4 w-11/12 md:w-fit expandable flex flex-row justify-between items-center" role="alert">
			<strong className="font-bold sm:text-sm mr-1">{alertTitle}</strong>
			<span className="block sm:inline sm:text-sm">{alertBody}</span>
			<span onClick={() => setSuccessReq(null)}>
				<svg
					className="fill-current h-6 w-6 ml-1 text-green-500"
					role="button"
					xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20">
					<title>Cerrar</title>
					<path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
				</svg>
			</span>
		</div>
	);
};

export const AlertError = ({alertTitle, alertBody, setErrorCatched}) => {
	return (
		<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded absolute top-4 w-11/12 md:w-fit expandable flex flex-row justify-between items-center" role="alert">
			<strong className="font-bold sm:text-sm mr-1">{alertTitle}</strong>
			<span className="block sm:inline sm:text-sm">{alertBody}</span>
			<span onClick={() => setErrorCatched(null)}>
				<svg
					className="fill-current h-6 w-6 ml-1 text-red-500"
					role="button"
					xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20">
					<title>Cerrar</title>
					<path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
				</svg>
			</span>
		</div>
	);
};