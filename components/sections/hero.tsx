'use client'

import { ArrowRight, ShieldCheck, Zap, Headphones, Cpu, Clock3, CheckCircle2 } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'

const supportHighlights = [
  'Reparação de computadores e periféricos',
  'Suporte digital e instalação de software',
  'Pagamentos de serviços e atendimento presencial',
  'Atendimento próximo e soluções práticas para o dia a dia',
]

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop" 
          alt="Espaço de trabalho tecnológico moderno" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.88),_rgba(255,255,255,0.72)_24%,_rgba(248,250,252,0.84)_45%,_rgba(241,245,249,0.96)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/60" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,38,67,0.08),transparent_32%,transparent_68%,rgba(14,38,67,0.06))]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:py-20 lg:py-28">
        <div className="grid items-start gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl space-y-6"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-dark/5 px-4 py-2 text-sm font-bold text-brand-dark ring-1 ring-brand-dark/10">
              <Zap size={16} className="text-brand-light" />
              <span>Assistência técnica confiável em Penacova</span>
            </div>

            <h1 className="text-5xl font-black tracking-tight text-brand-dark md:text-6xl xl:text-7xl">
              Soluções <span className="text-brand-light">digitais</span> para empresas e famílias.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
              Reparamos equipamentos, instalamos soluções de produtividade, apoiamos clientes em tecnologia e mantemos toda a operação conectada com qualidade e profissionalismo.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-dark px-6 py-3.5 text-base font-bold text-white shadow-xl shadow-brand-dark/20 transition-all hover:bg-brand-light hover:scale-[1.02]"
              >
                Ver serviços
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contactos"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/85 px-6 py-3.5 text-base font-bold text-brand-dark transition-all hover:border-brand-light hover:bg-slate-50"
              >
                Falar com a equipa
              </Link>
            </div>

            <div className="mt-6 rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-lg shadow-slate-200/40 backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-light">O que você encontra</p>
                  <p className="mt-2 text-sm text-slate-600">Tecnologia com suporte real, agilidade e atendimento próximo para quem precisa resolver com praticidade.</p>
                </div>
                <div className="rounded-full bg-brand-dark px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-white">
                  Atuação local
                </div>
              </div>

              <ul className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
                {supportHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl bg-brand-bg px-4 py-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-light" />
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 grid gap-3 rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-lg shadow-slate-200/40 backdrop-blur sm:grid-cols-3">
              {[
                { icon: Cpu, label: 'Suporte informático', value: 'Tecnologia' },
                { icon: Headphones, label: 'Atendimento dedicado', value: 'Humanizado' },
                { icon: Clock3, label: 'Respostas rápidas', value: 'Agilidade' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-brand-bg px-4 py-3">
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-brand-dark text-white">
                    <item.icon size={18} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{item.value}</p>
                  <p className="mt-1 text-sm font-semibold text-brand-dark">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-[0_30px_80px_-30px_rgba(7,17,31,0.55)] max-w-[420px] w-full">
              <img
                src="/imagem_loja.png"
                alt="Equipe de tecnologia em ação"
                className="h-80 w-full object-cover rounded-[1.5rem]"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="hidden md:block absolute -right-6 bottom-6 z-20 w-48 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-slate-100">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Qualidade garantida</p>
                  <p className="text-xs text-slate-500">Assistência certificada</p>
                </div>
              </div>
            </div>

            <div className="hidden md:block absolute -left-6 top-6 z-20 rounded-2xl bg-brand-dark px-4 py-3 text-white shadow-xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">Suporte 24/7</p>
              <p className="mt-1 text-2xl font-black">10+ anos</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
