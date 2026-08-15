'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import { useState } from 'react'

const footerLinks = {
  organization: [
    { label: 'About Us', href: '#about' },
    { label: 'Vision & Mission', href: '#about' },
    { label: 'Board Members', href: '#board' },
  ],
  projects: [
    { label: 'All Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
   
  ],
  resources: [
    { label: 'Newsletter', href: '#newsletter' },
    { label: 'Contact', href: '#contact' },
  ],
}

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/rotaract.clubof.lia?igsh=YmQ2eXkwY2xjanpr',
    color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400',
    textColor: 'group-hover:text-white',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/rotaract.clubof.lia?igsh=YmQ2eXkwY2xjanpr',
    color: 'hover:bg-[#1877F2]',
    textColor: 'group-hover:text-white',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/rotaract-club-of-lead-india-ahead/',
    color: 'hover:bg-[#0A66C2]',
    textColor: 'group-hover:text-white',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  }
]

export default function Footer() {
  const [email, setEmail] = useState('')

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-b from-[#051336] via-[#030c22] to-[#010510] border-t border-amber-400/30 text-white shadow-[0_-15px_35px_rgba(0,0,0,0.8)]">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-sky-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center gap-2 mb-4">
                <img src="/mayon.jpeg" alt="logo" className="w-25 rounded-md" />
              </div>
              <p className="text-sm text-[#e0f2fe] font-medium leading-relaxed">
                Building leaders and transforming communities through service, innovation, and unity.
              </p>
            </motion.div>

            {/* Quick Links */}
            {Object.entries(footerLinks).map(([section, links], idx) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <h3 className="font-extrabold text-yellow-300 mb-4 capitalize">
                  {section}
                </h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-[#e0f2fe] hover:text-yellow-300 font-semibold transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-extrabold text-yellow-300 mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 overflow-hidden">
                  <Mail size={16} className="text-yellow-300 mt-1 flex-shrink-0" />
                  <a
                    href="mailto:racleadindiaahead2021@gmail.com"
                    className="text-sm text-[#e0f2fe] hover:text-yellow-300 font-semibold transition-colors break-all min-w-0"
                  >
                    racleadindiaahead2021@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={16} className="text-yellow-300 mt-1 flex-shrink-0" />
                  <a
                    href="tel:+916369798451"
                    className="text-sm text-[#e0f2fe] hover:text-yellow-300 font-semibold transition-colors"
                  >
                    +91 63697 98451
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-yellow-300 mt-1 flex-shrink-0" />
                  <p className="text-sm text-[#e0f2fe] font-semibold">
                    Coimbatore,Tamil Nadu,India
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent my-8" />

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            {/* Copyright & Links */}
            <div className="text-sm text-yellow-200/90 font-medium text-center md:text-left">
              <p className="mb-2">
                © 2024 Rotaract LIA. All rights reserved.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="/privacy-policy" className="hover:text-yellow-300 transition-colors">
                  Privacy Policy
                </a>
                <span>•</span>
                <a href="/terms-of-service" className="hover:text-yellow-300 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
            <p className="text-sm text-yellow-200/90 font-medium">
              Developed by <a href="https://www.zevyn.tech" target="_blank" rel="noopener noreferrer" className="text-yellow-300 font-bold hover:underline">Zevyn Technologies</a>

            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  title={link.name}
                  className={`group p-2.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all duration-300 shadow-sm hover:shadow-md hover:border-transparent ${link.color} ${link.textColor}`}
                >
                  {link.icon}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:shadow-lg transition-shadow"
                title="Back to top"
              >
                <ArrowUp size={18} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
