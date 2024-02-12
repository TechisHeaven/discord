import Image from "next/image";
import React from "react";
import RegisterContainer from "@/components/RegisterContainer/RegisterContainer";

export default function Register() {
  return (
    <div className="select-none grid place-items-center relative h-screen overflow-y-hidden">
      <Image
        width={2000}
        height={900}
        loading="eager"
        alt="background-image"
        src={"/1291249.png"}
        className="w-screen h-screen object-cover object-top -z-10 absolute "
        draggable="false"
      />
      <RegisterContainer />
    </div>
  );
}
