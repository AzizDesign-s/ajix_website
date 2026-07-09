"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FormSuccessState({
  message,
  onReset,
}: {
  message: string;
  onReset: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center justify-center py-16 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.15,
          duration: 0.5,
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        className="gradient-brand flex h-16 w-16 items-center justify-center rounded-full shadow-[0_0_30px_-4px_var(--color-brand-blue)]"
      >
        <Check size={28} className="text-white" />
      </motion.div>

      <h3 className="font-display text-foreground mt-6 text-xl font-semibold">
        Message Sent
      </h3>
      <p className="text-foreground/70 mt-2 max-w-md text-sm leading-relaxed">
        {message}
      </p>

      <Button variant="secondary" size="sm" className="mt-6" onClick={onReset}>
        Send Another Message
      </Button>
    </motion.div>
  );
}
