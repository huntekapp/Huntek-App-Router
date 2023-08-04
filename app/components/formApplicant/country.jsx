import NotListedLocationOutlinedIcon from "@mui/icons-material/NotListedLocationOutlined";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const Country = ({ userData, handleChange, inputCountry }) => {
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const countries = [
    { name: "Afganistán", value: "AFG" },
    { name: "Albania", value: "ALB" },
    { name: "Alemania", value: "DEU" },
    { name: "Andorra", value: "AND" },
    { name: "Angola", value: "AGO" },
    { name: "Antigua y Barbuda", value: "ATG" },
    { name: "Arabia Saudita", value: "SAU" },
    { name: "Argelia", value: "DZA" },
    { name: "Argentina", value: "ARG" },
    { name: "Armenia", value: "ARM" },
    { name: "Australia", value: "AUS" },
    { name: "Austria", value: "AUT" },
    { name: "Azerbaiyán", value: "AZE" },
    { name: "Bahamas", value: "BHS" },
    { name: "Bangladés", value: "BGD" },
    { name: "Barbados", value: "BRB" },
    { name: "Baréin", value: "BHR" },
    { name: "Bélgica", value: "BEL" },
    { name: "Belice", value: "BLZ" },
    { name: "Benín", value: "BEN" },
    { name: "Bielorrusia", value: "BLR" },
    { name: "Birmania/Myanmar", value: "MMR" },
    { name: "Bolivia", value: "BOL" },
    { name: "Bosnia y Herzegovina", value: "BIH" },
    { name: "Botsuana", value: "BWA" },
    { name: "Brasil", value: "BRA" },
    { name: "Brunéi", value: "BRN" },
    { name: "Bulgaria", value: "BGR" },
    { name: "Burkina Faso", value: "BFA" },
    { name: "Burundi", value: "BDI" },
    { name: "Bután", value: "BTN" },
    { name: "Cabo Verde", value: "CPV" },
    { name: "Camboya", value: "KHM" },
    { name: "Camerún", value: "CMR" },
    { name: "Canadá", value: "CAN" },
    { name: "Catar", value: "QAT" },
    { name: "Chad", value: "TCD" },
    { name: "Chile", value: "CHL" },
    { name: "China", value: "CHN" },
    { name: "Chipre", value: "CYP" },
    { name: "Ciudad del Vaticano", value: "VAT" },
    { name: "Colombia", value: "COL" },
    { name: "Comoras", value: "COM" },
    { name: "Corea del Norte", value: "PRK" },
    { name: "Corea del Sur", value: "KOR" },
    { name: "Costa de Marfil", value: "CIV" },
    { name: "Costa Rica", value: "CRI" },
    { name: "Croacia", value: "HRV" },
    { name: "Cuba", value: "CUB" },
    { name: "Dinamarca", value: "DNK" },
    { name: "Dominica", value: "DMA" },
    { name: "Ecuador", value: "ECU" },
    { name: "Egipto", value: "EGY" },
    { name: "El Salvador", value: "SLV" },
    { name: "Emiratos Árabes Unidos", value: "ARE" },
    { name: "Eritrea", value: "ERI" },
    { name: "Eslovaquia", value: "SVK" },
    { name: "Eslovenia", value: "SVN" },
    { name: "España", value: "ESP" },
    { name: "Estados Unidos", value: "USA" },
    { name: "Estonia", value: "EST" },
    { name: "Etiopía", value: "ETH" },
    { name: "Filipinas", value: "PHL" },
    { name: "Finlandia", value: "FIN" },
    { name: "Fiyi", value: "FJI" },
    { name: "Francia", value: "FRA" },
    { name: "Gabón", value: "GAB" },
    { name: "Gambia", value: "GMB" },
    { name: "Georgia", value: "GEO" },
    { name: "Ghana", value: "GHA" },
    { name: "Granada", value: "GRD" },
    { name: "Grecia", value: "GRC" },
    { name: "Guatemala", value: "GTM" },
    { name: "Guyana", value: "GUY" },
    { name: "Guinea", value: "GIN" },
    { name: "Guinea ecuatorial", value: "GNQ" },
    { name: "Guinea-Bisáu", value: "GNB" },
    { name: "Haití", value: "HTI" },
    { name: "Honduras", value: "HND" },
    { name: "Hungría", value: "HUN" },
    { name: "India", value: "IND" },
    { name: "Indonesia", value: "IDN" },
    { name: "Irak", value: "IRQ" },
    { name: "Irán", value: "IRN" },
    { name: "Irlanda", value: "IRL" },
    { name: "Islandia", value: "ISL" },
    { name: "Islas Marshall", value: "MHL" },
    { name: "Islas Salomón", value: "SLB" },
    { name: "Israel", value: "ISR" },
    { name: "Italia", value: "ITA" },
    { name: "Jamaica", value: "JAM" },
    { name: "Japón", value: "JPN" },
    { name: "Jordania", value: "JOR" },
    { name: "Kazajistán", value: "KAZ" },
    { name: "Kenia", value: "KEN" },
    { name: "Kirguistán", value: "KGZ" },
    { name: "Kiribati", value: "KIR" },
    { name: "Kuwait", value: "KWT" },
    { name: "Laos", value: "LAO" },
    { name: "Lesoto", value: "LSO" },
    { name: "Letonia", value: "LVA" },
    { name: "Líbano", value: "LBN" },
    { name: "Liberia", value: "LBR" },
    { name: "Libia", value: "LBY" },
    { name: "Liechtenstein", value: "LIE" },
    { name: "Lituania", value: "LTU" },
    { name: "Luxemburgo", value: "LUX" },
    { name: "Macedonia del Norte", value: "MKD" },
    { name: "Madagascar", value: "MDG" },
    { name: "Malasia", value: "MYS" },
    { name: "Malaui", value: "MWI" },
    { name: "Maldivas", value: "MDV" },
    { name: "Malí", value: "MLI" },
    { name: "Malta", value: "MLT" },
    { name: "Marruecos", value: "MAR" },
    { name: "Mauricio", value: "MUS" },
    { name: "Mauritania", value: "MRT" },
    { name: "México", value: "MEX" },
    { name: "Micronesia", value: "FSM" },
    { name: "Moldavia", value: "MDA" },
    { name: "Mónaco", value: "MCO" },
    { name: "Mongolia", value: "MNG" },
    { name: "Montenegro", value: "MNE" },
    { name: "Mozambique", value: "MOZ" },
    { name: "Namibia", value: "NAM" },
    { name: "Nauru", value: "NRU" },
    { name: "Nepal", value: "NPL" },
    { name: "Nicaragua", value: "NIC" },
    { name: "Níger", value: "NER" },
    { name: "Nigeria", value: "NGA" },
    { name: "Noruega", value: "NOR" },
    { name: "Nueva Zelanda", value: "NZL" },
    { name: "Omán", value: "OMN" },
    { name: "Países Bajos", value: "NLD" },
    { name: "Pakistán", value: "PAK" },
    { name: "Palaos", value: "PLW" },
    { name: "Panamá", value: "PAN" },
    { name: "Papúa Nueva Guinea", value: "PNG" },
    { name: "Paraguay", value: "PRY" },
    { name: "Perú", value: "PER" },
    { name: "Polonia", value: "POL" },
    { name: "Portugal", value: "PRT" },
    { name: "Reino Unido", value: "GBR" },
    { name: "República Centroafricana", value: "CAF" },
    { name: "República Checa", value: "CZE" },
    { name: "República del Congo", value: "COG" },
    { name: "República Democrática del Congo", value: "COD" },
    { name: "República Dominicana", value: "DOM" },
    { name: "República Sudafricana", value: "ZAF" },
    { name: "Ruanda", value: "RWA" },
    { name: "Rumanía", value: "ROU" },
    { name: "Rusia", value: "RUS" },
    { name: "Samoa", value: "WSM" },
    { name: "San Cristóbal y Nieves", value: "KNA" },
    { name: "San Marino", value: "SMR" },
    { name: "San Vicente y las Granadinas", value: "VCT" },
    { name: "Santa Lucía", value: "LCA" },
    { name: "Santo Tomé y Príncipe", value: "STP" },
    { name: "Senegal", value: "SEN" },
    { name: "Serbia", value: "SRB" },
    { name: "Seychelles", value: "SYC" },
    { name: "Sierra Leona", value: "SLE" },
    { name: "Singapur", value: "SGP" },
    { name: "Siria", value: "SYR" },
    { name: "Somalia", value: "SOM" },
    { name: "Sri Lanka", value: "LKA" },
    { name: "Suazilandia", value: "SWZ" },
    { name: "Sudán", value: "SDN" },
    { name: "Sudán del Sur", value: "SSD" },
    { name: "Suecia", value: "SWE" },
    { name: "Suiza", value: "CHE" },
    { name: "Surinam", value: "SUR" },
    { name: "Tailandia", value: "THA" },
    { name: "Tanzania", value: "TZA" },
    { name: "Tayikistán", value: "TJK" },
    { name: "Timor Oriental", value: "TLS" },
    { name: "Togo", value: "TGO" },
    { name: "Tonga", value: "TON" },
    { name: "Trinidad y Tobago", value: "TTO" },
    { name: "Túnez", value: "TUN" },
    { name: "Turkmenistán", value: "TKM" },
    { name: "Turquía", value: "TUR" },
    { name: "Tuvalu", value: "TUV" },
    { name: "Ucrania", value: "UKR" },
    { name: "Uganda", value: "UGA" },
    { name: "Uruguay", value: "URY" },
    { name: "Uzbekistán", value: "UZB" },
    { name: "Vanuatu", value: "VUT" },
    { name: "Venezuela", value: "VEN" },
    { name: "Vietnam", value: "VNM" },
    { name: "Yemen", value: "YEM" },
    { name: "Yibuti", value: "DJI" },
    { name: "Zambia", value: "ZMB" },
    { name: "Zimbabue", value: "ZWE" },
  ];

  return (
    <div className="w-full flex flex-col">
      <label htmlFor="country" className="ml-2 mb-2 font-semibold">
        ¿En que pais naciste?
        <span className="dropdown dropdown-hover font-normal">
          <div tabIndex={0}>
            <NotListedLocationOutlinedIcon className="pb-1" />
          </div>
          <div
            tabIndex={0}
            className="w-fit px-2 py-1 dropdown-content -translate-x-20 z-[1] shadow bg-sec rounded-box">
            Requerido
          </div>
        </span>
      </label>
      <Autocomplete
        id="countries"
        options={countries}
        disableCloseOnSelect
        getOptionLabel={(option) => option.name}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
            {option.name}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Selecciona un país"
            placeholder="Busca tu país"
            onChange={handleChange}
            value={userData.country}
            name="country"
          />
        )}
        className="w-full"
      />
    </div>
  );
};
export default Country;
