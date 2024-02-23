import Link from "next/link";
import ToolTip from "../ToolTip/ToolTip";
import Image from "next/image";
import { serversFetch } from "@/actions/server/action";

export default async function ChannelsList() {
  const imageUrl = "/profile.jpg";

  const result = await serversFetch();

  return (
    <div className="Channels flex flex-col gap-1 items-center">
      {result.server.map((item: any) => {
        return (
          <ToolTip text={item.name} key={item.id}>
            <Link href={`/channels/${item.id}/${item.channels[0].id}`}>
              <div className="item py-2 relative group">
                <div className="indicator group-hover:h-10 group-hover:opacity-100 opacity-0 transition-all w-1 h-6 left-0 rounded-br-md rounded-tr-md bottom-[50%] translate-y-[50%] bg-white absolute "></div>
                <div className="mx-3 active:translate-y-[2px] transition-all">
                  {imageUrl ? (
                    <Image
                      src="/profile.jpg"
                      alt="channel-dp"
                      width={50}
                      height={50}
                      className="rounded-3xl hover:rounded-2xl hover:bg-MainPrimaryColor bg-gray-700 transition-all "
                    />
                  ) : (
                    <p className="text-gray-300 rounded-3xl hover:rounded-2xl hover:bg-MainPrimaryColor bg-gray-700 transition-all p-3">
                      {item.name}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          </ToolTip>
        );
      })}
    </div>
  );
}
