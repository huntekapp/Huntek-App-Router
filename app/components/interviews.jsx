"use client";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Interviews = () => {
	return (
		<article className="w-full h-28 px-4 flex flex-col justify-around">
			<div className="mt-2 mb-1 flex flex-row justify-between">
				<p>Mis entrevistas</p>
				<Link href="/interviews" className="font-medium">
					Ver todas
				</Link>
			</div>
			<div className="w-full h-20 px-4 bg-sec text-xs xs:text-sm text-pri border rounded-xl shadow-md flex flex-row justify-between items-center">
				<div className="w-[10%] min-w-[70px]">
					<span className="w-14 h-14 text-sm font-semibold border-pri border-2 rounded-full grid place-content-center">
						18 SEP
					</span>
				</div>
				<div className="w-[90%]">
					<span className="btn w-full bg-pri text-sm xs:text-xl text-sec border-none">
						15:30hs<span>|</span>
						<span className="">Huntek</span>
						<LocationOnIcon className="text-sm" />
					</span>
				</div>
			</div>
		</article>
	);
};

export default Interviews;
