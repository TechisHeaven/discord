import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });
const gg_sens = localFont({ src: "../fonts/ggSans/ggSansMedium.woff" });

export const metadata: Metadata = {
  title: "Discord",
  description: "Discord Web Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gg_sens.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
