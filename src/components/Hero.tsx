import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-mist">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.jpg"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "https://picsum.photos/seed/lushan/1920/1080";
          }}
          alt="Lushan Clouds" 
          className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mist/0 via-mist/50 to-mist" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1 rounded-full border border-tea-green/20 text-tea-green text-sm font-medium tracking-widest uppercase mb-4">
            千年本山 · 核心产区
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-ink leading-tight mb-6">
            庐山云雾茶
          </h1>
          <p className="text-xl md:text-2xl text-tea-dark/70 font-serif italic tracking-wide max-w-2xl mx-auto leading-relaxed">
            “源自核心产区的本山茶” —— 根植匡庐核心，千年灵气孕育。
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-[0.2em] text-tea-green/60 mb-2 font-bold font-sans">海拔高度</span>
            <span className="text-2xl font-serif font-bold">800 - 1200m</span>
          </div>
          <div className="w-[1px] h-12 bg-tea-green/10" />
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-[0.2em] text-tea-green/60 mb-2 font-bold font-sans">云雾天数</span>
            <span className="text-2xl font-serif font-bold">200+ 天/年</span>
          </div>
          <div className="w-[1px] h-12 bg-tea-green/10" />
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-[0.2em] text-tea-green/60 mb-2 font-bold font-sans">本地群体种</span>
            <span className="text-2xl font-serif font-bold">本山嫡传</span>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-tea-green/40 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-widest font-bold font-sans">探索本源</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
}
