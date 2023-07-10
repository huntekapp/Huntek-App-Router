"use client";
import Image from "next/image";
import NavBar from "./navbar";
import SendIcon from "@mui/icons-material/Send";
import {IconButton} from "@mui/material";

const Chats = () => {
  return (
    <div className="flex flex-col h-screen antialiased text-gray-800">
      <NavBar />
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <div className="flex flex-col  px-5 w-36 xs:w-44 sm:w-56 sm:px-4 bg-sec flex-shrink-0">
          <div className="flex flex-col truncate items-center bg-pri-300 border border-gray-200 mt-4 w-full py-4 px-4 xs:px-2 sm:py-6 sm:px-4 rounded-lg">
            <div className="h-12 w-12 xs:h-14 xs:w-14 sm:h-16 sm:w-16 rounded-full border overflow-hidden">
              <Image
                src="/images/pexels-monstera-5384445.jpg"
                alt="Avatar"
                width={64}
                height={50}
                quality={100}
                style={{objectFit: "cover"}}
                className="h-12 xs:h-14 xs:w-14 sm:h-16 sm:w-16"
              />
            </div>
            <div className="text-[0.65rem] xs:text-sm truncate font-semibold mt-2">Agustin Cabral</div>
            <div className="text-[0.55rem] xs:text-xs text-gray-500">NACHI analyst</div>
            <div className="flex flex-row items-center mt-3">
              <div className="flex flex-col justify-center h-4 w-6 xs:h-4 xs:w-8 bg-green-500 rounded-full">
                <div className="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
              </div>
              <div className="leading-none ml-1 text-[0.65rem]">Active</div>
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <div className="flex flex-row items-center justify-between text-xs">
              <span className="font-bold">Active Conversations</span>
              <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">4</span>
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2 h-[21rem] sm:h-[20rem] overflow-y-auto ">
              <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                <div className="flex items-center xs:text-sm text-xs justify-center xs:h-8 xs:w-8 h-4 w-4 bg-indigo-200 rounded-full">
                  H
                </div>
                <div className="ml-2 xs:text-sm text-xs font-semibold">Henry Boyd</div>
              </button>
              <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                <div className="flex items-center xs:text-sm text-xs justify-center xs:h-8 xs:w-8 h-4 w-4 bg-gray-200 rounded-full">
                  M
                </div>
                <div className="ml-2 xs:text-sm text-xs font-semibold">Marta Curtis</div>
                <div className="flex items-center justify-center ml-auto xs:text-sm text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
                  2
                </div>
              </button>
              <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                <div className="flex items-center xs:text-sm text-xs justify-center xs:h-8 xs:w-8 h-4 w-4 bg-orange-200 rounded-full">
                  P
                </div>
                <div className="ml-2 xs:text-sm text-xs font-semibold">Philip Tucker</div>
              </button>
              <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                <div className="flex items-center xs:text-sm text-xs justify-center xs:h-8 xs:w-8 h-4 w-4 bg-pink-200 rounded-full">
                  C
                </div>
                <div className="ml-2 xs:text-sm text-xs font-semibold">Christine Reid</div>
              </button>
              <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                <div className="flex items-center xs:text-sm text-xs justify-center xs:h-8 xs:w-8 h-4 w-4 bg-purple-200 rounded-full">
                  J
                </div>
                <div className="ml-2 xs:text-sm text-xs font-semibold">Jerry Guzman</div>
              </button>
              <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                <div className="flex items-center xs:text-sm text-xs justify-center xs:h-8 xs:w-8 h-4 w-4 bg-purple-200 rounded-full">
                  J
                </div>
                <div className="ml-2 xs:text-sm text-xs font-semibold">Jerry Guzman</div>
              </button>
              <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                <div className="flex items-center xs:text-sm text-xs justify-center xs:h-8 xs:w-8 h-4 w-4 bg-purple-200 rounded-full">
                  J
                </div>
                <div className="ml-2 xs:text-sm text-xs font-semibold">Jerry Guzman</div>
              </button>
              <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                <div className="flex items-center xs:text-sm text-xs justify-center xs:h-8 xs:w-8 h-4 w-4 bg-purple-200 rounded-full">
                  J
                </div>
                <div className="ml-2 xs:text-sm text-xs font-semibold">Jerry Guzman</div>
              </button>
              <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                <div className="flex items-center xs:text-sm text-xs justify-center xs:h-8 xs:w-8 h-4 w-4 bg-purple-200 rounded-full">
                  J
                </div>
                <div className="ml-2 xs:text-sm text-xs font-semibold">Jerry Guzman</div>
              </button>
            </div>
          </div>
          <div>
            <button className="btn mt-5 btn-error">Delete chat</button>
          </div>
        </div>
        <div className="flex flex-col flex-auto bg-pri-200 h-full py-4 px-3 sm:py-6 sm:px-5">
          <div className="flex flex-col px-1 flex-auto flex-shrink-0 rounded-2xl bg-white h-full ">
            <div className="flex flex-col h-full overflow-x-auto mb-4">
              <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-y-2">
                  <div className="col-start-1 col-end-8 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pri  flex-shrink-0">
                        A
                      </div>
                      <div className="relative flex   ml-3 text-sm bg-white p-3  shadow rounded-xl">
                        <div className=" flex-grow min-w-[110px] ">Hey How are you today?</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-start-6 col-end-13 p-3 rounded-lg">
                    <div className="flex items-center justify-start flex-row-reverse">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 flex-shrink-0">
                        A
                      </div>
                      <div className="relative flex mr-3 text-sm bg-indigo-100 p-3 shadow rounded-xl">
                        <div className=" flex-grow min-w-[110px] ">I'm ok what about you?</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
              <div>
                <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                  </svg>
                </button>
              </div>
              <div className="flex-grow ml-4">
                <div className="relative w-full">
                  <input
                    type="text"
                    className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                  />
                  <button className="absolute  flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                    <svg
                      className="w-6 hidden sm:flex h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="ml-4">
                <div className="flex items-center justify-center  rounded-xl text-white    sm:px-2 sm:py-2  flex-shrink-0">
                  <IconButton>
                    <SendIcon style={{color: "#046255"}} />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chats;
