'use client'

import { Tag, ArrowRight, Zap, Gift, Clock } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'

export function Promotions() {
  return (
    <section id="promocoes" className="py-24 px-6 relative overflow-hidden">
      {/* Background with abstract shapes */}
      <div className="absolute inset-0 bg-brand-dark -z-20"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-light/10 -z-10 skew-x-12 translate-x-20"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-light/20 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-8 animate-pulse shadow-lg shadow-red-500/20">
              <Zap size={14} />
              Oferta Limitada
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight">
              Prepare-se para o <br />
              <span className="text-brand-light">Mega Desconto</span> da Semana
            </h2>
            <p className="text-blue-100/70 text-lg mb-10 max-w-lg leading-relaxed">
              Até 40% de desconto em periféricos selecionados e assistência técnica. Não perca a oportunidade de atualizar o seu setup!
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
               <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                  <Clock className="text-brand-light mb-3" size={24} />
                  <p className="text-2xl font-black">24h</p>
                  <p className="text-[10px] font-bold text-blue-100/50 uppercase tracking-widest">Restantes</p>
               </div>
               <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                  <Gift className="text-brand-light mb-3" size={24} />
                  <p className="text-2xl font-black">Oferta</p>
                  <p className="text-[10px] font-bold text-blue-100/50 uppercase tracking-widest">Em Compras {'>'} 50€</p>
               </div>
               <div className="hidden sm:block bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                  <Tag className="text-brand-light mb-3" size={24} />
                  <p className="text-2xl font-black">40% OFF</p>
                  <p className="text-[10px] font-bold text-blue-100/50 uppercase tracking-widest">Selecionados</p>
               </div>
            </div>

            <Link 
              href="#loja" 
              className="inline-flex items-center gap-3 bg-white text-brand-dark px-10 py-5 rounded-2xl font-black text-lg hover:bg-brand-light hover:text-white transition-all shadow-2xl active:scale-95"
            >
              Aproveitar agora
              <ArrowRight size={20} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1593642632823-8f785bc67e73?q=80&w=2670&auto=format&fit=crop" 
                alt="Promoção Mega Ware" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Price Tag */}
            <div className="absolute -top-10 -right-10 bg-brand-light text-white p-10 rounded-full shadow-2xl flex flex-col items-center justify-center rotate-12 animate-bounce-slow border-8 border-brand-dark">
                <span className="text-sm font-bold uppercase tracking-widest">Desde</span>
                <span className="text-4xl font-black">9.99€</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
