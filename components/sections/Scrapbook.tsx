'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, X } from 'lucide-react'

interface Memory {
  id: number
  title: string
  date: string
  location: string
  story: string
  color: string
}

const memories: Memory[] = [
  {
    id: 1,
    title: 'First Community Service',
    date: 'June 15, 2011',
    location: 'Central Park',
    story: 'Our journey began with our very first community service project, bringing together 50 passionate volunteers.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Environmental Initiative',
    date: 'March 22, 2016',
    location: 'City Beaches',
    story: 'Planted 1000 trees and cleaned major beaches, making a lasting impact on our environment.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 3,
    title: 'Health Awareness Camp',
    date: 'October 2, 2019',
    location: 'District Hospital',
    story: 'Organized massive health checkup camp benefiting 500+ people from our community.',
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 4,
    title: 'Annual Gala Dinner',
    date: 'December 10, 2022',
    location: 'Grand Ballroom',
    story: 'Hosted our most successful fundraiser, raising funds for multiple community projects.',
    color: 'from-purple-500 to-pink-500',
  },
]

export default function Scrapbook() {
  const { ref, inView } = useInView({ threshold: 0.1 })
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section
      id="scrapbook"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#020817] via-[#030c22] to-[#071d49] overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#ffd700]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#1e3a8a]/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-extrabold text-[#ffd700] mb-2 tracking-widest">
            MEMORIES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-[#ffd700]">
            Our Scrapbook
          </h2>
          <p className="text-lg text-[#e0c97f] font-semibold max-w-2xl mx-auto mb-8">
            Flipping through memories of impact, growth, and togetherness
          </p>

          {/* Button */}
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#ffd700] to-[#f59e0b] hover:from-[#ffe55c] hover:to-[#fbbf24] text-[#030c22] font-bold rounded-lg shadow-lg shadow-yellow-500/30 hover:shadow-xl transition-all cursor-pointer"
          >
            Open Scrapbook
          </motion.button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-b from-[#071d49] via-[#030c22] to-[#020817] text-white border border-[#ffd700]/30 rounded-2xl shadow-2xl shadow-[#ffd700]/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 bg-[#ffd700]/10 hover:bg-[#ffd700]/20 rounded-full transition-colors z-10 text-[#ffd700] border border-[#ffd700]/30"
              >
                <X size={24} />
              </motion.button>

              {/* Modal Content */}
              <div className="p-8">
                <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-12 text-[#ffd700]">
                  Our Memory Journey
                </h2>

                {/* Timeline */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative"
                >
                  {/* Timeline Line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#ffd700] via-[#f59e0b] to-[#ffd700]/30 hidden lg:block" />

                  <div className="space-y-12">
                    {memories.map((memory, idx) => (
                      <motion.div
                        key={memory.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className={`flex gap-8 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                      >
                        {/* Timeline Dot */}
                        <div className="hidden lg:flex flex-col items-center w-20 flex-shrink-0">
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className={`w-6 h-6 rounded-full bg-gradient-to-br ${memory.color} border-4 border-[#ffd700] shadow-lg shadow-yellow-400/30`}
                          />
                        </div>

                        {/* Content Card */}
                        <motion.div
                          whileHover={{ y: -10 }}
                          className="glossy-card rounded-xl p-6 border border-[#ffd700]/20 hover:border-[#ffd700]/50 transition-all flex-1 group"
                        >
                          {/* Image Placeholder */}
                          <div className={`h-48 rounded-lg bg-gradient-to-br ${memory.color} mb-4 flex items-center justify-center text-white text-sm font-bold`}>
                            [Memory Image]
                          </div>

                          {/* Content */}
                          <h3 className="text-xl font-bold text-[#ffd700] mb-3">
                            {memory.title}
                          </h3>

                          <p className="text-[#c8b97a] mb-4 leading-relaxed font-medium">
                            {memory.story}
                          </p>

                          {/* Metadata */}
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-[#e0c97f] font-semibold">
                              <Calendar size={16} className="text-[#ffd700]" />
                              {memory.date}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#e0c97f] font-semibold">
                              <MapPin size={16} className="text-[#ffd700]" />
                              {memory.location}
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
