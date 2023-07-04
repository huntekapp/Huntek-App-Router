"use client";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function Landing() {
  const router = useRouter();
  const [activatePing, setActivatePing] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/login");
      setActivatePing(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="h-screen grid place-content-center">
      <Image
        src="/huntek.svg"
        width={240}
        height={266}
        quality={100}
        className={`animate-pulse transition-all duration-500 ${activatePing ? "animate-ping" : ""}`}
        alt=""
      />
    </div>
  );
}
