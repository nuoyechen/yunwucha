import { motion } from "motion/react";
import { PRODUCTS } from "../types";
import { CheckCircle } from "lucide-react";

export default function Products() {
  return (
    <section id="products" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-tea-green font-bold text-xs tracking-widest uppercase mb-4 block">Section 04</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-6">
            产品系列
          </h2>
          <p className="text-ink/60 max-w-2xl mx-auto">
            适配不同场景需求，严选核心产区本山品种。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col h-full bg-mist rounded-3xl overflow-hidden group border border-tea-green/5"
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {product.tags.map(tag => (
                    <span key={tag} className="bg-white/90 backdrop-blur-md text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full text-tea-green shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-ink">{product.name}</h3>
                    <p className="text-sm text-tea-green font-medium mt-1">{product.grade}</p>
                  </div>
                  <span className="text-[10px] font-bold text-ink/40 border border-ink/10 px-2 py-1 rounded uppercase tracking-[0.2em]">
                    {product.time}
                  </span>
                </div>
                
                <p className="text-ink/70 text-sm leading-relaxed mb-8 flex-1 italic">
                  {product.description}
                </p>

                <ul className="space-y-3 mb-8">
                   <li className="flex items-center gap-3 text-sm text-ink/80">
                      <CheckCircle size={16} className="text-tea-green" />
                      <span>地理标志保护产区直供</span>
                   </li>
                   <li className="flex items-center gap-3 text-sm text-ink/80">
                      <CheckCircle size={16} className="text-tea-green" />
                      <span>本山群体种正宗品种</span>
                   </li>
                   <li className="flex items-center gap-3 text-sm text-ink/80">
                      <CheckCircle size={16} className="text-tea-green" />
                      <span>非遗古法精益制作</span>
                   </li>
                </ul>

                <button className="w-full bg-tea-green text-white py-4 rounded-2xl font-bold tracking-widest text-sm hover:bg-tea-dark transition-all transform group-hover:-translate-y-1">
                  了解详情 & 鉴赏
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
