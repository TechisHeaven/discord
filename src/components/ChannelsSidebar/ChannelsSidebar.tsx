import { CalendarRange, ChevronDown } from "lucide-react";
import ControlBox from "./ControlBox/ControlBox";

import VoiceChannels from "./VoiceChannels/VoiceChannels";
import TextChannelsComp from "./TextChannels/TextChannels";

export default async function ChannelsSidebar() {
  return (
    <div className="max-w-[240px] w-full bg-darkSecondaryColor2 relative box-border flex flex-col">
      <div className="channelSidebar flex-1 block">
        <div className="header flex cursor-pointer hover:bg-darkSecondaryColorHover transition-colors items-center justify-between p-3 text-white text-sm px-4 border-b-[2px] shadow-sm border-gray-800">
          <h5>tempmail123&apos;s server</h5>
          <ChevronDown className="w-5 text-gray-300" />
        </div>
        <div className="items p-2 pt-1">
          <div className="flex items-center gap-2 text-gray-500 font-semibold my-2 p-2 hover:bg-darkSecondaryColorHover cursor-pointer rounded-sm hover:text-white transition-colors">
            <CalendarRange className="w-5" />
            <p className="text-sm">Events</p>
          </div>
          <hr className="w-full h-[1px] bg-gray-600 border-0" />
          <div className="channels-groups my-4 flex flex-col gap-4">
            <TextChannelsComp />
            <VoiceChannels />
          </div>
        </div>
      </div>
      <ControlBox />
    </div>
  );
}
