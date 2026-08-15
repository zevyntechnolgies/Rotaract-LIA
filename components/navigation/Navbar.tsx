'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Board Members', href: '/#board' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Achievements', href: '/#achievements' },
  { label: 'Contact', href: '/#contact' },
]

import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const closeDrawer = () => setIsOpen(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    closeDrawer()

    const targetHash = href.startsWith('/#') ? href.substring(1) : href

    if (pathname === '/') {
      // If we are already on the home page, just smooth scroll to the section
      const element = document.querySelector(targetHash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState(null, '', targetHash)
      } else {
        router.push(href)
      }
    } else {
      // If we are on another page (like a project detail page), navigate back to home with the hash
      router.push(href)
    }
  }

  return (
    <>
      {/* ── Navbar bar ─────────────────────────────────────── */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#030c22]/90 backdrop-blur-xl border-b border-amber-400/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] text-yellow-300' : 'bg-[#030c22]/75 backdrop-blur-md border-b border-amber-400/20 text-yellow-300'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">

            

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  whileHover={{ y: -1 }}
                  className="px-4 py-2 text-sm font-extrabold transition-colors relative group text-yellow-300 hover:text-amber-200"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </motion.a>
              ))}
            </div>

            {/* Hamburger — mobile only */}
            <button
              id="mobile-menu-toggle"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsOpen((prev) => !prev)}
              className="lg:hidden z-[61] relative p-2.5 rounded-xl transition-all touch-manipulation bg-sky-950/80 hover:bg-sky-900 border border-yellow-400/40 text-yellow-300 backdrop-blur-md"
            >
              {isOpen
                ? <X size={22} className="text-yellow-300" />
                : <Menu size={22} className="text-yellow-300" />
              }
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile slide-in drawer (outside nav, full viewport) ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeDrawer}
              className="fixed inset-0 z-[55] bg-black/70 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer panel */}
            <motion.div
              key="mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-72 z-[60] lg:hidden bg-gradient-to-b from-[#071d49] via-[#051336] to-[#020817] border-l border-amber-400/30 shadow-2xl flex flex-col pt-20 pb-8 px-6 overflow-y-auto text-yellow-300 backdrop-blur-2xl"
            >
              {/* Nav links */}
              <nav className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-bold text-yellow-300 hover:text-white hover:bg-sky-900/40 active:bg-sky-900/60 transition-all touch-manipulation cursor-pointer select-none"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              {/* Brand footer */}
              <div className="mt-auto pt-6 border-t border-slate-100">
                <p className="text-xs text-slate-400 text-center leading-relaxed">
                  Rotaract Club of Lead India Ahead
                  <br />District 3206 · Zone 5
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
