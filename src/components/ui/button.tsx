import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, isValidMotionProp } from "framer-motion"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-transform duration-200",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "border border-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground",
        ghost: "bg-transparent text-primary hover:bg-primary/10",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-4 py-2 h-10",
        sm: "px-3 h-9 text-sm",
        lg: "px-8 h-11 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

import type { HTMLMotionProps } from "framer-motion"

const MotionButton = React.forwardRef<HTMLButtonElement, HTMLMotionProps<"button">>((props, ref) => (
  <motion.button ref={ref} {...props} />
));
MotionButton.displayName = 'MotionButton';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      );
    }
    // Only pass DOM props to button, and motion props to motion.button
    const motionProps = {
      whileHover: { scale: 1.05, boxShadow: "0 4px 10px rgba(0,0,0,0.15)" },
      transition: { type: "spring" as const, stiffness: 300, damping: 20 },
    };
    // Filter props to only pass valid motion props to motion.button
    const motionButtonProps: Record<string, any> = {};
    const domButtonProps: Record<string, any> = {};

    Object.entries(props).forEach(([key, value]) => {
      if (isValidMotionProp(key)) {
        motionButtonProps[key] = value;
      } else {
        domButtonProps[key] = value;
      }
    });

    return (
      <motion.button
        {...motionProps}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...motionButtonProps}
        {...domButtonProps}
      />
    );
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
