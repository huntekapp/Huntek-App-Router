import Image from "next/image";

const PostulationDetail = ({postulationInfo}) => {
	return (
		<main className="w-full p-5">
			<section className="flex flex-row sm:items-center  bg-gray-200 border-lig border-2 w-full p-2 rounded-3xl shadow-xl">
				<div className=" w-16 sm:w-auto mr-5 ">
					<Image alt="logo"  src={postulationInfo.enterpriseLogo} width={100} height={100} className=" rounded-full " />
				</div>
				<div className="w-full flex justify-start  ">
					<div className="flex flex-col  ">
						<a href={postulationInfo.enterpriseWebSite} target="_blank" className="text-cyan-700 text-xl">
							{postulationInfo.enterpriseName}
						</a>
						<p className="text-base mb-2 text-gray-700">{postulationInfo.vacant}</p>
						<p className="text-sm mb-2 text-gray-600">{postulationInfo.vacantInfo}</p>
						<p className="text-xs">
							Tu entrevista: <span className="text-cyan-700">{postulationInfo.interviewDate}</span>
						</p>
					</div>
				</div>
			</section>
		</main>
	);
};
export default PostulationDetail;
