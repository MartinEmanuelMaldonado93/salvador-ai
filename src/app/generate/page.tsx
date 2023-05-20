import { useStore } from "@/store";
import ImageGenerated from "./(components)/ImageGenerated";
import FormComponent from "./(components)/FormComponent";
import Link from "next/link";

export default async function Open() {
  return (
    <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center gap-4 px-4">
      <FormComponent />
      <ImageGenerated {...useStore.getState()} />
      <div className="mx-auto mt-10 max-w-xl">
        <Link
          href="/gallery"
          className="rounded-md border p-2 px-2 py-1 shadow-md duration-200 hover:bg-slate-200 hover:scale-50"
        >
          Got to my gallery →
        </Link>
      </div>
    </div>
  );
}
