import Image from "next/image";

const SignForm = () => {
  return (
    <main className="w-full p-4 flex flex-col items-center justify-center sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">
          <a href="/login">
            <Image src="/utils/back.svg" width={20} height={20} />
          </a>
          <h1 className="text-4xl">Sign Up</h1>
          <form className="space-y-5">
            <div>
              <label className="font-medium">First Name</label>
              <input
                type="text"
                placeholder="Your First Name"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent border-b"
              />
            </div>
            <div>
              <label className="font-medium">Last Name</label>
              <input
                type="text"
                placeholder="Your Last Name"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-b"
              />
            </div>
            <div>
              <label className="font-medium">E-mail</label>
              <input
                type="email"
                placeholder="✉️ Your Email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-b "
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                placeholder="🔒 Your Password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-b"
              />
            </div>
            <div>
              <p className="text-gray-400">
                By signing up you agree to our{" "}
                <a href="/terms_conditins" className="text-hk">
                  Terms & Condition and Privacy Policy.
                </a>
              </p>
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-hk hover:bg-hkligth active:bg-indigo-600 rounded-lg duration-150">
              Continue
            </button>
          </form>
        </div>
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <p className="">
              Already signed up?{" "}
              <a href="/login" className="font-medium text-hk hover:text-hkligth">
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
