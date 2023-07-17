import Link from "next/link";

const Interviews = () => {
  return (
    <article className="w-full h-32 mb-24 px-4 flex flex-col justify-around">
      <div className="flex flex-row justify-between">
        <p>Mis entrevistas</p>
        <Link href="/interviews" className="font-medium">
          Ver todas
        </Link>
      </div>
      <div className="w-full h-3/5 px-4 text-xs xs:text-sm text-pri border rounded-xl shadow-md flex flex-row justify-start items-center">
        <span className="w-14 h-[3.4rem] font-bold text-sm border-2 border-pri rounded-full grid place-content-center">
          18 SEP
        </span>
        <p className="text-md ml-5 xs:text-lg    bg-pri btn text-sec font-medium ">
          15:30HS &nbsp;|<span className="font-medium text-sec">Coca-Cola</span>
        </p>
      </div>
    </article>
  );
};

export default Interviews;
