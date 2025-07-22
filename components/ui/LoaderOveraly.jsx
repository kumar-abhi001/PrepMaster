// components/LoaderOverlay.jsx
"use client";
import { Loader2 } from "lucide-react";

export default function LoaderOverlay() {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <Loader2 className="h-10 w-10 animate-spin text-white" />
    </div>
  );
}
