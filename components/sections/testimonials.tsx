'use client'

import { Star, Quote } from 'lucide-react'
import { motion } from 'motion/react'

const TESTIMONIALS = [
  {
    name: 'Carlos Oliveira',
    role: 'Cliente Particular',
    content: 'Serviço de reparação excelente! Levei o meu portátil que não ligava e em 24h estava pronto. Equipa muito profissional e honesta.',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2574&auto=format&fit=crop'
  },
  {
    name: 'Ana Martins',
    role: 'Pequena Empresa',
    content: 'A Mega Ware é a nossa parceira tecnológica há 2 anos. Sempre prontos a ajudar com as nossas impressões e manutenção dos servidores.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop'
  },
  {
    name: 'João Pedro',
    role: 'Estudante',
    content: 'A melhor loja de Penacova para comprar acessórios. Bons preços e atendimento 5 estrelas. Super recomendo!',
    image: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=2574&auto=format&fit=crop'
  }
]

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-light font-bold uppercase tracking-widest text-sm mb-4 block">Testemunhos</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark">O Que Dizem os Nossos <span className="text-brand-light">Clientes</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-10 bg-brand-bg rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-premium transition-all duration-500"
            >
              <Quote className="absolute top-8 right-8 text-brand-light opacity-10 group-hover:opacity-20 transition-opacity" size={60} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-amber-500 fill-current" />
                ))}
              </div>
              
              <p className="text-slate-600 mb-8 italic leading-relaxed text-lg">
                &quot;{t.content}&quot;
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-brand-dark">{t.name}</h4>
                  <p className="text-xs text-slate-400 font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
