"use server";
import { useServerStore } from "@/store";
import { revalidatePath } from "next/cache";
import { enviroments } from "@/env.mjs";
import { formOpenAI, imageObject } from "@/types";
import { openai } from "./configuration";

/** Set form data to a fetch function and update the server state */
export async function generateAndSaveImage(form: FormData) {
  const prompt = form.get("prompt");
  const user_name = form.get("name_user");

  if (!prompt || !user_name) throw new Error("Some of the form fields are empty.");

  try {
    const b64_image = await getImageGenerated({ prompt: String(prompt) }) ?? {};
    if (!b64_image) throw new Error("image b64 not available");

    useServerStore.setState({
      photo_url: `data:image/jpeg;base64,${b64_image}`,
      user_name: String(user_name),
      prompt: String(prompt),
    });

    revalidatePath("/create");
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}

/** official api */
async function getImageGenerated({ prompt }: formOpenAI) {
  try {
    const response = await openai.createImage({
      prompt: String(prompt),
      n: 1,
      size: "256x256",
      response_format: "b64_json"
    });

    if (!response) throw new Error();

    return response.data.data[0].b64_json;
  } catch (error) {
    if (error instanceof Error) console.log(error.message, error.name);
  } finally {
    console.log(prompt);
  }
}

/** rapidapi api  */
async function fetchImageGen({ prompt }: formOpenAI) {
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": enviroments.OPENAI_API_KEY,
      "X-RapidAPI-Host": "openai80.p.rapidapi.com",
      "Accept-Encoding": "gzip, deflate, *",
    },
    body: JSON.stringify({
      prompt,
      n: 1,
      size: "256x256",
    }),
  };

  let photo_url = "";
  try {
    const response = await fetch(enviroments.OPENAI_URL, options);
    if (!response.ok) throw new Error("Error response");

    const result = await response.json();
    photo_url = result.data[0].url as string;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }

  return photo_url;
}
