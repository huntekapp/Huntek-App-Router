import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react';

const InfoAlert = ({ alertBody }) => {
  const [showInfo, setShowInfo] = useState(true)

	return (
		<div className={`${showInfo ? "flex flex-row" : "hidden"} w-11/12 h-fit md:h-[60px] bg-pri-100 border border-pri-400 text-pri px-4 py-3 rounded justify-start items-center relative z-40`} role="alert">
			<strong className="font-bold text-sm mr-4">{<InfoIcon/>}</strong>
			<span className="w-5/6 block sm:inline md:text-sm text-sm">{alertBody}</span>
			<span className='absolute right-2 md:right-5' onClick={() => setShowInfo(false)}>
				<svg
					className="fill-current h-6 w-6 text-pri"
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

export default InfoAlert;