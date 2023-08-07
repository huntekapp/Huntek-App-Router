"use client";
import { IconButton } from "@mui/material";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ReplayIcon from "@mui/icons-material/Replay";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

const FootbarSwipe = ({ canGoBack, canSwipe, swipe, goBack, showInfo }) => {
	return (
		<footer className="w-full h-full shadow-[0px_-10px_12px_0px_#00000024] flex flex-row justify-evenly items-center relative z-50">
			<section className="w-full max-w-sm flex flex-row justify-evenly items-start absolute -top-7">
				<div
					style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
					className="h-14 w-14 bg-red-600 border-2 rounded-full shadow-[0px_2px_3px_0px_#000] grid place-content-center">
					<IconButton onClick={() => swipe("left")}>
						<ThumbDownIcon style={{ fontSize: "2rem", color: "white" }} />
					</IconButton>
				</div>
				<div
					style={{ backgroundColor: !canGoBack && "#c3c4d3" }}
					className="h-14 w-14 bg-fuchsia-950 border-2 rounded-full shadow-[0px_2px_3px_0px_#000] grid place-content-center">
					<IconButton onClick={() => goBack()}>
						<ReplayIcon style={{ fontSize: "2rem", color: "white" }} />
					</IconButton>
				</div>
				<div
					className={`h-14 w-14 ${
						!canSwipe ? "bg-[#c3c4d3]" : "bg-gradient-to-r from-amber-400 to-amber-200"
					} border-2 rounded-full shadow-[0px_2px_3px_0px_#000] grid place-content-center`}>
					<IconButton onClick={() => swipe("up")}>
						<StarBorderOutlinedIcon style={{ fontSize: "2rem", color: "white" }} />
					</IconButton>
				</div>
				<div
					style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
					className="h-14 w-14 bg-blue-600 border-2 rounded-full shadow-[0px_2px_3px_0px_#000] grid place-content-center">
					<IconButton onClick={() => showInfo()}>
						<InfoOutlinedIcon style={{ fontSize: "2.5rem", color: "white" }} />
					</IconButton>
				</div>
				<div
					style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
					className="h-14 w-14 bg-green-500 border-2 rounded-full shadow-[0px_2px_3px_0px_#000] grid place-content-center">
					<IconButton onClick={() => swipe("right")}>
						<ThumbUpIcon style={{ fontSize: "2rem", color: "white" }} />
					</IconButton>
				</div>
			</section>
		</footer>
	);
};

export default FootbarSwipe;
