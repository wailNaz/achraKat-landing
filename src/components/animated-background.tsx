export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-background">
      <div className="absolute inset-0 -z-20 h-full w-full bg-gradient-to-br from-primary/10 via-background to-accent/20 bg-[length:400%_400%] animate-[subtle-gradient-bg_20s_ease_infinite]"></div>
    </div>
  );
}
