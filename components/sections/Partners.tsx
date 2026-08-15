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
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#020817] via-[#030c22] to-[#071d49] overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#ffd700]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-[#1e3a8a]/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-extrabold text-[#ffd700] mb-2 tracking-widest">
            PARTNERSHIPS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-[#ffd700]">
            Our Partners &amp; Sponsors
          </h2>
          <p className="text-lg text-[#e0c97f] font-semibold max-w-2xl mx-auto">
            Collaborating with organizations that share our vision
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 h-full w-24 sm:w-40 bg-gradient-to-r from-[#020817] to-transparent z-10 pointer-events-none" />
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 h-full w-24 sm:w-40 bg-gradient-to-l from-[#020817] to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-6 sm:gap-10 w-max animate-marquee hover:[animation-play-state:paused]"
          style={{ animationDuration: `${partners.length * 6}s` }}
        >
          {marqueeItems.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg hover:shadow-2xl rounded-2xl border border-[#ffd700]/30 hover:border-[#ffd700] transition-all duration-300 w-52 sm:w-68 h-32 sm:h-40 flex flex-col items-center justify-center p-4 sm:p-7 flex-shrink-0 group cursor-pointer"
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
              <p className="mt-2 text-xs font-bold text-center text-[#030c22] group-hover:text-[#071d49] transition-colors line-clamp-2">
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
