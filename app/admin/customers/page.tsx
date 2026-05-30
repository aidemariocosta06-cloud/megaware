'use client'

import * as React from 'react'
import { Users, Search, Mail, Phone, Calendar, ChevronRight, MoreHorizontal } from 'lucide-react'
import { motion } from 'motion/react'

const MOCK_CUSTOMERS = [
  { id: 1, name: 'João Silva', email: 'joao@email.com', phone: '+351 912 345 678', orders: 12, joined: 'Janeiro 2024' },
  { id: 2, name: 'Maria Santos', email: 'maria@email.com', phone: '+351 912 345 679', orders: 5, joined: 'Março 2024' },
  { id: 3, name: 'Carlos Pereira', email: 'carlos@email.com', phone: '+351 912 345 680', orders: 2, joined: 'Abril 2024' },
  { id: 4, name: 'Ana Costa', email: 'ana@email.com', phone: '+351 912 345 681', orders: 24, joined: 'Outubro 2023' },
]

export default function CustomersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-brand-dark mb-1">Base de Clientes</h1>
        <p className="text-slate-500">Visualize e gira a informação dos seus clientes.</p>
      </div>

      <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between gap-6">
        <div className="relative group flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-light transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Pesquisar por nome, email ou telefone..." 
            className="w-full pl-12 pr-6 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-light/20 focus:bg-white transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_CUSTOMERS.map((customer, idx) => (
          <motion.div
            key={customer.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-premium transition-all group"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-16 h-16 bg-brand-bg rounded-full border-2 border-white shadow-sm flex items-center justify-center font-black text-xl text-brand-dark">
                {customer.name.split(' ').map(n => n[0]).join('')}
              </div>
              <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-300 transition-colors">
                <MoreHorizontal size={20} />
              </button>
            </div>

            <h3 className="text-xl font-bold text-brand-dark mb-6">{customer.name}</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-slate-500 text-sm">
                <Mail size={16} className="text-brand-light" />
                {customer.email}
              </div>
              <div className="flex items-center gap-3 text-slate-500 text-sm">
                <Phone size={16} className="text-brand-light" />
                {customer.phone}
              </div>
              <div className="flex items-center gap-3 text-slate-500 text-sm">
                <Calendar size={16} className="text-brand-light" />
                Cliente desde {customer.joined}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
              <div>
                <p className="text-2xl font-black text-brand-dark leading-tight">{customer.orders}</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Encomendas</p>
              </div>
              <button className="bg-brand-bg hover:bg-brand-dark hover:text-white text-brand-dark px-4 py-2 rounded-xl text-xs font-black transition-all">
                Ver Perfil
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
