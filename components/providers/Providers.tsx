'use client'

import React, { useEffect, useState } from 'react'
import ReactLenis from 'lenis/react'
import Splash from '@/components/ui/Splash'

function LenisProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) }}>
      {children}
    </ReactLenis>
  )
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Splash />
      <LenisProvider>{children}</LenisProvider>
    </>
  )
}
