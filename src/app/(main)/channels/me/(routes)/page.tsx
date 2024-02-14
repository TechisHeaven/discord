"use client";
import AddFriend from "@/components/AddFriend/AddFriend";
import Header, { FriendIconMain } from "@/components/Header/Header";
import NowPlayingColumn from "@/components/NowPlayingColumn/NowPlayingColumn";
import Image from "next/image";
import { useState } from "react";

export default function Me() {
  const [currentTab, setCurrentTab] = useState<string>("add");

  return (
    <div className="bg-darkSecondaryColor4 w-full">
      <Header>
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
      </Header>
      <div className="flex">
        {currentTab === "add" ? <AddFriend /> : <NoOneHere />}
        <NowPlayingColumn />
      </div>
    </div>
  );
}

function NoOneHere() {
  return (
    <div className="flex w-full items-center justify-center flex-col h-[calc(100vh-40px)] gap-2">
      <Image
        src={"/24aa06be5457e66bdd64.svg"}
        alt="no-one-here-wumpsu"
        width={400}
        height={400}
      />
      <p className="text-gray-400">No ones around to play with Wumpus.</p>
    </div>
  );
}
