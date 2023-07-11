"use client";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import {usePostLoginMutation} from "../globalstore/services/useLogin";
import {useRouter} from "next/navigation";

const LogForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [check, setCheck] = useState(false);
  const [postLogin, {isLoading}] = usePostLoginMutation();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await postLogin(input).unwrap();
      alert("success");
    } catch (error) {
      alert(error);
    }
    setInput({
      email: "",
      password: "",
    });
    router.push("/profileExtend");
  };

  const handleChange = (event) => {
    event.preventDefault();
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheck = (event) => {
    setCheck(!check);
    setInput({
      ...input,
      [event.target.name]: event.target.checked,
    });
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <section className="w-11/12 max-w-md h-3/4 lg:h-2/5 font-medium text-sec flex flex-col justify-around items-center">
      <form onSubmit={handleSubmit} className="w-full h-2/3 lg:h-full flex flex-col justify-around">
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            name="email"
            value={input.email}
            className="w-full px-3 pb-2 bg-transparent outline-none border-b"
            placeholder="Your Email"
            onChange={handleChange}
            required
          />
        </label>
        <article>
          <label htmlFor="password">
            Password
            <div className="relative">
              {showPassword ? (
                <input
                  type="text"
                  name="password"
                  value={input.password}
                  className="w-full px-3 pb-2 bg-transparent outline-none border-b"
                  placeholder="Your Password"
                  onChange={handleChange}
                  required
                />
              ) : (
                <input
                  type="password"
                  name="password"
                  value={input.password}
                  className="w-full px-3 pb-2 bg-transparent outline-none border-b"
                  placeholder="Your Password"
                  onChange={handleChange}
                  required
                />
              )}
              <button onClick={handleShowPassword} className="absolute inset-y-0 end-0 grid place-content-center px-4">
                {showPassword ? (
                  <Image src={"/utils/blink.svg"} width={20} height={20} alt="blink" unoptimized={true} />
                ) : (
                  <Image src={"/utils/notblink.svg"} width={20} height={20} alt="notblink" />
                )}
              </button>
            </div>
          </label>
          <div className="m-2 flex flex-row justify-between">
            <div className="flex flex-row">
              {check ? (
                <Image src={"/utils/checked.svg"} width={15} height={15} className="me-2" onClick={handleCheck} />
              ) : (
                <Image src={"/utils/unchecked.svg"} width={15} height={15} className="me-2" onClick={handleCheck} />
              )}
              Remember Me
            </div>
            <Link href="/verifymail" className="hover:underline">
              Forgot password?
            </Link>
          </div>
        </article>
        <button className="w-full py-2 text-pri bg-sec hover:bg-gray-300 active:bg-lig rounded-lg duration-150">
          Log In
        </button>
      </form>
      <div className="w-full h-px mb-6 relative bg-gray-300">
        <p className="w-fit mx-auto px-2 text-sm text-sec bg-pri absolute -top-2 left-0 right-0">Or continue with</p>
      </div>
      <article className="w-full grid grid-cols-3 gap-x-3">
        <button className="flex items-center justify-center bg-sec py-2.5 border rounded-lg hover:bg-gray-300 duration-150 active:bg-lig">
          <Image src="/social/google.svg" width={25} height={25} alt="google" />
        </button>
        <button className="flex items-center justify-center bg-sec py-2.5 border rounded-lg hover:bg-gray-300 duration-150 active:bg-lig">
          <Image src="/social/facebook.svg" width={25} height={25} alt="facebook" />
        </button>
        <button className="flex items-center justify-center bg-sec py-2.5 border rounded-lg hover:bg-gray-300 duration-150 active:bg-lig">
          <Image src="/social/linkedin.svg" width={25} height={25} alt="linkedin" />
        </button>
      </article>
      <article className="text-center my-5">
        <p className="">
          Don't have an account?{" "}
          <Link href="/signup" className="hover:underline">
            Sign up
          </Link>
        </p>
      </article>
    </section>
  );
};

export default LogForm;
