export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-background">
      <div 
        className="absolute inset-0 -z-20 h-full w-full bg-gradient-to-br from-background via-blue-100/30 to-background bg-[length:200%_200%] animate-[subtle-gradient-bg_25s_ease_infinite]"
      ></div>
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,255,255,0.05),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-[-80%] right-[-30%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,255,255,0.05),rgba(255,255,255,0))]"></div>
    </div>
  );
}
