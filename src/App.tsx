/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { 
  AlertTriangle, 
  Package, 
  Users, 
  Smartphone, 
  CreditCard, 
  LayoutDashboard, 
  LineChart, 
  Boxes, 
  Zap, 
  CheckCircle2,
  ChevronDown,
  MessageCircle
} from 'lucide-react';
import Background3D from '@/src/components/Background3D';
import DashboardMockup from '@/src/components/DashboardMockup';
import InteractiveChart from '@/src/components/InteractiveChart';
import { cn } from '@/src/lib/utils';

interface FrameProps {
  children: React.ReactNode;
  className?: string;
}

const Frame = ({ children, className }: FrameProps) => (
  <section className={cn("min-h-screen w-full relative flex flex-col items-center justify-center px-6 md:px-12 py-20 overflow-hidden", className)}>
    {children}
  </section>
);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scaleBackground = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div ref={containerRef} className="relative bg-brand-black selection:bg-brand-green selection:text-brand-black">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-green opacity-5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-green opacity-5 rounded-full blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 h-20 border-b border-brand-dark flex items-center justify-between px-6 md:px-12 z-[60] glass backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-brand-black rounded-sm" />
          </div>
          <span className="font-bold tracking-tighter text-xl">CHURRASCARIA<span className="text-brand-green">OS</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest text-white/70">
          <span className="text-brand-green cursor-pointer">Início</span>
          <span className="hover:text-white cursor-pointer transition-colors">Sistema</span>
          <span className="hover:text-white cursor-pointer transition-colors">Benefícios</span>
          <span className="hover:text-white cursor-pointer transition-colors">Contato</span>
        </div>
      </nav>

      <motion.div style={{ scale: scaleBackground }} className="fixed inset-0 -z-10 bg-brand-black">
        <Background3D />
      </motion.div>
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-green origin-left z-50"
        style={{ scaleX }}
      />

      <div className="relative z-10">
        {/* FRAME 1: IMPACTO INICIAL */}
        <Frame>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-center max-w-4xl"
          >
            <h2 className="text-brand-green text-sm font-bold uppercase tracking-[0.3em] mb-4">Inteligência Comercial</h2>
            <h1 className="text-5xl md:text-8xl font-black leading-[1] mb-8 tracking-tighter">
              Transformando sua churrascaria em uma <span className="text-gradient">máquina digital de vendas.</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
              Venda todos os dias, mesmo quando as portas estão fechadas. Controle total de pedidos, estoque e faturamento em tempo real.
            </p>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-px h-12 bg-gradient-to-b from-brand-green to-transparent" />
              <span className="text-[10px] uppercase tracking-widest text-brand-green font-bold">Scroll</span>
            </motion.div>
          </motion.div>
        </Frame>

        {/* FRAME 2: DOR DO CLIENTE */}
        <Frame className="bg-gradient-to-b from-transparent to-brand-dark/30">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
            {[
              { icon: AlertTriangle, title: "Pedidos desorganizados", desc: "Erros que custam caro na ponta do lápis." },
              { icon: Boxes, title: "Falta de controle no estoque", desc: "Produtos acabando sem você notar." },
              { icon: Users, title: "Clientes indo embora", desc: "Por falta de praticidade no atendimento." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="glass p-8 rounded-3xl border-white/5 hover:border-brand-green/30 transition-colors group"
              >
                <item.icon className="w-12 h-12 text-brand-green mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/60 mt-20 text-center uppercase tracking-widest"
          >
             Isso acontece hoje com você?
          </motion.h2>
        </Frame>

        {/* FRAME 3: A VIRADA */}
        <Frame>
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)", y: 50 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center"
          >
            <Zap className="w-16 h-16 text-brand-green mx-auto mb-8 animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
              Agora imagine tudo isso resolvido em um único 
              <span className="text-brand-green block">sistema inteligente.</span>
            </h2>
          </motion.div>
        </Frame>

        {/* FRAME 4: APRESENTAÇÃO DO SISTEMA */}
        <Frame className="bg-brand-dark/20">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-green uppercase tracking-[0.2em] text-sm mb-4"
            >
              Solução Completa
            </motion.p>
            <h2 className="text-3xl md:text-5xl font-bold">Gestão + Vendas Online</h2>
          </div>
          <DashboardMockup />
        </Frame>

        {/* FRAME 5: MARKETPLACE (COMPRA PELO CELULAR) */}
        <Frame>
          <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl">
            <div className="flex-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Seus clientes compram <span className="text-brand-green">direto pelo celular</span>
                </h2>
                <ul className="space-y-4">
                  {[
                    "Catálogo digital interativo",
                    "Pedidos 100% online via sistema inteligente",
                    "Notificações instantâneas de novos pedidos",
                    "Avisos automáticos quando o pedido está pronto",
                    "Pagamento integrado e seguro"
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70">
                      <CheckCircle2 className="w-5 h-5 text-brand-green" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <div className="flex-1 relative">
              <motion.div 
                initial={{ rotate: -5, y: 30, opacity: 0 }}
                whileInView={{ rotate: 5, y: 0, opacity: 1 }}
                className="w-64 h-[500px] glass rounded-[3rem] border-8 border-brand-dark overflow-hidden relative"
              >
                <div className="bg-brand-green/20 h-full w-full p-4 space-y-4">
                  <div className="h-40 bg-brand-black/40 rounded-2xl animate-pulse" />
                  <div className="h-6 bg-brand-black/40 rounded-full w-3/4 animate-pulse" />
                  <div className="h-6 bg-brand-black/40 rounded-full w-1/2 animate-pulse" />
                  <div className="mt-auto h-12 bg-brand-green rounded-xl flex items-center justify-center font-bold text-brand-black">
                     Finalizar Pedido
                  </div>
                </div>
              </motion.div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute inset-0 bg-brand-green rounded-full blur-[100px] -z-10 opacity-30"
              />
            </div>
          </div>
        </Frame>

        {/* FRAME 6 & 7: PAINEL & RELATÓRIOS */}
        <Frame className="bg-brand-dark/20">
          <div className="max-w-6xl w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <motion.h2 
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   className="text-4xl md:text-5xl font-bold mb-6"
                >
                  Você controla tudo em <span className="text-brand-green">tempo real</span>
                </motion.h2>
                <p className="text-white/80 text-lg">
                  Tome decisões baseadas em dados reais, não em palpites. 
                  Veja exatamente quanto está lucrando a qualquer momento.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                   <div className="glass p-4 rounded-xl">
                      <div className="text-brand-green text-2xl font-bold">R$ 142k</div>
                      <div className="text-xs text-white/70 uppercase">Mensal</div>
                   </div>
                   <div className="glass p-4 rounded-xl">
                      <div className="text-brand-green text-2xl font-bold">+18%</div>
                      <div className="text-xs text-white/70 uppercase">Crescimento</div>
                   </div>
                </div>
              </div>
              <InteractiveChart />
            </div>
          </div>
        </Frame>

        {/* FRAME 8: ESTOQUE INTELIGENTE */}
        <Frame>
          <div className="text-center max-w-4xl">
            <Package className="w-16 h-16 text-white/60 mx-auto mb-8" />
            <h2 className="text-4xl font-bold mb-8 italic">
              "Nunca mais fique sem produto sem perceber."
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {["Picanha", "Contra-filé", "Costela", "Bebidas", "Carvão"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="px-6 py-2 glass rounded-full text-brand-green border-brand-green/20"
                >
                  {item}: OK
                </motion.div>
              ))}
            </div>
          </div>
        </Frame>

        {/* FRAME 9: DIFERENCIAL */}
        <Frame className="bg-gradient-to-t from-brand-green/10 to-transparent">
          <motion.div
            initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center max-w-5xl"
          >
            <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter">
              Isso não é só um sistema...
            </h2>
            <p className="text-2xl md:text-4xl text-white/70 font-light">
              É uma nova forma de <span className="text-brand-green font-bold italic underline decoration-brand-green/30">vender mais com menos esforço.</span>
            </p>
          </motion.div>
        </Frame>

        {/* FRAME 10: AUTORIDADE */}
        <Frame>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center"
          >
            <div className="w-24 h-24 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-8 border border-brand-green/30">
               <span className="text-3xl font-display font-bold text-brand-green">JL</span>
            </div>
            <h3 className="text-3xl font-bold mb-2">Desenvolvido por João Layon</h3>
            <p className="text-brand-green/80 uppercase tracking-widest text-sm font-medium">
              Soluções Digitais de Alta Performance
            </p>
          </motion.div>
        </Frame>

        {/* FRAME 11: OPORTUNIDADE */}
        <Frame className="bg-brand-dark/40 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
             <div className="grid grid-cols-12 h-full">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="border-r border-white/10" />
                ))}
             </div>
          </div>
          <div className="text-center relative z-10">
             <div className="inline-block px-4 py-1 bg-red-500/20 text-red-500 rounded-full text-xs font-bold mb-6 animate-pulse border border-red-500/30 uppercase tracking-tighter">
                Oportunidade Limitada
             </div>
             <h2 className="text-4xl md:text-6xl font-bold mb-8">Sistema em fase inicial</h2>
             <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
               Estamos selecionando as primeiras churrascarias parceiras para condições exclusivas de implantação.
             </p>
          </div>
        </Frame>

        {/* FRAME 12: CHAMADA FINAL */}
        <Frame className="pb-0 h-auto min-h-0">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-center w-full max-w-6xl bg-brand-dark rounded-t-[3rem] p-12 md:p-24 border-x border-t border-white/5 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-brand-green/5 to-transparent pointer-events-none" />
            <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter leading-none">
              Pronto para o <br/>
              <span className="text-gradient">próximo nível?</span>
            </h2>
            
            <a 
              href="https://wa.me/5531990780959?text=Ol%C3%A1%20Jo%C3%A3o%2C%20vi%20a%20apresenta%C3%A7%C3%A3o%20cinematogr%C3%A1fica.%20Tenho%20interesse%20no%20sistema%20para%20minha%20churrascaria!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-brand-green text-brand-black rounded-full font-black uppercase text-sm tracking-tighter hover:scale-105 transition-all shadow-2xl shadow-brand-green/20"
            >
              <span>Quero esse sistema</span>
              <Zap className="w-4 h-4 fill-brand-black" />
            </a>
          </motion.div>
        </Frame>

        {/* FOOTER */}
        <footer className="h-auto md:h-32 bg-brand-black border-t border-brand-dark px-6 md:px-12 py-8 md:py-0 flex flex-col md:flex-row items-center justify-between z-10 relative">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <div className="w-12 h-12 rounded-full bg-brand-dark border border-white/10 flex items-center justify-center text-xs font-bold text-brand-green text-glow">JL</div>
            <div>
              <p className="text-[10px] uppercase font-bold text-white/60">Desenvolvido por</p>
              <p className="text-base font-bold text-white">João Layon</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-center md:text-right">
              <p className="text-xs font-bold uppercase text-white tracking-widest">Condição Especial Ativa</p>
              <p className="text-[10px] text-white/70">Fase inicial para novos parceiros • 2026</p>
            </div>
            <div className="flex gap-4 text-[10px] font-bold uppercase text-white/60">
               <span>Privacidade</span>
               <span>Termos</span>
            </div>
          </div>
        </footer>

        {/* Background Large Text */}
        <div className="fixed bottom-32 left-1/2 -translate-x-1/2 opacity-[0.02] pointer-events-none text-[20vw] font-black tracking-tighter whitespace-nowrap select-none -z-20 leading-none">
          CHURRASCO
        </div>
      </div>

      {/* Floating CTA for Mobile or when scrolling deep */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="fixed bottom-8 right-8 z-[100] md:hidden"
        >
          <a 
            href="https://wa.me/5531990780959" 
            className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center text-brand-black shadow-2xl shadow-brand-green/40"
          >
            <MessageCircle className="w-8 h-8" />
          </a>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
