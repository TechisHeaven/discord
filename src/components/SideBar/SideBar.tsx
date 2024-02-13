import Image from "next/image";
import Link from "next/link";
import ToolTip from "../ToolTip/ToolTip";
import { Plus } from "lucide-react";
import dynamic from "next/dynamic";

const AddServerDialog = dynamic(
  () => import("../AddServerDialog/AddServerDialog"),
  {
    ssr: false,
  }
);

// import AddServerDialog from "../AddServerDialog/AddServerDialog";

export default async function SideBar() {
  return (
    <nav className="w-[72px] bg-gray-800 h-screen sticky top-0 border border-l-0 border-b-0 border-t-0 border-gray-600">
      <div className="items">
        <ToolTip text={"Direct Message"}>
          <Link href="/channels/me">
            <div className="item py-2 relative group">
              <div className="indicator group-hover:h-10 transition-all w-1 h-6 left-0 rounded-br-md rounded-tr-md bottom-[50%] translate-y-[50%] bg-white absolute "></div>
              <div className="mx-3 active:translate-y-[2px]">
                <Image
                  src={"/discord-icon.png"}
                  width={50}
                  height={50}
                  alt="discord logo"
                  className="p-[10px] w-12 h-12 object-contain rounded-2xl"
                  style={{ background: "hsl(235 calc(1 * 85.6%) 64.7% / 1)" }}
                ></Image>
              </div>
            </div>
          </Link>
        </ToolTip>
        <hr className="w-[50%] m-auto " />
        <AddServerDialog>
          <ToolTip text={"Add a Server"}>
            <div className="item py-2 relative group">
              <div className="indicator group-hover:h-10 group-hover:opacity-100 opacity-0 transition-all w-1 h-6 left-0 rounded-br-md rounded-tr-md bottom-[50%] translate-y-[50%] bg-white absolute "></div>
              <div className="mx-3 active:translate-y-[2px] p-3 rounded-full hover:rounded-2xl hover:bg-green-500 group transition-all bg-gray-700 ">
                <Plus className="text-green-500 group-hover:text-white" />
              </div>
            </div>
          </ToolTip>
        </AddServerDialog>
      </div>
    </nav>
  );
}
