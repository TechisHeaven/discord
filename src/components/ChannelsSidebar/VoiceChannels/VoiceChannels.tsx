"use client";
import {
  ChevronDown,
  PlusIcon,
  Settings,
  UserRoundPlus,
  Volume2,
} from "lucide-react";
import { useState } from "react";

export default function VoiceChannels() {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="voice-channel">
      <div className="group select-none justify-between w-full cursor-pointer  uppercase text-xs flex items-center gap-1 text-gray-400 font-semibold">
        <div
          onClick={() => setExpanded(!expanded)}
          className="flex items-center flex-row w-full  hover:text-white"
        >
          <ChevronDown className="w-4  text-xs" />
          <p>Voice Channels</p>
          <PlusIcon className="w-4 right-3 absolute" />
        </div>
      </div>
      {expanded && (
        <div className="group-childs">
          <div className="child p-1 px-2 hover:bg-darkSecondaryColorHover rounded-sm cursor-pointer flex items-center justify-between gap-2 text-white">
            <div className="flex items-center gap-2">
              <Volume2 className="text-gray-500 w-5" />
              <p>General</p>
            </div>
            <div className="flex items-center gap-2">
              <UserRoundPlus className="text-gray-300 w-4" />
              <Settings className="text-gray-300 w-4" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
