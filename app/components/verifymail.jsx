"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const VerifyMail = () => {
  const inputRefs = useRef([])
  const [userCode, setUserCode] = useState({ 0: "", 1: "", 2: "", 3: "", 4: "", 5: "" })
  
  const handleUserCode = (event, index) => {
    if (/^[0-9]+$/.test(event.target.value)) {
      if (event.keyCode != 8) {
        setUserCode({
          ...userCode,
          [index]: event.target.value
        })
      } else if (event.keyCode === 8 && input.value === "") {
        setUserCode({
          ...userCode,
          [index]: ""
        })
      }
    } else {
      event.target.value = ""
    }
  }

  const handleKeyUp = (event, index) => {
    const input = inputRefs.current[index]

    if (event.keyCode === 8 && input.value === "") { // Checks backspace
      if (index > 0) { // Not apply in the first input
        inputRefs.current[index - 1].focus()
      }
    } else if (input.value.length === input.maxLength) {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus()
      }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let userNumber = Object.values(userCode).join("")
    console.log(userNumber)
  }

	return (
		<main className="w-full p-4 flex flex-col items-center justify-center sm:px-4">
			<div className="w-full space-y-6 text-gray-600 sm:max-w-md">
				<div className="p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">
					<Link href="/signup">
						<Image src="/utils/back.svg" width={20} height={20} alt="backArrow" />
					</Link>
					<h1 className="text-4xl">Check your Mail</h1>
					<form onSubmit={handleSubmit} className="space-y-5">
						<div>
							<p className="text-black">
								We've sent a 6-digit confirmation code to
								<span className="font-semibold mx-1">user@email.com.</span>
								Make sure you enter the correct code.
							</p>
						</div>
						<div className="flex flex-row justify-center">
							{[0, 1, 2, 3, 4, 5].map((index) => (
								<input
									key={index}
                  type="text"
                  inputMode="numeric"
									required
									maxLength="1"
                  autoFocus
                  ref={ref => (inputRefs.current[index] = ref)}
                  onKeyUp={event => handleKeyUp(event, index)}
                  onChange={event => handleUserCode(event, index)}
									className="w-11 h-14 mt-2 mx-3 px-3 py-2 text-gray-500 bg-[#cdced141] outline-none border focus:border-hk focus:border-1 shadow-sm rounded-md text-center text-lg"
								/>
							))}
						</div>
						<div className="text-center">
							<div className="mt-5 space-y-2">
								<p className="text-sm">
									Didn't recieve code?{" "}
									<a href="/login" className="font-medium text-hk hover:text-hkligth">
										Resend Code
									</a>
								</p>
							</div>
						</div>
						<button className="w-full px-4 py-2 text-white font-medium bg-hk hover:bg-hkligth active:bg-indigo-600 rounded-lg duration-150">
							Verify
						</button>
					</form>
				</div>
			</div>
		</main>
	);
};
export default VerifyMail;
