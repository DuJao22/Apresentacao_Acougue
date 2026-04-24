import { motion } from 'motion/react';
import { LayoutDashboard, ShoppingCart, Package, TrendingUp, Users, Settings } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function DashboardMockup() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-full max-w-4xl mx-auto glass rounded-2xl overflow-hidden shadow-2xl shadow-brand-green/10"
    >
      {/* Top Bar */}
      <div className="h-10 bg-brand-dark/80 border-b border-white/5 flex items-center px-4 gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="mx-auto text-[10px] text-white/20 uppercase tracking-widest font-display">
          Churrascaria Digital OS v1.0
        </div>
      </div>

      <div className="flex aspect-video">
        {/* Sidebar */}
        <div className="w-16 border-r border-white/5 bg-brand-black/20 flex flex-col items-center py-6 gap-6">
          {[LayoutDashboard, ShoppingCart, Package, TrendingUp, Users, Settings].map((Icon, i) => (
            <Icon key={i} className={cn("w-5 h-5", i === 0 ? "text-brand-green" : "text-white/30")} />
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 p-8 grid grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">
            <div className="h-28 md:h-40 glass rounded-xl p-4 flex flex-col justify-between">
              <div className="text-[10px] text-white/50 uppercase tracking-wider">Vendas Hoje</div>
              <div className="text-xl md:text-3xl font-display font-bold text-brand-green tracking-tight">R$ 12.450,00</div>
              <div className="flex items-center gap-2 text-xs text-brand-green/70">
                <TrendingUp className="w-4 h-4" />
                <span>+14% em relação a ontem</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-24 glass rounded-xl p-4 flex flex-col justify-between">
                 <div className="text-[8px] text-white/40 uppercase">Pedidos Ativos</div>
                 <div className="text-xl font-bold">18</div>
              </div>
              <div className="h-24 glass rounded-xl p-4 flex flex-col justify-between">
                 <div className="text-[8px] text-white/40 uppercase">Estoque Baixo</div>
                 <div className="text-xl font-bold text-red-500">4</div>
              </div>
            </div>
          </div>
          <div className="col-span-1 glass rounded-xl p-4 space-y-4 hidden md:block">
            <div className="text-[10px] text-white/50 uppercase tracking-wider">Top Produtos</div>
            {[
              { name: "Picanha Premium", val: "85%" },
              { name: "Costela no Bafo", val: "72%" },
              { name: "Vino Reserva", val: "54%" }
            ].map((item, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-[10px]">
                  <span>{item.name}</span>
                  <span className="text-brand-green">{item.val}</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: item.val }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                    className="h-full bg-brand-green/50" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
