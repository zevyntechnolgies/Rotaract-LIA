'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle2 } from 'lucide-react'

export default function About() {
  const { ref, inView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true,
    rootMargin: '0px 0px -50px 0px'
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }


  return (
    <section
      id="about"
      ref={ref}
      className="relative py-12 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm font-extrabold text-yellow-400 mb-2 tracking-widest"
          >
            ABOUT US
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-6 text-yellow-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
          >
            Who We Are
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-100 font-medium max-w-2xl mx-auto"
          >
            Rotaract LIA stands as a beacon of service and leadership in our community, embodying the Rotary spirit through innovation and dedication.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 sm:mb-20">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            {/* Vision */}
            <motion.div variants={itemVariants} className="glossy-card rounded-xl p-6 border border-yellow-400/30">
              <h3 className="text-xl sm:text-2xl font-bold font-playfair mb-3 text-yellow-300">
                Vision
              </h3>
              <p className="text-[#e0f2fe] leading-relaxed font-medium">
                To create a world where young professionals unite to build sustainable communities, drive positive change, and become catalysts for excellence in service.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div variants={itemVariants} className="glossy-card rounded-xl p-6 border border-yellow-400/30">
              <h3 className="text-xl sm:text-2xl font-bold font-playfair mb-3 text-yellow-300">
                Mission
              </h3>
              <p className="text-[#e0f2fe] leading-relaxed font-medium">
                To empower young leaders through meaningful service projects, develop professional skills, foster global connections, and contribute to community development with integrity and compassion.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            {/* Rotary Connection */}
            <motion.div variants={itemVariants} className="glossy-card rounded-xl p-6 border border-yellow-400/30">
              <h3 className="text-xl sm:text-2xl font-bold font-playfair mb-3 text-yellow-300">
                Rotary Connection
              </h3>
              <p className="text-[#e0f2fe] leading-relaxed mb-4 font-medium">
                As members of Rotaract, we embrace the Rotary values of service above self, building stronger communities, and connecting leaders globally.
              </p>
              <p className="text-sm text-yellow-300 font-bold">
                Service Above Self • One Rotary • Integrity • Diversity & Inclusion
              </p>
            </motion.div>

            {/* Club History */}
            <motion.div variants={itemVariants} className="glossy-card rounded-xl p-6 border border-yellow-400/30">
              <h3 className="text-xl sm:text-2xl font-bold font-playfair mb-3 text-yellow-300">
                Club History
              </h3>
              <p className="text-[#e0f2fe] leading-relaxed font-medium">
                Founded in 2014, Rotaract LIA has grown into a vibrant community of passionate young professionals dedicated to making a difference through collaborative service.
              </p>
            </motion.div>
          </motion.div>
        </div>


      </div>
    </section>
  )
}
