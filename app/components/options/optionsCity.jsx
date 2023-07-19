const OptionsCity = ({ userData, handleChange }) => {
  return (
    <>
      <div className="w-full mb-2">
        <label htmlFor="city" className="ml-2 font-semibolds">
          ¿En qué ciudad te encuentras?
        </label>
        <select
          name="city"
          value={userData.city}
          onChange={(event) => handleChange(event)}
          className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none">
          <option value="select" hidden>
            Selecciona una ciudad
          </option>
          <option value="ciudaddemexico">Ciudad de México</option>
          <option value="estadodemexico">Estado de México</option>
          <option value="acapulco">Acapulco</option>
          <option value="aguascalientes">Aguascalientes</option>
          <option value="campeche">Campeche</option>
          <option value="cancun">Cancún</option>
          <option value="celaya">Celaya</option>
          <option value="chetumal">Chetumal</option>
          <option value="chihuahua">Chihuahua</option>
          <option value="chilpacingo">Chilpacingo</option>
          <option value="ciudaddelcarmen">Ciudad del Carmen</option>
          <option value="ciudadobregon">Ciudad Obregón</option>
          <option value="ciudadvictoria">Ciudad Victoria</option>
          <option value="coatzacoalcos">Coatzacoalcos</option>
          <option value="colima">Colima</option>
          <option value="cuautla">Cuautla</option>
          <option value="cuernavaca">Cuernavaca</option>
          <option value="cuilican">Cuilicán</option>
          <option value="cardenas">Cárdenas</option>
          <option value="cordoba">Córdoba</option>
          <option value="durango">Durango</option>
          <option value="ensenada">Ensenada</option>
          <option value="guadalajara">Guadalajara</option>
          <option value="guanajuato">Guanajuato</option>
          <option value="guayamas">Guayamas</option>
          <option value="hermosillo">Hermosillo</option>
          <option value="irapuato">Irapuato</option>
          <option value="juarez">Juárez</option>
          <option value="lalaguna">La Laguna</option>
          <option value="lapaz">La Paz</option>
          <option value="lapiedad">La Piedad</option>
          <option value="leon">León</option>
          <option value="loscabos">Los Cabos</option>
          <option value="losmochis">Los Mochis</option>
          <option value="manzanillo">Manzanillo</option>
          <option value="matamorros">Matamorros</option>
          <option value="mazatlan">Mazatlán</option>
          <option value="mexicali">Mexicali</option>
          <option value="minititlan">Minititlán</option>
          <option value="monclova">Monclova</option>
          <option value="monterrey">Monterrey</option>
          <option value="morelia">Morelia</option>
          <option value="merida">Mérida</option>
          <option value="nuevolaredo">Nuevo Leredo</option>
          <option value="oxaca">Oaxaca</option>
          <option value="ocotlan">Ocotlán</option>
          <option value="orizaba">Orizaba</option>
          <option value="pachuca">Pachuca</option>
          <option value="piedrasnegras">Piedras Negras</option>
          <option value="pozarica">Poza Rica</option>
          <option value="pueblatlaxcala">Puebla-Tlaxcala</option>
          <option value="puertovallarta">Puerto Vallarta</option>
          <option value="queretaro">Querétaro</option>
          <option value="reynosa">Reynosa</option>
          <option value="rioverde">Ríoverde</option>
          <option value="salamanca">Salamanca</option>
          <option value="saltillo">Saltillo</option>
          <option value="sanfranciscodelrincon">San Francisco del Rincón</option>
          <option value="sanjuandelrio">San Juan del Río</option>
          <option value="sanluispotosi">San Luis Potosí</option>
          <option value="tampico">Tampico</option>
          <option value="tapachula">Tapachula</option>
          <option value="tecoman">Tecomán</option>
          <option value="tehuacan">Tehuacán</option>
          <option value="tehuantepec">Tehuantepec</option>
          <option value="tepic">Tepic</option>
          <option value="tijuana">Tijuana</option>
          <option value="tlaxcala">Tlaxcala</option>
          <option value="toluca">Toluca</option>
          <option value="tula">Tula</option>
          <option value="tulacingo">Tulacingo</option>
          <option value="tulacingo">Tulacingo</option>
          <option value="tuxlagutierrez">Tuxtla Gutiérrez</option>
          <option value="uruapan">Uruapan</option>
          <option value="valledemexico">Valle de México</option>
          <option value="veracruz">Veracruz</option>
          <option value="villahermosa">Villahermosa</option>
          <option value="xalapa">Xalapa</option>
          <option value="zacatecas">Zacatecas</option>
          <option value="zamora">Zamora</option>
        </select>
      </div>
      <div className="w-full mb-2">
        <label htmlFor="reubication" className="ml-2 font-semibold">
          ¿Podrías reubicarte en otra ciudad?
        </label>
        <select
          name="reubication"
          value={userData.reubication}
          onChange={(event) => handleChange(event)}
          className="w-full px-2 py-1 bg-pri-100 text-gray-400 rounded-md focus:outline-none">
          <option value="select" hidden>
            Selecciona una opción
          </option>
          <option value="true">Si</option>
          <option value="false">No</option>
        </select>
      </div>
    </>
  );
};
export default OptionsCity;
