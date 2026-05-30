'use client'

import { Mail, Phone, MapPin, Send, Instagram, Facebook } from 'lucide-react'
import { motion } from 'motion/react'

export function Contacts() {
  return (
    <section id="contactos" className="py-24 px-6 bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-brand-light font-bold uppercase tracking-widest text-sm mb-4 block">Onde Estamos</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-8">
              Fale Connosco
            </h2>
            <p className="text-slate-600 text-lg mb-12 max-w-lg leading-relaxed">
              Tem alguma dúvida ou precisa de assistência? A nossa equipa está pronta para ajudar. Visite-nos ou envie uma mensagem.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-light shadow-sm group-hover:bg-brand-light group-hover:text-white transition-all shrink-0 border border-slate-100">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-xl mb-1">Localização</h4>
                  <p className="text-slate-500 leading-relaxed">Av. Principal, Edifício Central, Penacova, Portugal</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-light shadow-sm group-hover:bg-brand-light group-hover:text-white transition-all shrink-0 border border-slate-100">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-xl mb-1">Telefone</h4>
                  <p className="text-slate-500 leading-relaxed">+351 239 000 000</p>
                  <p className="text-xs text-slate-400 mt-1">Geral / Emergências</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-light shadow-sm group-hover:bg-brand-light group-hover:text-white transition-all shrink-0 border border-slate-100">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-xl mb-1">Email</h4>
                  <p className="text-slate-500 leading-relaxed">geral@megaware.pt</p>
                  <p className="text-xs text-slate-400 mt-1">Apoio ao Cliente</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <h4 className="font-bold text-brand-dark">Siga-nos:</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-dark hover:bg-brand-light hover:text-white transition-all border border-slate-100 shadow-sm">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-dark hover:bg-brand-light hover:text-white transition-all border border-slate-100 shadow-sm">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[2.5rem] shadow-premium border border-slate-100"
          >
            <h3 className="text-2xl font-black text-brand-dark mb-8">Envie uma Mensagem</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-2">Nome</label>
                  <input 
                    type="text" 
                    placeholder="Seu nome"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-light/20 focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="exemplo@email.com"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-light/20 focus:bg-white transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-2">Assunto</label>
                <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-light/20 focus:bg-white transition-all text-slate-600 appearance-none">
                  <option>Assistência Técnica</option>
                  <option>Dúvida sobre Produtos</option>
                  <option>Orçamento Personalizado</option>
                  <option>Apoio Digital</option>
                  <option>Outros</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-2">Mensagem</label>
                <textarea 
                  rows={5} 
                  placeholder="Como podemos ajudar?"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-light/20 focus:bg-white transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-brand-dark hover:bg-brand-light text-white py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand-dark/10 active:scale-95">
                Enviar Mensagem
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
