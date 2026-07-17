'use client'

import { use, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, MapPin, Calendar, Users, CheckCircle, Award, Clock, ArrowRight, X } from 'lucide-react'
import { projects, Project } from '@/lib/projects'
import Navbar from '@/components/navigation/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export default function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [activeImage, setActiveImage] = useState<string | null>(null)

  // Synchronous lookup — no async/useEffect needed for in-memory data
  const project = projects.find((p) => p.slug === slug) ?? null

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        <div className="text-center px-4">
          <div className="text-6xl mb-6">🔍</div>
          <h1 className="text-3xl font-bold mb-3">Project Not Found</h1>
          <p className="text-slate-400 mb-8">The project you're looking for doesn't exist or may have been removed.</p>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  // Filter related projects in the same category
  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3)

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-slate-100 pt-20 pb-16 overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Hero Banner Section */}
        <div className="relative min-h-[450px] h-[60vh] md:h-[65vh] w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />
          
          {/* Back button & Breadcrumbs */}
          <div className="absolute top-6 md:top-8 left-4 sm:left-8 lg:left-12 z-20">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 hover:bg-slate-800 backdrop-blur-md border border-white/10 text-sm font-semibold transition-all group"
            >
              <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
          </div>

          {/* Banner text overlay */}
          <div className="absolute bottom-0 left-0 w-full px-4 sm:px-8 lg:px-12 pb-12 z-10">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <span className="inline-block text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-emerald-600 px-4 py-1.5 rounded-full shadow-lg">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold font-playfair text-white text-balance drop-shadow-md">
                  {project.title}
                </h1>
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-3 md:gap-6 text-xs sm:text-sm text-slate-300 font-medium pt-2">
                  <div className="flex items-center gap-1.5 md:gap-2 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 md:px-3.5 rounded-full border border-white/5">
                    <MapPin size={14} className="text-blue-400 sm:w-4 sm:h-4" />
                    <span className="truncate max-w-[200px] sm:max-w-none">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-2 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 md:px-3.5 rounded-full border border-white/5">
                    <Calendar size={14} className="text-emerald-400 sm:w-4 sm:h-4" />
                    {project.date}
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-2 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 md:px-3.5 rounded-full border border-white/5">
                    <Users size={14} className="text-purple-400 sm:w-4 sm:h-4" />
                    {project.beneficiaries} Beneficiaries
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Content Layout Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column - Details (Description, Objectives, Timeline, Gallery) */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Description */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold font-playfair text-white border-b border-slate-800 pb-2">
                  Project Overview
                </h2>
                <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                  {project.longDescription}
                </p>
              </motion.section>

              {/* Objectives */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold font-playfair text-white border-b border-slate-800 pb-2">
                  Key Objectives
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {project.objectives.map((obj, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/50 border border-white/5">
                      <CheckCircle size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-300 font-medium">{obj}</span>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Timeline */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold font-playfair text-white border-b border-slate-800 pb-2">
                  Execution Timeline
                </h2>
                <div className="relative border-l border-slate-800 ml-3.5 space-y-8 pt-4">
                  {project.timeline.map((step, i) => (
                    <div key={i} className="relative pl-8">
                      {/* Timeline dot icon */}
                      <span className="absolute -left-[14px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 border-2 border-emerald-500 text-emerald-400">
                        <Clock size={12} />
                      </span>
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">{step.date}</span>
                        <h4 className="text-base font-bold text-white">{step.stage}</h4>
                        <p className="text-sm text-slate-400">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Photo Gallery */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold font-playfair text-white border-b border-slate-800 pb-2">
                  Project Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {project.gallery.map((img, i) => (
                    <div
                      key={i}
                      onClick={() => setActiveImage(img)}
                      className="group relative h-40 rounded-xl overflow-hidden cursor-pointer border border-white/5 shadow-md"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} Gallery ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/0 transition-colors" />
                    </div>
                  ))}
                </div>
              </motion.section>

            </div>

            {/* Right Column - Sidebar (Impact, Organizers, Related Projects) */}
            <div className="space-y-8">
              
              {/* Impact Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 shadow-xl space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                    <Award size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white">Project Impact</h3>
                </div>
                <div className="space-y-4">
                  <div className="text-center p-4 rounded-xl bg-slate-950/50 border border-white/5">
                    <span className="block text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                      {project.beneficiaries}+
                    </span>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Lives Benefited</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed italic">
                    "{project.impact}"
                  </p>
                </div>
              </motion.div>

              {/* Organizers List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 shadow-md space-y-4"
              >
                <h3 className="text-base font-bold text-white uppercase tracking-wider">Organizing Team</h3>
                <div className="space-y-4">
                  {project.organizers.map((org, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden border border-white/10 bg-slate-800 flex items-center justify-center flex-shrink-0">
                        {org.avatar ? (
                          <Image
                            src={org.avatar}
                            alt={org.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <span className="text-base font-bold text-slate-400">
                            {org.name.replace('Rtr. ', '').charAt(0)}
                          </span>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-bold text-white truncate">{org.name}</h4>
                        <p className="text-xs text-slate-400 truncate">{org.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Related Projects */}
              {relatedProjects.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">Related Projects</h3>
                  <div className="space-y-4">
                    {relatedProjects.map((rel) => (
                      <Link key={rel.id} href={`/projects/${rel.slug}`} className="block group">
                        <div className="flex gap-3 p-3 rounded-xl bg-slate-900/30 hover:bg-slate-900/80 border border-white/5 transition-all">
                          <div className="relative h-16 w-20 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={rel.image}
                              alt={rel.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-col justify-center min-w-0">
                            <h4 className="text-sm font-bold text-slate-200 group-hover:text-blue-400 transition-colors truncate">
                              {rel.title}
                            </h4>
                            <p className="text-xs text-slate-400">{rel.date}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}

            </div>
          </div>
        </div>
      </main>

      {/* Lightbox / Image overlay */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 bg-slate-950/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <button className="absolute top-6 right-6 text-white hover:text-slate-300 bg-slate-900/60 p-2 rounded-full border border-white/10 z-50">
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-4xl max-h-[80vh] w-full h-full"
            >
              <Image
                src={activeImage}
                alt="Enlarged gallery view"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
