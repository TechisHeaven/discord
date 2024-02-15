import ChatArea from "@/components/ChatArea/ChatArea";
import Header from "@/components/Header/Header";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full">
      <Header>
        <div className="flex items-center gap-2 text-gray-300 ">
          <div className="relative">
            <Image
              src="/profile.jpg"
              width={30}
              draggable={false}
              height={30}
              className="bg-gray-300 aspect-square object-cover rounded-full"
              alt="user-image"
            ></Image>
            <div className="w-4 h-4 bg-gray-700 absolute right-0 flex items-center justify-center -bottom-1 rounded-full">
              <span className="w-2 h-2 absolute bg-green-500 rounded-full"></span>
            </div>
          </div>
          <p>Baba Vermanath</p>
        </div>
      </Header>
      <ChatArea
        isProfile={true}
        userData={{
          id: 1,
          name: "Baba vermanath",
          imageUrl: "/profile.jpg",
          username: "babavermanath username",
        }}
      />
    </div>
  );
}
