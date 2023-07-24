import Image from "next/image";

const InterviewDetail = ({interviewInfo}) => {
	return (
		<main className="w-full p-5">
			<section className="flex flex-row bg-sec border  w-full p-2 rounded-3xl shadow-lg">
				<div>
					<Image loading={"eager"} alt="logo"  src={interviewInfo.enterpriseLogo} width={90} height={100} className="p-1 rounded-full" />
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
