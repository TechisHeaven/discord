"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { DOBContainer } from "./DOBContainer";
import { RegisterFromSchema } from "@/lib/authFormSchema";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loading } from "../LoginContainer/LoginContainer";
import { useState } from "react";
import { RegisterUser } from "@/actions/auth/action";
import { useRouter } from "next/navigation";

export default function RegisterContainer() {
  const router = useRouter();
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
  const [dob, setDob] = useState({
    day: "",
    month: "",
    year: "",
  });

  type Inputs = z.infer<typeof RegisterFromSchema>;
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(RegisterFromSchema),
  });

  const onSubmitForm: SubmitHandler<Inputs> = async (data) => {
    //custom useFormError
    if (!dob.day || !dob.month || !dob.year) {
      setError("dob", {
        type: "custom",
        message: "Please Select Correct Date of Birth",
      });
      return;
    }

    const formattedDate = `${dob.day}-${dob.month}-${dob.year}`;

    const updatedData = {
      ...data,
      dob: formattedDate,
    };
    //working on server action call
    try {
      let result = await RegisterUser(updatedData);

      if (result.status !== 200) {
        const errorMessage =
          typeof result === "object" &&
          result !== null &&
          "message" in result &&
          typeof result.message === "string"
            ? result.message
            : "An unknown error occurred";
        setError("email", {
          type: "manual",
          message: errorMessage,
        });
        setError("username", {
          type: "manual",
          message: errorMessage,
        });
      }
      if (result.status === 200) router.push("/channels/me");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      {...anim(opacity)}
      className="container bg-gray-700 max-w-[500px] shadow-lg p-6 rounded-md"
    >
      <div className="heading text-center">
        <h1 className="text-white text-2xl font-semibold">Create an account</h1>
      </div>
      <form
        className="flex flex-col gap-4 py-4"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div className="flex flex-col gap-2 relative">
          <label
            htmlFor="email"
            className="uppercase text-xs font-bold text-gray-300 flex gap-1"
          >
            email <span className="text-red-500">*</span>
            {errors.email && (
              <p className="text-[10px] text-red-500 ">
                - {errors.email?.message}
              </p>
            )}
          </label>
          <input
            {...register("email")}
            type="text"
            id="email"
            name="email"
            className="bg-gray-800 p-2 text-white outline-none rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="uppercase text-xs font-bold text-gray-300 flex items-center gap-1"
          >
            name <span className="text-red-500">*</span>{" "}
            {errors.name && (
              <p className="text-[10px] text-red-500 ">
                - {errors.name?.message}
              </p>
            )}
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            name="name"
            className="bg-gray-800 p-2 text-white outline-none rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="username"
            className="uppercase text-xs font-bold text-gray-300  flex items-center gap-1"
          >
            username <span className="text-red-500">*</span>{" "}
            {errors.username && (
              <p className="text-[10px] text-red-500 ">
                - {errors.username?.message}
              </p>
            )}
          </label>
          <input
            {...register("username")}
            type="text"
            id="username"
            name="username"
            className="bg-gray-800 p-2 text-white outline-none rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="uppercase text-xs font-bold text-gray-300  flex items-center gap-1"
          >
            Password <span className="text-red-500">*</span>{" "}
            {errors.password && (
              <p className="text-[10px] text-red-500 ">
                - {errors.password?.message}
              </p>
            )}
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            name="password"
            className="bg-gray-800 p-2 text-white outline-none rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="dob"
            className="uppercase text-xs font-bold text-gray-300  flex items-center gap-1"
          >
            Date of birth <span className="text-red-500">*</span>
            {errors.dob && (
              <p className="text-[10px] text-red-500 ">
                - {errors.dob?.message}
              </p>
            )}
          </label>
          <DOBContainer setDob={setDob} dob={dob} />
        </div>
        <div>
          <button
            type="submit"
            className="px-4 py-2  min-h-10 h-full text-white bg-MainPrimaryColor font-semibold rounded-sm  w-full"
          >
            {isSubmitting ? <Loading /> : "Continue"}
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
