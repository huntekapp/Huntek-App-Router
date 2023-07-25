"use client";
import Image from "next/image";
import PersonIcon from "@mui/icons-material/Person";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import PhoneIcon from "@mui/icons-material/Phone";
import MapIcon from "@mui/icons-material/Map";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import AccountBalanceSharpIcon from "@mui/icons-material/AccountBalanceSharp";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HourglassTopRoundedIcon from "@mui/icons-material/HourglassTopRounded";
import PhonelinkRoundedIcon from "@mui/icons-material/PhonelinkRounded";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";

const ProfileExt = () => {
	return (
		<main className="w-full max-w-md h-full">
			<section className=" text-pri text-center flex flex-col justify-start items-center">
				<article className="w-11/12 flex flex-col justify-center items-center mt-5">
					<div className="relative border-8 border-pri rounded-full shadow-lg">
						<Image
							src={"/images/romelu-lukaku.jpg"}
							alt="avatar"
							width={150}
							height={150}
							loading={"eager"}
							className="rounded-full aspect-square"
            />
            <Image
              src={"/utils/upload.svg"}
              alt="upload"
              width={35}
              height={35}
              loading={"eager"}
              className="absolute right-0 bottom-1 aspect-square rounded-full bg-sec p-1 border-2 cursor-pointer"
            />
					</div>
				</article>
				<article className="flex flex-col justify-start items-center">
					<h2 className="text-3xl text-black font-bold my-2">Benito Antonio Martinez</h2>
					<h2 className="text-2xl w-fit px-4 py-2 rounded-md text-sec bg-pri">Licenciatura en MKT</h2>
					<p className="text-sm text-gray-500 mt-2">Ubicación actual Beijing</p>
        </article>
        <div className="mt-8">Tu plan actual: Starter</div>
        <article className="flex flex-row pt-5 items-center w-full justify-around">
				<div className="bg-pri-500 w-1/3 justify-center items-center rounded-lg">
					<h2 className="text-2xl text-center text-sec">Advance</h2>
					<p className="text-lg text-center text-sec">$199mxn</p>
				</div>
				<div className="bg-pri-800 w-1/3 justify-center items-center rounded-lg">
					<h2 className="text-2xl text-center text-sec">Premium</h2>
					<p className="text-lg text-center text-sec">$299mxn</p>
          </div>
          </article>
			</section>
			<section>
				<article className="grid grid-cols-1 gap-3 px-2 justify-start">
					<h3 className="w-full text-2xl text-pri mt-5 text-start">Lo esencial</h3>

					<div className="flex justify-between items-center">
						<label htmlFor="modalDondeEstudiaste" className="text-lg font-light cursor-pointer w-full relative">
							<AccountBalanceSharpIcon /> Donde estudiaste?
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalDondeEstudiaste" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box">
								Donde estudiaste titan?
								<div className="modal-action">
									<label htmlFor="modalDondeEstudiaste" className="btn">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between items-center">
						<label htmlFor="modalQueEstudias" className="text-lg font-light cursor-pointer w-full relative">
							<SchoolRoundedIcon /> Que estudias?
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalQueEstudias" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box">
								Que estudias maquina?
								<div className="modal-action">
									<label htmlFor="modalQueEstudias" className="btn">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between items-center">
						<label htmlFor="modalDondeVives" className="text-lg font-light cursor-pointer w-full relative">
							<LocationOnIcon /> Donde vives?
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalDondeVives" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box">
								Donde vivís fenómeno?
								<div className="modal-action">
									<label htmlFor="modalDondeVives" className="btn">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between items-center">
						<label htmlFor="modalGenero" className="text-lg font-light cursor-pointer w-full relative">
							<PersonIcon /> Género
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalGenero" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box">
								Te autopercibís como una tormenta de facha?
								<div className="modal-action">
									<label htmlFor="modalGenero" className="btn">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between items-center">
						<label htmlFor="modalTelefono" className="text-lg font-light cursor-pointer w-full relative">
							<PhoneIcon /> Teléfono
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalTelefono" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box">
								Me pasarias tu número belleza?
								<div className="modal-action">
									<label htmlFor="modalTelefono" className="btn">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between items-center">
						<label htmlFor="modalEdad" className="text-lg font-light cursor-pointer w-full relative">
							<EscalatorWarningIcon /> Edad
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalEdad" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box">
								Cuantos 365 dias han pasado desde tu natalicio?
								<div className="modal-action">
									<label htmlFor="modalEdad" className="btn">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>
				</article>
				<article className="grid grid-cols-1 gap-3 px-2 pb-6 justify-start">
					<h3 className="w-full text-2xl mt-6 text-pri text-start">Lo que importa</h3>

					<div className="flex justify-between items-center">
						<label htmlFor="modalReubicarte" className="text-lg font-light cursor-pointer w-full relative">
							<MapIcon /> Podrías reubicarte?
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalReubicarte" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box">
								Podrias reubicarte?
								<div className="modal-action">
									<label htmlFor="modalReubicarte" className="btn">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between items-center">
						<label htmlFor="modalAreasInteres" className="text-lg font-light cursor-pointer w-full relative">
							<ZoomInIcon /> Que áreas te interesan?
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalAreasInteres" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box">
								Which areas te interesan?
								<div className="modal-action">
									<label htmlFor="modalAreasInteres" className="btn">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between items-center">
						<label htmlFor="modalExperiencia" className="text-lg font-light cursor-pointer w-full relative">
							<AutoFixHighIcon /> Años de experiencia
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalExperiencia" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box">
								Si no tenes 5 años de experiencia no te contrato.
								<div className="modal-action">
									<label htmlFor="modalExperiencia" className="btn">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between items-center">
						<label htmlFor="modalSalario" className="text-lg font-light cursor-pointer w-full relative">
							<AttachMoneyIcon /> Salario deseado
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalSalario" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box">
								Cuanta money te cierra facha?
								<div className="modal-action">
									<label htmlFor="modalSalario" className="btn">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between items-center">
						<label htmlFor="modalDisponibilidad" className="text-lg font-light cursor-pointer w-full relative">
							<HourglassTopRoundedIcon /> Disponibilidad
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalDisponibilidad" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box">
								Disponibilidad horaria
								<div className="modal-action">
									<label htmlFor="modalDisponibilidad" className="btn">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between items-center">
						<label htmlFor="modalFormaTrabajo" className="text-lg font-light cursor-pointer w-full relative">
							<PhonelinkRoundedIcon /> Forma de trabajo
							<NavigateNextOutlinedIcon className="absolute right-0 top-[3px]" />
						</label>
						<input type="checkbox" id="modalFormaTrabajo" className="modal-toggle" />
						<div className="modal">
							<div className="modal-box">
								Forma de trabajooooou
								<div className="modal-action">
									<label htmlFor="modalFormaTrabajo" className="btn">
										Cerrar
									</label>
								</div>
							</div>
						</div>
					</div>
				</article>
			</section>
		</main>
	);
};

export default ProfileExt;
