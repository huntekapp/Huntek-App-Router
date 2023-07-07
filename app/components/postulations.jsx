"use client";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

const Postulations = () => {
  const [postulaciones, setPostulaciones] = useState([
    {
      id: "Huntek",
      image: "/huntek/logo/G.svg",
    },
    {id: "Youtube", image: "/images/youtube-g6a795f8e6_1920.png"},
    {
      id: "Google",
      image: "/images/google-ga4b7784ab_1920.png",
    },
    {
      id: "Bitcoin",
      image: "/images/bitcoin-gfe80587d1_1920.png",
    },
    {
      id: "Linkedin",
      image: "/images/linkedin-gf141b6fe5_1920.png",
    },
    {
      id: "Windows",
      image: "/images/windows-gc6d7a955d_1920.png",
    },
    {id: "apple", image: "/images/apple-g44d4327db_1920.png"},
  ]);
  return (
    <main className="w-full h-40 my-6 flex flex-col justify-around">
      <div className="flex flex-row justify-between">
        <p>Mis postulaciones</p>
        <Link href="" className="font-medium">
          Ver todas
        </Link>
      </div>
      <section className="carousel carousel-center  w-full p-2  space-x-6 rounded-box">
        {postulaciones.map((post, index) => (
          <article key={index} className="carousel-item avatar">
            <div className="w-16 rounded-full ring ring-pri ring-offset-base-100 ring-offset-2">
              <Image key={post.id} alt={post.id} src={post.image} width={60} height={100} quality={100} />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Postulations;
