import * as React from "react"
import { cn } from "../../lib/utils"
import { Loader2 } from "lucide-react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "cyan" | "gold" | "ghost" | "glass"
  size?: "sm" | "md" | "lg" | "icon"
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "cyan", size = "md", isLoading, children, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center rounded-md font-mono transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest relative overflow-hidden group"
    
    const variants = {
      default: "bg-lab-navy text-white hover:bg-lab-navy/80 border border-white/20",
      cyan: "bg-lab-cyan/10 border border-lab-cyan text-lab-cyan hover:bg-lab-cyan hover:text-lab-navy glow-cyan-hover",
      gold: "bg-lab-gold/10 border border-lab-gold text-lab-gold hover:bg-lab-gold hover:text-lab-navy glow-gold-hover",
      ghost: "hover:bg-white/10 text-lab-gray hover:text-white",
      glass: "glass text-white hover:bg-white/10",
    }
    
    const sizes = {
      sm: "h-8 px-3 text-xs",
      md: "h-11 px-6 py-2 text-sm",
      lg: "h-14 px-8 py-4 text-base",
      icon: "h-10 w-10",
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {/* Subtle scanline effect inside button */}
        {variant !== 'ghost' && (
           <span className="absolute inset-0 w-full h-[200%] bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity translate-y-[-100%] group-hover:translate-y-[100%] duration-[1.5s] ease-in-out pointer-events-none"></span>
        )}
        
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }
