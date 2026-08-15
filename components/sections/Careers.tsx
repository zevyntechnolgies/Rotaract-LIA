'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, MapPin, Clock, X, ChevronRight, CalendarDays, Building2, ArrowRight } from 'lucide-react'

// ─── ADMIN: Add, edit, or remove job openings here ───────────
// Set active: false to hide a posting without deleting it.
const jobOpenings = [
  {
    id: 1,
    active: true,
    title: 'Community Service Coordinator',
    department: 'Community Service',
    location: 'Coimbatore, Tamil Nadu',
    type: 'Volunteer',
    deadline: '30 Sep 2026',
    description: 'Lead and coordinate community service projects, manage volunteer teams, and ensure successful execution of outreach initiatives across the district.',
    responsibilities: [
      'Plan and organize community service events',
      'Coordinate with local NGOs and institutions',
      'Manage volunteer teams during project execution',
      'Prepare post-event reports and impact assessments',
    ],
    requirements: [
      'Active Rotaract member (preferred)',
      'Strong leadership and communication skills',
      'Passion for community development',
      'Available on weekends for events',
    ],
  },
  {
    id: 2,
    active: true,
    title: 'Social Media and Content Manager',
    department: 'Club Service',
    location: 'Remote / Coimbatore',
    type: 'Part-time Volunteer',
    deadline: '15 Sep 2026',
    description: 'Drive Rotaract LIA digital presence by creating compelling content, managing social media platforms, and documenting club activities.',
    responsibilities: [
      'Create posts, reels, and stories for Instagram, LinkedIn, and Facebook',
      'Design graphics using Canva or similar tools',
      'Document events through photography and videography',
      'Maintain a consistent content calendar',
    ],
    requirements: [
      'Experience with social media management',
      'Basic graphic design skills',
      'Good photography/videography sense',
      'Ability to meet content deadlines',
    ],
  },
]
// ──────────────────────────────────────────────────────────────

type Job = (typeof jobOpenings)[number]

