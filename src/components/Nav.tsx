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
    <header className="fixed top-0 inset-x-0 z-50 bg-sand/90 backdrop-blur-sm">
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
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
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

      {/* mobile drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-20 bottom-0 bg-sand transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 text-xl font-display">
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
