'use client'

import { CheckCircle2, Award, Clock, Users } from 'lucide-react'
import { motion } from 'motion/react'

export function About() {
  return (
    <section id="sobre" className="py-24 px-6 bg-brand-bg overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-premium z-10 border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop" 
              alt="Sobre a Mega Ware" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative accents */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-light rounded-2xl -z-10 opacity-10 rotate-12"></div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-dark rounded-full -z-10 opacity-5 blur-3xl"></div>
          
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl z-20 border border-white/50">
            <div className="flex items-center gap-4">
              <div className="bg-brand-dark text-white p-3 rounded-lg">
                <Award size={24} />
              </div>
              <div>
                <p className="text-xs text-brand-light font-bold uppercase tracking-widest">Líder Regional</p>
                <p className="font-bold text-slate-900">Excelência em Penacova</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <span className="text-brand-light font-bold uppercase tracking-widest text-sm mb-4 block">Sobre Nós</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 leading-tight">
              Sua Parceira de Confiança na Era Digital
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Fundada em Penacova, a Mega Ware nasceu com a missão de democratizar o acesso à tecnologia e oferecer soluções digitais de alta qualidade. Somos mais do que uma loja de informática; somos o seu suporte tecnológico de confiança.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex gap-3">
              <CheckCircle2 className="text-brand-light shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900">Qualidade</h4>
                <p className="text-sm text-slate-500">Produtos certificados</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="text-brand-light shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900">Inovação</h4>
                <p className="text-sm text-slate-500">Sempre atualizados</p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <h4 className="font-bold text-xl text-brand-dark">A Nossa Trajetória</h4>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-1">
                <p className="text-3xl font-black text-brand-light">1500+</p>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Reparações</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-black text-brand-light">100%</p>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Satisfação</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 italic">
              &quot;Focamos na rapidez e eficácia para que você nunca fique desconectado do que mais importa.&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
