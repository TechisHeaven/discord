import Image from "next/image";
import { NoOneHere } from "../NoOneHere/NoOneHere";
import { MessageCircle, MoreVertical } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Link from "next/link";

export default function FriendList({ title }: { title: string }) {
  const isOnlineFriend = false;
  if (isOnlineFriend) {
    return <NoOneHere />;
  }
  return (
    <div className="w-full px-6 p-4">
      <div className="bg-darkSecondaryColorInput p-1 px-2 rounded-sm">
        <input
          type="text"
          placeholder="Search"
          className="placeholder:text-gray-400 outline-none w-full text-gray-300 bg-transparent"
        />
      </div>
      <div>
        <p className="text-gray-400 uppercase text-xs font-semibold py-4  border-gray-600 border-b-[1px]">
          {title} - 1
        </p>
        <div className="items flex flex-col gap-1">
          <Link
            href="/channels/me/0"
            className="item hover:bg-darkSecondaryColorHover transition-colors rounded-sm relative p-3 flex flex-row items-center gap-2"
          >
            <Image
              src="/profile.jpg"
              alt="profile-image"
              width={30}
              loading="eager"
              className="aspect-sqaure w-8 h-8 object-contain rounded-full "
              height={30}
            />
            <div>
              <h5 className="text-gray-300 font-semibold">Baba vermanath</h5>
            </div>
            <div className="absolute right-0 flex flex-row gap-2 items-center">
              <Link
                href="/channels/me/0"
                className="bg-darkSecondaryColor text-gray-300 p-2 rounded-full"
              >
                <MessageCircle className="w-5 h-5" />
              </Link>
              <div className="bg-darkSecondaryColor text-gray-300 p-2 rounded-full flex items-center">
                <Popover>
                  <PopoverTrigger>
                    <MoreVertical className="w-5 h-5" />
                  </PopoverTrigger>
                  <PopoverContent align="start" className="p-1">
                    <button className="text-red-500 ">Remove Friend</button>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
