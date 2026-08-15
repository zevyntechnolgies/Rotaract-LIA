'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  image: string
  color: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Community Beneficiary',
    content: 'Rotaract LIA transformed our community through dedicated service projects. Their commitment to excellence is truly inspiring.',
    rating: 5,
    image: '/testimonials/test-1.jpg',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Youth Member',
    content: "Being part of Rotaract LIA has been the best decision. I've grown as a leader and made meaningful impact.",
    rating: 5,
    image: '/testimonials/test-2.jpg',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 3,
    name: 'Dr. Anand Patel',
    role: 'District Governor',
    content: 'Rotaract LIA consistently demonstrates excellence in service and leadership. A true example for all clubs.',
    rating: 5,
    image: '/testimonials/test-3.jpg',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    name: 'Meera Singh',
    role: 'Partner Organization',
    content: 'Their professionalism and dedication to our joint initiatives is commendable. Great partnership!',
    rating: 5,
    image: '/testimonials/test-4.jpg',
    color: 'from-orange-500 to-red-500',
  },
]

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#071d49] via-[#030c22] to-[#020817] overflow-hidden"
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
            VOICES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-[#ffd700]">
            What People Say
          </h2>
          <p className="text-lg text-[#e0c97f] font-semibold max-w-2xl mx-auto">
            Hear from community members and partners about our impact
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            loop
            className="testimonials-carousel"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="glossy-card rounded-2xl p-8 md:p-12 border border-[#ffd700]/20">
                  {/* Quote Icon */}
                  <div className="mb-6 inline-block p-3 bg-gradient-to-br from-[#ffd700] to-[#f59e0b] rounded-lg shadow-md shadow-yellow-500/30">
                    <Quote size={24} className="text-[#030c22]" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-[#ffd700] text-[#ffd700]" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-lg text-[#c8b97a] mb-8 leading-relaxed italic font-medium">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex-shrink-0 border border-[#ffd700]/30`} />
                    <div>
                      <p className="font-bold text-[#ffd700]">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-[#e0c97f] font-semibold">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
