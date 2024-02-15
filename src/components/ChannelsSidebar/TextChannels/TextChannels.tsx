"use client";
import {
  ChevronDown,
  Hash,
  PlusIcon,
  Settings,
  UserRoundPlus,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function TextChannelsComp() {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="text-channel">
      <div className="group select-none cursor-pointer justify-between w-full uppercase text-xs flex items-center gap-1 text-gray-400 font-semibold">
        <div
          onClick={() => setExpanded(!expanded)}
          className="flex items-center flex-row w-full  hover:text-white"
        >
          <ChevronDown className="w-4  text-xs" />
          <p>Text Channels</p>
        </div>
        <PlusIcon className="w-4" />
      </div>
      {expanded && (
        <div className="group-childs">
          <Link
            href="/channels/0/122"
            className="child p-1 px-2 hover:bg-darkSecondaryColorHover rounded-sm cursor-pointer flex items-center justify-between gap-2 text-white"
          >
            <div className="flex items-center gap-2">
              <Hash className="text-gray-500 w-5" />
              <p>general</p>
            </div>
            <div className="flex items-center gap-2">
              <UserRoundPlus className="text-gray-300 w-4" />
              <Settings className="text-gray-300 w-4" />
            </div>
          </Link>
          <div className="child p-1 px-2 hover:bg-darkSecondaryColorHover rounded-sm cursor-pointer flex items-center justify-between gap-2 text-gray-400">
            <div className="flex items-center gap-2">
              <Hash className="text-gray-500 w-5" />
              <p>new-channel</p>
            </div>
            <div>
              <Settings className="text-gray-300 w-4" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
