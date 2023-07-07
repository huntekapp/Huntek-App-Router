"use client";
import Image from "next/image";
import TinderCard from "react-tinder-card";
import React, {useState, useMemo, useRef} from "react";
import FootbarSwipe from "./footbarswipe";
const Swipe = () => {
  const [empresa, setEmpresa] = useState([
    {
      nombre: "Huntek",
      image: "/huntek/logo/G.svg",
      parrafo: "https://www.google.com/",
    },
    {nombre: "Google", image: "/social/google.svg", parrafo: "htpps://huntek.com"},
  ]);
  const [currentIndex, setCurrentIndex] = useState(empresa.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(empresa.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < empresa.length - 1;

  const canSwipe = currentIndex >= 0;

  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (nombre, idx) => {
    console.log(`${nombre} (${idx}) left the screen!`, currentIndexRef.current);
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < empresa.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <section className="h-[80vh] w-full  relative items-center flex justify-center overflow-hidden">
      {empresa.map((emp, index) => (
        <TinderCard
          ref={childRefs[index]}
          onSwipe={(dir) => swiped(dir, emp.nombre, index)}
          onCardLeftScreen={() => outOfFrame(emp.nombre, index)}
          swipeRequirementType="position"
          swipeThreshold={150}
          key={emp.nombre}
          preventSwipe={["down"]}
          className=" h-auto w-auto p-5  bg-sec no-drag  border-sec absolute flex items-center  justify-center flex-col rounded-lg shadow-lg duration-100  ">
          <Image src={emp.image} width={320} height={100} alt="Tinder" className="h-full no-drag object-cover" />
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

      <div className="fixed bottom-0 w-full">
        <FootbarSwipe canGoBack={canGoBack} canSwipe={canSwipe} swipe={swipe} goBack={goBack} />
      </div>
    </section>
  );
};
export default Swipe;
