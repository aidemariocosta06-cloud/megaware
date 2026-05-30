'use client'

import * as React from 'react'
import { ShoppingCart, Search, Eye, Filter, Star, Tag, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { useCart } from '@/lib/cart-context'

const PRODUCTS = [
  { id: 1, name: 'Teclado Mecânico RGB', price: 59.99, category: 'Periféricos', image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=2670&auto=format&fit=crop', rating: 4.8, promo: true, discount: 15 },
  { id: 2, name: 'Rato Gamer Precision', price: 34.50, category: 'Periféricos', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=2670&auto=format&fit=crop', rating: 4.5, promo: false },
  { id: 3, name: 'Monitor 24" UltraWide', price: 189.00, category: 'Monitores', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=2670&auto=format&fit=crop', rating: 4.9, promo: true, discount: 10 },
  { id: 4, name: 'Auscultadores Wireless', price: 45.00, category: 'Áudio', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2670&auto=format&fit=crop', rating: 4.7, promo: false },
  { id: 5, name: 'Impressora Epson Pro', price: 120.00, category: 'Impressoras', image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=2670&auto=format&fit=crop', rating: 4.6, promo: false },
  { id: 6, name: 'Webcam 1080p HD', price: 29.90, category: 'Acessórios', image: 'https://images.unsplash.com/photo-1589149062358-8422e37f5812?q=80&w=2670&auto=format&fit=crop', rating: 4.4, promo: true, discount: 5 },
]

const CATEGORIES = ['Todos', 'Periféricos', 'Monitores', 'Áudio', 'Impressoras', 'Acessórios']

export function Shop() {
  const { addToCart } = useCart()
  const [activeCategory, setActiveCategory] = React.useState('Todos')
  const [addedId, setAddedId] = React.useState<number | null>(null)
  const [searchQuery, setSearchQuery] = React.useState('')
  const [sortBy, setSortBy] = React.useState('featured')

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'Todos' || p.category === activeCategory
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    return 0
  })

  return (
    <section id="loja" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <span className="text-brand-light font-bold uppercase tracking-widest text-sm mb-4 block">E-Commerce</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark">Explora a Nossa Loja</h2>
          </div>
          
          <div className="flex flex-wrap gap-4 items-center">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-light transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Pesquisar produto..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-light/20 focus:bg-white transition-all w-full md:w-64"
              />
            </div>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-light/20 transition-all text-sm font-medium text-slate-600"
            >
              <option value="featured">Destaques</option>
              <option value="price-low">Menor Preço</option>
              <option value="price-high">Maior Preço</option>
            </select>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-2 mb-12 scrollbar-hide overflow-x-auto pb-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                activeCategory === cat 
                  ? 'bg-brand-dark text-white shadow-lg shadow-brand-dark/20' 
                  : 'bg-brand-bg text-slate-500 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-premium transition-all duration-500"
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {product.promo && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1 shadow-lg">
                      <Tag size={12} />
                      -{product.discount}%
                    </div>
                  )}
                  <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-dark hover:bg-brand-light hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                      <ShoppingCart size={20} />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-dark hover:bg-brand-light hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 transition-delay-100">
                      <Eye size={20} />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black text-brand-light uppercase tracking-widest">{product.category}</span>
                    <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                      <Star size={12} fill="currentColor" />
                      {product.rating}
                    </div>
                  </div>
                  <h3 className="text-brand-dark font-bold mb-4 line-clamp-1 group-hover:text-brand-light transition-colors">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      {product.promo && (
                        <span className="text-xs text-slate-400 line-through">{(product.price * 1.2).toFixed(2)}€</span>
                      )}
                      <span className="text-xl font-black text-brand-dark">{product.price.toFixed(2)}€</span>
                    </div>
                    <button 
                      onClick={() => {
                        addToCart(product)
                        setAddedId(product.id)
                        setTimeout(() => setAddedId(null), 2000)
                      }}
                      className="bg-brand-bg hover:bg-brand-dark hover:text-white text-brand-dark p-3 rounded-xl transition-all shadow-sm active:scale-90 relative"
                    >
                      {addedId === product.id ? <Check size={20} className="text-emerald-500" /> : <ShoppingCart size={20} />}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 px-6">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
              <Search size={40} />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Nenhum produto encontrado</h3>
            <p className="text-slate-500">Tente buscar por termos diferentes ou selecione outra categoria.</p>
          </div>
        )}
      </div>
    </section>
  )
}
