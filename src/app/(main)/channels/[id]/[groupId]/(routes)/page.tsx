import ChatArea from "@/components/ChatArea/ChatArea";
import Header from "@/components/Header/Header";
import ToggleBtnSideBar from "@/components/ToggleBtn/ToggleBtn";
import ToolTipCustom from "@/components/ToolTipCustom/ToolTipCustom";
import { Hash, Users } from "lucide-react";
import Image from "next/image";

export default function Channels() {
  return (
    <div className="w-full">
      <Header>
        <div className="flex flex-row items-center justify-between px-4 pl-0">
          <div className="flex items-center flex-row gap-2 text-white">
            <Hash className="text-gray-500" />
            <p>general</p>
          </div>
          <ToggleBtnSideBar />
        </div>
      </Header>
      <div className="flex w-full">
        <ChatArea
          title="general"
          description="This is the start of the #"
          isProfile={false}
          isAdmin={true}
        />
        <div className="max-w-[260px] w-full bg-darkSecondaryColor2 p-4">
          <h5 className="uppercase text-xs text-gray-400 px-4 font-semibold">
            Online - 1
          </h5>
          <div className="flex items-center cursor-pointer select-none gap-4 text-gray-400 p-2 px-4 w-full hover:bg-darkSecondaryColorHover transition-colors rounded-sm">
            <Image
              src={"/profile.jpg"}
              alt="profile-image"
              width={30}
              height={30}
              className="rounded-full object-cover"
            ></Image>
            <h1 className="overflow-x-hidden truncate">
              Baba Vermanath username
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
