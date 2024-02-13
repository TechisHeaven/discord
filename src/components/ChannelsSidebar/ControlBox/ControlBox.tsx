import { Headphones, Mic, Settings } from "lucide-react";
import Image from "next/image";
import "./ControlBox.css";

export default function ControlBox() {
  // hsl(228 calc(1 * 6%) 32.5% / 0.6);

  return (
    <div className="absolute bg-darkSecondaryColor3 bottom-0 w-full  flex py-1 px-[2px]">
      <div className="profileHover flex gap-2 items-center  z-10 transition-colors cursor-pointer p-1 rounded-md">
        <Image
          src={"/discord-icon.png"}
          width={20}
          height={20}
          alt="profile-image"
          className="p-[10px] w-8 h-8 object-contain rounded-2xl"
          style={{ background: "hsl(235 calc(1 * 85.6%) 64.7% / 1)" }}
        />
        <div>
          <p className="text-white text-sm truncate max-w-[80%] overflow-hidden">
            Tempmail1user
          </p>
          <p className="text-gray-500 text-xs truncate max-w-[80%] overflow-hidden">
            Tempmail username
          </p>
        </div>
      </div>
      <div className="buttons flex items-center">
        <button className="hover:bg-gray-600 rounded-md p-1">
          <Mic className="w-5 text-gray-200" />
        </button>
        <button className="hover:bg-gray-600 rounded-md p-1">
          <Headphones className="w-5 text-gray-200" />
        </button>
        <button className="hover:bg-gray-600 rounded-md p-1">
          <Settings className="w-5 text-gray-200" />
        </button>
      </div>
    </div>
  );
}
