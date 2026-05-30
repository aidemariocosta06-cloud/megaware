import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Laptop } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-brand-dark px-6 pb-5 pt-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white ring-1 ring-white/15">
                <Laptop size={20} />
              </div>
              <div>
                <p className="text-base font-bold tracking-tight">MEGA <span className="text-brand-light">WARE</span></p>
                <p className="text-[10px] uppercase tracking-[0.28em] text-blue-100/60">Tecnologia com serviço</p>
              </div>
            </div>

            <p className="max-w-sm text-xs leading-relaxed text-blue-100/70">
              Suporte técnico, atendimento humano e soluções digitais com confiança.
            </p>

            <div className="flex gap-2">
              <a href="#" aria-label="Facebook" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-brand-light">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-brand-light">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="Twitter" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-brand-light">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.26em] text-brand-light">Navegação</p>
            <ul className="space-y-2 text-xs text-blue-100/70">
              <li><Link href="/" className="transition-colors hover:text-white">Início</Link></li>
              <li><Link href="/sobre" className="transition-colors hover:text-white">Sobre Nós</Link></li>
              <li><Link href="/servicos" className="transition-colors hover:text-white">Serviços</Link></li>
              <li><Link href="/promocoes" className="transition-colors hover:text-white">Promoções</Link></li>
              <li><Link href="/contactos" className="transition-colors hover:text-white">Contactos</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.26em] text-brand-light">Contacto</p>
            <ul className="space-y-2 text-xs text-blue-100/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-light" />
                <span>Rua Principal, Penacova, Portugal</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-brand-light" />
                <span>+351 239 000 000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-brand-light" />
                <span>geral@megaware.pt</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.26em] text-brand-light">Informação</p>
            <div className="rounded-xl bg-white/5 p-3 text-[11px] leading-relaxed text-blue-100/70 ring-1 ring-white/10">
              <p className="font-semibold text-white">Horário comercial</p>
              <p className="mt-1">Segunda a Sexta: 9:00–19:00</p>
              <p>Sábado: 9:00–13:00</p>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p className="text-[10px] text-blue-100/55">© {new Date().getFullYear()} Mega Ware. Todos os direitos reservados.</p>
            <div className="flex flex-wrap items-center gap-3 text-[10px] text-blue-100/55">
              <Link href="#" className="transition-colors hover:text-white">Privacidade</Link>
              <Link href="#" className="transition-colors hover:text-white">Termos</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
