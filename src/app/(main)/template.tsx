import SideBar from "@/components/SideBar/SideBar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      {children}
    </div>
  );
}
