import { Badge } from "@/components/ui/badge";
import type { DifficultyLabel } from "@/types";

const colorMap: Record<DifficultyLabel, string> = {
  Gentle: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  Moderate: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Challenging: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  Vigorous: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  Advanced: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
};

export function DifficultyBadge({ level }: { level: DifficultyLabel }) {
  return (
    <Badge variant="outline" className={colorMap[level]}>
      {level}
    </Badge>
  );
}
