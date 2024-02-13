import Header from "@/components/Header/Header";
import Image from "next/image";

export default async function Me() {
  return (
    <div className="bg-gray-600 w-full">
      <Header />
      <div className="p-5 flex flex-col gap-2">
        <h1 className="uppercase text-lg text-white font-semibold">
          Add Friend
        </h1>
        <p className="text-gray-300 text-xs capitalize">
          you can add friends with their Discord username
        </p>
        <div className="bg-gray-800 outline-1 hover:outline-blue-400 flex items-center rounded-md pl-2  flex-row relative">
          <input
            className="text-white bg-transparent text-base w-full outline-none p-2 rounded-md "
            type="text"
            placeholder="You Can Add Friends With Their Discord Username"
          />
          <button
            style={{ background: "hsl(235 calc(1 * 85.6%) 64.7% / 1)" }}
            className="capitalize text-sm max-w-[180px] w-full px-4 py-2 text-white font-semibold rounded-sm m-2 disabled:cursor-not-allowed"
            disabled
          >
            send friend request
          </button>
        </div>
        <hr />
        <div className="text-center text-gray-300 my-10 flex items-center flex-col">
          <Image
            src="/bca918618b884a382ab5.svg"
            alt="wumpsu"
            width={400}
            height={400}
          ></Image>
          <p className="text-gray-400 mt-6">
            Wumpsu is waiting on friends. You dont have to through!
          </p>
        </div>
      </div>
    </div>
  );
}
