'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Download, Eye, FileText } from 'lucide-react'

interface Poster {
  id: number
  title: string
  category: string
  image: string
  color: string
}

interface Newsletter {
  id: number
  issue: number
  month: string
  year: number
  cover: string
  color: string
}

const posters: Poster[] = [
  { id: 1, title: 'Community Service ', category: 'Event', image: '/posters/poster-1.jpg', color: 'from-blue-500 to-cyan-500' },
  { id: 2, title: 'Professional Service', category: 'Campaign', image: '/posters/poster-2.jpg', color: 'from-green-500 to-emerald-500' },
  { id: 3, title: 'Club Service', category: 'Health', image: '/posters/poster-3.jpg', color: 'from-red-500 to-pink-500' },
  { id: 4, title: 'ISD', category: 'Education', image: '/posters/poster-4.jpg', color: 'from-purple-500 to-pink-500' },
  { id: 4, title: 'DPP', category: 'Education', image: '/posters/poster-4.jpg', color: 'from-purple-500 to-pink-500' },
]


const newsletters: Newsletter[] = [
  { id: 1, issue: 12, month: 'November', year: 2024, cover: '/newsletters/nov-2024.jpg', color: 'from-blue-500 to-cyan-500' },
  { id: 2, issue: 11, month: 'October', year: 2024, cover: '/newsletters/oct-2024.jpg', color: 'from-emerald-500 to-teal-500' },
  { id: 3, issue: 10, month: 'September', year: 2024, cover: '/newsletters/sep-2024.jpg', color: 'from-purple-500 to-pink-500' },
  { id: 4, issue: 9, month: 'August', year: 2024, cover: '/newsletters/aug-2024.jpg', color: 'from-orange-500 to-red-500' },
]

export default function PostersNewsletter() {
  const { ref, inView } = useInView({ threshold: 0.1 })
  const [posterCategory, setPosterCategory] = useState('All')

  const posterCategories = ['All', 'Event', 'Campaign', 'Health', 'Education']
  const filteredPosters = posterCategory === 'All' ? posters : posters.filter(p => p.category === posterCategory)

  return (
    <>
      {/* Posters Section */}
      <section
        id="posters"
        ref={ref}
        className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2 tracking-widest">
              VISUAL SHOWCASE
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-slate-900 dark:text-white">
              Posters
            </h2>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-2 justify-center mb-12"
          >
            {posterCategories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                onClick={() => setPosterCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  posterCategory === cat
                    ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white'
                    : 'glass text-slate-700 dark:text-slate-300'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Posters Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredPosters.map((poster, idx) => (
              <motion.div
                key={poster.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className={`relative h-64 rounded-xl bg-gradient-to-br ${poster.color} overflow-hidden glass border border-white/20 hover:border-white/40 transition-all`}>
                  <div className="absolute inset-0 flex items-center justify-center text-slate-600 dark:text-slate-400 text-sm font-medium">
                    [Poster Image]
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold">{poster.title}</h3>
                    <p className="text-slate-300 text-sm">{poster.category}</p>
                    <div className="flex gap-2 mt-3">
                      <motion.button whileHover={{ scale: 1.1 }} className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors text-white">
                        <Eye size={18} />
                      </motion.button>
                      <motion.button whileHover={{ scale: 1.1 }} className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors text-white">
                        <Download size={18} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        id="newsletter"
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2 tracking-widest">
              PUBLICATIONS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-slate-900 dark:text-white">
              Newsletters
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Stay updated with our monthly newsletters
            </p>
          </motion.div>

          {/* Newsletter Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {newsletters.map((nl, idx) => (
              <motion.div
                key={nl.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all group"
              >
                {/* Cover */}
                <div className={`h-48 bg-gradient-to-br ${nl.color} flex items-center justify-center text-slate-600 dark:text-slate-400 text-sm font-medium`}>
                  [Newsletter Cover]
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">Issue #{nl.issue}</p>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                    {nl.month} {nl.year}
                  </h3>
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
                    >
                      <Eye size={16} />
                      Read
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-2 rounded-lg glass border border-white/20 hover:border-white/40 text-slate-700 dark:text-slate-300 transition-colors"
                    >
                      <Download size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
