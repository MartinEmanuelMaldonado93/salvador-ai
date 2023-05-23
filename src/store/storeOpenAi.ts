import { formOpenAI } from "@/types";
import { create } from "zustand";

export const useServerStore = create<formOpenAI>()((set) => ({}));
