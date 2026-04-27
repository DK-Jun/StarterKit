import { Badge } from "@/components/ui/badge"

interface TrendBadgeProps {
  value: string
  positive?: boolean
}

export function TrendBadge({ value, positive = true }: TrendBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className={
        positive
          ? "text-emerald-600 bg-emerald-50 dark:bg-emerald-950"
          : "text-red-600 bg-red-50 dark:bg-red-950"
      }
    >
      {value}
    </Badge>
  )
}
