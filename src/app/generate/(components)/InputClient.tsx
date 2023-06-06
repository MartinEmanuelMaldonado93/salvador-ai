"use client";
import { useState } from "react";
import { getRandomPrompt } from "@/helpers";

export default function InputClient() {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="flex gap-1">
      <input
        type="text"
        id="prompt_input"
        name="prompt"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 outline-none focus:border-[#6469ff] focus:ring-[#6469ff]"
        placeholder={"Your prompt"}
        value={prompt}
        required
        onChange={async ({ target }) => {
          setPrompt(target.value);
        }}
      />
      <button
        type="button"
        className="rounded-[5px] bg-[#EcECF1] px-2 py-1 text-xs font-semibold text-black duration-200 active:scale-50"
        onClick={() => setPrompt(getRandomPrompt("random prompt"))}
      >
        Surprise me
      </button>
    </div>
  );
}
