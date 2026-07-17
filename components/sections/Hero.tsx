'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 md:pt-20"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 w-full h-full bg-slate-950">
        <Image
          src="/image.png"
          alt="Group Photo"
          fill
          priority
          className="object-contain md:object-cover object-center"
        />
        {/* Subtle overlay for text legibility */}
        <div className="absolute inset-0 bg-slate-950/50" />
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-72 h-72 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
      >
        {/* Logo */}
        <motion.div
          variants={itemVariants}
          className="mb-6 flex justify-center w-full"
        >
          <div className="hover:scale-105 transition-transform duration-300 rounded-xl overflow-hidden shadow-md w-[240px] sm:w-[360px] md:w-[480px]">
            <Image
              src="/logo.png"
              alt="Logo"
              width={600}
              height={100}
              className="object-contain rounded-xl w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-white font-playfair leading-tight w-full"
        >
          ROTARACT CLUB OF{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-emerald-300">
            LEAD INDIA AHEAD
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold mb-6 text-slate-200 w-full max-w-lg mx-auto leading-snug"
        >
          PARENTED BY ROTARY CLUB OF COIMBATORE TEXCITY
          <br />
          CLUB ID :90062 | GROUP 4 | ROTARY INTERNATIONAL DISTRICT 3206 | ZONE 5
        </motion.p>

        {/* Stats Cards — always 4 in a row */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-4 gap-2 sm:gap-4 mb-10 w-full max-w-xl mx-auto"
        >
          {[
            { label: 'Years', value: 12 },
            { label: 'Members', value: 28 },
            { label: 'Beneficiaries', value: 1000 },
            { label: 'Projects', value: 1000 },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass rounded-lg py-3 px-1 text-center backdrop-blur-xl flex flex-col items-center justify-center"
            >
              <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 leading-none">
                <AnimatedCounter value={stat.value} />
                {i === 2 || i === 3 ? '+' : ''}
              </p>
              <p className="text-[9px] sm:text-xs md:text-sm text-slate-300 mt-1 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <div className="flex flex-col items-center gap-2 text-slate-300">
            <p className="text-sm font-medium">Scroll to explore</p>
            <ChevronDown size={24} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
