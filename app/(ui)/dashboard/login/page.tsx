import { LuMail } from "react-icons/lu";
import { TbLockPassword } from "react-icons/tb";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

const Login = () => {
  return (
    <div className="login-container h-full bg-transparent flex justify-center items-center p-3 sm:p-0">
      <div className="login-wrap w-full max-w-lg bg-white/50 p-6 rounded-lg shadow-md backdrop-sepia-0">
        <h2 className="text-2xl font-semibold leading-none text-gray-500 mb-7">
          Sign In
        </h2>
        <form className="space-y-4 max-w-2xs w-full m-auto pb-15 pt-7">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <div className="relative">
              <LuMail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-dark-blue-ems" />
              <input
                id="email"
                type="email"
                className="border border-gray-400 pr-3 pl-9 py-2 rounded-3xl w-full"
                placeholder="abc@example"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <TbLockPassword className="absolute top-1/2 left-3 transform -translate-y-1/2 text-dark-blue-ems" />
              <input
                id="password"
                type="password"
                className="border border-gray-400 pr-3 pl-9 py-2 rounded-3xl w-full"
                placeholder="••••••••••••••"
              />
            </div>
          </div>
          <div className="social-login">
            <Link
              href="#"
              className="flex items-center hover:bg-gray-400 transition-colors"
            >
              <FaGoogle className="text-red-500 mr-2" />
              <span className="text-gray-700">Sign in with Google</span>
            </Link>
          </div>
          <div className="flex items-center justify-between mt-5">
            <div>
              <Link
                href="#"
                className="text-sm text-dark-blue-ems hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <div>
              <Link href="/dashboard">
                <button
                  type="submit"
                  className="bg-dark-blue-ems cursor-pointer text-white px-6 py-2 rounded-3xl hover:bg-medium-blue-ems transition-colors float-right"
                >
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
