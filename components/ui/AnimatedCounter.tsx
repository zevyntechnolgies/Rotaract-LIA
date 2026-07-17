'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface AnimatedCounterProps {
  value: number
  duration?: number
}

export default function AnimatedCounter({
  value,
  duration = 2,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.1 })
  const hasStarted = useRef(false)

  useEffect(() => {
    if (!inView || hasStarted.current) return

    hasStarted.current = true
    let start = 0
    const end = value
    const increment = end / (duration * 60)
    let current = start

    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [inView, value, duration])

  return <span ref={ref}>{count}</span>
}
