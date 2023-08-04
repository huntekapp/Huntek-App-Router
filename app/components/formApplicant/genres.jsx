import NotListedLocationOutlinedIcon from "@mui/icons-material/NotListedLocationOutlined";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const Genres = ({ userData, handleChange, inputGenre }) => {
	const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
	const checkedIcon = <CheckBoxIcon fontSize="small" />;
	const genres = [
		{ name: "Hombre", valor: "hom" },
		{ name: "Mujer", valor: "muj" },
		{ name: "Otro", calor: "otro" },
	];

	return (
		<div className="w-full mb-2">
			<label htmlFor="genre" className="ml-2 font-semibold">
				¿Cuál es tu género?
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
				options={genres}
				disableCloseOnSelect
				getOptionLabel={(option) => option.name}
				renderOption={(props, option, { selected }) => (
					<li {...props}>
						<Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
						{option.name}
					</li>
				)}
				renderInput={(params) => <TextField {...params} label="Selecciona un país" placeholder="Busca tu país" />}
				className="w-full"
			/>
		</div>
	);
};

export default Genres;
