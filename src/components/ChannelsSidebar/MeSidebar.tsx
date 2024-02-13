"use client";
import { User } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea } from "../ui/scroll-area";
import ContextMenuBox from "../ContextMenuBox/ContextMenuBox";
const ControlBox = dynamic(() => import("./ControlBox/ControlBox"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const FindSearchDialog = dynamic(
  () => import("../FindSearchDialog/FindSearchDiaog"),
  {
    ssr: false,
  }
);
export default function MeSidebar() {
  const url = usePathname();
  //   const isSelectedTab = url.includes("me");
  const isSelectedTab = url.split("/")[2] === "me";

  return (
    <div className="w-[240px] bg-gray-700 h-screen sticky top-0">
      <div className="containerOfSidebar">
        <FindSearchDialog />
        <hr className="bg-gray-500 h-[1px] border-0" />
        <div className="p-2">
          <div
            className={`${
              isSelectedTab && "bg-gray-500 text-white"
            } friendTab flex items-center flex-row p-2 hover:bg-gray-600 transition-colors gap-3 cursor-pointer rounded-sm text-gray-400`}
          >
            <User />
            <h1>Friends</h1>
          </div>
          <p className="uppercase text-xs text-gray-400 my-2 mt-4">
            Direct Messages
          </p>
          <div className="messages">
            <ScrollArea className="h-[calc(100vh-200px)]">
              {Array.from({ length: 10 }, (_, i) => {
                return (
                  <ContextMenuBox key={i} id={i}>
                    <Link
                      key={i}
                      href={"/channels/me/userid"}
                      className="message-item flex items-center gap-2 p-2 py-1 my-2 hover:bg-gray-500 cursor-pointer rounded-sm text-gray-300 transition-colors"
                    >
                      <div className="relative">
                        <Image
                          src={"/discord.png"}
                          width={20}
                          height={20}
                          alt="profile-image"
                          className="rounded-full bg-gray-50 aspect-square w-9 object-cover"
                        />
                        <div className="w-4 h-4 bg-gray-700 absolute right-0 flex items-center justify-center -bottom-1 rounded-full">
                          <span className="w-2 h-2 absolute bg-green-500 rounded-full"></span>
                        </div>
                      </div>
                      <h1>Baba Vermanath</h1>
                    </Link>
                  </ContextMenuBox>
                );
              })}
            </ScrollArea>
          </div>
        </div>
      </div>
      <ControlBox />
    </div>
  );
}
