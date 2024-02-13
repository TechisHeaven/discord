"use client";
import AddFriend from "@/components/AddFriend/AddFriend";
import Header from "@/components/Header/Header";
import NowPlayingColumn from "@/components/NowPlayingColumn/NowPlayingColumn";
import Image from "next/image";
import { useState } from "react";

export default function Me() {
  const [currentTab, setCurrentTab] = useState<string>("add");

  return (
    <div className="bg-darkSecondaryColor4 w-full">
      <Header setCurrentTab={setCurrentTab} currentTab={currentTab} />
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
