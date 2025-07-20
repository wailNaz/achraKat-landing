export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-background">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="absolute left-0 top-0 h-1/2 w-1/2 rounded-full bg-primary/10 blur-[100px] animate-[gradient-flow_15s_ease_infinite]"></div>
      <div className="absolute right-0 bottom-0 h-1/2 w-1/2 rounded-full bg-accent/10 blur-[100px] animate-[gradient-flow_20s_ease_infinite_reverse]"></div>
    </div>
  );
}
