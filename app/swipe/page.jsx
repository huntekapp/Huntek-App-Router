"use client";
import NavBar from "../components/navbar";
import React, {useState, useEffect} from "react";
import dynamic from "next/dynamic";

const Swipe = dynamic(() => import("../components/swipe"), {ssr: false});

const SwipePage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <main className="h-screen bg-black flex flex-col justify-between items-center">
      <NavBar />
      {isClient && <Swipe />}
    </main>
  );
};
export default SwipePage;
