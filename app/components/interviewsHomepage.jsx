import LocationOnIcon from "@mui/icons-material/LocationOn";

const InterviewsHomepage = ({ interviewInfo, index }) => {
	return (
		<article
			className={`${
				index === 1 && "hidden md:flex md:flex-row"
			} flex flex-row w-full h-20 px-4 bg-sec text-xs xs:text-sm text-pri border rounded-xl shadow-md justify-between items-center`}>
			<div className="w-[1%] min-w-[70px]">
				<span className="w-14 h-14 text-sm font-semibold border-pri border-2 rounded-full grid place-content-center">
					{interviewInfo.date}
				</span>
			</div>
			<div className="w-[99%]">
				<span className="btn w-full shadow-sm bg-pri border-none text-sm xs:text-xl text-sec">
					<span>
						{interviewInfo.hour} | {interviewInfo.enterprise}
					</span>
					<LocationOnIcon className="text-lg" />
				</span>
			</div>
		</article>
	);
};

export default InterviewsHomepage;
