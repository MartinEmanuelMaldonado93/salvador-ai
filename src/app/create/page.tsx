import { useStore } from "@/store";
import ImageGenerated from "./(components)/ImageGenerated";
import FormComponent from "./(components)/FormComponent";

export default async function Open() {
  const { photo_url } = useStore.getState();
  return (
    <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-4">
      <FormComponent />
      {!!photo_url && <ImageGenerated {...useStore.getState()} />}
    </div>
  );
}
