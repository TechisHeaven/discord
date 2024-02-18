"use client";
import { removeSession } from "@/actions/user/handleUser";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useUserStore from "@/store/auth/store";
import { Headphones, LogOut, Mic, Settings } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function ControlBox() {
  const user = useUserStore((state: any) => state.user);
  const removeUser = useUserStore((state: any) => state.clearUser);
  const router = useRouter();
  return (
    <div className="w-full h-14  bg-darkSecondaryColor3 bottom-0  flex py-1 px-[2px]">
      <div className="profileHover  min-w-[120px] w-full hover:bg-darkSecondaryColorHover flex gap-2 items-center  z-10 transition-colors cursor-pointer p-1 rounded-md">
        <Image
          src={"/discord-icon.png"}
          // src={"/profile.jpg"}
          width={20}
          height={20}
          alt="profile-image"
          className=" w-8 h-8 object-contain rounded-2xl"
        />
        <div className="w-full max-w-[60%]">
          <p className="text-white text-sm truncate  overflow-hidden">
            {user?.name}
          </p>
          <p className="text-gray-500 text-xs truncate overflow-hidden">
            {user?.username}
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
          <Popover>
            <PopoverTrigger className="flex items-center">
              <Settings className="w-5 text-gray-200" />
            </PopoverTrigger>
            <PopoverContent align="start" className="p-1">
              <div
                className="flex items-center gap-2 text-red-500 hover:bg-slate-200 transition-colors p-2  cursor-pointer"
                onClick={async () => {
                  await removeSession();
                  removeUser();
                  router.refresh();
                  router.replace("/login");
                }}
              >
                <LogOut />
                Logout
              </div>
            </PopoverContent>
          </Popover>
        </button>
      </div>
    </div>
  );
}
