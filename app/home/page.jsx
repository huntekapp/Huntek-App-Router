import Image from "next/image";
import NavBar from "../components/navbar";
const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className=" bg-pri p-5 w-full h-screen ">
        <p className="text-xl text-sec">¡Hola!</p>
        <h1 className="font-medium  text-3xl text-sec">Luis Sanchez</h1>
        <p className="mt-10 mb-5 text-sec  w-full flex justify-start">
          Mis postulaciones <span className="text-pri ml-auto mr-5">ver todas</span>
        </p>

        <div className="w-full ">
          <div className="carousel w-full h-20  carousel-center p-4 space-x-4 bg-sec border-black border shadow-md rounded-full">
            <div className="carousel-item">
              <Image
                src="/images/MicrosoftTeams-image (1).png"
                width={100}
                height={100}
                quality={100}
                className="rounded-full  "
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/images/MicrosoftTeams-image.png"
                width={100}
                height={100}
                quality={100}
                className="rounded-full"
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/images/MicrosoftTeams-image (1).png"
                width={100}
                height={100}
                quality={100}
                className="rounded-full"
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/images/MicrosoftTeams-image.png"
                width={100}
                height={100}
                quality={100}
                className="rounded-full"
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/images/MicrosoftTeams-image (1).png"
                width={100}
                height={100}
                quality={100}
                className="rounded-full"
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/images/MicrosoftTeams-image.png"
                width={100}
                height={100}
                quality={100}
                className="rounded-full"
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/images/MicrosoftTeams-image (1).png"
                width={100}
                height={100}
                quality={100}
                className="rounded-full"
              />
            </div>
          </div>

          <p className="mt-7 text-sec mb-2">Mis conversaciones</p>
          <div className="w-full">
            <ul className="flex px-6 shadow-lg border rounded-xl flex-col">
              <li className="h-14 flex text-sec truncate items-center ">
                <Image
                  src="/images/pexels-monstera-5384445.jpg"
                  height={100}
                  width={36}
                  quality={100}
                  className="rounded-full h-9  mr-4"
                />
                Nico Font Coca Cola <span className="font-bold ml-auto ">Nuevo mensaje</span>
              </li>
              <li className="h-14 flex text-sec truncate items-center ">
                <Image
                  src="/images/pexels-monstera-5384445.jpg"
                  height={100}
                  width={36}
                  quality={100}
                  className="rounded-full h-9 mr-4 "
                />
                Agus Cabral Coca Cola <span className="font-bold ml-auto">Nuevo mensaje</span>
              </li>
            </ul>
          </div>
          <p className="mt-8 text-sec mb-2">Mis entrevistas</p>
          <div className="w-full shadow-lg">
            <div className="h-24 p-8 flex items-center mr-auto gap-10 border rounded-xl">
              <div className="border w-16 flex items-center justify-center text-white h-16 rounded-full">18 SEP</div>
              <p className="text-lg text-sec">Coca-Cola</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
