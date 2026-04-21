import { motion } from "motion/react";

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className="cloud-blur ring-1 ring-black/5 px-8 py-3 rounded-full flex items-center gap-8 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-tea-green rounded-full flex items-center justify-center text-[10px] text-white font-serif">山</div>
          <span className="font-serif font-bold text-lg tracking-wider">庐山云雾</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#origin" className="hover:text-tea-green transition-colors">本山茶源</a>
          <a href="#craft" className="hover:text-tea-green transition-colors">匠心制作</a>
          <a href="#features" className="hover:text-tea-green transition-colors">核心优势</a>
        </div>
      </div>
    </motion.nav>
  );
}
