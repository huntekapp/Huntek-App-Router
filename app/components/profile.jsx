import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";

const Profile = ({ user, closeProfile, setCloseProfile }) => {
  const router = useRouter();
  return (
    <section className="w-full h-screen text-pri flex flex-col">
      <article className="w-full h-[10%] px-4 border-b flex flex-row justify-between items-center">
        <div className="w-6 h-6"></div>
        <h1 className="w-full text-center text-3xl font-bold cursor-default">Mi Perfil</h1>
        <button
          onClick={() => {
            document.getElementById("profile").click();
            setCloseProfile(!closeProfile);
          }}
          className="w-6 h-6 rounded-full grid place-content-center hover:bg-pri-100 hover:scale-125 duration-150">
          <CloseOutlinedIcon />
        </button>
      </article>
      <article className="w-full h-[90%] p-8 flex flex-col justify-evenly items-center">
        <div className="w-full h-2/5 flex flex-col justify-center items-center">
          <div className="w-20 h-20 mb-2 relative">
            <Image
              src={user.image}
              alt="avatar"
              fill={true}
              loading={"eager"}
              className="object-cover rounded-full absolute"
            />
          </div>
          <div className="flex flex-row items-center">
            <h3 className="text-2xl font-medium cursor-default">{user.name}</h3>
            <Link href="/profileExtend" className="ml-2">
              <EditOutlinedIcon className="w-5 h-5 opacity-70 hover:opacity-100 hover:scale-125 duration-150" />
            </Link>
          </div>
          <p className="text-xs font-normal cursor-default">{user.email}</p>
        </div>
        <div className="w-full h-4/5 text-base flex flex-col justify-around items-center">
          <Link href="/postulations" className="w-full h-1/4 flex justify-between items-center hover:opacity-70">
            Postulaciones
            <NavigateNextOutlinedIcon />
          </Link>
          <Link href="/conversations" className="w-full h-1/4 flex justify-between items-center hover:opacity-70">
            Conversaciones
            <NavigateNextOutlinedIcon />
          </Link>
          <Link href="/home" className="w-full h-1/4 flex justify-between items-center hover:opacity-70">
            Configuración
            <NavigateNextOutlinedIcon />
          </Link>
          <Link href="/home" className="w-full h-1/4 flex justify-between items-center hover:opacity-70">
            Términos & Condiciones
            <NavigateNextOutlinedIcon />
          </Link>
        </div>
        <div className="w-full h-1/4 p-8 text-pri-500 flex flex-col justify-evenly items-center">
          <button
            className="text-red-700 hover:opacity-70"
            onClick={() => {
              document.cookie = "kTnKETkt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
              document.cookie = "AiOiJKV1Q=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
              router.push("/login");
            }}>
            Cerrar sesión
          </button>
          Copyright © 2023 Huntek App
        </div>
      </article>
    </section>
  );
};

export default Profile;
