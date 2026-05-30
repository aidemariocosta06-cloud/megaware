'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, X, Laptop, ShoppingCart, User, Phone, Home, Info, Wrench, Tag, Mail, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'
import { useCart } from '@/lib/cart-context'

const navLinks = [
  { name: 'Início', href: '/', icon: Home },
  { name: 'Sobre Nós', href: '/sobre', icon: Info },
  { name: 'Serviços', href: '/servicos', icon: Wrench },
  { name: 'Loja', href: '/loja', icon: ShoppingCart },
  { name: 'Promoções', href: '/promocoes', icon: Tag },
  { name: 'Contactos', href: '/contactos', icon: Mail },
]

interface NavbarProps {
  variant?: 'top' | 'sidebar'
}

export function Navbar({ variant = 'top' }: NavbarProps) {
  const { totalItems } = useCart()
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const isSidebar = variant === 'sidebar'

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'z-50 transition-all duration-300',
        isSidebar
          ? 'h-full w-full bg-gradient-to-b from-brand-dark via-brand-dark to-brand-dark/95 px-4 py-6 lg:px-6 lg:py-8 lg:border-r lg:border-brand-light/10 lg:shadow-xl'
          : 'fixed top-0 left-0 right-0 px-4 md:px-8',
        isSidebar
          ? ''
          : scrolled
            ? 'bg-white/95 backdrop-blur-xl py-3 shadow-xl border-b border-slate-100'
            : 'bg-transparent py-5'
      )}
    >
      <div className={cn(
        'mx-auto flex items-center justify-between',
        isSidebar ? 'h-full flex-col items-stretch gap-8 lg:justify-start' : 'max-w-7xl'
      )}>
        <Link href="/" className={cn(
          'flex items-center gap-3 group transition-transform hover:scale-105',
          isSidebar ? 'justify-center lg:justify-start' : ''
        )}>
          <div className={cn(
            'overflow-hidden rounded-full border border-white/10 shadow-lg transition-all',
            isSidebar ? 'bg-transparent p-1' : 'bg-transparent p-1'
          )}>
            <img
              src="/logo_megaware.jpeg"
              alt="MegaWare Logo"
              className="h-12 w-12 object-contain rounded-full"
            />
          </div>
          {!isSidebar && (
            <span className="text-2xl font-black tracking-tight text-brand-dark">
              MegaWare
            </span>
          )}
        </Link>

        <div className={cn(
          'flex items-center gap-2 lg:gap-1',
          isSidebar ? 'w-full lg:flex-col lg:items-stretch lg:gap-2 lg:mt-4' : 'hidden lg:flex lg:gap-1'
        )}>
          {navLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'group relative transition-all duration-300 flex items-center gap-3 rounded-xl font-medium overflow-hidden',
                  isSidebar
                    ? 'px-3 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 lg:px-4 lg:py-3'
                    : 'px-3 py-2 text-sm hover:text-brand-light',
                  isSidebar
                    ? ''
                    : scrolled
                      ? 'text-slate-700 hover:bg-slate-100'
                      : 'text-slate-700 hover:bg-white/20'
                )}
              >
                {isSidebar && <Icon size={18} className="shrink-0" />}
                <span>{link.name}</span>
                {isSidebar && (
                  <ChevronRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                )}
                {!isSidebar && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-light transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                )}
              </Link>
            )
          })}
        </div>

        <div className={cn(
          'hidden lg:flex',
          isSidebar ? 'w-full flex-col gap-3 mt-auto pt-4 border-t border-white/10' : 'items-center gap-3'
        )}>
          {!isSidebar && (
            <>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                className="relative p-2.5 rounded-lg transition-all text-slate-600 hover:text-brand-dark hover:bg-slate-100"
              >
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-red-500 to-red-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-lg"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </motion.button>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link href="/admin/login" className="p-2.5 hover:bg-slate-100 rounded-lg transition-all text-slate-600 hover:text-brand-dark">
                  <User size={20} />
                </Link>
              </motion.div>
            </>
          )}

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contactos"
              className={cn(
                'flex items-center justify-center gap-2 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl active:scale-95 w-full',
                isSidebar
                  ? 'bg-gradient-to-r from-brand-light to-brand-dark hover:from-brand-light/90 hover:to-brand-dark/90 text-white px-4 py-2.5 text-sm lg:py-3'
                  : 'bg-gradient-to-r from-brand-dark to-brand-light hover:shadow-xl text-white px-6 py-2.5'
              )}
            >
              <Phone size={18} className={isSidebar ? '' : ''} />
              <span>{isSidebar ? 'Contactar' : 'Contactar'}</span>
            </Link>
          </motion.div>
        </div>

        <div className={cn('lg:hidden', isSidebar ? 'w-full' : '')}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-brand-dark hover:bg-slate-100 rounded-lg transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={cn(
              'lg:hidden overflow-hidden border-slate-100 shadow-2xl',
              isSidebar ? 'mt-4 rounded-2xl border bg-gradient-to-b from-white to-slate-50' : 'absolute top-full left-0 right-0 bg-white border-b'
            )}
          >
            <div className="flex flex-col p-6 gap-3">
              {navLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-bold text-slate-700 hover:bg-slate-100 hover:text-brand-dark transition-all group"
                  >
                    <Icon size={20} className="text-brand-light" />
                    {link.name}
                    <ChevronRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                )
              })}
              <hr className="border-slate-200 my-2" />
              <div className="flex items-center gap-3">
                <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
                  <Link href="/cart" className="p-3 bg-slate-100 rounded-lg relative flex items-center justify-center hover:bg-brand-bg transition-all">
                    <ShoppingCart size={24} className="text-slate-600" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs font-bold flex items-center justify-center rounded-full shadow-lg">0</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
                  <Link href="/admin/login" className="p-3 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-brand-bg transition-all">
                    <User size={24} className="text-slate-600" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
                  <Link
                    href="/contactos"
                    onClick={() => setIsOpen(false)}
                    className="bg-gradient-to-r from-brand-dark to-brand-light text-white px-4 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    <Phone size={18} />
                    Contactar
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
