import { Users } from "lucide-react";
import ToolTipCustom from "../ToolTipCustom/ToolTipCustom";
import { useState } from "react";

export default function ToggleBtnSideBar() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <div
      onClick={() => setSideBarOpen(!sideBarOpen)}
      className="flex items-center flex-row gap-2 text-white"
    >
      <ToolTipCustom text="show member list">
        <Users />
      </ToolTipCustom>
    </div>
  );
}
