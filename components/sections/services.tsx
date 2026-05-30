'use client'

import {
  Wrench,
  Monitor,
  Printer,
  CreditCard,
  Smartphone,
  HardDrive,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'

const services = [
  {
    icon: Wrench,
    title: 'Assistência Técnica',
    description: 'Diagnóstico, reparação e manutenção preventiva de computadores, portáteis, impressoras e periféricos.',
    accent: 'from-blue-500 to-cyan-500',
    summary: 'Reparos rápidos e suporte técnico qualificado',
  },
  {
    icon: Monitor,
    title: 'Reparação de Computadores',
    description: 'Manutenção corretiva e otimização de desempenho para ambientes domésticos e empresariais.',
    accent: 'from-indigo-500 to-blue-600',
    summary: 'Desktops, notebooks e estações de trabalho',
  },
  {
    icon: Printer,
    title: 'Impressões e Digitalização',
    description: 'Impressão, cópias, digitalização e organização de documentos com qualidade profissional.',
    accent: 'from-cyan-500 to-teal-500',
    summary: 'Documentos prontos para uso diário',
  },
  {
    icon: CreditCard,
    title: 'Pagamentos de Serviços',
    description: 'Pagamento de contas, serviços públicos e faturas com conveniência, segurança e apoio presencial.',
    accent: 'from-emerald-500 to-green-600',
    summary: 'Transações simples e seguras',
  },
  {
    icon: Smartphone,
    title: 'Carregamentos e Transferências',
    description: 'Ativação de serviços, carrega de telemóveis e transferências digitais com assistência personalizada.',
    accent: 'from-amber-500 to-orange-500',
    summary: 'Conectividade e suporte móvel',
  },
  {
    icon: HardDrive,
    title: 'Acessórios e Periféricos',
    description: 'Acessórios de marca, cabos, ratos, teclados, armazenamento e componentes essenciais.',
    accent: 'from-violet-500 to-purple-600',
    summary: 'Produtos para completar a sua estação',
  },
  {
    icon: HelpCircle,
    title: 'Apoio Digital',
    description: 'Suporte na utilização de plataformas, navegadores, e-mail, segurança e tarefas online do dia a dia.',
    accent: 'from-rose-500 to-pink-500',
    summary: 'Ajuda prática para o digital',
  },
]

export function Services() {
  return (
    <section id="servicos" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-brand-dark p-8 text-white lg:p-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-100">
              <Sparkles size={14} />
              O que oferecemos
            </div>
            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Serviços <span className="text-brand-light">completos</span> para a sua rotina tecnológica.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-blue-100/75 md:text-lg">
              Da manutenção de equipamentos à resolução de tarefas digitais, apoiamos clientes e empresas com soluções práticas, rápidas e sustentáveis.
            </p>

            <div className="mt-8 space-y-3">
              {[
                'Tecnologia com acompanhamento ao cliente',
                'Assistência técnica com foco em resultado',
                'Gestão de necessidades digitais do dia a dia',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/5 px-4 py-3 text-sm text-blue-50/90">
                  <ShieldCheck size={18} className="mt-0.5 text-brand-light" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contactos"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-light px-5 py-3 text-sm font-bold text-white transition-all hover:bg-white hover:text-brand-dark"
            >
              Solicitar atendimento
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-light">Serviços em destaque</p>
                <p className="mt-2 text-slate-500">Cada área pensada para simplificar o uso da tecnologia no seu dia a dia.</p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.045 }}
                  className="group rounded-3xl border border-slate-100 bg-brand-bg p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-light/20 hover:shadow-premium"
                >
                  <div className={`inline-flex rounded-2xl bg-gradient-to-br ${service.accent} p-3 text-white shadow-lg`}>
                    <service.icon size={24} />
                  </div>
                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-light">{service.summary}</p>
                    <h3 className="mt-2 text-xl font-bold text-brand-dark">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
