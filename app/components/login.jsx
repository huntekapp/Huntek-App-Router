import Image from "next/image";

const LogForm = () => {
  return (
    <main className="w-full px-4 mb-2 flex flex-col items-center justify-center sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="p-4 py-6 space-y-9 sm:p-6 sm:rounded-lg">
          <form className="space-y-5">
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
            <div className="flex flex-row justify-between">
              <label htmlFor="remember">
                <input type="checkbox" name="rember" className="mr-2" />
                Remember Me
              </label>
              <a href="javascript:void(0)" className="hover:text-indigo-600">
                Forgot password?
              </a>
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-hk hover:bg-hkligth active:bg-indigo-600 rounded-lg duration-150">
              Log In
            </button>
          </form>
          <div className="relative">
            <span className="block w-full h-px bg-gray-300"></span>
            <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
              Or continue with
            </p>
          </div>
          <div className="grid grid-cols-3 gap-x-3">
            <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
              <Image src="/social/google.svg" width={25} height={25} />
            </button>
            <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
              <Image src="/social/facebook.svg" width={25} height={25} />
            </button>
            <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
              <Image src="/social/linkedin.svg" width={25} height={25} />
            </button>
          </div>
        </div>
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <p className="">
              Don't have an account?{" "}
              <a href="/signup" className="font-medium text-hk hover:text-hkligth">
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
