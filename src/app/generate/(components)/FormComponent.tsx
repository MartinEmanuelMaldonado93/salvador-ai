import { generateAndSaveImage } from "@/openAI/actions";
import InputClient from "./InputClient";
import { useServerStore } from "@/store";

export default function FormComponent() {
  return (
    <form
      action={generateAndSaveImage}
      className="mx-auto flex w-full max-w-xl flex-col gap-4"
    >
      <input
        type="text"
        id="name_user_input"
        name="name_user"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 outline-none focus:border-[#6469ff] focus:ring-[#6469ff]"
        placeholder={"Your name here"}
        required
      />
      {/* input client works inside of the form  */}
      <InputClient />
      <div className="mt-5 flex justify-center gap-5">
        <button className=" w-full rounded-md bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white duration-200 active:translate-y-1 sm:w-auto">
          Generate
        </button>
      </div>
    </form>
  );
}
