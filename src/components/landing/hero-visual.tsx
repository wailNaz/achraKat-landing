import { cn } from "@/lib/utils";

const Card = ({ className, delay }: { className?: string, delay?: string }) => (
    <div 
        className={cn(
            "absolute w-[150px] h-[220px] sm:w-[180px] sm:h-[260px] bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl",
            className
        )}
        style={{ animationDelay: delay }}
    >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-2xl"></div>
    </div>
)

export function HeroVisual() {
  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">
            {/* Base platform */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 rounded-[50%] bg-primary/5 blur-3xl"></div>

            {/* Floating Cards */}
            <div className="animate-[float_12s_ease-in-out_infinite]">
                <Card 
                    className="top-0 left-0 rotate-[-15deg] transform-gpu" 
                />
            </div>

             <div className="animate-[float_15s_ease-in-out_infinite]">
                <Card 
                    className="bottom-0 right-0 rotate-[10deg] transform-gpu"
                    delay="2s"
                />
            </div>
            
             <div className="animate-[float_18s_ease-in-out_infinite]">
                <Card 
                    className="top-1/4 left-1/2 -translate-x-1/2 rotate-[5deg] transform-gpu scale-110"
                    delay="4s"
                />
            </div>
        </div>
    </div>
  );
}
