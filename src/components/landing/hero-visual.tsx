import { cn } from "@/lib/utils";
import { CreditCard, ShoppingBag, Truck } from "lucide-react";
import React from "react";

const FloatingCard = ({
  className,
  children,
  animationDelay = "0s",
  animationDuration = "10s",
}: {
  className?: string;
  children: React.ReactNode;
  animationDelay?: string;
  animationDuration?: string;
}) => (
  <div
    className={cn(
      "absolute w-40 h-60 rounded-2xl bg-card/60 backdrop-blur-md border border-white/10 shadow-2xl animate-[float_var(--duration)_ease-in-out_infinite_var(--delay)]",
      className
    )}
    style={
      {
        "--delay": animationDelay,
        "--duration": animationDuration,
      } as React.CSSProperties
    }
  >
    {children}
  </div>
);

export function HeroVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <FloatingCard
        className="top-0 left-1/4 -translate-x-1/2 -rotate-12 flex items-center justify-center"
        animationDuration="12s"
      >
        <ShoppingBag className="w-20 h-20 text-accent/70" strokeWidth={1} />
      </FloatingCard>

      <FloatingCard
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-48 h-72 flex flex-col items-center justify-center gap-2 p-4"
        animationDuration="10s"
        animationDelay="1s"
      >
        <div className="w-full h-8 bg-black/20 rounded-md"></div>
        <p className="font-mono text-xs text-muted-foreground">**** **** **** 1234</p>
        <div className="flex w-full justify-between items-end">
            <div className="space-y-1">
                <p className="text-[0.6rem] text-muted-foreground uppercase">Card Holder</p>
                <p className="text-sm font-semibold">ACHRAKAT</p>
            </div>
            <CreditCard className="w-10 h-10 text-primary/80" strokeWidth={1.5} />
        </div>
      </FloatingCard>

      <FloatingCard
        className="bottom-0 right-1/4 translate-x-1/2 rotate-12 flex items-center justify-center"
        animationDuration="14s"
        animationDelay="2s"
      >
         <Truck className="w-20 h-20 text-yellow-500/70" strokeWidth={1} />
      </FloatingCard>

      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-transparent rounded-full blur-xl"></div>
    </div>
  );
}