export default function Careers() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  // null = closed, 'list' = job list modal, Job object = detail modal
  const [view, setView] = useState<null | 'list' | Job>(null)

  const activeJobs = jobOpenings.filter((j) => j.active)

  const cv = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }
  const iv = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

  return (
    <section
      id="careers"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#071d49] via-[#030c22] to-[#020817] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#ffd700]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#1e3a8a]/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div variants={cv} initial="hidden" animate={inView ? 'visible' : 'hidden'}>

          {/* Icon */}
          <motion.div variants={iv} className="inline-flex p-5 rounded-full bg-[#ffd700]/10 mb-6 text-[#ffd700]">
            <Briefcase size={36} />
          </motion.div>

          <motion.p variants={iv} className="text-sm font-extrabold text-[#ffd700] mb-2 tracking-widest">
            JOIN OUR TEAM
          </motion.p>

          <motion.h2 variants={iv} className="text-4xl md:text-5xl font-bold font-playfair mb-5 text-[#ffd700]">
            CAREERS OPPORTUNITIES
          </motion.h2>

          <motion.p variants={iv} className="text-lg text-[#e0c97f] font-semibold max-w-2xl mx-auto mb-4">
            We are always looking for passionate individuals to drive meaningful change in the community.
          </motion.p>

          {/* Opening count badge */}
          <motion.div variants={iv} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffd700]/10 border border-[#ffd700]/30 text-[#ffd700] text-sm font-bold mb-10">
            <span className="w-2 h-2 rounded-full bg-[#ffd700] animate-pulse" />
            {activeJobs.length} {activeJobs.length === 1 ? 'Opening' : 'Openings'} Available
          </motion.div>

          {/* Single CTA button */}
          <motion.div variants={iv}>
            <button
              onClick={() => setView('list')}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-[#ffd700] to-[#f59e0b] hover:from-[#ffe55c] hover:to-[#fbbf24] text-[#030c22] font-bold text-base shadow-lg shadow-yellow-500/30 transition-all hover:-translate-y-1 cursor-pointer"
            >
              View Opportunities <ArrowRight size={20} />
            </button>
          </motion.div>

        </motion.div>
      </div>

      {/* ── Modal Layer ── */}
      <AnimatePresence>
        {view !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setView(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Job LIST modal */}
            {view === 'list' && (
              <motion.div
                key="list-modal"
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 30 }}
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                className="fixed inset-x-4 top-[5%] sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#071d49] to-[#030c22] border border-[#ffd700]/30 rounded-3xl shadow-2xl z-50 p-6 sm:p-10"
              >
                <button
                  onClick={() => setView(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-[#ffd700]/10 hover:bg-[#ffd700]/20 text-[#ffd700] transition-all cursor-pointer"
                >
                  <X size={20} />
                </button>

                <p className="text-xs font-extrabold text-[#ffd700] tracking-widest mb-1">CURRENT OPENINGS</p>
                <h2 className="text-2xl sm:text-3xl font-bold font-playfair text-[#ffd700] mb-6">Available Positions</h2>

                <div className="h-px bg-gradient-to-r from-transparent via-[#ffd700]/30 to-transparent mb-6" />

                {activeJobs.length === 0 ? (
                  <p className="text-[#c8b97a] text-center py-8">No openings at the moment. Please check back soon!</p>
                ) : (
                  <div className="space-y-4">
                    {activeJobs.map((job) => (
                      <div
                        key={job.id}
                        className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-2xl bg-[#020817]/50 border border-[#ffd700]/15 hover:border-[#ffd700]/40 transition-all"
                      >
                        <div className="p-2.5 rounded-xl bg-[#ffd700]/10 text-[#ffd700] self-start shrink-0">
                          <Building2 size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-bold text-[#ffd700] mb-0.5">{job.title}</h3>
                          <div className="flex flex-wrap gap-2 text-xs font-semibold mt-1">
                            <span className="flex items-center gap-1 text-[#e0c97f]">
                              <MapPin size={11} className="text-[#ffd700]" /> {job.location}
                            </span>
                            <span className="flex items-center gap-1 text-[#e0c97f]">
                              <Clock size={11} className="text-[#ffd700]" /> {job.type}
                            </span>
                            <span className="flex items-center gap-1 text-[#e0c97f]">
                              <CalendarDays size={11} className="text-[#ffd700]" /> Deadline: {job.deadline}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => setView(job)}
                          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ffd700] to-[#f59e0b] text-[#030c22] font-bold text-xs shadow-md hover:-translate-y-0.5 transition-all cursor-pointer shrink-0"
                        >
                          View <ChevronRight size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* Job DETAIL modal */}
            {view !== 'list' && (
              <motion.div
                key="detail-modal"
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 30 }}
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                className="fixed inset-x-4 top-[5%] sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#071d49] to-[#030c22] border border-[#ffd700]/30 rounded-3xl shadow-2xl z-50 p-6 sm:p-10"
              >
                {/* Header row */}
                <div className="flex items-center gap-3 mb-6">
                  <button
                    onClick={() => setView('list')}
                    className="p-2 rounded-full bg-[#ffd700]/10 hover:bg-[#ffd700]/20 text-[#ffd700] transition-all cursor-pointer"
                  >
                    <ChevronRight size={18} className="rotate-180" />
                  </button>
                  <span className="text-xs font-bold text-[#030c22] bg-gradient-to-r from-[#ffd700] to-[#f59e0b] px-3 py-1 rounded-full">
                    {(view as Job).department}
                  </span>
                  <button
                    onClick={() => setView(null)}
                    className="ml-auto p-2 rounded-full bg-[#ffd700]/10 hover:bg-[#ffd700]/20 text-[#ffd700] transition-all cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-playfair text-[#ffd700] mb-3">
                  {(view as Job).title}
                </h2>
                <div className="flex flex-wrap gap-4 text-sm text-[#e0c97f] font-semibold mb-6">
                  <span className="flex items-center gap-1.5"><MapPin size={13} className="text-[#ffd700]" />{(view as Job).location}</span>
                  <span className="flex items-center gap-1.5"><Clock size={13} className="text-[#ffd700]" />{(view as Job).type}</span>
                  <span className="flex items-center gap-1.5"><CalendarDays size={13} className="text-[#ffd700]" />Deadline: {(view as Job).deadline}</span>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-[#ffd700]/30 to-transparent mb-6" />

                <div className="mb-6">
                  <h3 className="text-xs font-extrabold text-[#ffd700] uppercase tracking-widest mb-3">About the Role</h3>
                  <p className="text-[#c8b97a] leading-relaxed">{(view as Job).description}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xs font-extrabold text-[#ffd700] uppercase tracking-widest mb-3">Responsibilities</h3>
                  <ul className="space-y-2">
                    {(view as Job).responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#c8b97a] text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ffd700] shrink-0" />{r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xs font-extrabold text-[#ffd700] uppercase tracking-widest mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {(view as Job).requirements.map((r, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#c8b97a] text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ffd700] shrink-0" />{r}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  onClick={() => setView(null)}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#ffd700] to-[#f59e0b] hover:from-[#ffe55c] hover:to-[#fbbf24] text-[#030c22] font-bold shadow-lg shadow-yellow-500/30 transition-all hover:-translate-y-1"
                >
                  Apply via Contact <ChevronRight size={18} />
                </a>
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
