"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LoginContainer() {
  // animation function
  const anim = (variants: any) => {
    return {
      initial: "initial",
      animate: "animate",
      exit: "exit",
      variants: variants,
    };
  };
  const opacity = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      {...anim(opacity)}
      className="container bg-gray-700 max-w-[500px] shadow-lg p-6 rounded-md"
    >
      <div className="heading text-center">
        <h1 className="text-white text-2xl font-semibold">Welcome back!</h1>
        <p className="text-gray-400">We're so excited to see you again!</p>
      </div>
      <form className="flex flex-col gap-4 py-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="uppercase text-xs font-bold text-gray-300"
          >
            email or phone number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="bg-gray-800 p-2 text-white outline-none rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="uppercase text-xs font-bold text-gray-300"
          >
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-gray-800 p-2 text-white outline-none rounded-sm"
          />
          <Link
            href={"/forget-password"}
            className="capitalize text-sm text-blue-600 font-semibold hover:underline cursor-pointer"
          >
            forget your password ?
          </Link>
        </div>
        <div>
          <button
            style={{ background: "hsl(235 calc(1 * 85.6%) 64.7% / 1)" }}
            className="px-4 py-2 text-white font-semibold rounded-sm  w-full"
          >
            Log In
          </button>
          <p className="text-sm capitalize pt-1 text-gray-400">
            Need an account ?{" "}
            <Link
              href={"/register"}
              className=" text-blue-600 font-semibold hover:underline cursor-pointer"
            >
              Register
            </Link>{" "}
          </p>
        </div>
      </form>
    </motion.div>
  );
}
