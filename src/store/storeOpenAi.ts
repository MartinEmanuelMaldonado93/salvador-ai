import { formOpenAI } from "@/types";
import { create } from "zustand";

export const useStore = create<formOpenAI>()(set => ({}));
//a cute pig flying with its wings