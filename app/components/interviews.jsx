"use client";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Interviews = () => {
  return (
    <article className="w-full h-1/5 mb-20 px-4 flex flex-col justify-around">
      <div className="flex flex-row my-2 justify-between">
        <p>Mis entrevistas</p>
        <Link href="/interviews" className="font-medium">
          Ver todas
        </Link>
      </div>
      <div className="w-full h-[80%] px-4 py-1  text-xs xs:text-sm text-pri border rounded-xl shadow-md flex  justify-start items-center">
        <span className="w-14 h-[3.5rem] flex-shrink-0 font-bold text-sm border-2 border-pri rounded-full center">18 SEP</span>
        <p className="text-[0.800rem] ml-6 sm:text-lg btn-ghost hover:bg-pri/70 bg-pri btn flex-shrink text-sec font-semibold ">
          15:30HS &nbsp;|<span className="font-medium text-sec">Coca-Cola</span>
          <LocationOnIcon style={{fontSize: "0.9rem"}} />
        </p>
      </div>
    </article>
  );
};

export default Interviews;
