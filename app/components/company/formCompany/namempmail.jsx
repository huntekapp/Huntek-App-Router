import Image from "next/image";
const FirstData = ({ companyUserData , handleChange}) => {
  return (
    <>
      <div className="w-full mb-2">
        <label htmlFor="company" className="ml-2 font-semibold inline-flex items-center">
          ¿Cuál es tu nombre?
          <div className="group inline-block">
            <Image
              src="/utils/asterisk_huntek.svg"
              width={16}
              height={16}
              alt="asterisco"
              className="ml-2 aspect-square"
            />
            <div className="opacity-0 group-hover:opacity-100 bg-pri text-sec text-center absolute p-1 rounded-md  flex justify-center items-center transition duration-300">
              <span>Requerido</span>
            </div>
          </div>
        </label>
        <input
          type="text"
          inputMode="text"
          name="company"
          value={companyUserData.company}
          onChange={(event) => handleChange(event)}
          className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none"
        />
      </div>
      <div className="w-full mb-2">
        <label htmlFor="username" className="ml-2 font-semibold inline-flex items-center">
          ¿Cómo se llama tu empresa?
          <div className="group inline-block">
            <Image
              src="/utils/asterisk_huntek.svg"
              width={16}
              height={16}
              alt="asterisco"
              className="ml-2 aspect-square"
            />
            <div className="opacity-0 group-hover:opacity-100 bg-pri text-sec text-center absolute p-1 rounded-md  flex justify-center items-center transition duration-300">
              <span>Requerido</span>
            </div>
          </div>
        </label>
        <input
          type="text"
          inputMode="text"
          name="username"
          value={companyUserData.username}
          onChange={(event) => handleChange(event)}
          className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none"
        />
      </div>
      <div className="w-full mb-2">
        <label htmlFor="mail" className="ml-2 font-semibold inline-flex items-center">
          ¿Cuál es tu email?
          <div className="group inline-block">
            <Image
              src="/utils/asterisk_huntek.svg"
              width={16}
              height={16}
              alt="asterisco"
              className="ml-2 aspect-square"
            />
            <div className="opacity-0 group-hover:opacity-100 bg-pri text-sec text-center absolute p-1 rounded-md  flex justify-center items-center transition duration-300">
              <span>Requerido</span>
            </div>
          </div>
        </label>
        <input
          type="text"
          inputMode="email"
          name="mail"
          value={companyUserData.mail}
          onChange={(event) => handleChange(event)}
          className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none"
        />
      </div>
    </>
  );
};
export default FirstData;
