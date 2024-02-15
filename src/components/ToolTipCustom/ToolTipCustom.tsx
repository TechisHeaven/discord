import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function ToolTipCustom({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent className="bg-darkSecondaryColor border-0">
        <p className="capitalize text-white">{text}</p>
      </TooltipContent>
    </Tooltip>
  );
}
