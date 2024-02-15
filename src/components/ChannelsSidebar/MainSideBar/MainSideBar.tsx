"use client";
import { usePathname } from "next/navigation";
import ChannelsSidebar from "../ChannelsSidebar";

import MeSidebar from "../MeSidebar";

export default function MainSideBar() {
  const url = usePathname();
  const isMePage = url.includes("/me") || url.includes("/store");
  return <>{isMePage ? <MeSidebar /> : <ChannelsSidebar />}</>;
}
