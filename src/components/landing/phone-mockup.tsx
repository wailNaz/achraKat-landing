import Image from 'next/image';

export function PhoneMockup() {
  return (
    <div className="relative mx-auto animate-[float_6s_ease-in-out_infinite] w-[300px] h-[600px] md:w-[320px] md:h-[640px]">
      <div className="relative z-10 h-full w-full rounded-[40px] border-8 border-gray-800 bg-gray-800 overflow-hidden shadow-2xl dark:border-gray-600">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-gray-800 rounded-b-xl z-20"></div>

        <div 
          className="h-full w-full bg-cover bg-center animate-[scroll-app-screen_15s_cubic-bezier(0.4,0,0.2,1)_infinite]" 
          style={{backgroundImage: "url('https://placehold.co/800x1733.png')"}}
          data-ai-hint="app interface e-commerce"
        >
        </div>
      </div>

      <div className="absolute -left-1 top-20 h-16 w-1 rounded-l-lg bg-gray-700 dark:bg-gray-500"></div>
      <div className="absolute -left-1 top-40 h-16 w-1 rounded-l-lg bg-gray-700 dark:bg-gray-500"></div>
      <div className="absolute -right-1 top-28 h-24 w-1 rounded-r-lg bg-gray-700 dark:bg-gray-500"></div>
    </div>
  );
}
