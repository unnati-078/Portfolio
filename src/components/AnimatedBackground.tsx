
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 animate-gradient-shift bg-[length:400%_400%]" />
      
      {/* Floating Shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 blur-xl float-1" />
      <div className="absolute top-1/3 right-20 w-48 h-48 rounded-full bg-gradient-to-r from-neon-aqua/20 to-neon-green/20 blur-xl float-2" />
      <div className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 blur-xl float-3" />
      <div className="absolute bottom-1/4 right-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-neon-green/20 to-neon-aqua/20 blur-xl float-1" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
    </div>
  );
};

export default AnimatedBackground;
