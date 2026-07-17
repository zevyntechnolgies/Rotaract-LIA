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
    content: 'Being part of Rotaract LIA has been the best decision. I&apos;ve grown as a leader and made meaningful impact.',
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
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2 tracking-widest">
            VOICES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-slate-900 dark:text-white">
            What People Say
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
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
                <div className="glass rounded-2xl p-8 md:p-12 border border-white/20">
                  {/* Quote Icon */}
                  <div className="mb-6 inline-block p-3 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg">
                    <Quote size={24} className="text-white" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-lg text-slate-700 dark:text-slate-200 mb-8 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex-shrink-0`} />
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
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
