import { motion } from "motion/react";
import { CRAFT_STEPS } from "../types";

export default function Craft() {
  return (
    <section id="craft" className="py-24 px-6 md:px-12 bg-tea-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-tea-light/50 font-bold text-xs tracking-widest uppercase mb-4 block">Section 02</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            匠心制作：古法非遗
          </h2>
          <p className="text-tea-light/60 max-w-2xl mx-auto">
            江西省级非物质文化遗产，全程手工古法制作，拒绝工业化流水线，九道工序琐住本山本味。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CRAFT_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-4xl font-serif italic text-tea-light/20 group-hover:text-gold transition-colors">
                  0{step.id}
                </span>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-tea-dark transition-all">
                   <div className="w-2 h-2 bg-current rounded-full" />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3">{step.name}</h3>
              <p className="text-tea-light/70 text-sm mb-4 leading-relaxed line-clamp-2">
                {step.description}
              </p>
              <div className="pt-4 border-top border-white/10">
                <p className="text-xs text-gold/60 uppercase tracking-widest font-bold font-sans">工艺细节</p>
                <p className="text-xs text-tea-light/40 mt-1 italic">{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center">
          <div className="cloud-blur ring-1 ring-white/10 px-8 py-4 rounded-2xl text-center max-w-xl">
            <p className="text-tea-dark font-serif italic text-lg">
              “全程杜绝添加剂，最大程度保留本山茶的原生鲜香与醇厚。”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
