"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FormErrorState({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-danger/30 bg-danger/10 flex items-start gap-3 rounded-xl border p-4"
    >
      <AlertCircle size={18} className="text-danger mt-0.5 shrink-0" />
      <div className="flex-1">
        <p className="text-foreground/85 text-sm">{message}</p>
        <button
          type="button"
          onClick={onRetry}
          className="text-danger mt-2 text-xs font-medium underline underline-offset-2"
        >
          Try again
        </button>
      </div>
    </motion.div>
  );
}
