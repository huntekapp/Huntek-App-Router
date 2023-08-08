import Image from "next/image";
import { IconButton } from "@mui/material";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';

const PostulantCard = () => {
	return (
		<section className="h-[95%] w-[80%] bg-slate-100 rounded-2xl flex flex-col items-center border-pri border-4">
			<article className="h-[50%] w-full relative bg-black rounded-t-xl flex flex-col justify-end">
				<div className="absolute top-1 left-1 z-40 flex flex-row text-sec items-center">
					<Image src={"/utils/target.svg"} height={25} width={25} alt="target" loading={"eager"} className="invert" />
					<p className="mt-2">80%</p>
				</div>
				<Image
					src={"/images/romelu-lukaku.jpg"}
					fill={true}
					alt="profilePicture"
					loading={"eager"}
					className="rounded-t-xl opacity-80 hover:opacity-100 transition-all"
				/>
				<p className="text-sec text-base mx-2 opacity-90 w-fit">Cancún</p>
				<p className="text-sec text-4xl font-medium mx-2 mb-1 opacity-90 w-fit">Tito Villanova</p>
			</article>
			<article className="h-[50%] w-full px-2">
				<div className="h-[35%] mt-1">
					<p className="text-pri">Bachiller en Comunicación</p>
					<p className="font-light text-sm text-gray-600">Egresado/estudiate de</p>
					<p className="font-light text-pri">Instituto Tecnológico Autónomo de México (ITAM)</p>
				</div>
        <div className="h-[20%] bg-pri -mx-2 px-2">
					<p className="text-sec">Idiomas</p>
					<div className="flex flex-row gap-x-3 text-sec">
						<p className="flex flex-row">
							<Image
								src={"/utils/spainRounded.svg"}
								height={20}
								width={20}
								alt="target"
								loading={"eager"}
								className="mr-1"
							/>
							Nativo
						</p>
						<p className="flex flex-row">
							<Image
								src={"/utils/usaRounded.svg"}
								height={20}
								width={20}
								alt="target"
								loading={"eager"}
								className="mr-1"
							/>
							Avanzado
						</p>
					</div>
				</div>
				<div className="h-[10%] bg-pri -mx-2 px-2">
					<p className="text-sec">
						Forma de trabajo <span className="text-sec">remoto</span>
					</p>
        </div>
        <div className="w-full h-[10%] flex justify-center">
          <button className="underline text-pri text-sm">Descargar CV</button>
        </div>
        <footer className="w-full h-[20%] flex flex-row justify-around items-end">
					<div
						// style={{ backgroundColor: ifDisabled && "#c3c4d3" }}
						className="h-14 w-14 bg-red-600 border-2 rounded-full shadow-[0px_2px_3px_0px_#000] grid place-content-center">
						<IconButton>
							<ThumbDownIcon style={{ fontSize: "2rem", color: "white" }} />
						</IconButton>
					</div>
          <div
						className="h-14 w-14 bg-gradient-to-r from-amber-400 to-amber-200 border-2 rounded-full shadow-[0px_2px_3px_0px_#000] grid place-content-center">
						<IconButton>
							<WorkOutlinedIcon style={{ fontSize: "2rem", color: "white" }} />
						</IconButton>
					</div>
					<div
						// style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
						className="h-14 w-14 bg-green-500 border-2 rounded-full shadow-[0px_2px_3px_0px_#000] grid place-content-center">
						<IconButton>
							<ThumbUpIcon style={{ fontSize: "2rem", color: "white" }} />
						</IconButton>
					</div>
				</footer>
			</article>
		</section>
	);
};
export default PostulantCard;
