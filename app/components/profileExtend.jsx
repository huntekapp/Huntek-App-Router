"use client"

import Image from "next/image";
import PersonIcon from '@mui/icons-material/Person'; 
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import PhoneIcon from '@mui/icons-material/Phone';
import MapIcon from '@mui/icons-material/Map';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import AccountBalanceSharpIcon from '@mui/icons-material/AccountBalanceSharp';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HourglassTopRoundedIcon from '@mui/icons-material/HourglassTopRounded';
import PhonelinkRoundedIcon from '@mui/icons-material/PhonelinkRounded';
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";

const ProfileExt = () => {
  return (
    <main className="w-full max-w-md h-full">
		<section className=" text-pri text-center flex flex-col justify-start items-center">
			<article className="w-11/12 flex flex-col justify-center items-center">
				<progress id="html" min="0" max="100" value="75" className="opacity-0"></progress>
				<div className="progress-bar flex flex-col justify-center items-center">
					<div className="relative">
						<Image
							src={"/images/pexels-monstera-5384445.jpg"}
							alt="avatar"
							width={80}
							height={80}
							loading={"eager"}
							className="rounded-full aspect-square"
						/>
					</div>
				</div>
			</article>
      <article className="flex flex-col justify-start items-center">
        <h2 className="text-3xl text-black font-bold mt-2">Elchi Nito</h2>
        <h2 className="text-2xl w-full px-4 py-2 rounded-md text-sec bg-pri">Licenciatura en MKT</h2>
        <p className="texl-md text-gray-500" >Ubicación actual Beijing</p>
      </article>
      </section>
      <section>
      <article className="grid grid-cols-1 gap-4 px-2 justify-start">
          <h3 className="w-full text-2xl py-6 px-2 text-pri  text-start">Lo esencial</h3>
          <div className="flex justify-between items-center">
          <p className="text-lg font-light "><AccountBalanceSharpIcon></AccountBalanceSharpIcon> Donde estudiaste?</p>
          <NavigateNextOutlinedIcon />
          </div>
          <div className="flex justify-between items-center">
          <p className="text-lg font-light "><SchoolRoundedIcon></SchoolRoundedIcon> Que estudias?</p>
          <NavigateNextOutlinedIcon />
          </div>
          <div className="flex justify-between items-center">
          <p className="text-lg font-light "><LocationOnIcon></LocationOnIcon> Donde vives?</p>
          <NavigateNextOutlinedIcon />
          </div>
          <div className="flex justify-between items-center">
          <p className="text-lg font-light "><PersonIcon></PersonIcon> Género</p>
          <NavigateNextOutlinedIcon />
          </div>
          <div className="flex justify-between items-center">
          <p className="text-lg font-light "><PhoneIcon></PhoneIcon> Teléfono</p>
          <NavigateNextOutlinedIcon />
          </div>
          <div className="flex justify-between items-center">
          <p className="text-lg font-light "><EscalatorWarningIcon></EscalatorWarningIcon> Edad</p>
          <NavigateNextOutlinedIcon />
          </div>
        </article>
        <article className="grid grid-cols-1 gap-4 px-2 pb-6 justify-start">
          <h3 className="w-full text-2xl pt-6 pb-2 px-2 text-pri  text-start">Lo que importa</h3>
          <div className="flex justify-between items-center">
          <p className="text-lg font-light "><MapIcon></MapIcon> Podrías reubicarte?</p>
          <NavigateNextOutlinedIcon />
          </div>
          <div className="flex justify-between items-center">
          <p className="text-lg font-light "><ZoomInIcon></ZoomInIcon> Que áreas te interesan?</p>
          <NavigateNextOutlinedIcon />
          </div>
          <div className="flex justify-between items-center">
          <p className="text-lg font-light "><AutoFixHighIcon></AutoFixHighIcon> Años de experiencia</p>
          <NavigateNextOutlinedIcon />
          </div>
          <div className="flex justify-between items-center">
          <p className="text-lg font-light "><AttachMoneyIcon></AttachMoneyIcon> Salario deseado</p>
          <NavigateNextOutlinedIcon />
          </div>
          <div className="flex justify-between items-center">
          <p className="text-lg font-light "><HourglassTopRoundedIcon></HourglassTopRoundedIcon> Disponibilidad</p>
          <NavigateNextOutlinedIcon />
          </div>
          <div className="flex justify-between items-center">
          <p className="text-lg font-light "><PhonelinkRoundedIcon></PhonelinkRoundedIcon> Forma de trabajo</p>
          <NavigateNextOutlinedIcon />
          </div>
      </article>
      </section>
      </main>
	);
};

export default ProfileExt;
