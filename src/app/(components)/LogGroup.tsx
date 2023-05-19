"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { match } from "ts-pattern";

export default function LogGroup() {
  const { status } = useSession();

  return (
    <div className="flex items-center gap-2 rounded-md border p-2 duration-200 hover:bg-slate-200 active:translate-y-1">
      {match(status)
        .with("authenticated", () => (
          <div className="text-center">
            <button onClick={() => signOut()}>Logout</button>
          </div>
        ))
        .with("unauthenticated", () => (
          <div className="text-center">
            <button onClick={() => signIn("google")}>Login google</button>
          </div>
        ))
        .with("loading", () => <div className="animate-pulse">Loading...</div>)
        .exhaustive()}
    </div>
  );
}
