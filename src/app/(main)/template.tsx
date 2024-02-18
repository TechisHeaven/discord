"use client";
import { HandleGetUser } from "@/actions/user/handleUser";
import useUserStore from "@/store/auth/store";
import { useEffect } from "react";

export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleLogin = async () => {
    const user = await HandleGetUser();
    setUserState(user.user);
  };
  useEffect(() => {
    handleLogin();
  }, []);
  const setUserState = useUserStore((state: any) => state.setUser);

  return <>{children}</>;
}
