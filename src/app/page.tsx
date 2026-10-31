'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

// dot counts ping-pong forward then backward
const DOT_SEQUENCE = [0, 1, 2, 3, 2, 1]

export default function HomePage() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setStep((prev) => (prev + 1) % DOT_SEQUENCE.length)
    }, 350)
    return () => clearInterval(id)
  }, [])

  const dots = '.'.repeat(DOT_SEQUENCE[step])

  return (
    <main className="page">
      {/* intro loading animation — unchanged */}
      <div className="loading-screen">
        <span className="loading-text">Loading</span>
        <span className="loading-dot">.</span>
        <span className="loading-dot">.</span>
        <span className="loading-dot">.</span>
      </div>

      {/* coming soon */}
      <div className="coming">
        <Image
          src="/images/PolyArt.png"
          alt="Loki Zorrilla"
          width={240}
          height={240}
          className="coming-pfp"
          priority
        />
        <p className="coming-text">
          Coming soon<span className="coming-dots">{dots}</span>
        </p>
      </div>
    </main>
  )
}
