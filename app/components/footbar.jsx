import Image from "next/image";

const Footbar = () => {
  return (
    <footer className="p-5 mt-3 bg-pri shadow-[0px_-10px_12px_0px_#00000024] fixed bottom-0 w-full">
      <div className="w-full border-3 ">
        <div className="flex justify-center ">
          <button className="border-2  bg-pri flex justify-center items-center absolute top-0 mt-[-28px] rounded-full w-14 h-14 hover:scale-105 shadow-xl#00000024">
            <Image src="/huntek/logo/W.svg" width={44} height={10} className="h-auto" />
          </button>
        </div>
      </div>
    </footer>
  );
};
export default Footbar;
