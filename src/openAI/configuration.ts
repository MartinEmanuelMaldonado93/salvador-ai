import { Configuration, OpenAIApi } from "openai";
import { enviroments } from "@/env.mjs";

const configuration = new Configuration({
  apiKey: enviroments.OPENAI_API_KEY_OFFICIAL,
});

export const openai = new OpenAIApi(configuration);
