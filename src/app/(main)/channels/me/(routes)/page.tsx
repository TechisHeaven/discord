"use client";
import AddFriend from "@/components/AddFriend/AddFriend";
import FriendList from "@/components/FriendList/FriendList";
import Header, { FriendIconMain } from "@/components/Header/Header";
import NowPlayingColumn from "@/components/NowPlayingColumn/NowPlayingColumn";
import ToggleBtnSideBar from "@/components/ToggleBtn/ToggleBtn";
import { SidebarOpen } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Me() {
  const [currentTab, setCurrentTab] = useState<string>("add");
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <div className="bg-darkSecondaryColor4 w-full">
      <Header>
        <div className="flex items-center flex-row">
          <div className="flex flex-row items-center w-full">
            <div className="flex items-center gap-2 text-gray-400">
              {/* <User2 className="w-5" /> */}
              <FriendIconMain />
              <h5 className="text-white font-semibold text-sm">Friends</h5>
            </div>
            <hr className="h-[.5px] w-5 rotate-90 bg-gray-700 border-0" />
            <div className="tabs flex items-center gap-2 text-gray-200 text-sm">
              <button
                onClick={() => setCurrentTab("online")}
                className={`hover:bg-darkSecondaryColorHover ${
                  currentTab === "online" && "bg-darkSecondaryColorHover"
                } px-2 rounded-sm transition-colors`}
              >
                Online
              </button>
              <button
                onClick={() => setCurrentTab("all")}
                className={`hover:bg-darkSecondaryColorHover ${
                  currentTab === "all" && "bg-darkSecondaryColorHover"
                } px-2 rounded-sm transition-colors`}
              >
                All
              </button>
              <button
                onClick={() => setCurrentTab("pending")}
                className={`hover:bg-darkSecondaryColorHover ${
                  currentTab === "pending" && "bg-darkSecondaryColorHover"
                } px-2 rounded-sm transition-colors`}
              >
                Pending
              </button>
              <button
                onClick={() => setCurrentTab("blocked")}
                className={`hover:bg-darkSecondaryColorHover ${
                  currentTab === "blocked" && "bg-darkSecondaryColorHover"
                } px-2 rounded-sm transition-colors`}
              >
                Blocked
              </button>
              <button
                onClick={() => setCurrentTab("add")}
                className={`px-2 rounded-sm  ${
                  currentTab === "add"
                    ? "bg-green-600 text-white"
                    : "text-green-500"
                }  transition-colors`}
              >
                Add Friend
              </button>
            </div>
          </div>
          <div className="mx-2">
            <ToggleBtnSideBar
              setSideBarOpen={setSideBarOpen}
              sideBarOpen={sideBarOpen}
            />
          </div>
        </div>
      </Header>
      <div className="flex">
        {currentTab === "add" && <AddFriend />}
        {currentTab === "all" && <FriendList title="all friend" />}
        {currentTab === "online" && <FriendList title="online" />}
        {currentTab === "pending" && <FriendList title="pending" />}
        {currentTab === "blocked" && <FriendList title="blocked" />}
        {sideBarOpen && <NowPlayingColumn />}
      </div>
    </div>
  );
}
