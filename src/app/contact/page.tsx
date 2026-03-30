'use client'

import React, { useState } from 'react'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formState.name.trim()) newErrors.name = 'Name is required'
    if (!formState.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email))
      newErrors.email = 'Invalid email address'
    if (!formState.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    // TODO: Wire up to Resend, Formspree, or similar email service
    // e.g. await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formState) })
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <main className="pt-16">
      {/* Page Header */}
      <section className="py-24 px-8 md:px-16 lg:px-24">
        <h1
          className="font-display font-light text-warm-white leading-none"
          style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}
        >
          Contact
        </h1>
      </section>

      <div className="px-8 md:px-16 lg:px-24">
        <div className="divider" />
      </div>

      {/* Form + Info Section */}
      <section className="py-16 px-8 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Form (~60% width) */}
          <div className="lg:w-3/5">
            {submitted ? (
              <div className="py-16">
                <div className="border-l-4 border-gold pl-8">
                  <h2 className="font-display text-3xl font-light text-warm-white mb-3">
                    Message Sent
                  </h2>
                  <p className="font-sans text-base text-secondary leading-relaxed">
                    Message sent. I&apos;ll be in touch soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block section-label mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full bg-surface border ${
                      errors.name ? 'border-red-500/50' : 'border-border'
                    } px-4 py-3 font-sans text-sm text-warm-white placeholder-muted focus:outline-none focus:border-gold-dim transition-colors duration-200`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 font-sans text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block section-label mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full bg-surface border ${
                      errors.email ? 'border-red-500/50' : 'border-border'
                    } px-4 py-3 font-sans text-sm text-warm-white placeholder-muted focus:outline-none focus:border-gold-dim transition-colors duration-200`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 font-sans text-xs text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block section-label mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full bg-surface border border-border px-4 py-3 font-sans text-sm text-warm-white focus:outline-none focus:border-gold-dim transition-colors duration-200 appearance-none cursor-pointer"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Mixing & Mastering">Mixing &amp; Mastering</option>
                    <option value="Sync Licensing">Sync Licensing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block section-label mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={8}
                    placeholder="Tell me about your project..."
                    className={`w-full bg-surface border ${
                      errors.message ? 'border-red-500/50' : 'border-border'
                    } px-4 py-3 font-sans text-sm text-warm-white placeholder-muted focus:outline-none focus:border-gold-dim transition-colors duration-200 resize-y`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 font-sans text-xs text-red-400">{errors.message}</p>
                  )}
                </div>

                <button type="submit" className="btn-primary w-fit mt-2">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info (~35% width) */}
          <div className="lg:w-2/5">
            <div className="sticky top-24">
              <div className="mb-10">
                <p className="section-label mb-6">Response Time</p>
                <p className="font-sans text-base text-secondary leading-relaxed">
                  1–3 business days for general inquiries. For time-sensitive sync or mix requests,
                  please note your deadline in the message.
                </p>
              </div>

              <div className="divider mb-10" />

              <div className="mb-10">
                <p className="section-label mb-6">Best Reached For</p>
                <ul className="flex flex-col gap-3">
                  {[
                    'Mixing & mastering inquiries',
                    'Sync licensing requests',
                    'Collaboration proposals',
                    'Press & media',
                    'Everything else',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-sans text-sm text-secondary">
                      <span className="w-4 h-px bg-border-light flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="divider mb-10" />

              <div>
                <p className="section-label mb-6">Elsewhere</p>
                <div className="flex flex-col gap-3">
                  {[
                    { label: 'Spotify', url: '#' },
                    { label: 'Bandcamp', url: '#' },
                    { label: 'Instagram', url: '#' },
                    { label: 'SoundCloud', url: '#' },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      className="font-sans text-sm text-secondary hover:text-warm-white transition-colors duration-200 flex items-center gap-3 group"
                    >
                      <span className="w-4 h-px bg-border-light flex-shrink-0 group-hover:bg-gold transition-colors" />
                      {social.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
