"use client";
import { Cross, Rocket, User, X } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea } from "../ui/scroll-area";
import ContextMenuBox from "../ContextMenuBox/ContextMenuBox";
import { useEffect, useState } from "react";
import { revalidatePath } from "next/cache";
import { FriendIconMain } from "../Header/Header";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
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
  const UrlArray = url.split("/");
  const newSelectedTab = UrlArray.slice(-1)[0];
  const [selectedTab, setSelectedTab] = useState<string>(newSelectedTab);

  //   const isSelectedTab = url.includes("me");
  // let isSelectedTab: string | boolean = url.split("/")[2] === "me";

  useEffect(() => {
    // Update selectedTab whenever the URL changes
    const newSelectedTab = UrlArray.slice(-1)[0];
    setSelectedTab(newSelectedTab);
  }, [url]);

  return (
    <div className="w-[240px] min-w-[240px] bg-darkSecondaryColor2 h-screen sticky top-0">
      <div className="containerOfSidebar">
        <FindSearchDialog />
        <hr className="bg-darkSecondaryColor h-[1px] border-0" />
        <div className="p-2">
          <div className="flex flex-col gap-2">
            <Link
              href={"/channels/me"}
              className={`${
                selectedTab === "me" && "bg-darkSecondaryColorHover  text-white"
              } friendTab flex items-center flex-row p-2 hover:bg-darkSecondaryColorInput transition-colors gap-3 cursor-pointer rounded-sm text-gray-400`}
            >
              <FriendIconMain />
              <h1>Friends</h1>
            </Link>
            <Link
              href={"/store"}
              className={`${
                selectedTab === "store" &&
                "bg-darkSecondaryColorHover text-white"
              } friendTab flex items-center flex-row p-2 hover:bg-darkSecondaryColorInput transition-colors gap-3 cursor-pointer rounded-sm text-gray-400`}
            >
              <Rocket />
              <h1>Nitro</h1>
            </Link>
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
                      href={`/channels/me/${i}`}
                      className={`${
                        selectedTab === i.toString() &&
                        "bg-darkSecondaryColorHover text-white"
                      } message-item group flex items-center gap-2 p-2 py-1 my-2 hover:bg-darkSecondaryColorInput cursor-pointer rounded-sm text-gray-300 transition-colors`}
                    >
                      <div className="relative">
                        <Image
                          src={"/profile.jpg"}
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
                      <AlertDialog>
                        <AlertDialogTrigger className="absolute  right-2">
                          <X className="w-4 transition-opacity group-hover:opacity-100 opacity-0" />
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-darkSecondaryColor2 border-0">
                          <AlertDialogHeader>
                            <AlertDialogTitle className="text-white">
                              Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will
                              permanently delete your conversation and remove
                              your data from our servers.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction className="bg-MainPrimaryColor">
                              Continue
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
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
