"use client";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import {IconButton} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ReplayIcon from "@mui/icons-material/Replay";

const FootbarSwipe = () => {
  return (
    <footer className="w-full p-7 mt-3 bg-base-300 shadow-[0px_-10px_12px_0px_#00000024] ">
      <div className="w-full border-3 ">
        <div className="flex justify-center gap-9">
          <button className="border-2  bg-red-600 flex justify-center items-center    mt-[-60px] rounded-full w-16 h-16 shadow-[0px_2px_3px_0px_#000] ">
            <IconButton>
              <ThumbDownIcon style={{fontSize: "2rem", color: "white"}} />
            </IconButton>
          </button>
          <button className="border-2  bg-fuchsia-950 flex justify-center items-center  mt-[-60px] rounded-full w-16 h-16 shadow-[0px_2px_3px_0px_#000]  ">
            <IconButton>
              <ReplayIcon style={{fontSize: "2rem", color: "white"}} />
            </IconButton>
          </button>

          <button className="border-2  bg-amber-500 flex justify-center items-center  mt-[-60px] rounded-full w-16 h-16 shadow-[0px_2px_3px_0px_#000]  ">
            <IconButton>
              <WorkOutlineIcon style={{fontSize: "2rem", color: "white"}} />
            </IconButton>
          </button>

          <button className="border-2  bg-blue-600 flex justify-center  items-center mt-[-60px] rounded-full w-16 h-16 shadow-[0px_2px_3px_0px_#000] ">
            <IconButton>
              <ThumbUpIcon style={{fontSize: "2rem", color: "white"}} />
            </IconButton>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FootbarSwipe;
