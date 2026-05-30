'use client'

import * as React from 'react'
import { Plus, Search, Filter, Edit, Trash2, Tag, LayoutGrid, List } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'

const MOCK_PRODUCTS = [
  { id: 1, name: 'Teclado Mecânico RGB', price: 59.99, category: 'Periféricos', stock: 12, promo: true },
  { id: 2, name: 'Rato Gamer Precision', price: 34.50, category: 'Periféricos', stock: 25, promo: false },
  { id: 3, name: 'Monitor 24" UltraWide', price: 189.00, category: 'Monitores', stock: 8, promo: true },
]

export default function ProductsPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('list')

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-brand-dark mb-1">Gestão de Produtos</h1>
          <p className="text-slate-500">Adicione, edite ou remova produtos da sua loja.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-brand-dark hover:bg-brand-light text-white px-6 py-3.5 rounded-2xl font-black flex items-center justify-center gap-2 shadow-xl shadow-brand-dark/10 transition-all active:scale-95"
        >
          <Plus size={20} />
          Adicionar Produto
        </button>
      </div>

      {/* Filters & Controls */}
      <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between gap-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="relative group min-w-[300px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-light transition-colors" size={18} />
             <input 
              type="text" 
              placeholder="Pesquisar por nome ou SKU..." 
              className="w-full pl-12 pr-6 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-light/20 focus:bg-white transition-all"
            />
          </div>
          <select className="px-6 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-light/20 transition-all font-bold text-slate-600 text-sm">
            <option>Todas as Categorias</option>
            <option>Periféricos</option>
            <option>Monitores</option>
            <option>Áudio</option>
          </select>
        </div>

        <div className="flex items-center bg-slate-50 p-1 rounded-xl border border-slate-100 self-start">
           <button 
            onClick={() => setViewMode('grid')}
            className={cn(
              "p-2 rounded-lg transition-all",
              viewMode === 'grid' ? "bg-white text-brand-dark shadow-sm" : "text-slate-400 hover:text-slate-600"
            )}
           >
             <LayoutGrid size={20} />
           </button>
           <button 
            onClick={() => setViewMode('list')}
            className={cn(
              "p-2 rounded-lg transition-all",
              viewMode === 'list' ? "bg-white text-brand-dark shadow-sm" : "text-slate-400 hover:text-slate-600"
            )}
           >
             <List size={20} />
           </button>
        </div>
      </div>

      {/* Products Table/Grid Container */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
        {viewMode === 'list' ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 text-left">
                  <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Produto</th>
                  <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Categoria</th>
                  <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Preço</th>
                  <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Stock</th>
                  <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Status</th>
                  <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {MOCK_PRODUCTS.map((product) => (
                  <tr key={product.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-100 rounded-xl overflow-hidden shrink-0">
                          <img src={`https://picsum.photos/seed/${product.id}/100/100`} alt="" className="w-full h-full object-cover" />
                        </div>
                        <span className="font-bold text-brand-dark">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-sm font-bold text-slate-500 bg-slate-50 px-3 py-1 rounded-lg">{product.category}</span>
                    </td>
                    <td className="px-8 py-6 font-black text-slate-900">{product.price.toFixed(2)}€</td>
                    <td className="px-8 py-6">
                       <span className={cn(
                        "font-bold",
                        product.stock < 10 ? "text-rose-500" : "text-emerald-500"
                       )}>{product.stock} un.</span>
                    </td>
                    <td className="px-8 py-6">
                      {product.promo ? (
                        <div className="flex items-center gap-1.5 text-rose-500 font-bold text-[10px] uppercase tracking-widest">
                          <Tag size={12} />
                          Promoção Ativa
                        </div>
                      ) : (
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Standard</span>
                      )}
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2.5 hover:bg-brand-bg rounded-xl text-slate-400 hover:text-brand-light transition-all">
                          <Edit size={18} />
                        </button>
                        <button className="p-2.5 hover:bg-rose-50 rounded-xl text-slate-400 hover:text-rose-500 transition-all">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
             {/* Grid View Content */}
             {MOCK_PRODUCTS.map(product => (
                <div key={product.id} className="border border-slate-100 rounded-3xl p-4 hover:shadow-premium transition-all">
                   <img src={`https://picsum.photos/seed/${product.id}/400/300`} className="w-full aspect-[4/3] rounded-2xl object-cover mb-4" alt="" />
                   <h3 className="font-bold text-brand-dark mb-1">{product.name}</h3>
                   <p className="text-sm text-slate-400 mb-4">{product.category}</p>
                   <div className="flex items-center justify-between">
                      <span className="font-black text-lg">{product.price.toFixed(2)}€</span>
                      <div className="flex gap-1">
                        <button className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-brand-light"><Edit size={16} /></button>
                        <button className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-rose-500"><Trash2 size={16} /></button>
                      </div>
                   </div>
                </div>
             ))}
          </div>
        )}
      </div>

      {/* Add Product Modal (Simple Template) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setIsModalOpen(false)}
               className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm"
            />
            <motion.div
               initial={{ opacity: 0, scale: 0.9, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.9, y: 20 }}
               className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="p-8 border-b border-slate-50">
                <h3 className="text-2xl font-black text-brand-dark">Novo Produto</h3>
              </div>
              <div className="p-8 max-h-[70vh] overflow-y-auto space-y-6">
                 <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">Nome do Produto</label>
                    <input type="text" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-brand-light/20 outline-none" />
                 </div>
                 <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">Preço (€)</label>
                        <input type="number" step="0.01" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-brand-light/20 outline-none" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">Stock Inicial</label>
                        <input type="number" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-brand-light/20 outline-none" />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">Descrição</label>
                    <textarea rows={4} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-brand-light/20 outline-none resize-none"></textarea>
                 </div>
                 <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <input type="checkbox" className="w-5 h-5 rounded accent-brand-dark" id="promo" />
                    <label htmlFor="promo" className="font-bold text-slate-700">Este produto está em promoção?</label>
                 </div>
              </div>
              <div className="p-8 bg-slate-50 flex gap-4">
                 <button 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-4 font-bold text-slate-500 hover:text-brand-dark transition-colors"
                 >
                   Cancelar
                 </button>
                 <button className="flex-1 bg-brand-dark text-white py-4 rounded-xl font-black shadow-lg shadow-brand-dark/20">
                   Guardar Produto
                 </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
