"use client";
import {useState} from "react";
import Script from "next/script";

const ProfileExt = () => {
  const [userData, setUserData] = useState({
    sexo: "",
    situacion: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section className="w-full max-w-md h-full text-pri text-center flex flex-col justify-evenly items-center">
      <article className="w-11/12">
        <p className="m-2 text-xl font-bold">¡Bienvenido/a a Huntek!</p>
        <p className="m-2">Te ofrecemos la opción de elegir entre dos perfiles:</p>
      </article>
      <Script src="https://tally.so/widgets/embed.js"></Script>
      <article className="w-11/12 h-2/3 flex flex-col justify-evenly items-center">
        <div className="max-w-md grid grid-cols-2 place-items-center">
          <div className="w-11/12 h-full p-6 text-pri bg-pri-100 rounded-lg">
            <p className="m-2">Candidato en busca de trabajo</p>
            <button
              data-tally-open="wb9kro"
              data-tally-layout="modal"
              data-tally-width="365"
              className="mx-auto my-4 px-2 py-1 bg-pri text-sec rounded-lg">
              Candidato
            </button>
          </div>
          <div className="w-11/12 h-full p-6 text-pri-100 bg-pri rounded-lg">
            <p className="m-2">Empresa en busca de talento</p>
            <button
              data-tally-open="mOlPY8"
              data-tally-layout="modal"
              data-tally-width="365"
              className="mx-auto my-4 px-2 py-[0.16rem] bg-pri-100 text-pri border-2 border-pri-100 rounded-lg">
              Empresa
            </button>
          </div>
        </div>
        <div className="w-11/12 flex flex-row justify-between items-center"></div>
        <p className="m-2 text-center">
          Configura tu perfil ahora y descubre cómo podemos ayudarte a alcanzar tus objetivos
        </p>
      </article>
      {/* <article className="flex flex-col justify-center items-center">
				<h2 className="my-4 text-center text-xl font-bold">Mi perfil</h2>
				<div className="w-20 h-20 avatar">
					<Image loading={"eager"}
						src="/images/defaultPhoto.png"
						width={100}
						height={100}
						quality={100}
						className="bg-pri-100 rounded-full"
						alt="avatar"
					/>
				</div>
			</article> */}
    </section>
  );
};
export default ProfileExt;
