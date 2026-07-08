import { motion } from "framer-motion";
import type { Skill } from "@/types/about";

export function SkillChip({ skill }: { skill: Skill }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="corner-brackets border-border/40 bg-surface/40 rounded-xl border px-4 py-3 text-center"
    >
      <p className="text-foreground text-sm font-medium">{skill.name}</p>
      <p className="text-muted-foreground mt-1 text-[10px] tracking-wide uppercase">
        {skill.category}
      </p>
    </motion.div>
  );
}
