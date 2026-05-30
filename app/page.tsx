import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Shop } from '@/components/sections/shop'
import { Promotions } from '@/components/sections/promotions'
import { About } from '@/components/sections/about'
import { Testimonials } from '@/components/sections/testimonials'
import { Contacts } from '@/components/sections/contacts'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Shop />
      <Promotions />
      <About />
      <Testimonials />
      <Contacts />
    </>
  )
}