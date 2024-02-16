"use client";
import { SidebarOpen, Users } from "lucide-react";
import ToolTipCustom from "../ToolTipCustom/ToolTipCustom";
import { useState } from "react";

export default function ToggleBtnSideBar({
  sideBarOpen,
  setSideBarOpen,
}: {
  sideBarOpen: Boolean;
  setSideBarOpen: any;
}) {
  return (
    <div
      onClick={() => setSideBarOpen(!sideBarOpen)}
      className="flex items-center flex-row gap-2 text-white"
    >
      <ToolTipCustom text="show member list">
        <Users className={`${sideBarOpen && "text-white"} text-gray-300`} />
      </ToolTipCustom>
    </div>
  );
}
