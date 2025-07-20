export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-background">
      <div className="absolute inset-0 -z-20 h-full w-full bg-gradient-to-br from-blue-50/50 via-yellow-50/20 to-red-50/30 bg-[length:400%_400%] animate-[subtle-gradient-bg_20s_ease_infinite]"></div>
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(51,153,255,0.08),rgba(255,255,255,0))] animate-[float-light_12s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-[-80%] right-[-30%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(102,128,255,0.06),rgba(255,255,255,0))] animate-[float-light_15s_ease-in-out_infinite_3s]"></div>
      <div className="absolute bottom-[20%] right-[20%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,102,102,0.05),rgba(255,255,255,0))] animate-[float-light_18s_ease-in-out_infinite_6s]"></div>
    </div>
  );
}
