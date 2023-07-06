import Image from "next/image";
import NavBar from "../components/navbar";
import Footbar from "../components/footbar";

const HomePage = () => {
  return (
    <div className="bg-sec">
      <NavBar />

      <div className=" bg-sec p-6 w-full min-h-screen ">
        <p className="text-xl text-pri">¡Hola!</p>
        <h1 className="font-medium  text-3xl text-pri">Luis Sanchez</h1>
        <p className="mt-10 mb-5 text-pri  w-full flex justify-start">
          Mis postulaciones <span className="text-pri ml-auto mr-5">ver todas</span>
        </p>

        <div className="w-full">
          <div className="carousel carousel-center  w-full p-2  space-x-6 rounded-box">
            <div className="carousel-item avatar   ">
              <div className="w-16 rounded-full ring ring-pri ring-offset-base-100 ring-offset-2">
                <Image src="/huntek/logo/G.svg" width={60} height={100} quality={100} />
              </div>
            </div>

            <div className="carousel-item avatar   ">
              <div className="w-16 rounded-full ring ring-pri ring-offset-base-100 ring-offset-2">
                <Image src="/images/youtube-g6a795f8e6_1920.png" width={60} height={100} quality={100} />
              </div>
            </div>
            <div className="carousel-item avatar   ">
              <div className="w-16 rounded-full ring ring-pri ring-offset-base-100 ring-offset-2">
                <Image src="/images/google-ga4b7784ab_1920.png" width={60} height={100} quality={100} />
              </div>
            </div>
            <div className="carousel-item avatar   ">
              <div className="w-16 rounded-full ring ring-pri ring-offset-base-100 ring-offset-2">
                <Image src="/images/bitcoin-gfe80587d1_1920.png" width={60} height={100} quality={100} />
              </div>
            </div>
            <div className="carousel-item avatar   ">
              <div className="w-16 rounded-full ring ring-pri ring-offset-base-100 ring-offset-2">
                <Image src="/images/linkedin-gf141b6fe5_1920.png" width={60} height={100} quality={100} />
              </div>
            </div>
            <div className="carousel-item avatar   ">
              <div className="w-16 rounded-full ring ring-pri ring-offset-base-100 ring-offset-2">
                <Image src="/images/windows-gc6d7a955d_1920.png" width={60} height={100} quality={100} />
              </div>
            </div>
            <div className="carousel-item avatar   ">
              <div className="w-16 rounded-full ring ring-pri ring-offset-base-100 ring-offset-2">
                <Image src="/images/apple-g44d4327db_1920.png" width={60} height={100} quality={100} />
              </div>
            </div>
          </div>

          <p className="mt-8 text-pri mb-4">Mis conversaciones</p>
          <div className="w-full ">
            <ul className="flex px-6 py-4 space-y-5 shadow-md  bg-sec border rounded-xl flex-col">
              <li className="h-14 flex text-sm   truncate text-pri items-center ">
                <Image
                  src="/images/pexels-monstera-5384445.jpg"
                  height={100}
                  width={36}
                  quality={100}
                  className="rounded-full h-9  mr-4"
                />
                Nico Front | Google<span className="font-bold ml-auto text-black  cursor-pointer ">Nuevo mensaje</span>
              </li>
              <li className="h-14 flex text-sm text-pri truncate items-center ">
                <Image
                  src="/images/pexels-monstera-5384445.jpg"
                  height={100}
                  width={36}
                  quality={100}
                  className="rounded-full h-9 mr-4 "
                />
                Agus Cabral | Huntek <span className="font-bold ml-auto text-black cursor-pointer">Nuevo mensaje</span>
              </li>
            </ul>
          </div>
          <p className="mt-8 text-pri mb-4">Mis entrevistas</p>
          <div className="w-full shadow-lg">
            <div className="h-20 p-3 flex items-center just   shadow-lg bg-sec border rounded-xl">
              <div className=" w-20 flex font-bold mr-8 text-sm items-center justify-center border-pri text-pri border-2 h-[3.9rem] rounded-full">
                18 SEP
              </div>
              <p className="text-xl flex    w-full font-medium text-black">
                15:30HS | <span className="font-medium ml-2 text-pri"> Coca-Cola</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footbar />
    </div>
  );
};
export default HomePage;
