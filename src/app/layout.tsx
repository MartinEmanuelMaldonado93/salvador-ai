import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import ClientSessionProvider from "./(components)/clientProvider";
import LogGroup from "./(components)/LogGroup";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dall-e Generator",
  description: "latest of next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(inter.className, "h-screen")}>
        <ClientSessionProvider>
          <nav className="bg-base-100 mx-auto flex max-w-6xl flex-wrap justify-around py-2 text-sm">
            <Link
              className="flex items-center gap-2 rounded-md border p-2 duration-200  hover:bg-slate-200 active:translate-y-1"
              href="/"
            >
              Dall-e api
              <Image
                alt="openlogo"
                src={"/open_logo.svg"}
                width={25}
                height={25}
              />
            </Link>
            <LogGroup />
          </nav>
          {children}
        </ClientSessionProvider>
      </body>
    </html>
  );
}
