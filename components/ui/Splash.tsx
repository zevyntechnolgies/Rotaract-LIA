"use client"

import { useEffect, useState } from 'react'

export default function Splash() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let t1: any
    const hide = () => {
      t1 = setTimeout(() => setVisible(false), 800)
    }

    if (document.readyState === 'complete') {
      hide()
    } else {
      window.addEventListener('load', hide, { once: true })
      // fallback in case load doesn't fire
      t1 = setTimeout(hide, 2500)
    }

    return () => {
      clearTimeout(t1)
      window.removeEventListener('load', hide)
    }
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-[#030b1a] to-[#000814]">
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex items-center justify-center w-36 h-36">
          {/* Golden rotary wheel (SVG) */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-36 h-36"
            style={{ animation: 'spin 2.2s linear infinite' }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="g" x1="0%" x2="100%">
                <stop offset="0%" stopColor="#ffd700" />
                <stop offset="100%" stopColor="#f0c000" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="40" fill="none" stroke="url(#g)" strokeWidth="6" strokeLinecap="round" />
            {/* spokes */}
            {[...Array(8)].map((_, i) => {
              const angle = (i / 8) * Math.PI * 2
              const x1 = 50 + Math.cos(angle) * 12
              const y1 = 50 + Math.sin(angle) * 12
              const x2 = 50 + Math.cos(angle) * 36
              const y2 = 50 + Math.sin(angle) * 36
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ffd700" strokeWidth={3} strokeLinecap="round" />
            })}
          </svg>

          {/* mayon logo */}
          <img src="/mayon.png" alt="Mayon" className="relative w-20 h-20 object-contain" />
        </div>

        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-300">Welcome to Mayon Family</h2>
          <p className="text-sm text-slate-200 mt-2">Spinning into action — building brighter futures</p>
        </div>
      </div>
    </div>
  )
}
