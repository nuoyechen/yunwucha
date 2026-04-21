import { motion } from "motion/react";
import { FEATURES } from "../types";
import { Mountain, ScrollText, BadgeCheck, Leaf } from "lucide-react";

const IconMap: { [key: string]: any } = {
  Mountain,
  ScrollText,
  BadgeCheck,
  Leaf
};

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 md:px-12 bg-mist">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-tea-green font-bold text-xs tracking-widest uppercase mb-4 block">Section 03</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink">
              庐山云雾茶独有：<br/>四大核心特点
            </h2>
          </div>
          <div className="hidden lg:block h-px flex-1 bg-tea-green/10 mb-6 mx-8" />
          <p className="text-ink/60 max-w-sm text-sm">
            坚持庐山地理标志保护区本山品种，以“六绝”品质成就中国名茶地位。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((feature, index) => {
            const Icon = IconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-tea-light rounded-2xl flex items-center justify-center text-tea-green mb-8 group-hover:bg-tea-green group-hover:text-white transition-all duration-500">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-ink mb-4">{feature.title}</h3>
                <p className="text-ink/60 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {/* Six Wonders section */}
          <div className="col-span-full mb-8 text-center">
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-tea-green/40 mb-4">“六绝”品质 · 色香味形</h4>
          </div>
          {[
            { tag: "色", name: "条索粗壮", color: "tea-green" },
            { tag: "质", name: "青翠多毫", color: "tea-green" },
            { tag: "汤", name: "汤色明亮", color: "tea-green" },
            { tag: "叶", name: "叶嫩匀齐", color: "tea-green" },
            { tag: "香", name: "香凛持久", color: "tea-green" },
            { tag: "味", name: "醇厚味甘", color: "tea-green" },
          ].map((item, i) => (
            <div key={item.name} className="flex flex-col items-center p-6 border border-tea-green/10 rounded-2xl bg-white/50 backdrop-blur-sm">
               <span className="text-tea-green font-serif text-3xl font-bold mb-2">{item.tag}</span>
               <span className="text-xs font-bold text-ink/80 tracking-widest">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
