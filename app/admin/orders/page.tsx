'use client'

import * as React from 'react'
import { ShoppingBag, Search, Filter, Eye, Download, ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

const MOCK_ORDERS = [
  { id: '#ORD-7281', customer: 'João Silva', email: 'joao@email.com', date: 'Há 2 horas', status: 'Pendente', total: '120.00€', items: 3 },
  { id: '#ORD-7280', customer: 'Maria Santos', email: 'maria@email.com', date: 'Há 5 horas', status: 'Concluído', total: '59.90€', items: 1 },
  { id: '#ORD-7279', customer: 'Carlos Pereira', email: 'carlos@email.com', date: 'Ontem', status: 'Cancelado', total: '24.50€', items: 2 },
  { id: '#ORD-7278', customer: 'Ana Costa', email: 'ana@email.com', date: 'Ontem', status: 'Concluído', total: '189.00€', items: 1 },
]

export default function OrdersPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-brand-dark mb-1">Gestão de Encomendas</h1>
          <p className="text-slate-500">Acompanhe e gira as vendas da sua loja online.</p>
        </div>
        <button className="bg-slate-50 hover:bg-white text-slate-600 px-6 py-3.5 rounded-2xl font-black border border-slate-100 flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95">
          <Download size={20} />
          Exportar CSV
        </button>
      </div>

      <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between gap-6">
        <div className="relative group flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-light transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Pesquisar por ID, cliente ou email..." 
            className="w-full pl-12 pr-6 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-light/20 focus:bg-white transition-all"
          />
        </div>
        <div className="flex gap-4">
          <select className="px-6 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-light/20 transition-all font-bold text-slate-600 text-sm">
            <option>Todos os Status</option>
            <option>Pendente</option>
            <option>Concluído</option>
            <option>Cancelado</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">ID Encomenda</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Cliente</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Data</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Total</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Status</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {MOCK_ORDERS.map((order, idx) => (
                <motion.tr 
                  key={order.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="hover:bg-slate-50/50 transition-colors group"
                >
                  <td className="px-8 py-6 font-bold text-brand-dark">{order.id}</td>
                  <td className="px-8 py-6">
                    <p className="font-bold text-slate-900">{order.customer}</p>
                    <p className="text-xs text-slate-400">{order.email}</p>
                  </td>
                  <td className="px-8 py-6 text-sm text-slate-500 font-medium">{order.date}</td>
                  <td className="px-8 py-6 font-black text-brand-dark">
                    {order.total}
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{order.items} itens</p>
                  </td>
                  <td className="px-8 py-6">
                    <span className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                        order.status === 'Concluído' ? "bg-emerald-100 text-emerald-600" : 
                        order.status === 'Pendente' ? "bg-amber-100 text-amber-600" :
                        "bg-rose-100 text-rose-600"
                      )}>
                        {order.status}
                      </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="p-2.5 hover:bg-white border border-transparent hover:border-slate-100 rounded-xl text-slate-300 hover:text-brand-light transition-all shadow-sm">
                      <Eye size={18} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
