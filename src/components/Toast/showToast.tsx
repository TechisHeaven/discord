import toast, { ToastOptions } from "react-hot-toast";

let toastIds: number[] = [];

export default function showToast({
  title,
  variant,
  myPromise,
}: {
  title: string;
  variant: "success" | "error" | "loading" | "promise";
  myPromise?: any;
}) {
  const commonOptions: Partial<ToastOptions> = {
    position: "top-center",
    duration: 1000,
  };

  if (toastIds.length >= 1) {
    const oldestToastId = toastIds.shift();
    toast.dismiss(oldestToastId);
  }

  let currentToastId;

  if (variant === "success") {
    currentToastId = toast.success(title, commonOptions);
  }
  if (variant === "error") {
    currentToastId = toast.error(title, commonOptions);
  }
  if (variant === "loading") {
    currentToastId = toast.loading(title, commonOptions);
  }
  if (variant === "promise") {
    currentToastId = toast.promise(myPromise, {
      loading: "Loading",
      success: (data: any) => {
        if (data?.status === 200) {
          return `${data?.message}`;
        } else {
          return toast.error("Login failed!", commonOptions);
        }
      },
      error: (error) => {
        console.error("Error:", error);
        return toast.error("Login failed!", commonOptions);
      },
    });
  }

  if (currentToastId) {
    toastIds.push(currentToastId);
  }
}
