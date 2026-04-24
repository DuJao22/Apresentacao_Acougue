import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { motion } from 'motion/react';

const data = [
  { name: 'Seg', sales: 4000 },
  { name: 'Ter', sales: 3000 },
  { name: 'Qua', sales: 5000 },
  { name: 'Qui', sales: 4500 },
  { name: 'Sex', sales: 9000 },
  { name: 'Sáb', sales: 12000 },
  { name: 'Dom', sales: 11000 },
];

export default function InteractiveChart() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full h-[300px] md:h-[400px] glass p-4 md:p-6 rounded-2xl"
    >
      <div className="mb-4 md:mb-6 flex justify-between items-end">
        <div>
          <h3 className="text-lg md:text-xl font-bold tracking-tight">Performance Mensal</h3>
          <p className="text-[10px] md:text-sm text-white/50">Visualização de faturamento em tempo real</p>
        </div>
        <div className="text-brand-green font-mono text-sm md:text-lg font-bold">+24%</div>
      </div>
      
      <div className="w-full h-full pb-8 md:pb-12">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00FF88" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#00FF88" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
            <XAxis 
              dataKey="name" 
              stroke="#ffffff40" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false}
            />
            <YAxis 
              stroke="#ffffff40" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false} 
              tickFormatter={(value) => `R$ ${value}`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1A1A1A', 
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                fontSize: '10px'
              }} 
              itemStyle={{ color: '#00FF88' }}
            />
            <Area 
              type="monotone" 
              dataKey="sales" 
              stroke="#00FF88" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorSales)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
