import { Inbox, User2 } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="p-2 w-full flex-row min-h-12 px-4 shadow-md flex items-center sticky top-0">
      <div className="w-full">{children}</div>
      <Popover>
        <PopoverTrigger>
          <div className="notification-inbox  right-0 px-2">
            <Inbox className="text-gray-300" />
          </div>
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    </header>
  );
}

export function FriendIconMain() {
  return (
    <svg
      x="0"
      y="0"
      className="icon__4cb88"
      aria-hidden="true"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        className=""
      ></path>
      <path
        fill="currentColor"
        d="M3 5v-.75C3 3.56 3.56 3 4.25 3s1.24.56 1.33 1.25C6.12 8.65 9.46 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.2-.15 7.65 7.65 0 0 0-1.32-2.3c-.15-.2-.42-.06-.39.17l.25 2c.02.15-.1.28-.25.28H9a2 2 0 0 1-2-2v-2.22c0-1.57-.67-3.05-1.53-4.37A15.85 15.85 0 0 1 3 5Z"
        className=""
      ></path>
    </svg>
  );
}
