import Image from 'next/image';

export function BrowserMockup({ src, alt, dataAiHint }: { src: string; alt: string; dataAiHint: string; }) {
  return (
    <div className="relative mx-auto border-gray-200/50 dark:border-gray-700/50 bg-gray-100/20 dark:bg-gray-800/20 rounded-t-lg shadow-xl overflow-hidden w-full backdrop-blur-sm">
      <div className="w-full h-9 bg-gray-200/30 dark:bg-gray-700/30 flex items-center px-3 gap-1.5">
        <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
        <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={750}
        className="object-cover w-full h-auto"
        data-ai-hint={dataAiHint}
      />
    </div>
  );
}
