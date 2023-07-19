"use client";
import Link from "next/link";
import Image from "next/image";
import Profile from "./profile";
import {useState} from "react";
import ForumIcon from "@mui/icons-material/Forum";
import {usePathname} from "next/navigation";
import Notification from "./notification";

const NavBar = () => {
  let currentPath = usePathname();
  const [close, setClose] = useState(false);
  const [closeNotif, setCloseNotif] = useState(false);
  const backArrowPaths = [
    "/interviews",
    "/profileExtend",
    "/swipe",
    "/conversations",
    "/postulations",
    /postulations\/.*/,
  ];
  const conversationButtonPaths = ["/swipe", "/home", "/postulations", /postulations\/.*/];
  const handleClick = () => {
    setClose(!close);
  };

  return (
    <nav className="navbar h-[10%] shadow-xl bg-pri">
      <article className="navbar-start">
        {!backArrowPaths.some((path) => (path instanceof RegExp ? path.test(currentPath) : path === currentPath)) ? (
          <div className="drawer">
            <input type="checkbox" id="my-drawer-2" className="drawer-toggle" onClick={handleClick} />
            <label htmlFor="my-drawer-2" className=" drawer-button  avatar">
              <div className="w-10 rounded-full  shadow-xl ">
                <Image
                  alt="avatar"
                  src="/images/pexels-monstera-5384445.jpg"
                  width={100}
                  height={100}
                  quality={100}
                  className="w-5 h-5 cursor-pointer"
                />
              </div>
            </label>
            <div className="drawer-side z-40">
              <label htmlFor="my-drawer-2" className=" z-40"></label>
              <ul className=" z-40  w-full h-screen bg-sec ">
                <li>
                  <Profile />
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link href="/home">
            <button className="btn btn-ghost z-0 btn-circle">
              <div className="indicator">
                <Image src="/utils/back.svg" alt="backArrow" width={25} height={25} />
              </div>
            </button>
          </Link>
        )}
      </article>
      <article className="w-1/4 h-8 bg-Huntek bg-contain bg-no-repeat bg-center flex flex-row justify-center navbar-center">
        <Link href={"/home"} className="w-full max-w-[120px] h-full"></Link>
      </article>
      <article className="navbar-end">
        {close ? (
          <button
            onClick={() => {
              document.getElementById("my-drawer-2").click();
              setClose(!close);
            }}
            className="btn z-50 btn-ghost btn-circle ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 z-50 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#046255">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        ) : (
          <div className="flex justify-end items-center">
            {conversationButtonPaths.some((path) =>
              path instanceof RegExp ? path.test(currentPath) : path === currentPath
            ) ? (
              <button className="btn btn-ghost z-0 btn-circle">
                <a href="/conversations">
                  <ForumIcon style={{fontSize: "24px", color: "white"}} />
                </a>
              </button>
            ) : (
              ""
            )}
            <div className="drawer drawer-end">
              <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="drawer-button ">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 cursor-pointer mx-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#ffffff">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </label>
              </div>
              <div className="drawer-side z-50">
                <label htmlFor="my-drawer-4" className="z-50"></label>
                <ul className="z-50 bg-sec min-w-full min-h-full">
                  <li>
                    <Notification closeNotif={closeNotif} setCloseNotif={setCloseNotif} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </article>
    </nav>
  );
};

export default NavBar;
