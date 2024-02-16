export default function NowPlayingColumn() {
  return (
    <div className="max-w-[360px] w-full h-[calc(100vh-40px)] bg-darkSecondaryColor4 border-l-[1px] border-gray-800 p-4">
      <h1 className="text-white text-xl font-semibold">Active now</h1>
      <div>
        <div className="text-center my-10">
          <h5 className="text-white font-semibold">Its quiet for now...</h5>
          <p className="capitalize text-gray-300 text-xs">
            when a friend start an activity--like playing a game or hanging out
            on voice--we&apos;ll show it here!
          </p>
        </div>
      </div>
    </div>
  );
}
