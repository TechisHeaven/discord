import { Hash, Pencil, PlusCircle, Smile } from "lucide-react";
import Image from "next/image";
import { ChatAreaInterface } from "@/types/type.chatArea";
import { UserPassingChat } from "@/types/types.user";

export default function ChatArea(props: ChatAreaInterface) {
  return (
    <div className="p-4 w-full bg-darkSecondaryColor4 ">
      <div className=" w-full p-4 flex h-[calc(100vh-128px)] justify-end flex-col overflow-y-auto">
        {props.isProfile ? (
          <ProfileComponents userData={props.userData} />
        ) : (
          <ChannelComponents
            title={props.title}
            description={props.description}
            isAdmin={props.isAdmin}
          />
        )}
      </div>
      <div className="inputBox px-4 p-3 bg-darkSecondaryColor2 rounded-md flex flex-row items-center gap-4">
        <PlusCircle className="text-gray-400" />
        <input
          type="text"
          placeholder="Message @Baba vermanath"
          className="bg-transparent  w-full outline-none placeholder:text-gray-500 text-gray-300"
        />
        <Smile className="text-gray-400" />
      </div>
    </div>
  );
}

const ProfileComponents = ({ userData }: { userData: UserPassingChat }) => {
  return (
    <div className="flex flex-col gap-2 my-2">
      <Image
        src={userData?.imageUrl || ""}
        alt="user-profile-image"
        width={80}
        height={80}
        loading="eager"
        draggable="false"
        className="aspect-square object-contain rounded-full bg-gray-400"
      />
      <h1 className="text-2xl text-white font-semibold">{userData?.name}</h1>
      <h1 className="text-lg text-gray-200 font-semibold">
        {userData?.username}
      </h1>
      <p className="text-sm text-gray-300">
        This is the begining of your direct message history with
        <span className="font-semibold">{userData?.name}</span>
      </p>
      <div className="flex items-center flex-row gap-8 text-gray-300 my-2">
        <p className="text-xs">No server is common</p>
        <div className="flex items-center flex-row gap-2">
          <button
            key={userData?.id}
            className="bg-MainPrimaryColor px-4 p-1 text-gray-300 rounded-sm text-sm"
          >
            Send Friend Request
          </button>
          <button className="bg-darkSecondaryColorHover hover:bg-darkSecondaryColor transition-colors px-4 p-1 text-gray-300 rounded-sm text-sm">
            Block
          </button>
        </div>
      </div>
    </div>
  );
};
const ChannelComponents = ({
  title,
  description,
  isAdmin,
}: {
  title: string;
  description: string;
  isAdmin: Boolean;
}) => {
  return (
    <div className="flex flex-col gap-2 my-2">
      <div className="w-20 h-20 aspect-square bg-darkSecondaryColorHover rounded-full flex items-center">
        <Hash className="w-full h-full p-4 text-white" />
      </div>
      <h1 className="text-3xl text-white font-semibold">Welcome to #{title}</h1>
      <p className="text-sm text-gray-300">
        {description} {title}
      </p>
      <div className="flex items-center flex-row gap-8 text-gray-300 my-2">
        <div className="flex items-center flex-row gap-2">
          {isAdmin && (
            <button className="bg-MainPrimaryColor flex items-center gap-2 px-2 p-1 text-gray-300 rounded-sm text-sm">
              <Pencil className="w-4" /> Edit Channel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
