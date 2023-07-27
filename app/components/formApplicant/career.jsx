import Image from "next/image";

const Career = ({userData, handleChange, inputCareer}) => {
	return (
		<div className="w-full mb-2">
			<label htmlFor="degree" className="ml-2 font-semibold">
				¿Qué carrera estudias?
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
			<select
				name="degree"
				value={userData.degree}
				disabled={!inputCareer}
				onChange={(event) => handleChange(event)}
				className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none">
				<option value="select" hidden>
					Selecciona una opción
				</option>
				<option value="Administración De Empresas">Administración De Empresas</option>
				<option value="Administración Pública">Administración Pública</option>
				<option value="Antropología">Antropología</option>
				<option value="Arqueología">Arqueología</option>
				<option value="Arquitectura">Arquitectura</option>
				<option value="Bellas Artes">Bellas Artes</option>
				<option value="Biblioteconomía">Biblioteconomía</option>
				<option value="Biología">Biología</option>
				<option value="Bioquímica">Bioquímica</option>
				<option value="Biotecnología">Biotecnología</option>
				<option value="Cine">Cine</option>
				<option value="Ciencia y Tecnología de los Alimentos">Ciencia y Tecnología de los Alimentos</option>
				<option value="Ciencias Biomédicas">Ciencias Biomédicas</option>
				<option value="Ciencias Ambientales">Ciencias Ambientales</option>
				<option value="Ciencias del Mar">Ciencias del Mar</option>
				<option value="Ciencias Políticas y de la Administración">Ciencias Políticas y de la Administración</option>
				<option value="Comercio">Comercio</option>
				<option value="Comunicación Audiovisual">Comunicación Audiovisual</option>
				<option value="Conservación y Restauración de Bienes Culturales">
					Conservación y Restauración de Bienes Culturales
				</option>
				<option value="Criminología">Criminología</option>
				<option value="Danza">Danza</option>
				<option value="Deporte">Deporte</option>
				<option value="Derecho">Derecho</option>
				<option value="Diseño">Diseño</option>
				<option value="Diseño de Interiores">Diseño de Interiores</option>
				<option value="Diseño de Moda">Diseño de Moda</option>
				<option value="Diseño y Desarrollo de Videojuegos">Diseño y Desarrollo de Videojuegos</option>
				<option value="Economía">Economía</option>
				<option value="Educación Infantil">Educación Infantil</option>
				<option value="Educación Primaria">Educación Primaria</option>
				<option value="Educación Social">Educación Social</option>
				<option value="Enfermería">Enfermería</option>
				<option value="Enología">Enología</option>
				<option value="Estadística">Estadística</option>
				<option value="Estudios Árabes e Islámicos">Estudios Árabes e Islámicos</option>
				<option value="Estudios de Asia y África">Estudios de Asia y África</option>
				<option value="Estudios de Asia Oriental">Estudios de Asia Oriental</option>
				<option value="Estudios Literarios">Estudios Literarios</option>
				<option value="Física">Física</option>
				<option value="Filosofía">Filosofía</option>
				<option value="Finanzas">Finanzas</option>
				<option value="Fisioterapia">Fisioterapia</option>
				<option value="Fotografía">Fotografía</option>
				<option value="Genética">Genética</option>
				<option value="Geografía">Geografía</option>
				<option value="Geología">Geología</option>
				<option value="Historia">Historia</option>
				<option value="Historia del Arte">Historia del Arte</option>
				<option value="Historia y Ciencias de la Música">Historia y Ciencias de la Música</option>
				<option value="Historia y Patrimonio">Historia y Patrimonio</option>
				<option value="Humanidades">Humanidades</option>
				<option value="Ingeniería Aeronáutica">Ingeniería Aeronáutica</option>
				<option value="Ingeniería Agrícola">Ingeniería Agrícola</option>
				<option value="Ingeniería Agroalimentaria">Ingeniería Agroalimentaria</option>
				<option value="Ingeniería Agroambiental">Ingeniería Agroambiental</option>
				<option value="Ingeniería Biomédica">Ingeniería Biomédica</option>
				<option value="Ingeniería Civil">Ingeniería Civil</option>
				<option value="Ingeniería de Computadores">Ingeniería de Computadores</option>
				<option value="Ingeniería de Diseño Industrial y Desarrollo del Producto">
					Ingeniería de Diseño Industrial y Desarrollo del Producto
				</option>
				<option value="Ingeniería de Edificación">Ingeniería de Edificación</option>
				<option value="Ingeniería de la Energia">Ingeniería de la Energia</option>
				<option value="Ingeniería de Materiales">Ingeniería de Materiales</option>
				<option value="Ingeniería de Minas y Energía">Ingeniería de Minas y Energía</option>
				<option value="Ingeniería de Organización Industrial">Ingeniería de Organización Industrial</option>
				<option value="Ingeniería de Sistemas de Telecomunicación">Ingeniería de Sistemas de Telecomunicación</option>
				<option value="Ingeniería de Sonido e Imagen">Ingeniería de Sonido e Imagen</option>
				<option value="Ingeniería del Software">Ingeniería del Software</option>
				<option value="Ingeniería Eléctrica">Ingeniería Eléctrica</option>
				<option value="Ingeniería Eléctrica y Electrónica">Ingeniería Eléctrica y Electrónica</option>
				<option value="Ingeniería Electrónica y Automática">Ingeniería Electrónica y Automática</option>
				<option value="Ingeniería Forestal">Ingeniería Forestal</option>
				<option value="Ingeniería Geológica">Ingeniería Geológica</option>
				<option value="Ingeniería Geomática y Topografía">Ingeniería Geomática y Topografía</option>
				<option value="Ingeniería Industrial">Ingeniería Industrial</option>
				<option value="Ingeniería Informática">Ingeniería Informática</option>
				<option value="Ingeniería Marítima">Ingeniería Marítima</option>
				<option value="Ingeniería Mecánica">Ingeniería Mecánica</option>
				<option value="Ingeniería Mecatrónica">Ingeniería Mecatrónica</option>
				<option value="Ingeniería Náutica">Ingeniería Náutica</option>
				<option value="Ingeniería Naval y Oceánica">Ingeniería Naval y Oceánica</option>
				<option value="Ingeniería Química">Ingeniería Química</option>
				<option value="Ingeniería Telemática">Ingeniería Telemática</option>
				<option value="Ingeniería Textil">Ingeniería Textil</option>
				<option value="Logopedia">Logopedia</option>
				<option value="Lengua Española y sus Literaturas">Lengua Española y sus Literaturas</option>
				<option value="Lengua y Literatura Catalanas">Lengua y Literatura Catalanas</option>
				<option value="Lengua y Literatura Gallegas">Lengua y Literatura Gallegas</option>
				<option value="Lengua y Literatura Vascas">Lengua y Literatura Vascas</option>
				<option value="Lenguas Modernas">Lenguas Modernas</option>
				<option value="Lenguas y Literaturas Clásicas">Lenguas y Literaturas Clásicas</option>
				<option value="Lingüística y Lenguas Aplicadas">Lingüística y Lenguas Aplicadas</option>
				<option value="Marketing">Marketing</option>
				<option value="Matemáticas">Matemáticas</option>
				<option value="Medicina">Medicina</option>
				<option value="Multimedia">Multimedia</option>
				<option value="Música">Música</option>
				<option value="Nutrición y Dietética">Nutrición y Dietética</option>
				<option value="Odontología">Odontología</option>
				<option value="Óptica y Optometría">Óptica y Optometría</option>
				<option value="Pedagogía">Pedagogía</option>
				<option value="Periodismo">Periodismo</option>
				<option value="Psicología">Psicología</option>
				<option value="Publicidad y Relaciones Públicas">Publicidad y Relaciones Públicas</option>
				<option value="Química">Química</option>
				<option value="Recursos Humanos">Recursos Humanos</option>
				<option value="Relaciones internacionales">Relaciones internacionales</option>
				<option value="Sociología">Sociología</option>
				<option value="Terapia Ocupacional">Terapia Ocupacional</option>
				<option value="Trabajo Social">Trabajo Social</option>
				<option value="Traducción">Traducción</option>
				<option value="Turismo">Turismo</option>
			</select>
		</div>
	);
};
export default Career;
