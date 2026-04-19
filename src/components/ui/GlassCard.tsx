import * as React from "react"
import { cn } from "../../lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: "cyan" | "gold" | "none"
}

export function GlassCard({ className, children, glowColor = "none", ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-xl overflow-hidden relative",
        glowColor === "cyan" && "hover:border-lab-cyan/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-500",
        glowColor === "gold" && "hover:border-lab-gold/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-500",
        className
      )}
      {...props}
    >
      {/* Decorative top border glow base on variant */}
      {glowColor !== "none" && (
        <div className={cn(
          "absolute top-0 left-0 w-full h-[1px]",
          glowColor === "cyan" && "bg-gradient-to-r from-transparent via-lab-cyan to-transparent opacity-50",
          glowColor === "gold" && "bg-gradient-to-r from-transparent via-lab-gold to-transparent opacity-50"
        )} />
      )}
      {children}
    </div>
  )
}
