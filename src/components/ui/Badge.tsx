import * as React from "react"
import { cn } from "../../lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "cyan" | "gold" | "outline"
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-lab-gray text-white",
    cyan: "bg-lab-cyan/15 text-lab-cyan border border-lab-cyan/30",
    gold: "bg-lab-gold/15 text-lab-gold border border-lab-gold/30",
    outline: "border border-white/20 text-white",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold font-mono tracking-widest transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}
