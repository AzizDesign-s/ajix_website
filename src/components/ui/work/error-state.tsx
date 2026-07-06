"use client";

import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ErrorState({ onRetry }: { onRetry?: () => void }) {
  return (
    <div className="border-border/40 bg-surface/30 flex flex-col items-center justify-center rounded-2xl border px-6 py-20 text-center">
      <AlertTriangle size={32} className="text-danger" />
      <h3 className="font-display text-foreground mt-4 text-lg font-semibold">
        Something went wrong
      </h3>
      <p className="text-foreground/60 mt-1 text-sm">
        We couldn&apos;t load these projects. Please try again.
      </p>
      {onRetry && (
        <Button
          variant="secondary"
          size="sm"
          className="mt-5"
          onClick={onRetry}
        >
          Retry
        </Button>
      )}
    </div>
  );
}
