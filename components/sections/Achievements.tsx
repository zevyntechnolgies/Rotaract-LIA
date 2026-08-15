'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Trophy, Award, Star } from 'lucide-react'

interface Achievement {
  id: number
  title: string
  year: number
  type: 'award' | 'milestone' | 'recognition'
  description: string
  icon: any
  color: string
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Best Community Service Project',
    year: 2023,
    type: 'award',
    description: 'Recognized for excellence in community service',
    icon: Trophy,
    color: 'from-yellow-500 to-amber-500',
  },
  {
    id: 2,
    title: '5000+ Beneficiaries Served',
    year: 2023,
    type: 'milestone',
    description: 'Milestone achievement in community impact',
    icon: Star,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'District Excellence Award',
    year: 2022,
    type: 'recognition',
    description: 'Recognized by Rotary District',
    icon: Award,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 4,
    title: 'Best Youth Initiative',
    year: 2022,
    type: 'award',
    description: 'Award for outstanding youth empowerment',
    icon: Trophy,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 5,
    title: 'Environmental Champion',
    year: 2021,
    type: 'recognition',
    description: 'Recognition for environmental initiatives',
    icon: Award,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 6,
    title: '100k Community Hours',
    year: 2021,
    type: 'milestone',
    description: 'Cumulative service hours milestone',
    icon: Star,
    color: 'from-orange-500 to-red-500',
  },
]

export default function Achievements() {
  const { ref, inView } = useInView({ threshold: 0.1 })

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="achievements"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#071d49] via-[#030c22] to-[#020817] overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#ffd700]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#1e3a8a]/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-extrabold text-[#ffd700] mb-2 tracking-widest">
            RECOGNITION
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-[#ffd700]">
            Achievements &amp; Awards
          </h2>
          <p className="text-lg text-[#e0c97f] font-semibold max-w-2xl mx-auto">
            Celebrating milestones and recognitions of our dedication to service
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-8"
        >
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="glossy-card rounded-xl p-6 border border-[#ffd700]/20 hover:border-[#ffd700]/50 transition-all flex gap-6 cursor-pointer group"
              >
                {/* Icon */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <Icon size={32} className="text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-[#ffd700]">
                      {achievement.title}
                    </h3>
                    <span className="text-sm font-extrabold text-[#ffd700]">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-sm text-[#c8b97a] font-medium">
                    {achievement.description}
                  </p>
                  <div className="mt-3">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#ffd700]/10 text-[#ffd700] border border-[#ffd700]/30 capitalize">
                      {achievement.type}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
