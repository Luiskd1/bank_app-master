import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Open_Sans } from "next/font/google"
import { cn } from "@/lib/utils";
import { Providers } from "./provider";
import SideBar from "@/components/sidebar";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });
const fontSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Next Bank App"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        "antialiased min-h-screen flex",
        fontSans.className
      )}>

        <Providers>
          <SideBar />
          <div className="flex-col flex w-full">
            <Header />
            {children}
          </div>
        </Providers>

      </body>
    </html>
  );
}
