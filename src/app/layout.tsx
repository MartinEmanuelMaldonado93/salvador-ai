import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import ClientSessionProvider from "./(components)/clientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Open Generator",
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
              className="flex items-center gap-2 rounded-md border p-2  duration-200 active:translate-y-1"
              href="/"
            >
              OpenAI
              <Image
                alt="openlogo"
                src={"/open_logo.svg"}
                width={25}
                height={25}
              />
            </Link>
            <Link className="rounded-md border p-2" href="/signin">
              Signin
            </Link>
          </nav>
          {children}
        </ClientSessionProvider>
      </body>
    </html>
  );
}
