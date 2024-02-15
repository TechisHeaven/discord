import MainSideBar from "@/components/ChannelsSidebar/MainSideBar/MainSideBar";
import SideBar from "@/components/SideBar/SideBar";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function Layout({
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
