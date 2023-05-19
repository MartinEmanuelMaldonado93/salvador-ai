import { useStore } from "@/store";
import ImageGenerated from "./(components)/ImageGenerated";
import FormComponent from "./(components)/FormComponent";
import Link from "next/link";

export default async function Open() {
  const { photo_url } = useStore.getState();
  return (
    <div className="mx-auto flex gap-4 min-h-[88vh] max-w-6xl flex-col justify-center px-4">
      {/* welcome client component */}
      <FormComponent />
      {!!photo_url && <ImageGenerated {...useStore.getState()} />}
      <div>
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
