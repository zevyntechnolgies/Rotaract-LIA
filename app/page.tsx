import Navbar from '@/components/navigation/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import BoardMembers from '@/components/sections/BoardMembers'
import Projects from '@/components/sections/Projects'
import Achievements from '@/components/sections/Achievements'
import Partners from '@/components/sections/Partners'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export const metadata = {
  title: 'Rotaract LIA - Building Leaders, Serving Communities | MAYON Theme',
  description: 'Rotaract LIA Theme MAYON - Excellence in service, leadership, and community development. Join us in making a difference.',
  keywords: 'Rotaract, Community Service, Youth Leadership, Service Above Self, MAYON, LIA',
  openGraph: {
    title: 'Rotaract LIA - MAYON Theme',
    description: 'Building leaders and transforming communities through service and innovation',
    type: 'website',
  },
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <BoardMembers />
        <Projects />
        <Achievements />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
