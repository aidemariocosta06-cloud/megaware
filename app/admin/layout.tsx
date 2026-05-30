'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Package, 
  Layers, 
  ShoppingCart, 
  Users, 
  Tag, 
  MessageSquare, 
  Settings,
  LogOut,
  Laptop,
  Menu,
  X
} from 'lucide-react'
import { cn } from '@/lib/utils'

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
  { name: 'Produtos', icon: Package, href: '/admin/products' },
  { name: 'Categorias', icon: Layers, href: '/admin/categories' },
  { name: 'Encomendas', icon: ShoppingCart, href: '/admin/orders' },
  { name: 'Clientes', icon: Users, href: '/admin/customers' },
  { name: 'Promoções', icon: Tag, href: '/admin/promotions' },
  { name: 'Mensagens', icon: MessageSquare, href: '/admin/messages' },
  { name: 'Definições', icon: Settings, href: '/admin/settings' },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true)

  // Hide layout on login page
  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-brand-bg flex">
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 bg-brand-dark text-white p-6 transition-all duration-300 z-50",
          isSidebarOpen ? "w-72" : "w-20"
        )}
      >
        <div className="flex flex-col h-full">
          {/*  */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white shrink-0">
              <Laptop size={24} />
            </div>
            {isSidebarOpen && (
              <span className="text-xl font-bold tracking-tight">
                MEGA <span className="text-brand-light">ADMIN</span>
              </span>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 group",
                  pathname === item.href 
                    ? "bg-brand-light text-white shadow-lg shadow-brand-light/20" 
                    : "text-blue-100/60 hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon size={22} className={cn(
                  "shrink-0",
                  pathname === item.href ? "text-white" : "group-hover:text-white transition-colors"
                )} />
                {isSidebarOpen && <span className="font-semibold">{item.name}</span>}
              </Link>
            ))}
          </nav>

          {/* Footer Sidebar */}
          <div className="pt-8 border-t border-white/10 mt-auto">
            <button className="flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 text-red-300 hover:bg-red-500/10 hover:text-red-400 w-full">
              <LogOut size={22} className="shrink-0" />
              {isSidebarOpen && <span className="font-semibold">Sair</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={cn(
        "flex-1 transition-all duration-300",
        isSidebarOpen ? "ml-72" : "ml-20"
      )}>
        {/* Header */}
        <header className="bg-white border-b border-slate-100 py-4 px-8 sticky top-0 z-40 flex items-center justify-between">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-slate-50 rounded-lg text-slate-500 transition-colors"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900 leading-none">Admin Mega Ware</p>
                <p className="text-[10px] text-brand-light font-black uppercase tracking-widest mt-1">Super Usuário</p>
              </div>
              <div className="w-10 h-10 bg-brand-bg rounded-full border-2 border-white shadow-sm flex items-center justify-center font-bold text-brand-dark">
                AD
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
