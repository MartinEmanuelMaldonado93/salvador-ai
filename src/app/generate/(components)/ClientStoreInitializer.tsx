"use client";
import { useStore } from "@/store";
import { formOpenAI } from "@/types";
import { useRef } from "react";

/** Zustand state initializer front */
export default function ClientStoreInitializer(
  props: formOpenAI,
  children: JSX.Element
) {
  const initialized = useRef(false);

  if (!initialized.current) {
    useStore.setState({ ...props });
    initialized.current = true;
  }
  return <>{children}</>;
}
