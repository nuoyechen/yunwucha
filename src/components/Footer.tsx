import { Award, ShieldCheck, Map, Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-tea-dark text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-b border-white/10 pb-20 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-8">
               <div className="w-10 h-10 bg-tea-green rounded-full flex items-center justify-center text-sm font-serif">山</div>
               <span className="font-serif font-bold text-2xl tracking-widest uppercase">庐山云雾 · 本山</span>
            </div>
            <p className="text-tea-light/40 max-w-sm text-sm leading-relaxed mb-10">
              我们坚持只做庐山本山茶。可追溯产区与制作流程，将千年灵秀带进您的生活。
            </p>
            <div className="flex flex-wrap gap-8">
               <div className="flex items-center gap-3">
                  <ShieldCheck size={20} className="text-gold" />
                  <span className="text-xs uppercase tracking-widest font-bold">地理标志产品</span>
               </div>
               <div className="flex items-center gap-3">
                  <Leaf size={20} className="text-gold" />
                  <span className="text-xs uppercase tracking-widest font-bold">绿色食品认证</span>
               </div>
               <div className="flex items-center gap-3">
                  <Award size={20} className="text-gold" />
                  <span className="text-xs uppercase tracking-widest font-bold">省级非遗认证</span>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">产地溯源</h4>
              <ul className="space-y-4 text-sm text-tea-light/60">
                <li className="hover:text-white cursor-pointer transition-colors">核心产区规划</li>
                <li className="hover:text-white cursor-pointer transition-colors">茶园实时监控</li>
                <li className="hover:text-white cursor-pointer transition-colors">气候水质监测</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">鉴品指南</h4>
              <ul className="space-y-4 text-sm text-tea-light/60">
                <li className="hover:text-white cursor-pointer transition-colors">冲泡艺术</li>
                <li className="hover:text-white cursor-pointer transition-colors">存储方法</li>
                <li className="hover:text-white cursor-pointer transition-colors">礼赠定制</li>
              </ul>
            </div>
            <div>
               <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">品牌文化</h4>
               <ul className="space-y-4 text-sm text-tea-light/60">
                 <li className="hover:text-white cursor-pointer transition-colors">非物质文化遗产</li>
                 <li className="hover:text-white cursor-pointer transition-colors">历代文献记载</li>
                 <li className="hover:text-white cursor-pointer transition-colors">官方认证证书</li>
               </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold">
          <p>© 2026 庐山云雾茶 · 本山核心产区. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <span className="hover:text-white/40 cursor-pointer">隐私条款</span>
            <span className="hover:text-white/40 cursor-pointer">服务协议</span>
            <span className="hover:text-white/40 cursor-pointer">联系我们</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
