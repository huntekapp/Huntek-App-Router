"use client";
import Image from "next/image";
import Link from "next/link";
import {useRef, useState} from "react";
import {usePostVerifMutation} from "../globalstore/services/useVerifCode";
import {useRouter} from "next/navigation";
import {useSelector} from "react-redux";
import { usePutResendCodeMutation } from "../globalstore/services/useResendCode";

const VerifyMail = () => {
  const email = useSelector((state) => state.email);
  const router = useRouter();
  const [postVerif, { isLoading, isError }] = usePostVerifMutation();
  const [putResendCode] = usePutResendCodeMutation();
  const inputRefs = useRef([]);
  const [userCode, setUserCode] = useState({ code: { 0: "", 1: "", 2: "", 3: "", 4: "", 5: "" }, email: `${email}` });

  const handleUserCode = (event, index) => {
    if (/^[0-9]+$/.test(event.target.value)) {
      if (event.keyCode != 8) {
        setUserCode({
          ...userCode,
          code: {
            ...userCode.code,
            [index]: event.target.value,
          },
        });
      } else if (event.keyCode === 8 && input.value === "") {
        setUserCode({
          ...userCode,
          code: {
            ...userCode.code,
            [index]: "",
          },
        });
      }
    } else {
      event.target.value = "";
    }
  };

  const handleKeyUp = (event, index) => {
    const input = inputRefs.current[index];

    if (event.keyCode === 8 && input.value === "") {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    } else if (input.value.length === input.maxLength) {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let userNumber = Object.values(userCode.code).join("");
      const response = await postVerif({email: userCode.email, code: userNumber}).unwrap();
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
    setUserCode({
      code: {0: "", 1: "", 2: "", 3: "", 4: "", 5: ""},
      email: userCode.email,
    });
  };

  const handleSubmitResend = async (event) => {
    event.preventDefault();
    try {
      const response = await putResendCode(email).unwrap();
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="w-11/12 max-w-md min-h-screen font-medium text-sec relative flex flex-col items-center justify-evenly">
      <Link href="/signup" className="absolute top-6 left-6">
        <Image src="/utils/back.svg" width={20} height={20} alt="backArrow" />
      </Link>
      <article className="w-full flex flex-col justify-around items-center">
        <div className="w-40 h-40 bg-HKlogo bg-cover"></div>
        <p className="text-3xl">Check your Mail</p>
        <p className="text-gray-400 text-center mt-2">
          We've sent a 6-digit confirmation code to
          <b>{ ` ${email}` }</b>.<br />
          Make sure you enter the correct code.
        </p>
        {isError && <b>Invalid code</b>}
      </article>
      <form className="w-full h-80 flex flex-col justify-evenly">
        <article>
          <div className="w-full flex flex-row justify-evenly">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength="1"
                className="w-11 h-14 px-3 py-2 text-sec bg-lig outline-none border focus:border-hk focus:border-1 shadow-sm rounded-md text-center text-lg"
                autoFocus
                ref={(ref) => (inputRefs.current[index] = ref)}
                onChange={(event) => handleUserCode(event, index)}
                onKeyUp={(event) => handleKeyUp(event, index)}
                required
              />
            ))}
          </div>
          <p className="mt-4 text-center text-sm">
            Didn't recieve code?{" "}
            <button onClick={handleSubmitResend} className="hover:underline">
              Resend Code
            </button>
          </p>
        </article>
        <button onClick={handleSubmit} className="w-full py-2 text-pri bg-sec hover:bg-gray-300 active:bg-lig rounded-lg duration-150">
          Verify
        </button>
      </form>
    </section>
  );
};
export default VerifyMail;
