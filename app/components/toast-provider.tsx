"use client";

import { Toaster } from "sonner";

export function ToastProvider() {
  return (
    <Toaster
      richColors
      position="top-center"
      offset={{ top: "50%" }}
      style={{ transform: "translate(-50%, -50%)" }}
    />
  );
}
