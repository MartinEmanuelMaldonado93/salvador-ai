"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-[25rem] max-w-6xl flex-col items-center justify-center gap-4 text-center">
      <div className="text-lg font-semibold text-gray-900">
        Bring your ideas to a reality
      </div>
      <Link
        className="inline w-min rounded-md border p-2 shadow-sm shadow-black duration-200 hover:bg-slate-200 active:translate-y-1 active:scale-95"
        href={"/generate"}
      >
        Generate
      </Link>
    </div>
  );
}
