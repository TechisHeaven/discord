"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/actions/auth/action";
import showToast from "../Toast/showToast";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { LoginFormSchema } from "@/lib/loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";

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
  const router = useRouter();

  //react state
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });
  type Inputs = z.infer<typeof LoginFormSchema>;
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(LoginFormSchema),
  });

  // console.log(watch("email"));
  const handleLogin = async (e: any) => {
    const { email, password } = FormData;
    //* learn swr
    // const { data } = useSWR("/api/auth/login", fetcher);

    let result = await loginUser({ email, password });

    // showToast({
    //   variant: "promise",
    //   title: "Login successful!",
    //   myPromise: Promise.resolve(data),
    // });
    if (result.status !== 200) {
      setError("email", {
        type: "manual",
        message: result.message,
      });
      setError("password", {
        type: "manual",
        message: result.message,
      });
    }

    if (result.status === 200) router.push("/channels/me");
  };

  function handleFormData(event: any) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  function later(delay: number) {
    return new Promise(function (resolve) {
      setTimeout(resolve, delay);
    });
  }

  return (
    <motion.div
      {...anim(opacity)}
      className="container bg-gray-700 max-w-[500px] shadow-lg p-6 rounded-md"
    >
      <div className="heading text-center">
        <h1 className="text-white text-2xl font-semibold">Welcome back!</h1>
        <p className="text-gray-400">We're so excited to see you again!</p>
      </div>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col gap-4 py-4"
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="uppercase text-xs font-bold text-gray-300"
          >
            email or phone number <span className="text-red-500">*</span>{" "}
            {errors.email?.message && (
              <span className="error italic text-xs capitalize font-normal text-red-500">
                - {errors.email.message}.
              </span>
            )}
          </label>
          <input
            {...register("email")}
            onChange={handleFormData}
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
            {errors.password?.message && (
              <span className="error italic text-xs capitalize font-normal text-red-500">
                - {errors.password.message}.
              </span>
            )}
          </label>
          <input
            {...register("password")}
            onChange={handleFormData}
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
            type="submit"
            style={{ background: "hsl(235 calc(1 * 85.6%) 64.7% / 1)" }}
            className="px-4 py-2 min-h-10 h-full text-white font-semibold rounded-sm  w-full"
          >
            {isSubmitting ? <Loading /> : "Log In"}
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

export const Loading = () => {
  return (
    <div className="flex space-x-2 justify-center items-center">
      <span className="sr-only">Loading...</span>
      <div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-2 w-2 bg-white rounded-full animate-bounce"></div>
    </div>
  );
};
