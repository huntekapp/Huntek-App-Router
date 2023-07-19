import FormQuestions from "./profileQuestions";

const ProfileExt = () => {
  return (
    <section className="w-full max-w-md h-full text-pri text-center flex flex-col justify-evenly items-center">
      <article className="w-11/12">
        <h1 className="m-2 text-xl font-bold">¡Bienvenido/a a Huntek!</h1>
        <p className="m-2">Te ofrecemos la opción de elegir entre dos perfiles:</p>
      </article>
      <article className="w-11/12 h-2/3 flex flex-col justify-evenly items-center">
        <div className="max-w-md grid grid-cols-2 place-items-center">
          <div className="w-11/12 h-full p-6 text-pri bg-pri-100 rounded-lg">
            <p className="m-2">Candidato en busca de trabajo</p>
            <button className="mx-auto my-4 px-2 py-1 bg-pri text-pri-100 rounded-lg">
              <a href="#candiProf">Candidato</a>
            </button>
          </div>
          <div id="candiProf" className="modal">
            <div className="modal-box relative bg-sec scrollnice">
              <a href="#" className="w-fit px-2 bg-pri-100 rounded-lg absolute top-2 left-2 ">
                X
              </a>
              <FormQuestions />
            </div>
          </div>
          <div className="w-11/12 h-full p-6 text-pri-100 bg-pri rounded-lg">
            <p className="m-2">Empresa en busca de talento</p>
            <button className="mx-auto my-4 px-2 py-1 bg-pri-100 text-pri rounded-lg">
              <a href="#empreProf">Empresa</a>
            </button>
          </div>
          <div id="empreProf" className="modal">
            <div className="modal-box bg-sec relative scrollnice">
              <a href="#" className="w-fit px-2 bg-pri-100 rounded-lg  absolute top-2 left-2">
                X
              </a>
              <FormQuestions />
            </div>
          </div>
        </div>
        <div className="w-11/12 flex flex-row justify-between items-center"></div>
        <p className="m-2 text-center">
          Configura tu perfil ahora y descubre cómo podemos ayudarte a alcanzar tus objetivos
        </p>
      </article>
    </section>
  );
};

export default ProfileExt;
