import { useStore } from "@/store";
import ImageGenerated from "./(components)/ImageGenerated";
import FormComponent from "./(components)/FormComponent";
import Link from "next/link";

export default async function Open() {
  const { photo_url } = useStore.getState();
  return (
    <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center gap-4 px-4">
      <FormComponent />
      {!!photo_url && <ImageGenerated {...useStore.getState()} />}
      <div className="mx-auto mt-10 max-w-xl">
        <Link
          href="/gallery"
          className="rounded-md border px-2 py-1 shadow-md active:translate-y-[1px]"
        >
          Got to my gallery →
        </Link>
      </div>
    </div>
  );
}
