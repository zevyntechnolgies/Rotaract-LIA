'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  {
    name: 'Rotary Club Of Coimbatore Texcity',
    logo: '/sp1.png',
  },
  {
    name: 'Zevyn Technologies',
    logo: '/sp2.jpeg',
  },
]

// Duplicate cards enough times to create a seamless loop
const marqueeItems = [...partners, ...partners, ...partners, ...partners]

export default function Partners() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2 tracking-widest">
            PARTNERSHIPS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-slate-900 dark:text-white">
            Our Partners &amp; Sponsors
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Collaborating with organizations that share our vision
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 h-full w-24 sm:w-40 bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 h-full w-24 sm:w-40 bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-6 sm:gap-10 w-max animate-marquee hover:[animation-play-state:paused]"
          style={{ animationDuration: `${partners.length * 6}s` }}
        >
          {marqueeItems.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 shadow-md hover:shadow-xl rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-400/50 transition-all duration-300 w-52 sm:w-68 h-32 sm:h-40 flex flex-col items-center justify-center p-4 sm:p-7 flex-shrink-0 group cursor-pointer"
            >
              <div className="relative w-full h-16 sm:h-20">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
              <p className="mt-2 text-xs font-semibold text-center text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </section>
  )
}
