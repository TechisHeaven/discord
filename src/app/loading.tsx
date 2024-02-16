import Image from "next/image";

export default function Loading() {
  return (
    <div className="text-2xl bg-darkSecondaryColor flex items-center justify-center h-screen w-full">
      <Image src="/discordloading.gif" width={500} height={500} alt="loading" />
    </div>
  );
}
