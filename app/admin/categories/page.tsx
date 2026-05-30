'use client'

import * as React from 'react'
import { Plus, Edit, Trash2, Layers, Search, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

const MOCK_CATEGORIES = [
  { id: 1, name: 'Periféricos', count: 12, description: 'Teclados, ratos e outros periféricos.' },
  { id: 2, name: 'Monitores', count: 8, description: 'Ecrãs de alta performance.' },
  { id: 3, name: 'Áudio', count: 15, description: 'Headsets e sistemas de som.' },
  { id: 4, name: 'Impressoras', count: 5, description: 'Sistemas de impressão e tinteiros.' },
]

export default function CategoriesPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-brand-dark mb-1">Gestão de Categorias</h1>
          <p className="text-slate-500">Organize os seus produtos em categorias estruturadas.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-brand-dark hover:bg-brand-light text-white px-6 py-3.5 rounded-2xl font-black flex items-center justify-center gap-2 shadow-xl shadow-brand-dark/10 transition-all active:scale-95"
        >
          <Plus size={20} />
          Nova Categoria
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_CATEGORIES.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-premium transition-all group"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 bg-brand-bg text-brand-dark rounded-2xl flex items-center justify-center group-hover:bg-brand-dark group-hover:text-white transition-all shadow-sm">
                <Layers size={28} />
              </div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-brand-light transition-colors"><Edit size={18} /></button>
                <button className="p-2 hover:bg-rose-50 rounded-lg text-slate-400 hover:text-rose-500 transition-colors"><Trash2 size={18} /></button>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-brand-dark mb-2">{cat.name}</h3>
            <p className="text-slate-500 text-sm mb-6 line-clamp-2">{cat.description}</p>
            
            <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
              <span className="text-xs font-black text-brand-light uppercase tracking-widest">{cat.count} Produtos</span>
              <button className="p-2 hover:bg-brand-bg rounded-lg text-slate-300 hover:text-brand-dark transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Category Modal */}
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
               className="relative bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="p-8 border-b border-slate-50">
                <h3 className="text-2xl font-black text-brand-dark">Nova Categoria</h3>
              </div>
              <div className="p-8 space-y-6">
                 <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">Nome</label>
                    <input type="text" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-brand-light/20 outline-none" placeholder="Ex: Acessórios Mobile" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">Descrição</label>
                    <textarea rows={3} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-brand-light/20 outline-none resize-none" placeholder="Breve descrição da categoria..."></textarea>
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
                   Criar Categoria
                 </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
