"use client";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Interviews = () => {
	return (
		<article className="w-full h-1/4 px-4 flex flex-col justify-around">
			<div className="flex flex-row my-2 justify-between">
				<p>Mis entrevistas</p>
				<Link href="/interviews" className="font-medium">
					Ver todas
				</Link>
			</div>
			<div className="w-full h-3/4 px-4 text-xs xs:text-sm text-pri border rounded-xl shadow-md flex flex-row justify-start items-center">
				<span className="w-14 h-14 text-sm font-semibold border-pri border-2 rounded-full grid place-content-center">
					18 SEP
				</span>
				<p className="ml-6 text-sm sm:text-base hover:bg-pri/70 bg-pri btn flex-shrink text-sec font-semibold ">
					15:30HS | <span className="font-medium text-sec">Coca-Cola</span>
					<LocationOnIcon style={{fontSize: "0.9rem"}} />
				</p>
			</div>
		</article>
	);
};

export default Interviews;
