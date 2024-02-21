"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Camera } from "lucide-react";
import Image from "next/image";
import { processEnv } from "@/lib/helpers/processEnvCustom";
import { serverCreate } from "@/actions/server/action";
import { decrypt } from "@/lib/helpers/jwtHandler";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export default function AddServerDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [name, setName] = useState("");

  const handleChange = (e: any) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleUpload = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);
    formData.append("name", name);
    const result = await serverCreate({
      name,
      imageUrl: image.raw,
    });
    console.log(result);
    if (result.success) {
      alert(result.message);
      revalidateTag("servers");
    }
  };

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="bg-black/15  border-none">
        <DialogHeader>
          <DialogTitle className="text-center">
            <h1 className="text-2xl text-white">Customize Your Server</h1>
            <p className="text-sm text-gray-500">
              Give your new server a personality with a name and an icon. You
              can always change it later.
            </p>
          </DialogTitle>
          <DialogDescription>
            <form onSubmit={handleUpload}>
              <label htmlFor="upload-button">
                {image.preview ? (
                  <div className="my-4">
                    <Image
                      src={image.preview}
                      alt="dummy"
                      className=" m-auto border rounded-full p-2 aspect-square object-cover"
                      width="80"
                      height="80"
                    />
                  </div>
                ) : (
                  <div className="my-4 text-gray-300 hover:text-gray-400 cursor-pointer">
                    <span className="border-gray-300 flex flex-col items-center justify-center m-auto w-20 aspect-square border-2 border-dashed rounded-full">
                      <Camera />
                      <h5>Upload</h5>
                    </span>
                  </div>
                )}
              </label>
              <input
                type="file"
                id="upload-button"
                style={{ display: "none" }}
                onChange={handleChange}
              />
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="uppercase text-xs font-bold text-gray-300"
                >
                  server name <span className="text-red-500">*</span>
                </label>
                <input
                  //   onChange={handleFormData}
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  className="bg-gray-800 p-2 text-white outline-none rounded-sm"
                />
                <p className="text-xs text-gray-500">
                  by creating a server. you agree to Discords Community
                  Guildlines.
                </p>
              </div>
              <button
                type="submit"
                style={{ background: "hsl(235 calc(1 * 85.6%) 64.7% / 1)" }}
                className="px-4 mt-4 py-2 text-white font-semibold rounded-sm  w-full"
              >
                Create
              </button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
