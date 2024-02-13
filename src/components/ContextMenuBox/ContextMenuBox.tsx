import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../ui/context-menu";

export default function ContextMenuBox({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string | number;
}) {
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent>
        <h1 className="font-semibold text-center">id: {id}</h1>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Invite to Server</ContextMenuItem>
        <ContextMenuItem>Remove Friend</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
