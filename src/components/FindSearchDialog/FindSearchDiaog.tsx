import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function FindSearchDialog() {
  return (
    <div className="findorsearch p-2">
      <Dialog>
        <DialogTrigger className="w-full">
          <button className="bg-darkSecondaryColor text-gray-400 rounded-sm p-2 px-2 text-left text-xs w-full">
            Find or start a conversation
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
