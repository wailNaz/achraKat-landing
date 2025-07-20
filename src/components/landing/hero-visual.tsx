import Image from 'next/image';

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-[280px] h-[560px] sm:w-[320px] sm:h-[640px] animate-[float_8s_ease-in-out_infinite]">
      <div className="relative z-10 h-full w-full rounded-[40px] sm:rounded-[50px] border-4 sm:border-8 border-gray-800 bg-gray-800 overflow-hidden shadow-2xl dark:border-gray-600">
        <Image
          src="https://placehold.co/400x866.png"
          alt="App screen"
          width={400}
          height={866}
          className="object-cover w-full h-full"
          data-ai-hint="app homescreen ecommerce"
          priority
        />
      </div>
      <div className="absolute -left-1 top-20 h-16 w-1.5 rounded-l-lg bg-gray-700 dark:bg-gray-500"></div>
      <div className="absolute -left-1 top-40 h-16 w-1.5 rounded-l-lg bg-gray-700 dark:bg-gray-500"></div>
      <div className="absolute -right-1 top-32 h-24 w-1.5 rounded-r-lg bg-gray-700 dark:bg-gray-500"></div>

      <div className="absolute -bottom-4 -z-10 w-full h-12 bg-black/20 blur-2xl"></div>
    </div>
  );
}
