"use client";
import Image from "next/image";
import {useState} from "react";

const LogForm = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    //dispatch(postLogin(input))
    setInput({
      email: "",
      password: "",
      rememberMe: false,
    });
  };
  const handleChange = (event) => {
    event.preventDefault();
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };
  const handleCheck = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <main className="w-full px-4 mb-2 flex flex-col items-center justify-center sm:px-4">
      <div className="w-full space-y-6 text-white sm:max-w-md">
        <div className="p-4 py-6 space-y-9 sm:p-6 sm:rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-medium">E-mail</label>
              <input
                type="email"
                placeholder="✉️ Your Email"
                value={input.email}
                onChange={handleChange}
                name="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-b "
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                placeholder="🔒 Your Password"
                onChange={handleChange}
                value={input.password}
                name="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-b"
              />
            </div>
            <div className="flex flex-row justify-between">
              <label htmlFor="remember">
                <input
                  type="checkbox"
                  name="rememberMe"
                  onChange={handleCheck}
                  checked={input.rememberMe}
                  className="mr-2"
                />
                Remember Me
              </label>
              <a href="/forgot" className="hover:underline">
                Forgot password?
              </a>
            </div>
            <button className="w-full px-4 py-2 text-hk font-medium bg-white hover:bg-gray-300 active:bg-indigo-600 rounded-lg duration-150">
              Log In
            </button>
          </form>
          <div className="relative">
            <span className="block w-full h-px bg-gray-300">
              <p className="inline-block w-fit text-sm bg-hk  px-2 absolute text-white -top-2 inset-x-0 mx-auto">
                Or continue with
              </p>
            </span>
          </div>
          <div className="grid grid-cols-3 gap-x-3">
            <button className="flex items-center justify-center bg-white py-2.5 border rounded-lg hover:bg-gray-300 duration-150 active:bg-gray-100">
              <Image src="/social/google.svg" width={25} height={25} alt="" />
            </button>
            <button className="flex items-center justify-center bg-white py-2.5 border rounded-lg hover:bg-gray-300 duration-150 active:bg-gray-100">
              <Image src="/social/facebook.svg" width={25} height={25} alt="" />
            </button>
            <button className="flex items-center justify-center bg-white py-2.5 border rounded-lg hover:bg-gray-300 duration-150 active:bg-gray-100">
              <Image src="/social/linkedin.svg" width={25} height={25} alt="" />
            </button>
          </div>
        </div>
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <p className="">
              Don't have an account?{" "}
              <a href="/signup" className="font-medium text-white hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LogForm;
