import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discord | Message",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
