export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-background">
      <div 
        className="absolute inset-0 -z-20 h-full w-full bg-gradient-to-br from-blue-50/20 via-yellow-50/10 to-red-50/20 bg-[length:400%_400%] animate-[subtle-gradient-bg_20s_ease_infinite]"
      ></div>
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(217,119,6,0.08),rgba(255,255,255,0))] animate-[float-light_12s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-[-80%] right-[-30%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(59,130,246,0.06),rgba(255,255,255,0))] animate-[float-light_15s_ease-in-out_infinite_3s]"></div>
      <div className="absolute bottom-[20%] right-[20%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(239,68,68,0.05),rgba(255,255,255,0))] animate-[float-light_18s_ease-in-out_infinite_6s]"></div>
    </div>
  );
}
