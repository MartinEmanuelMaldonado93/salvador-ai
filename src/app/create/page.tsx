import { useStore } from "@/store";
import ImageGenerated from "./(components)/ImageGenerated";
import FormComponent from "./(components)/FormComponent";
import Link from "next/dist/client/link";

export default async function Open() {
  const { photo_url } = useStore.getState();
  return (
    <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-4">
      <a href={"/collections"}>COLLECTIONS</a>
      <FormComponent />
      {!!photo_url && <ImageGenerated photo_url={photo_url} />}
    </div>
  );
}
