import { User, User2 } from "lucide-react";

export default function Header() {
  return (
    <header className="p-2 px-4 shadow-md flex items-center flex-row gap-4 sticky top-0">
      <div className="flex items-center gap-2 text-white">
        <User2 className="w-5" />
        <h5 className="text-white font-semibold text-sm">Friends</h5>
      </div>
      <div className="tabs flex items-center gap-2 text-gray-200 text-sm">
        <button className="hover:bg-gray-500 px-2 rounded-sm ">Online</button>
        <button className="hover:bg-gray-500 px-2 rounded-sm ">All</button>
        <button className="hover:bg-gray-500 px-2 rounded-sm ">Pending</button>
        <button className="hover:bg-gray-500 px-2 rounded-sm ">Blocked</button>
        <button className="px-2 rounded-sm bg-green-600 text-white">
          Add Friend
        </button>
      </div>
    </header>
  );
}
