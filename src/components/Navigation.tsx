'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/music', label: 'Music' },
  { href: '/services', label: 'Services' },
  { href: '/journal', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
]

const projectLinks = [
  { href: '/projects/loki-zorrilla', label: 'Loki Zorrilla' },
  { href: '/projects/once-was-lou', label: 'Once Was Lou' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProjectsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-16 bg-base/95 backdrop-blur-sm border-b border-border z-40">
        <div className="flex items-center justify-between h-full px-8 md:px-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-orbitron text-sm font-bold tracking-[0.12em] text-warm-white hover:text-gold transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(245,196,0,0.5)]"
          >
            LOKI ZORRILLA
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-200 ${
                  isActive(link.href) ? 'text-warm-white' : 'text-secondary hover:text-warm-white'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/about"
              className={`font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-200 ${
                isActive('/about') ? 'text-warm-white' : 'text-secondary hover:text-warm-white'
              }`}
            >
              About
            </Link>

            {/* Projects Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onMouseEnter={() => setProjectsOpen(true)}
                onMouseLeave={() => setProjectsOpen(false)}
                onClick={() => setProjectsOpen(!projectsOpen)}
                className={`font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-200 flex items-center gap-1 ${
                  isActive('/projects') ? 'text-warm-white' : 'text-secondary hover:text-warm-white'
                }`}
              >
                Projects
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${projectsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {projectsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-surface border border-border py-2"
                  onMouseEnter={() => setProjectsOpen(true)}
                  onMouseLeave={() => setProjectsOpen(false)}
                >
                  {projectLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-2.5 font-sans text-xs tracking-[0.12em] uppercase transition-colors duration-200 ${
                        isActive(link.href)
                          ? 'text-gold'
                          : 'text-secondary hover:text-warm-white hover:bg-surface-2'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-200 ${
                  isActive(link.href) ? 'text-warm-white' : 'text-secondary hover:text-warm-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-warm-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[3px]' : ''}`}
            />
            <span
              className={`block w-6 h-px bg-warm-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-px bg-warm-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-base z-50 flex flex-col px-8 pt-24 pb-16">
          <nav className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-4xl font-light tracking-wide transition-colors duration-200 ${
                  isActive(link.href) ? 'text-gold' : 'text-warm-white hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div>
              <p className="section-label mb-4">Projects</p>
              <div className="flex flex-col gap-4 pl-4 border-l border-border">
                {projectLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-display text-2xl font-light tracking-wide transition-colors duration-200 ${
                      isActive(link.href) ? 'text-gold' : 'text-secondary hover:text-warm-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
