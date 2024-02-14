import Image from "next/image";

export function NoOneHere() {
  return (
    <div className="flex w-full items-center justify-center flex-col h-[calc(100vh-40px)] gap-2">
      <Image
        src={"/24aa06be5457e66bdd64.svg"}
        alt="no-one-here-wumpsu"
        width={400}
        height={400}
      />
      <p className="text-gray-400">No ones around to play with Wumpus.</p>
    </div>
  );
}
