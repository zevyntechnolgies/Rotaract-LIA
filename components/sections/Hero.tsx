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
      className="relative min-h-[calc(56.22vw+4rem)] sm:min-h-[calc(56.22vw+5rem)] w-full flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-20"
    >
      <br />
      <br />
      {/* Background without overlay */}
      <div className="absolute inset-x-0 bottom-0 top-16 sm:top-20">
        <Image
          src="/final.png"
          alt="theme"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Bottom blue smudge — blends hero into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-28 sm:h-64 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(2,8,23,0.35) 30%, rgba(2,8,23,0.72) 60%, rgba(2,8,23,0.92) 80%, #020817 100%)',
        }}
      />
      {/* Extra wide soft glow at the seam for a deep blue haze */}
      <div className="absolute inset-x-0 bottom-0 h-16 sm:h-32 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at 50% 100%, rgba(7,29,73,0.55) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
      >
        {/* Stats Cards — always 4 in a row */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-4 gap-1 sm:gap-4 mb-10 w-full max-w-xs sm:max-w-xl mx-auto"
        >
          {[
            { label: 'Years', value: 12 },
            { label: 'Members', value: 28 },
            { label: 'Beneficiaries', value: 1000 },
            { label: 'Projects', value: 1000 },
          ].map((stat, i) => (
            <div
              key={i}
              className="glossy-card rounded-lg py-1.5 px-0.5 sm:py-3 sm:px-1 text-center backdrop-blur-xl flex flex-col items-center justify-center border border-yellow-200/50 shadow-lg"
            >
              <p className="text-xs sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-100 to-yellow-300 leading-none">
                <AnimatedCounter value={stat.value} />
                {i === 2 || i === 3 ? '+' : ''}
              </p>
              <p className="text-[6px] sm:text-xs md:text-sm text-amber-100 mt-0.5 font-semibold">
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
          <div className="flex flex-col items-center gap-2 text-yellow-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] font-bold">
            <p className="text-sm font-bold">Scroll to explore</p>
            <ChevronDown size={24} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
