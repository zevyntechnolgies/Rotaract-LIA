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
          {/* Rotary-style golden wheel (SVG) */}
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 w-36 h-36"
            style={{ animation: 'spin 2.2s linear infinite' }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="goldGrad" x1="0%" x2="100%">
                <stop offset="0%" stopColor="#fff2b8" />
                <stop offset="50%" stopColor="#ffd700" />
                <stop offset="100%" stopColor="#f0c000" />
              </linearGradient>
            </defs>

            {/* Outer toothed rim */}
            {[...Array(24)].map((_, i) => {
              const angle = (i / 24) * Math.PI * 2
              const cx = 100 + Math.cos(angle) * 86
              const cy = 100 + Math.sin(angle) * 86
              const rx = Math.cos(angle) * 10
              const ry = Math.sin(angle) * 10
              return (
                <rect
                  key={`tooth-${i}`}
                  x={cx - 6}
                  y={cy - 6}
                  width={12}
                  height={12}
                  rx={2}
                  ry={2}
                  transform={`rotate(${(angle * 180) / Math.PI} ${cx} ${cy})`}
                  fill="#ffd700"
                />
              )
            })}

            {/* Outer ring */}
            <circle cx="100" cy="100" r="78" fill="none" stroke="url(#goldGrad)" strokeWidth="8" />

            {/* Inner spokes */}
            {[...Array(12)].map((_, i) => {
              const angle = (i / 12) * Math.PI * 2
              const x1 = 100 + Math.cos(angle) * 30
              const y1 = 100 + Math.sin(angle) * 30
              const x2 = 100 + Math.cos(angle) * 66
              const y2 = 100 + Math.sin(angle) * 66
              return (
                <line
                  key={`spoke-${i}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#ffd700"
                  strokeWidth={3}
                  strokeLinecap="round"
                />
              )
            })}

            {/* Inner ring and hub */}
            <circle cx="100" cy="100" r="28" fill="url(#goldGrad)" stroke="#f0c000" strokeWidth={3} />
            <circle cx="100" cy="100" r="12" fill="#fff9e6" />
          </svg>

          {/* central hub */}
          <svg viewBox="0 0 100 100" className="relative w-20 h-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="hub" x1="0%" x2="100%">
                <stop offset="0%" stopColor="#ffd700" />
                <stop offset="100%" stopColor="#f0c000" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="18" fill="url(#hub)" />
          </svg>
        </div>

        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-300">Welcome to Mayon Family</h2>
          <p className="text-sm text-slate-200 mt-2">Spinning into action — building brighter futures</p>
        </div>
      </div>
    </div>
  )
}
