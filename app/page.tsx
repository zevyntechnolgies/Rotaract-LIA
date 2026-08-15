import Navbar from '@/components/navigation/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import BoardMembers from '@/components/sections/BoardMembers'
import Projects from '@/components/sections/Projects'
import Achievements from '@/components/sections/Achievements'
import Partners from '@/components/sections/Partners'
import Careers from '@/components/sections/Careers'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export const metadata = {
  title: 'Rotaract LIA - Building Leaders, Serving Communities',
  description: 'Rotaract LIA - Empowering the next generation of leaders through excellence, innovation, and community service. Join us in making a difference.',
  keywords: 'Rotaract, Community Service, Youth Leadership, Service Above Self, LIA, Coimbatore, Volunteering',
  openGraph: {
    title: 'Rotaract LIA - Building Leaders, Serving Communities',
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
        <Careers />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
