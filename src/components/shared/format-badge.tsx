import { Badge } from "@/components/ui/badge";
import { Monitor, MapPin, Radio } from "lucide-react";
import type { ClassFormat } from "@/types";

const formatConfig: Record<ClassFormat, { label: string; icon: React.ReactNode; className: string }> = {
  "in-person": { label: "In-Person", icon: <MapPin className="size-3" />, className: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" },
  virtual: { label: "Virtual", icon: <Monitor className="size-3" />, className: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400" },
  hybrid: { label: "Hybrid", icon: <Radio className="size-3" />, className: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400" },
};

export function FormatBadge({ format }: { format: ClassFormat }) {
  const config = formatConfig[format];
  return (
    <Badge variant="outline" className={`gap-1 ${config.className}`}>
      {config.icon}
      {config.label}
    </Badge>
  );
}
