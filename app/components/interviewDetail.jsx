import Image from "next/image";

const InterviewDetail = ({interviewInfo}) => {
	return (
		<main className="w-full px-3 pb-3 pt-7">
			<section className="flex flex-row bg-gray-50 border border-gray-400 h-36 w-full p-2 rounded-lg shadow-xl items-center">
				<div>
					<Image loading={"eager"} alt="logo"  src={interviewInfo.enterpriseLogo} width={90} height={100} className="mx-3 rounded-full border-1 border-gray-50 shadow-[0px_0px_6px_0px_#1a202c]" />
				</div>
				<div className="flex flex-col mx-3">
					<a href={interviewInfo.enterpriseWebSite} target="_blank" className="text-cyan-700 text-lg">
						{interviewInfo.enterpriseName}
					</a>
					<p className="text-sm">{interviewInfo.interviewDate}</p>
					<p className="text-sm mb-2">{interviewInfo.vacant}</p>
					<p className="text-xs">
						Entrevistador/a: <span className="text-cyan-700">{interviewInfo.interviewer}</span>
					</p>
				</div>
			</section>
		</main>
	);
};
export default InterviewDetail;
