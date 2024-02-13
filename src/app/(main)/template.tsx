"use client";
import ChannelsSidebar from "@/components/ChannelsSidebar/ChannelsSidebar";
import MeSidebar from "@/components/ChannelsSidebar/MeSidebar";
import SideBar from "@/components/SideBar/SideBar";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const url = usePathname();
  const isMePage = url.includes("/me") || url.includes("/store");
  // if (!url.includes("channels")) {
  //   redirect("/channels/me");
  // }
  // const isMePage = true;
  return (
    <div className="flex overflow-y-hidden relative">
      <SideBar />
      {isMePage ? <MeSidebar /> : <ChannelsSidebar />}
      {children}
    </div>
  );
}
