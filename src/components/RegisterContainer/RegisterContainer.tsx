"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { DOBContainer } from "./DOBContainer";

export default function RegisterContainer() {
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
        <h1 className="text-white text-2xl font-semibold">Create an account</h1>
      </div>
      <form className="flex flex-col gap-4 py-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="uppercase text-xs font-bold text-gray-300"
          >
            email <span className="text-red-500">*</span>
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
            htmlFor="username"
            className="uppercase text-xs font-bold text-gray-300"
          >
            username <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="username"
            name="username"
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
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="dob"
            className="uppercase text-xs font-bold text-gray-300"
          >
            Date of birth <span className="text-red-500">*</span>
          </label>
          <DOBContainer />
        </div>
        <div>
          <button
            style={{ background: "hsl(235 calc(1 * 85.6%) 64.7% / 1)" }}
            className="px-4 py-2 text-white font-semibold rounded-sm  w-full"
          >
            Continue
          </button>
          <p className="text-xs py-2 text-gray-400">
            By registering , you agree to Discords Terms of Service and Privacy
            Policy
          </p>
          <p className="text-sm capitalize pt-1 text-gray-400">
            <Link
              href={"/login"}
              className=" text-blue-600 font-semibold hover:underline cursor-pointer"
            >
              Already have an account?
            </Link>{" "}
          </p>
        </div>
      </form>
    </motion.div>
  );
}
