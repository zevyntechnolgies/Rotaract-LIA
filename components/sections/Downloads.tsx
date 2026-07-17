'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, FileText, Image, File } from 'lucide-react'

interface DownloadItem {
  id: number
  title: string
  description: string
  icon: any
  type: string
  size: string
  color: string
}

const downloads: DownloadItem[] = [
  {
    id: 1,
    title: 'Club Brochure',
    description: 'Comprehensive overview of Rotaract LIA',
    icon: FileText,
    type: 'PDF',
    size: '2.4 MB',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Membership Form',
    description: 'Application form for membership',
    icon: FileText,
    type: 'PDF',
    size: '1.2 MB',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 3,
    title: 'Annual Report 2023',
    description: 'Year review and impact metrics',
    icon: File,
    type: 'PDF',
    size: '3.8 MB',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    title: 'Newsletter Archive',
    description: 'Collection of past newsletters',
    icon: FileText,
    type: 'PDF',
    size: '5.1 MB',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    title: 'Event Reports',
    description: 'Documentation of past events',
    icon: Image,
    type: 'PDF',
    size: '4.6 MB',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 6,
    title: 'Certificates & Awards',
    description: 'Recognition and certificates',
    icon: Image,
    type: 'ZIP',
    size: '6.2 MB',
    color: 'from-indigo-500 to-blue-500',
  },
]

export default function Downloads() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="downloads"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2 tracking-widest">
            RESOURCES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-slate-900 dark:text-white">
            Downloads
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Access our important documents and resources
          </p>
        </motion.div>

        {/* Downloads Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {downloads.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all group cursor-pointer flex flex-col"
              >
                {/* Icon */}
                <div className={`inline-flex w-14 h-14 rounded-lg bg-gradient-to-br ${item.color} items-center justify-center mb-4 group-hover:shadow-lg transition-shadow`}>
                  <Icon size={28} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-1">
                  {item.description}
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-4" />

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-white/10 text-slate-700 dark:text-slate-300">
                      {item.type}
                    </span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">
                      {item.size}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-white/10 hover:bg-blue-500/20 transition-colors text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Download size={18} />
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
