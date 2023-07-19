import Image from "next/image";
const FirstQuestions = ({userData, handleChange}) => {
  return (
    <>
      <h3 className="h-[5%] ml-2 font-semibold">Sube tu CV</h3>
      <label
        htmlFor="dropzone-file"
        className="w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Image src="utils/upload.svg" width={20} height={16} alt="upload" />
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold">Cliqueá aquí para subir un archivo</span>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400"> o arrastre y suelte.</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
      <h3 className="h-[5%] ml-2  font-semibold">Sube tu mejor foto</h3>
      <label
        htmlFor="dropzone-file"
        className="border-2 w-full border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Image src="utils/upload.svg" width={20} height={16} alt="upload" />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Cliquee aquí para subir un archivo</span>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400"> o arrastre y suelte.</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
      <div className="w-full mb-2">
        <label htmlFor="mail" className="ml-2 font-semibold">
          ¿Cuál es tu email?
        </label>
        <input
          type="text"
          inputMode="email"
          name="mail"
          value={userData.mail}
          onChange={(event) => handleChange(event)}
          className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none"
        />
      </div>
      <div className="w-full mb-2">
        <label htmlFor="phone" className="ml-2 font-semibold">
          ¿Cuál es tu teléfono?
        </label>
        <input
          type="text"
          inputMode="tel"
          name="phone"
          value={userData.phone}
          onChange={(event) => handleChange(event)}
          className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none"
        />
      </div>
      <div className="w-full mb-2">
        <label htmlFor="birthdate" className="ml-2 font-semibold">
          ¿Cuál es tu fecha de nacimiento?
        </label>
        <input
          type="date"
          name="birthdate"
          value={userData.birthdate}
          onChange={(event) => handleChange(event)}
          className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none"
        />
      </div>
    </>
  );
};
export default FirstQuestions;
