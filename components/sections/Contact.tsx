'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>()

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Unable to send your message right now.')
      }

      setSubmitStatus('success')
      reset()
      setTimeout(() => setSubmitStatus('idle'), 4000)
    } catch (error) {
      console.error('Contact form submission failed:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 4000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#020817] via-[#030c22] to-[#071d49] overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#ffd700]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#1e3a8a]/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-extrabold text-[#ffd700] mb-2 tracking-widest">
            GET IN TOUCH
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-[#ffd700]">
            Contact Us
          </h2>
          <p className="text-lg text-[#e0c97f] font-semibold max-w-2xl mx-auto">
            Have a question? We&apos;d love to hear from you. Reach out anytime!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold font-playfair text-[#ffd700] mb-8">
              Contact Information
            </h3>

            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'racleadindiaahead2021@gmail.com ',
                href: 'mailto:racleadindiaahead2021@gmail.com ',
                color: 'from-amber-500 to-yellow-400',
              },
              {
                icon: Phone,
                label: 'Phone',
                value: '+91 63697 98451',
                href: 'tel:+916369798451',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: MapPin,
                label: 'Address',
                value: 'Coimbatore,Tamil Nadu',
                href: '#',
                color: 'from-indigo-500 to-blue-600',
              },
              {
                icon: MessageCircle,
                label: 'WhatsApp',
                value: '+91 63697 98451',
                href: 'https://wa.me/6369798451',
                color: 'from-green-600 to-emerald-600',
              },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.a
                  key={idx}
                  href={item.href}
                  target={item.label === 'WhatsApp' ? '_blank' : undefined}
                  rel={item.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="block glossy-card shadow-lg hover:shadow-xl rounded-xl p-4 sm:p-6 border border-[#ffd700]/20 hover:border-[#ffd700]/50 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`flex-shrink-0 p-2.5 sm:p-3 rounded-lg bg-gradient-to-br ${item.color} shadow-lg group-hover:shadow-xl transition-shadow`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-bold text-[#ffd700] mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm sm:text-base font-extrabold text-[#e0c97f] break-all sm:break-words leading-snug">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold font-playfair text-[#ffd700] mb-8">
              Send us a Message
            </h3>

            {/* Name */}
            <div>
              <input
                {...register('name', { required: 'Name is required' })}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg glossy-card border border-[#ffd700]/20 focus:border-[#ffd700]/50 outline-none transition-colors text-[#ffd700] placeholder-[#e0c97f]/50 font-semibold bg-transparent"
              />
              {errors.name && <p className="text-red-400 font-bold text-sm mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <input
                {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/, message: 'Invalid email' } })}
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg glossy-card border border-[#ffd700]/20 focus:border-[#ffd700]/50 outline-none transition-colors text-[#ffd700] placeholder-[#e0c97f]/50 font-semibold bg-transparent"
              />
              {errors.email && <p className="text-red-400 font-bold text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Phone */}
            <div>
              <input
                {...register('phone', { required: 'Phone is required' })}
                placeholder="Your Phone"
                className="w-full px-4 py-3 rounded-lg glossy-card border border-[#ffd700]/20 focus:border-[#ffd700]/50 outline-none transition-colors text-[#ffd700] placeholder-[#e0c97f]/50 font-semibold bg-transparent"
              />
              {errors.phone && <p className="text-red-400 font-bold text-sm mt-1">{errors.phone.message}</p>}
            </div>

            {/* Subject */}
            <div>
              <input
                {...register('subject', { required: 'Subject is required' })}
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg glossy-card border border-[#ffd700]/20 focus:border-[#ffd700]/50 outline-none transition-colors text-[#ffd700] placeholder-[#e0c97f]/50 font-semibold bg-transparent"
              />
              {errors.subject && <p className="text-red-400 font-bold text-sm mt-1">{errors.subject.message}</p>}
            </div>

            {/* Message */}
            <div>
              <textarea
                {...register('message', { required: 'Message is required' })}
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg glossy-card border border-[#ffd700]/20 focus:border-[#ffd700]/50 outline-none transition-colors text-[#ffd700] placeholder-[#e0c97f]/50 font-semibold resize-none bg-transparent"
              />
              {errors.message && <p className="text-red-400 font-bold text-sm mt-1">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
              className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                submitStatus === 'success'
                  ? 'bg-green-600 text-white'
                  : submitStatus === 'error'
                    ? 'bg-red-600 text-white'
                    : 'bg-gradient-to-r from-[#ffd700] to-[#f59e0b] hover:from-[#ffe55c] hover:to-[#fbbf24] text-[#030c22] shadow-lg shadow-yellow-500/30'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-[#030c22] border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : submitStatus === 'success' ? (
                <>
                  <span>✓</span> Message Sent!
                </>
              ) : submitStatus === 'error' ? (
                <>
                  <span>✕</span> Error. Try Again
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
