"use client";
import Image from "next/image";
import {useState} from "react";

const SignForm = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    event.preventDefault();
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //dispatch(postRegister(input))
    setInput({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <main className="w-full h-screen bg-hk p-4 flex flex-col items-center justify-center sm:px-4">
      <div className="w-full space-y-6 text-white sm:max-w-md">
        <div className="p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">
          <a href="/login">
            <Image src="/utils/back.svg" width={20} height={20} alt="" />
          </a>
          <h1 className="text-4xl">Sign Up</h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-medium">First Name</label>
              <input
                type="text"
                placeholder="Your First Name"
                value={input.firstName}
                name="firstName"
                onChange={handleChange}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent border-b"
              />
            </div>
            <div>
              <label className="font-medium">Last Name</label>
              <input
                type="text"
                placeholder="Your Last Name"
                value={input.lastName}
                name="lastName"
                onChange={handleChange}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-b"
              />
            </div>
            <div>
              <label className="font-medium">E-mail</label>
              <input
                type="email"
                placeholder="✉️ Your Email"
                value={input.email}
                name="email"
                onChange={handleChange}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-b "
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                placeholder="🔒 Your Password"
                value={input.password}
                name="password"
                onChange={handleChange}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-b"
              />
            </div>
            <div>
              <p className="text-gray-400">
                By signing up you agree to our{" "}
                <a href="/terms_conditins" className="text-white hover:underline">
                  Terms & Condition and Privacy Policy.
                </a>
              </p>
            </div>
            <button className="w-full px-4 py-2 text-hk font-medium bg-white hover:bg-gray-300 active:bg-indigo-600 rounded-lg duration-150">
              Continue
            </button>
          </form>
        </div>
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <p>
              Already signed up?{" "}
              <a href="/login" className="font-medium text-white hover:underline">
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default SignForm;
