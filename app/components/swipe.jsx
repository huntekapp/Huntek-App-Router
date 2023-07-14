"use client";
import Image from "next/image";
import TinderCard from "react-tinder-card";
import React, {useState, useMemo, useRef} from "react";
import FootbarSwipe from "./footbarswipe";

const Swipe = () => {
  const [info, setInfo] = useState(false);
  const [empresa, setEmpresa] = useState([
    {
      nombre: "Google",
      image: "/social/google.svg",
      parrafo: "htpps://huntek.com",
      info: "Se necesita desarrollador Front End especializado en React, Next.js, Node.js, PostgreSQL, Sequelize y Python. Jornada laboral de 40 horas semanales, fin de semanas libres. Dos semanas de vacaciones al año. Trabajo remoto. Objetivos salariales.",
    },
    {
      nombre: "Huntek",
      image: "/huntek/logo/G.svg",
      parrafo: "https://www.google.com/",
      info: "Se necesita desarrollador Front End especializado en React, Next.js, Node.js, PostgreSQL, Sequelize y Python. Jornada laboral de 40 horas semanales, fin de semanas libres. Dos semanas de vacaciones al año. Trabajo remoto. Objetivos salariales",
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(empresa.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const [hasSwipedBack, setHasSwipedBack] = useState(false);
  const [lastSwipeDirection, setLastSwipeDirection] = useState(null);
  const [lastLeftSwipeIndex, setLastLeftSwipeIndex] = useState(null); // Nueva variable de estado para rastrear el índice de la última carta deslizada hacia la izquierda
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
    if (direction === "left") {
      setHasSwipedBack(true);
      setLastLeftSwipeIndex(index); // Actualizar el índice de la última carta deslizada hacia la izquierda
    } else {
      setHasSwipedBack(false);
    }
    setLastSwipeDirection(direction);
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
    if (!canGoBack || !hasSwipedBack || lastSwipeDirection !== "left" || lastLeftSwipeIndex !== currentIndex + 1)
      return; // Verificar si el índice de la última carta deslizada hacia la izquierda es igual al índice de la carta que se está intentando recuperar
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
    setHasSwipedBack(false);
  };

  const showInfo = () => {
    setInfo(!info);
  };

  return (
    <main className="w-full h-[90%]">
      <section className="w-full h-[93%] bg-pri/70 flex flex-col justify-center items-center relative overflow-hidden">
        {empresa.map((emp, index) => (
          <TinderCard
            ref={childRefs[index]}
            onSwipe={(dir) => swiped(dir, emp.nombre, index)}
            onCardLeftScreen={() => outOfFrame(emp.nombre, index)}
            swipeRequirementType="position"
            swipeThreshold={150}
            key={emp.nombre}
            preventSwipe={["down"]}
            className={`no-drag w-11/12 max-w-sm ${
              info ? "h-[83%] mt-12" : "h-[90%] mt-4"
            } max-h-[500px] mb-10 bg-sec rounded-3xl shadow-lg flex flex-col justify-center items-center absolute duration-150`}>
            {info ? (
              <article className="w-11/12 h-full flex flex-col justify-center items-center -translate-y-[50%] duration-500">
                <div
                  onDoubleClick={showInfo}
                  onTouchStart={showInfo}
                  className="w-4/5 p-2 bg-sec border-4 border-pri rounded-xl shadow-lg flex flex-row justify-evenly items-center absolute cursor-pointer">
                  <Image src={emp.image} width={50} height={50} alt="Tinder" className="no-drag object-cover" />
                  <div className="w-fit flex flex-col justify-center items-center">
                    <p className="text-lg text-black">{emp.nombre}</p>
                    <p className="line-clamp-3 text-sm/relaxed text-black/95">FullStack Dev</p>
                  </div>
                </div>
                <div className="w-full text-black flex flex-col justify-evenly items-center appearedInfo translate-y-52 duration-1000">
                  <p className="text-xl mt-28 font-bold">¡Te estamos buscando!</p>
                  <p className="text-center">{emp.info}</p>
                  <iframe
                    width="350"
                    height="195"
                    src="https://www.youtube.com/embed/O8RTHwOEqJA"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className="rounded-3xl p-4 sm:p-0 w-[11/12] h-[11/12] mt-3"
                    allowFullScreen></iframe>
                </div>
              </article>
            ) : (
              <article className="w-full h-full p-8 appearedContent flex flex-col justify-between items-center duration-500">
                <div className="w-full h-3/4 grid place-content-center relative">
                  <Image src={emp.image} alt="Tinder" fill="true" className="no-drag" />
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                  <p
                    onDoubleClick={showInfo}
                    onTouchStart={showInfo}
                    className="text-3xl font-bold text-black cursor-pointer">
                    {emp.nombre}
                  </p>
                  <p className="mt-1 text-lg text-black">Front end junior Developer </p>
                </div>
              </article>
            )}
          </TinderCard>
        ))}
      </section>
      <footer className="w-full h-[7%] bg-sec">
        <FootbarSwipe
          hasSwipedBack={hasSwipedBack}
          canGoBack={canGoBack}
          canSwipe={canSwipe}
          swipe={swipe}
          goBack={goBack}
          showInfo={showInfo}
        />
      </footer>
    </main>
  );
};

export default Swipe;
