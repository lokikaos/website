'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  const handle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <p className="text-center font-display text-xl md:text-2xl italic text-terracotta">
        Thanks — I&apos;ll be in touch.
      </p>
    )
  }

  return (
    <form onSubmit={handle} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-muted mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full bg-transparent border-b border-line focus:border-ink outline-none py-2 text-base"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-muted mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full bg-transparent border-b border-line focus:border-ink outline-none py-2 text-base"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-muted mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full bg-transparent border-b border-line focus:border-ink outline-none py-2 text-base resize-none"
        />
      </div>

      <div className="pt-2 text-center">
        <button
          type="submit"
          className="text-sm tracking-[0.2em] uppercase border border-ink px-8 py-3 hover:bg-ink hover:text-sand transition-colors"
        >
          Send
        </button>
      </div>
    </form>
  )
}
