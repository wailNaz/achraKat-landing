import { cn } from "@/lib/utils";

const Orb = ({ className, size = 'w-4 h-4' }: { className?: string, size?: string }) => (
    <div 
        className={cn(
            'absolute rounded-full bg-primary/50 blur-sm animate-[float_10s_ease-in-out_infinite]',
            size,
            className
        )}
    >
        <div className={cn("absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/50 via-red-500/50 to-blue-500/50 animate-pulse")}></div>
    </div>
);

const ConnectionLine = ({ className }: { className?: string }) => (
    <div 
        className={cn(
            "absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent",
            className
        )}
    />
)

export function HeroVisual() {
  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">
            {/* Central glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-24 h-24">
                     <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-[float_8s_ease-in-out_infinite]"></div>
                     <div className="absolute inset-2 rounded-full bg-gradient-to-br from-yellow-400/30 via-red-500/30 to-blue-500/30 animate-pulse"></div>
                </div>
            </div>

            {/* Satellite orbs */}
            <Orb className="top-0 left-1/4" size="w-3 h-3" style={{animationDelay: '0s'}} />
            <Orb className="top-1/4 right-0" size="w-5 h-5" style={{animationDelay: '2s'}} />
            <Orb className="bottom-0 left-1/2" size="w-4 h-4" style={{animationDelay: '4s'}} />
            <Orb className="left-0 top-1/2" size="w-6 h-6" style={{animationDelay: '6s'}} />
            <Orb className="right-1/4 bottom-1/4" size="w-2 h-2" style={{animationDelay: '8s'}} />
            <Orb className="bottom-1/3 left-1/4" size="w-3 h-3" style={{animationDelay: '10s'}}/>

            {/* Faint connecting lines (for illustrative effect) - these would ideally be more dynamic */}
            <ConnectionLine className="top-[20%] left-0 w-3/4 rotate-45" />
            <ConnectionLine className="top-[50%] right-0 w-2/3 -rotate-12" />
            <ConnectionLine className="bottom-[30%] left-0 w-full rotate-12" />
        </div>
    </div>
  );
}
