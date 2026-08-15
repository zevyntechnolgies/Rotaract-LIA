'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { MapPin, Users, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/lib/projects'

const categories = ['All', 'Community Service', 'professional Service', 'Club Service', 'DPP', 'ISD']

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1 })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

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
      id="projects"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#020817] via-[#030c22] to-[#071d49] overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#ffd700]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#1e3a8a]/30 to-transparent rounded-full blur-3xl pointer-events-none" />

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
            className="text-sm font-extrabold text-[#ffd700] mb-2 tracking-widest"
          >
            IMPACT &amp; INITIATIVES
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-[#ffd700]"
          >
            Our Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-[#e0c97f] font-semibold max-w-2xl mx-auto"
          >
            Transforming communities through diverse initiatives and sustainable impact
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedCategory(category)
                setShowAll(false)
              }}
              className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#ffd700] to-[#f59e0b] text-[#030c22] shadow-lg shadow-yellow-500/30'
                  : 'bg-[#071d49]/60 hover:bg-[#0f2d6b]/60 text-[#e0c97f] font-bold border border-[#ffd700]/30 hover:border-[#ffd700]/60'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {(showAll ? filteredProjects : filteredProjects.slice(0, 6)).map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="h-full block group"
              >
                <Link href={`/projects/${project.slug}`} className="block h-full">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    className="h-full"
                  >
                <div className="glossy-card rounded-2xl overflow-hidden backdrop-blur-xl border border-[#ffd700]/20 hover:border-[#ffd700]/50 transition-all duration-300 h-full flex flex-col">
                  {/* Image Container */}
                  <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.color}`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/80 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-[#ffd700] text-[#030c22] rounded-full p-3 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <ExternalLink size={20} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-[#030c22] bg-gradient-to-r from-[#ffd700] to-[#f59e0b] px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-xs font-bold text-[#ffd700]">
                        {project.date}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#ffd700] mb-2 group-hover:text-[#ffe55c] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#c8b97a] mb-4 flex-1 line-clamp-3 font-medium">
                      {project.description}
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-[#ffd700]/30 to-transparent my-4" />

                    {/* Footer Info */}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-[#e0c97f] font-medium">
                        <MapPin size={16} className="text-[#ffd700]" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-2 text-[#e0c97f] font-medium">
                        <Users size={16} className="text-[#ffd700]" />
                        {project.beneficiaries} beneficiaries
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
        </AnimatePresence>
      </motion.div>

      {/* View More Button */}
      {filteredProjects.length > 6 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-16 flex justify-center"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#ffd700] to-[#f59e0b] hover:from-[#ffe55c] hover:to-[#fbbf24] text-[#030c22] font-bold transition-all duration-300 shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
          >
            {showAll ? 'Show Less' : 'View All Projects'}
          </button>
        </motion.div>
      )}
    </div>
  </section>
  )
}
