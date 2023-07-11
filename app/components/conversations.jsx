import Image from "next/image";
import Link from "next/link";

const Conversations = () => {
  return (
    <section className="w-full h-56 my-6 flex flex-col justify-around">
      <article className="flex flex-row justify-between">
        <p>Mis conversaciones</p>
        <a href="/conversations" className="font-medium">
          Ver todas
        </a>
      </article>
      <article className="w-full ">
        <ul className="flex px-6 py-4 space-y-5 shadow-md  bg-sec border rounded-xl flex-col">
          <li className="h-14 flex text-sm   truncate text-pri items-center ">
            <Image
              alt="profile"
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
              alt="profile-2"
              src="/images/pexels-monstera-5384445.jpg"
              height={100}
              width={36}
              quality={100}
              className="rounded-full h-9 mr-4 "
            />
            Agus Cabral | Huntek <span className="font-bold ml-auto text-black cursor-pointer">Nuevo mensaje</span>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Conversations;
