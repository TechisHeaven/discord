import { User2 } from "lucide-react";

export default function Header({
  setCurrentTab,
  currentTab,
}: {
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
  currentTab: string;
}) {
  return (
    <header className="p-2 px-4 shadow-md flex items-center flex-row gap-4 sticky top-0">
      <div className="flex items-center gap-2 text-white">
        <User2 className="w-5" />
        <h5 className="text-white font-semibold text-sm">Friends</h5>
      </div>
      <div className="tabs flex items-center gap-2 text-gray-200 text-sm">
        <button
          onClick={() => setCurrentTab("online")}
          className={`hover:bg-darkSecondaryColorHover ${
            currentTab === "online" && "bg-darkSecondaryColorHover"
          } px-2 rounded-sm transition-colors`}
        >
          Online
        </button>
        <button
          onClick={() => setCurrentTab("all")}
          className={`hover:bg-darkSecondaryColorHover ${
            currentTab === "all" && "bg-darkSecondaryColorHover"
          } px-2 rounded-sm transition-colors`}
        >
          All
        </button>
        <button
          onClick={() => setCurrentTab("pending")}
          className={`hover:bg-darkSecondaryColorHover ${
            currentTab === "pending" && "bg-darkSecondaryColorHover"
          } px-2 rounded-sm transition-colors`}
        >
          Pending
        </button>
        <button
          onClick={() => setCurrentTab("blocked")}
          className={`hover:bg-darkSecondaryColorHover ${
            currentTab === "blocked" && "bg-darkSecondaryColorHover"
          } px-2 rounded-sm transition-colors`}
        >
          Blocked
        </button>
        <button
          onClick={() => setCurrentTab("add")}
          className={`px-2 rounded-sm  ${
            currentTab === "add" ? "bg-green-600 text-white" : "text-green-500"
          }  transition-colors`}
        >
          Add Friend
        </button>
      </div>
    </header>
  );
}
