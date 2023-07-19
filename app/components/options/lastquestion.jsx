const LastQuestions = ({ userData, handleChange }) => {
  return (
    <>
      <div className="w-full mb-2">
        <label htmlFor="years_xp" className="ml-2 font-semibold">
          Años de experiencia
        </label>
        <select
          name="years_xp"
          value={userData.years_xp}
          onChange={(event) => handleChange(event)}
          className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none">
          <option value="select" hidden>
            Selecciona una opción
          </option>
          <option value="0">0</option>
          <option value="1-4">1-4</option>
          <option value="4-6">4-6</option>
          <option value="6-9">6-9</option>
          <option value="10-15">10-15</option>
        </select>
      </div>
      <div className="w-full mb-2">
        <label htmlFor="income" className="ml-2 font-semibold">
          ¿Cuál es tu sueldo anual deseado bruto?
        </label>
        <p className="text-sm text-gray-500 ml-4">(Ejm 20,000 x 12 = 240,000) Sin incluir prestaciones</p>
        <input
          type="text"
          inputMode="text"
          name="income"
          value={userData.income}
          onChange={(event) => handleChange(event)}
          className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none"
        />
      </div>
      <div className="w-full mb-2">
        <label htmlFor="form_of_work" className="ml-2 font-semibold">
          ¿Con qué forma de trabajo te sientes mas cómodo?
        </label>
        <select
          name="form_of_work"
          value={userData.form_of_work}
          onChange={(event) => handleChange(event)}
          className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none">
          <option value="select" hidden>
            Selecciona una opción
          </option>
          <option value="Remoto">Remoto</option>
          <option value="Presencial">Presencial</option>
          <option value="Híbrido">Híbrido</option>
        </select>
      </div>
      <div className="w-full mb-2">
        <label htmlFor="availability" className="ml-2 font-semibold">
          ¿Qué disponibilidad tienes para trabajar?
        </label>
        <select
          name="availability"
          value={userData.availability}
          onChange={(event) => handleChange(event)}
          className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none">
          <option value="select" hidden>
            Selecciona una opción
          </option>
          <option value="Full time">Full time</option>
          <option value="Part time">Part time</option>
        </select>
      </div>
    </>
  );
};
export default LastQuestions;
