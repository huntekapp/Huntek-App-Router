"use client";
import {IconButton} from "@mui/material";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ReplayIcon from "@mui/icons-material/Replay";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const FootbarSwipe = ({hasSwipedBack, canSwipe, swipe, goBack, showInfo}) => {
  return (
    <footer className="w-full h-full shadow-[0px_-10px_12px_0px_#00000024] flex flex-row justify-evenly items-center relative">
      <section className="w-full max-w-sm flex flex-row justify-evenly items-start absolute -top-7">
        <div
          style={{backgroundColor: !canSwipe && "#c3c4d3"}}
          className="h-14 w-14 bg-red-600 border-2 rounded-full shadow-[0px_2px_3px_0px_#000] grid place-content-center">
          <IconButton onClick={() => swipe("left")}>
            <ThumbDownIcon style={{fontSize: "2rem", color: "white"}} />
          </IconButton>
        </div>
        <div
          style={{backgroundColor: !hasSwipedBack && "#c3c4d3"}}
          className="h-14 w-14 bg-fuchsia-950 border-2 rounded-full shadow-[0px_2px_3px_0px_#000] grid place-content-center">
          <IconButton onClick={() => goBack()}>
            <ReplayIcon style={{fontSize: "2rem", color: "white"}} />
          </IconButton>
        </div>
        <div className="h-14 w-14 bg-orange-500 border-2 rounded-full shadow-[0px_2px_3px_0px_#000] grid place-content-center">
          <IconButton onClick={() => showInfo()}>
            <InfoOutlinedIcon style={{fontSize: "2rem", color: "white"}} />
          </IconButton>
        </div>
        <div className="h-14 w-14 bg-amber-500 border-2 rounded-full shadow-[0px_2px_3px_0px_#000] grid place-content-center">
          <IconButton onClick={() => swipe("down")}>
            <WorkOutlineIcon style={{fontSize: "2rem", color: "white"}} />
          </IconButton>
        </div>
        <div
          style={{backgroundColor: !canSwipe && "#c3c4d3"}}
          className="h-14 w-14 bg-blue-600 border-2 rounded-full shadow-[0px_2px_3px_0px_#000] grid place-content-center">
          <IconButton onClick={() => swipe("right")}>
            <ThumbUpIcon style={{fontSize: "2rem", color: "white"}} />
          </IconButton>
        </div>
      </section>
    </footer>
  );
};

export default FootbarSwipe;
