import { PlusCircle, Smile } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import Image from "next/image";

export default function ChatArea() {
  return (
    <div className="p-4 bg-darkSecondaryColor4 ">
      <div className=" w-full p-4 flex h-[calc(100vh-128px)] justify-end flex-col overflow-y-auto">
        <div className="flex flex-col gap-2 my-2">
          <Image
            src={"/profile.jpg"}
            alt="user-profile-image"
            width={80}
            height={80}
            loading="eager"
            draggable="false"
            className="aspect-square object-contain rounded-full bg-gray-400"
          />
          <h1 className="text-2xl text-white font-semibold">Baba vermanath</h1>
          <h1 className="text-lg text-gray-200 font-semibold">Baba username</h1>
          <p className="text-sm text-gray-300">
            This is the begining of your direct message history with
            <span className="font-semibold">Baba vermanath</span>
          </p>
          <div className="flex items-center flex-row gap-8 text-gray-300 my-2">
            <p className="text-xs">No server is common</p>
            <div className="flex items-center flex-row gap-2">
              <button className="bg-MainPrimaryColor px-4 p-1 text-gray-300 rounded-sm text-sm">
                Send Friend Request
              </button>
              <button className="bg-darkSecondaryColorHover hover:bg-darkSecondaryColor transition-colors px-4 p-1 text-gray-300 rounded-sm text-sm">
                Block
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="inputBox px-4 p-3 bg-darkSecondaryColor2 rounded-md flex flex-row items-center gap-4">
        <PlusCircle className="text-gray-400" />
        <input
          type="text"
          placeholder="Message @Baba vermanath"
          className="bg-transparent  w-full outline-none placeholder:text-gray-500 text-gray-300"
        />
        <Smile className="text-gray-400" />
      </div>
    </div>
  );
}
