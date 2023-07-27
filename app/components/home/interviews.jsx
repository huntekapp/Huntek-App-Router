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
			<div className="gap-4 lg:grid lg:grid-cols-2">
				{}
				<div className="w-full h-20 px-4 bg-sec text-xs xs:text-sm text-pri border rounded-xl shadow-md flex flex-row justify-between items-center">
					<div className="w-[1%] min-w-[70px]">
						<span className="w-14 h-14 text-sm font-semibold border-pri border-2 rounded-full grid place-content-center">
							18 SEP
						</span>
					</div>
					<div className="w-[99%]">
						<span className="btn w-full shadow-sm bg-pri border-none text-sm xs:text-xl text-sec">
							15:30hs<span>|</span>
							<span>Huntek</span>
							<LocationOnIcon className="text-sm" />
						</span>
					</div>
				</div>
				<div className="w-full h-20 px-4 bg-sec text-xs xs:text-sm hidden lg:flex  text-pri border rounded-xl shadow-md flex flex-row justify-between items-center">
					<div className="w-[1%] min-w-[70px]">
						<span className="w-14 h-14 text-sm font-semibold border-pri border-2 rounded-full grid place-content-center">
							22 SEP
						</span>
					</div>
					<div className="w-[99%]">
						<span className="btn w-full shadow-sm bg-pri border-none text-sm xs:text-xl text-sec">
							16:00hs<span>|</span>
							<span>Grupo Frontera</span>
							<LocationOnIcon className="text-sm" />
						</span>
					</div>
				</div>
			</div>
		</article>
	);
};

export default Interviews;
