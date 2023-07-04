import Image from "next/image";

const Logo = () => {
  return (
    <div className="mt-5 pt-3">
      <div className="flex flex-row justify-center">
        <Image src="/huntek.svg" width={100} height={126} quality={100} alt="" />
      </div>
      <h1 className="text-white text-6xl mt-4">Huntek</h1>
    </div>
  );
};

export default Logo;
