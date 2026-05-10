import { StaticLayoutShell } from "@/components/static/static-layout-shell";

export default function StaticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StaticLayoutShell>{children}</StaticLayoutShell>;
}
