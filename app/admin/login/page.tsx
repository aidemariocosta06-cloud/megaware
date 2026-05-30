'use client'

import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Laptop, Lock, User, ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'

export default function LoginPage() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock login for now
    if (email === 'admin@megaware.pt' && password === 'admin123') {
      router.push('/admin')
    } else {
      alert('Credenciais inválidas. (Use admin@megaware.pt / admin123)')
    }
  }

  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-brand-dark text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Laptop size={32} />
          </div>
          <h1 className="text-3xl font-black text-brand-dark mb-2">Painel Administrativo</h1>
          <p className="text-slate-500">Introduza as suas credenciais para aceder</p>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] shadow-premium border border-slate-100">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-2">Email</label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@megaware.pt"
                  className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-light/20 focus:bg-white transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-2">Palavra-passe</label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-light/20 focus:bg-white transition-all"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-brand-dark hover:bg-brand-light text-white py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand-dark/10 active:scale-95"
            >
              Entrar no Dashboard
              <ArrowRight size={20} />
            </button>
          </form>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="text-sm font-bold text-brand-light hover:underline">Voltar ao Website Principal</Link>
        </div>
      </motion.div>
    </div>
  )
}
