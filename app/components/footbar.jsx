"use client";
import Image from "next/image";
import Link from "next/link";
import { IconButton } from "@mui/material";

const Footbar = () => {
  return (
    <footer className="w-full h-10 bg-pri shadow-[0px_-8px_12px_0px_#0004] flex flex-row justify-center fixed bottom-0">
      <article className="absolute bottom-2">
        <Link href="/swipe">
          <IconButton
            style={{ border: "2px solid #046266", background: "#ffffff" }}
            className="w-16 h-16 bg-sec rounded-full grid place-content-center duration-150">
            <Image loading={"eager"} alt="G" src="/huntek/logo/G.svg" width={35} height={35} />
          </IconButton>
        </Link>
      </article>
    </footer>
  );
};
export default Footbar;
