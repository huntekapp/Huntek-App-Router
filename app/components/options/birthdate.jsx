import Image from "next/image";

const Birthdate = ({userData, handleChange, inputBirthdate}) => {
	return (
		<div className="w-full mb-2">
			<label htmlFor="birthdate" className="ml-2 font-semibold">
				¿Cuál es tu fecha de nacimiento?
				<div class="group inline-block">
					<Image
						src="/utils/asterisk_huntek.svg"
						width={16}
						height={16}
						alt="asterisco"
						className="ml-2 aspect-square"
					/>
					<div class="opacity-0 group-hover:opacity-100 bg-pri text-sec text-center absolute p-1 rounded-md  flex justify-center items-center transition duration-300">
						<span>Requerido</span>
					</div>
				</div>
			</label>
			<input
				type="date"
				name="birthdate"
				disabled={!inputBirthdate}
				value={userData.birthdate}
				onChange={(event) => handleChange(event)}
				className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none"
			/>
		</div>
	);
};

export default Birthdate;
