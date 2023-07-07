"use client";
import Image from "next/image";
import TinderCard from "react-tinder-card";
import {useState} from "react";
const Swipe = () => {
  const [empresa, setEmpresa] = useState([
    {
      nombre: "Huntek",
      image: "/huntek/logo/G.svg",
      parrafo: "https://www.google.com/",
    },
    {nombre: "Google", image: "/social/google.svg", parrafo: "htpps://huntek.com"},
  ]);

  return (
    <section className="relative h-96 w-96 items-center flex justify-center">
      {empresa.map((emp) => (
        <TinderCard
          key={emp.nombre}
          preventSwipe={["down"]}
          className="border-sec flex items-center  justify-center flex-col h-[32rem] w-[24rem] bg-sec absolute p-6 rounded-xl shadow-lg duration-100  ">
          <Image width={320} height={100} alt="Office" src={emp.image} className="  h-full object-cover" />
          <article className="p-4 flex flex-col w-full   justify-start  ">
            <time datetime="2022-10-10" className="block text-xs text-black/90">
              10th Oct 2022
            </time>
            <a href="/informacion">
              <h3 className="mt-0.5 text-lg text-black">{emp.nombre}</h3>
            </a>
            <a href={`${emp.parrafo}`} target="_blank" className="mt-2 line-clamp-3 text-sm/relaxed text-indigo-500">
              {emp.parrafo}
            </a>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-black/95">Easter egg numero 3 no se </p>
          </article>
        </TinderCard>
      ))}
    </section>
  );
};
export default Swipe;
