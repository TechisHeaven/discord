import MainSideBar from "@/components/ChannelsSidebar/MainSideBar/MainSideBar";
import { TooltipProvider } from "@/components/ui/tooltip";
import dynamic from "next/dynamic";

const SideBar = dynamic(() => import("@/components/SideBar/SideBar"), {
  loading: () => <SideBarLoading />,
  ssr: false,
});

const SideBarLoading = () => {
  return (
    <div className="p-2 h-screen w-[88px] bg-darkSecondaryColor">
      <div className="w-full h-full bg-darkSecondaryColorHover animate-pulse"></div>
    </div>
  );
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TooltipProvider>
      <div className="flex overflow-y-hidden relative">
        <SideBar />
        <MainSideBar />
        {children}
      </div>
    </TooltipProvider>
  );
}
