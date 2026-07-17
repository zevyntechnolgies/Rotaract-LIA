'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/6369798451"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
        y: [0, -10, 0],
      }}
      exit={{ scale: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        y: {
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
      className="fixed bottom-8 right-8 z-40 p-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-2xl hover:shadow-3xl transition-shadow"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.a>
  )
}
