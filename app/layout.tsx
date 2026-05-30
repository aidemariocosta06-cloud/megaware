import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/lib/cart-context';
import { SiteLayout } from '@/components/layout/site-layout';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Mega Ware - Soluções Informáticas e Serviços Digitais',
  description: 'Tecnologia, assistência técnica e serviços digitais em Penacova, Portugal. Sua parceira tecnológica de confiança.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt" className={`${inter.variable}`}>
       <body suppressHydrationWarning className="font-sans antialiased text-slate-900 bg-brand-bg">
        <CartProvider>
          <SiteLayout>
            {children}
          </SiteLayout>
        </CartProvider>
      </body>
    </html>
  );
}
