'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

interface BoardMember {
  name: string
  role: string
  image: string
}

const boardMembers: BoardMember[] = [
  {
    name: 'Rtr. Hariharan',
    role: 'President',
    image: '/hariharan.jpeg',
  },
  {
    name: 'Rtr. SujayKrishna',
    role: 'Vice President',
    image: '/sujay.png',
  },
  {
    name: 'Rtr. Manishasree',
    role: 'Secretary Admin',
    image: '/mahi.png',
  },
  {
    name: 'Rtr. SujayKrishna',
    role: 'Secretary Communication',
    image: '/tamil.png',
  },
  {
    name: 'Rtr. Nagaraj M',
    role: 'Joint Secretary',
    image: '/nagu.png',
  },
  {
    name: 'Rtr. IPP. Harsith',
    role: 'IPP',
    image: '/harsith.png',
  },
  {
    name: 'Rtr. PP. Antony Revanth',
    role: 'Rotary Foundation Chair',
    image: '/anto.png',
  }
]

const MemberImage = ({ src, name }: { src: string; name: string }) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  
  if (error || !src) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-2xl font-bold">
        {name.replace('Rtr. ', '').charAt(0)}
      </div>
    )
  }
  
  return (
    <>
      {loading && <div className="absolute inset-0 bg-slate-300 animate-pulse" />}
      <Image 
        src={src} 
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`object-cover transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true)
          setLoading(false)
        }}
      />
    </>
  )
}

export default function BoardMembers() {
  const [showAll, setShowAll] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="board"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-500/5 to-transparent rounded-full blur-3xl" />

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
            className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2 tracking-widest"
          >
            LEADERSHIP
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-slate-900 dark:text-white"
          >
            Board Members
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            Meet the visionary leaders guiding Rotaract LIA towards excellence
          </motion.p>
        </motion.div>

        {/* Board Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {(showAll ? boardMembers : boardMembers.slice(0, 5)).map((member, index) => (
              <motion.div
                key={`${member.name}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                {/* Card */}
                <div className="glass rounded-2xl overflow-hidden backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-300 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-500 to-emerald-500">
                    <MemberImage src={member.image} name={member.name} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col items-center text-center">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        {boardMembers.length > 5 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              {showAll ? 'View Less' : 'View More Members'}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

