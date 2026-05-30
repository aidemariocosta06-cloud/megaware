'use client'

import { 
  Package, 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  Clock,
  ChevronRight,
  MessageSquare,
  Tag
} from 'lucide-react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

const stats = [
  { name: 'Total Produtos', value: '48', icon: Package, change: '+4', trend: 'up', color: 'bg-blue-500' },
  { name: 'Total Vendas', value: '1,280.00€', icon: ShoppingCart, change: '+12%', trend: 'up', color: 'bg-emerald-500' },
  { name: 'Total Clientes', value: '312', icon: Users, change: '+18', trend: 'up', color: 'bg-violet-500' },
  { name: 'Produtos Vistos', value: '5,420', icon: TrendingUp, change: '-2%', trend: 'down', color: 'bg-amber-500' },
]

const recentOrders = [
  { id: '#ORD-7281', customer: 'João Silva', date: 'Há 2 horas', status: 'Pendente', total: '120.00€' },
  { id: '#ORD-7280', customer: 'Maria Santos', date: 'Há 5 horas', status: 'Concluído', total: '59.90€' },
  { id: '#ORD-7279', customer: 'Carlos Pereira', date: 'Ontem', status: 'Cancelado', total: '24.50€' },
]

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-brand-dark mb-1">Bem-vindo, Admin!</h1>
          <p className="text-slate-500 text-lg">Aqui está o resumo do que está a acontecer hoje.</p>
        </div>
        <div className="flex items-center gap-2 text-sm font-bold text-slate-400">
          <Clock size={16} />
          <span>Última atualização: Hoje às 14:30</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-premium transition-all group"
          >
            <div className="flex items-center justify-between mb-6">
              <div className={`w-12 h-12 ${stat.color} text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                <stat.icon size={24} />
              </div>
              <div className={cn(
                "flex items-center gap-1 text-xs font-black uppercase tracking-widest",
                stat.trend === 'up' ? "text-emerald-500" : "text-rose-500"
              )}>
                {stat.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.change}
              </div>
            </div>
            <p className="text-slate-500 font-bold text-sm uppercase tracking-widest mb-1">{stat.name}</p>
            <h3 className="text-2xl font-black text-brand-dark">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Orders Table */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex items-center justify-between">
            <h3 className="text-xl font-black text-brand-dark">Encomendas Recentes</h3>
            <button className="text-brand-light text-sm font-bold hover:underline">Ver tudo</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-8 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">ID Encomenda</th>
                  <th className="px-8 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Cliente</th>
                  <th className="px-8 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                  <th className="px-8 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Total</th>
                  <th className="px-8 py-4 text-left"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-6 font-bold text-slate-900">{order.id}</td>
                    <td className="px-8 py-6">
                       <p className="font-bold text-slate-700">{order.customer}</p>
                       <p className="text-xs text-slate-400">{order.date}</p>
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
                    <td className="px-8 py-6 font-black text-brand-dark">{order.total}</td>
                    <td className="px-8 py-6 text-right">
                      <button className="p-2 hover:bg-white rounded-lg text-slate-300 hover:text-brand-light transition-colors">
                        <ChevronRight size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions / Activity */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8">
           <h3 className="text-xl font-black text-brand-dark mb-8">Ações Rápidas</h3>
           <div className="space-y-4">
              <button className="w-full p-6 bg-brand-bg hover:bg-brand-dark hover:text-white rounded-2xl flex items-center justify-between group transition-all">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-dark group-hover:scale-110 transition-transform">
                      <Package size={20} />
                   </div>
                   <span className="font-bold">Adicionar Produto</span>
                </div>
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button className="w-full p-6 bg-brand-bg hover:bg-brand-dark hover:text-white rounded-2xl flex items-center justify-between group transition-all text-left">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-dark group-hover:scale-110 transition-transform">
                      <Tag size={20} />
                   </div>
                   <span className="font-bold">Criar Promoção</span>
                </div>
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button className="w-full p-6 bg-brand-bg hover:bg-brand-dark hover:text-white rounded-2xl flex items-center justify-between group transition-all text-left">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-dark group-hover:scale-110 transition-transform">
                      <MessageSquare size={20} />
                   </div>
                   <span className="font-bold">Ver Mensagens</span>
                </div>
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
           </div>

           <div className="mt-12 p-6 bg-brand-light/5 rounded-3xl border border-brand-light/10">
              <h4 className="text-brand-light font-black uppercase text-xs tracking-widest mb-2">Mensagem do Sistema</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Existem <strong>3 faturas</strong> pendentes de aprovação na secção financeira.
              </p>
           </div>
        </div>
      </div>
    </div>
  )
}
