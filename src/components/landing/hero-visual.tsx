import Image from 'next/image';
import { cn } from "@/lib/utils";

export function HeroVisual() {
  return (
    <div className="relative w-[300px] h-[600px] sm:w-[350px] sm:h-[700px] animate-[float_10s_ease-in-out_infinite]">
        <div className="relative z-10 h-full w-full rounded-[40px] sm:rounded-[50px] border-8 sm:border-[10px] border-gray-800 bg-gray-900 overflow-hidden shadow-2xl dark:border-gray-600">
            <div 
                className="w-full h-full bg-cover bg-center animate-[scroll-app-screen_15s_cubic-bezier(0.4,0,0.2,1)_infinite]"
                style={{backgroundImage: `url('https://placehold.co/400x866.png')`}}
                data-ai-hint="app interface collage"
            ></div>
            <div className="absolute top-0 left-0 w-full h-full rounded-[32px] sm:rounded-[40px] shadow-[inset_0_0_20px_rgba(0,0,0,0.3)]"></div>
        </div>
        <div className="absolute -left-1.5 top-20 h-16 w-1.5 rounded-l-lg bg-gray-700 dark:bg-gray-500"></div>
        <div className="absolute -left-1.5 top-48 h-12 w-1.5 rounded-l-lg bg-gray-700 dark:bg-gray-500"></div>
        <div className="absolute -right-1.5 top-32 h-24 w-1.5 rounded-r-lg bg-gray-700 dark:bg-gray-500"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl dark:bg-gray-600"></div>
    </div>
  );
}
