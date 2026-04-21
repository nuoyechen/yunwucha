import { motion } from "motion/react";
import { MapPin, Wind, Sun, Cloud } from "lucide-react";

export default function Origin() {
  return (
    <section id="origin" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
            <img 
              src="/images/origin.jpg"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://picsum.photos/seed/teagarden/1200/1500";
              }}
              alt="Lushan Core Tea Area" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-tea-green text-white p-8 rounded-2xl shadow-2xl hidden md:block max-w-xs">
            <h3 className="font-serif text-2xl mb-2">地理标志保护</h3>
            <p className="text-tea-light/80 text-sm leading-relaxed">
              核心产区覆盖庐山风景名胜区及周边185个乡镇，总面积3.2万亩，每一片茶叶都承载着匡庐灵秀。
            </p>
          </div>
        </motion.div>

        <div className="space-y-10">
          <div>
            <span className="text-tea-green font-bold text-xs tracking-widest uppercase mb-4 block">Section 01</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-6">
              庐山云雾茶起源：千年传承根植匡庐核心
            </h2>
            <p className="text-lg text-ink/70 leading-relaxed max-w-xl">
              庐山云雾茶是根植于庐山核心产区、依托本地群体种培育的本山茶。从东汉僧侣采摘野生茶开启培育，到唐宋明清列为贡茶，千年灵气汇聚于此。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-tea-light rounded-xl flex items-center justify-center text-tea-green">
                <Cloud size={24} />
              </div>
              <h4 className="font-serif font-bold text-xl">云雾润茶</h4>
              <p className="text-sm text-ink/60 leading-relaxed">
                年均云雾日达200天以上，长江、鄱阳湖水汽滋养，形成独特小气候。
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-tea-light rounded-xl flex items-center justify-center text-tea-green">
                <Sun size={24} />
              </div>
              <h4 className="font-serif font-bold text-xl">沃土养茶</h4>
              <p className="text-sm text-ink/60 leading-relaxed">
                独特的酸性沃土，富含有机质，孕育出芽壮叶肥、香凛味甘的特质。
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-tea-light rounded-xl flex items-center justify-center text-tea-green">
                <Wind size={24} />
              </div>
              <h4 className="font-serif font-bold text-xl">本山品种</h4>
              <p className="text-sm text-ink/60 leading-relaxed">
                精选本地群体种，1700多年培育提纯，自然环境不可复制。
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-tea-light rounded-xl flex items-center justify-center text-tea-green">
                <MapPin size={24} />
              </div>
              <h4 className="font-serif font-bold text-xl">核心区位</h4>
              <p className="text-sm text-ink/60 leading-relaxed">
                地处江西九江，江西四大名山之首，自然与人文的完美交融。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
