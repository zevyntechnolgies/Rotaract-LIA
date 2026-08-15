'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
// use plain <img> to avoid Next/Image optimization issues in dev and ensure predictable rendering

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
    name: 'Rtr. Tamil Selvan',
    role: 'Secretary Communication',
    image: '/tamil.png',
  },
  {
    name: 'Rtr. Nagaraj M',
    role: 'Joint Secretary',
    image: '/nagaraj.png',
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
      <img
        src={src}
        alt={name}
        className={`w-full h-full object-cover object-top transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true)
          setLoading(false)
        }}
        loading="lazy"
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
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#030c22]/90 via-[#071d49]/90 to-[#020817]/90 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-sky-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
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
            LEADERSHIP
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-yellow-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
          >
            Board Members
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-100 font-medium max-w-2xl mx-auto"
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
                <div className="glossy-card rounded-2xl overflow-hidden backdrop-blur-xl border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-sky-900 to-indigo-950">
                    <MemberImage src={member.image} name={member.name} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col items-center text-center">
                    <h3 className="text-lg font-bold text-yellow-300 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-extrabold text-sky-300">
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
            className="mt-12 text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-bold transition-all duration-300 shadow-lg hover:shadow-yellow-400/30 hover:-translate-y-1 cursor-pointer"
            >
              {showAll ? 'Show Less' : 'View Full Board'}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

