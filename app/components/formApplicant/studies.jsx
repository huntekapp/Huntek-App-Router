import Image from "next/image";

const Studies = ({userData, handleChange, inputStudies}) => {
	return (
		<div className="w-full mb-2">
			<label htmlFor="university" className="ml-2 font-semibold">
				¿Dónde estudiaste?
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
				name="university"
				value={userData.university}
				disabled={!inputStudies}
				onChange={(event) => handleChange(event)}
				className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none">
				<option value="select" hidden>
					Selecciona una opción
				</option>
				<option value={"Universidad Nacional Autónoma de México (UNAM)"}>
					Universidad Nacional Autónoma de México (UNAM)
				</option>
				<option value={"Anáhuac"}>Anáhuac</option>
				<option value={"Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)"}>
					Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)
				</option>
				<option value={"Universidad de Guadalajara (UDG)"}>Universidad de Guadalajara (UDG)</option>
				<option value={"Universidad Autónoma de Nuevo León (UANL)"}>Universidad Autónoma de Nuevo León (UANL)</option>
				<option value={"Instituto Politécnico Nacional (IPN)"}>Instituto Politécnico Nacional (IPN)</option>
				<option value={"Universidad Veracruzana (UV)"}>Universidad Veracruzana (UV)</option>
				<option value={"Universidad Autónoma del Estado de México (UAEMEX)"}>
					Universidad Autónoma del Estado de México (UAEMEX)
				</option>
				<option value={"Universidad Autónoma Metropolitana (UAM)"}>Universidad Autónoma Metropolitana (UAM)</option>
				<option value={"Universidad de las Américas Puebla (UDLA)"}>Universidad de las Américas Puebla (UDLA)</option>
				<option value={"Universidad Autónoma del Estado de Hidalgo (UAEH)"}>
					Universidad Autónoma del Estado de Hidalgo (UAEH)
				</option>
				<option value={"Benemérita Universidad Autónoma de Puebla (BUAP)"}>
					Benemérita Universidad Autónoma de Puebla (BUAP)
				</option>
				<option value={"Universidad Interamericana para el Desarrollo (UNID)"}>
					Universidad Interamericana para el Desarrollo (UNID)
				</option>
				<option value={"Instituto Tecnológico y de Estudios Superiores de Occidente (ITESO)"}>
					Instituto Tecnológico y de Estudios Superiores de Occidente (ITESO)
				</option>
				<option value={"Universidad Iberoamericana (UIA – IBERO)"}>Universidad Iberoamericana (UIA – IBERO)</option>
				<option value={"Universidad de Guanajuato (UGTO)"}>Universidad de Guanajuato (UGTO)</option>
				<option value={"Universidad de Sonora (USON)"}>Universidad de Sonora (USON)</option>
				<option value={"Universidad de Anáhuac del Norte (UAN)"}>Universidad de Anáhuac del Norte (UAN)</option>
				<option value={"Colegio de México (COLMEX)"}>Colegio de México (COLMEX)</option>
				<option value={"Universidad Autónoma de Baja California (UABC)"}>
					Universidad Autónoma de Baja California (UABC)
				</option>
				<option value={"Instituto Tecnológico Autónomo de México (ITAM)"}>
					Instituto Tecnológico Autónomo de México (ITAM)
				</option>
				<option value={"Universidad Autónoma de Yucatán (UADY)"}>Universidad Autónoma de Yucatán (UADY)</option>
				<option value={"Universidad Autónoma de Aguascalientes (UAA)"}>
					Universidad Autónoma de Aguascalientes (UAA)
				</option>
				<option value={"Universidad Michoacana de San Nicolás de Hidalgo (UMSNH)"}>
					Universidad Michoacana de San Nicolás de Hidalgo (UMSNH)
				</option>
				<option value={"Universidad de Colima (UCOL)"}>Universidad de Colima (UCOL)</option>
				<option value={"Universidad Autónoma de Ciudad Juárez (UACJ)"}>
					Universidad Autónoma de Ciudad Juárez (UACJ)
				</option>
				<option value={"Universidad Autónoma de Querétaro (UAQ)"}>Universidad Autónoma de Querétaro (UAQ)</option>
				<option value={"Centro de Investigación y Docencia Económicas (CIDE)"}>
					Centro de Investigación y Docencia Económicas (CIDE)
				</option>
				<option value={"Universidad TecMilenio (UTM)"}>Universidad TecMilenio (UTM)</option>
				<option value={"Universidad Autónoma de San Luis de Potosí (UASLP)"}>
					Universidad Autónoma de San Luis de Potosí (UASLP)
				</option>
				<option value={"Universidad Autónoma del Estado de Morelos (UAEM)"}>
					Universidad Autónoma del Estado de Morelos (UAEM)
				</option>
				<option value={"Universidad Autónoma de Chihuahua (UACH)"}>Universidad Autónoma de Chihuahua (UACH)</option>
				<option value={"Universidad Popular Autónoma del Estado de Puebla (UAPAEP)"}>
					Universidad Popular Autónoma del Estado de Puebla (UAPAEP)
				</option>
				<option value={"Universidad de Monterrey (UDEM)"}>Universidad de Monterrey (UDEM)</option>
				<option value={"Universidad del Valle de México (UVM)"}>Universidad del Valle de México (UVM)</option>
				<option value={"Universidad Panamericana (UP)"}>Universidad Panamericana (UP)</option>
				<option value={"Universidad Tecnológica de México (UNITEC)"}>Universidad Tecnológica de México (UNITEC)</option>
				<option value={"Centro de Enseñanza Técnica y Superior (CETYS)"}>
					Centro de Enseñanza Técnica y Superior (CETYS)
				</option>
				<option value={"Universidad Autónoma de Guadalajara (UAG)"}>Universidad Autónoma de Guadalajara (UAG)</option>
				<option value={"Universidad Autónoma de Coahuila (UADEC)"}>Universidad Autónoma de Coahuila (UADEC)</option>
				<option value={"Universidad Autónoma de Sinaloa (UAS)"}>Universidad Autónoma de Sinaloa (UAS)</option>
				<option value={"Instituto Tecnológico de Sonora (ITSON)"}>Instituto Tecnológico de Sonora (ITSON)</option>
				<option value={"Universidad Autónoma de Tamaulipas (UAT)"}>Universidad Autónoma de Tamaulipas (UAT)</option>
				<option value={"Universidad Autónoma de Chiapas (UNACH)"}>Universidad Autónoma de Chiapas (UNACH)</option>
				<option value={"Universidad Autónoma de Zacatecas (UAZ)"}>Universidad Autónoma de Zacatecas (UAZ)</option>
				<option value={"Universidad de Anáhuac Mayab (UA)"}>Universidad de Anáhuac Mayab (UA)</option>
				<option value={"Universidad de Juárez Autónoma de Tabasco (UJAT)"}>
					Universidad de Juárez Autónoma de Tabasco (UJAT)
				</option>
				<option value={"Universidad La Salle (ULSA)"}>Universidad La Salle (ULSA)</option>
				<option value={"Universidad Pedagógica Nacional (UPN)"}>Universidad Pedagógica Nacional (UPN)</option>
				<option value={"Universidad de Montemorelos (UM)"}>Universidad de Montemorelos (UM)</option>
				<option value={"Universidad Autónoma de Baja California Sur (UABCS)"}>
					Universidad Autónoma de Baja California Sur (UABCS)
				</option>
				<option value={"Universidad Autónoma de Chapingo (UACh)"}>Universidad Autónoma de Chapingo (UACh)</option>
				<option value={"Universidad Autónoma de Nayarit (UAN)"}>Universidad Autónoma de Nayarit (UAN)</option>
				<option value={"Instituto de Estudios Universitarios (IEU)"}>Instituto de Estudios Universitarios (IEU)</option>
				<option value={"Universidad del Valle de Atemajac (UNIVA)"}>Universidad del Valle de Atemajac (UNIVA)</option>
				<option value={"Universidad Latinoamericana (ULA)"}>Universidad Latinoamericana (ULA)</option>
				<option value={"Universidad de Quintana Roo (UQROO)"}>Universidad de Quintana Roo (UQROO)</option>
				<option value={"Universidad Autónoma del Carmen (UNACAR)"}>Universidad Autónoma del Carmen (UNACAR)</option>
				<option value={"Universidad Autónoma Benito Juárez de Oaxaca (UABJO)"}>
					Universidad Autónoma Benito Juárez de Oaxaca (UABJO)
				</option>
				<option value={"Universidad Autónoma de Campeche (UACAM)"}>Universidad Autónoma de Campeche (UACAM)</option>
				<option value={"Universidad Autónoma de Ciudad de México (UACM)"}>
					Universidad Autónoma de Ciudad de México (UACM)
				</option>
				<option value={"Universidad Juárez del Estado de Durango (UJED)"}>
					Universidad Juárez del Estado de Durango (UJED)
				</option>
				<option value={"Escuela Bancaria y Comercial (EBC)"}>Escuela Bancaria y Comercial (EBC)</option>
				<option value={"Universidad Intercontinental (UIC)"}>Universidad Intercontinental (UIC)</option>
				<option value={"Universidad Regiomontana (U-ERRE)"}>Universidad Regiomontana (U-ERRE)</option>
				<option value={"Universidad del Claustro de Sor Juana (UCJS)"}>
					Universidad del Claustro de Sor Juana (UCJS)
				</option>
				<option value={"Universidad Tecnológica Mixteca (UTM)"}>Universidad Tecnológica Mixteca (UTM)</option>
				<option value={"Instituto Tecnológico de Chihuahua (UTCH)"}>Instituto Tecnológico de Chihuahua (UTCH)</option>
				<option value={"Universidad Autónoma Agraria Antonio Narro (UAAAN)"}>
					Universidad Autónoma Agraria Antonio Narro (UAAAN)
				</option>
				<option value={"Universidad Autónoma de Occidente (UAdeO)"}>Universidad Autónoma de Occidente (UAdeO)</option>
				<option value={"Universidad Tecnológica de Aguascalientes (UTAGS)"}>
					Universidad Tecnológica de Aguascalientes (UTAGS)
				</option>
				<option value={"Universidad Internacional (UNINTER)"}>Universidad Internacional (UNINTER)</option>
				<option value={"Instituto Tecnológico de Saltillo (ITS)"}>Instituto Tecnológico de Saltillo (ITS)</option>
				<option value={"Instituto Tecnológico de Hermosillo (ITH)"}>Instituto Tecnológico de Hermosillo (ITH)</option>
				<option value={"Universidad Tecnológica de Querétaro (UTEQ)"}>
					Universidad Tecnológica de Querétaro (UTEQ)
				</option>
				<option value={"Universidad Cristóbal Colón (UCC)"}>Universidad Cristóbal Colón (UCC)</option>
				<option value={"Universidad del Caribe (UNICARIBE)"}>Universidad del Caribe (UNICARIBE)</option>
				<option value={"Centro de Estudios Universitarios de Xochicalco (CEUX)"}>
					Centro de Estudios Universitarios de Xochicalco (CEUX)
				</option>
				<option value={"El Colegio de Sonora (COLSON)"}>El Colegio de Sonora (COLSON)</option>
				<option value={"Universidad Metropolitana de Monterrey (UMM)"}>
					Universidad Metropolitana de Monterrey (UMM)
				</option>
				<option value={"Universidad Tecnológica de León (UTL)"}>Universidad Tecnológica de León (UTL)</option>
				<option value={"Instituto Tecnológico de La Paz (ITL)"}>Instituto Tecnológico de La Paz (ITL)</option>
				<option value={"Universidad Vasco de Quiroga (UVAQ)"}>Universidad Vasco de Quiroga (UVAQ)</option>
				<option value={"Instituto Tecnológico de Querétaro (ITQ)"}>Instituto Tecnológico de Querétaro (ITQ)</option>
				<option value={"Universidad Tecnológica Metropolitana (UTM)"}>
					Universidad Tecnológica Metropolitana (UTM)
				</option>
				<option value={"Universidad de España y México (UEM)"}>Universidad de España y México (UEM)</option>
				<option value={"Universidad Latina de América (UNLA)"}>Universidad Latina de América (UNLA)</option>
				<option value={"Universidad La Salle Benavente (ULSA – Puebla)"}>
					Universidad La Salle Benavente (ULSA – Puebla)
				</option>
				<option value={"Universidad Mexicana (UNIMEX)"}>Universidad Mexicana (UNIMEX)</option>
				<option value={"Universidad La Salle Pachuca (ULSA – Pachuca)"}>
					Universidad La Salle Pachuca (ULSA – Pachuca)
				</option>
				<option value={"Universidad Autónoma de La Laguna (UAL)"}>Universidad Autónoma de La Laguna (UAL)</option>
				<option value={"OTRA"}>OTRA</option>
			</select>
		</div>
	);
};
export default Studies;
