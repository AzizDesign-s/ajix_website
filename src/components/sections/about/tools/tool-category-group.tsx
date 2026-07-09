import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { ToolChip } from "@/components/sections/about/tools/tool-chip";
import type { AboutTool } from "@/types/about";

export function ToolsCategoryGroup({
  category,
  tools,
}: {
  category: string;
  tools: AboutTool[];
}) {
  return (
    <motion.div variants={fadeUp}>
      <h3 className="text-accent text-xs font-semibold tracking-widest uppercase">
        {category}
      </h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {tools.map((tool) => (
          <ToolChip key={tool.name} tool={tool} />
        ))}
      </div>
    </motion.div>
  );
}
