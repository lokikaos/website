'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/photography', label: 'Photography' },
  { href: '/music', label: 'Music' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="relative z-50 bg-sand">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl md:text-3xl tracking-wide italic hover:text-terracotta"
        >
          Loki Zorrilla
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`hover:text-terracotta ${
                pathname === l.href ? 'text-terracotta' : 'text-ink-soft'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* mobile hamburger */}
        <button
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative z-[60] flex flex-col gap-1.5 p-2 -mr-2"
        >
          <span
            className={`block w-6 h-px bg-ink transition-transform ${
              open ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-opacity ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-transform ${
              open ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* mobile drawer — fixed full-screen overlay, fully contained */}
      <div
        className={`md:hidden fixed inset-0 z-[55] bg-sand transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center justify-center w-full h-full gap-10 text-2xl font-display px-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`tracking-wide hover:text-terracotta ${
                pathname === l.href ? 'text-terracotta' : ''
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
