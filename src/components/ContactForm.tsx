'use client'

import { useState } from 'react'

// Where the form's email should land. Change here if you want it routed elsewhere.
const TO_EMAIL = 'lokizorrillaofficial@gmail.com'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  const handle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const data = new FormData(form)
    const name = (data.get('name') as string || '').trim()
    const email = (data.get('email') as string || '').trim()
    const message = (data.get('message') as string || '').trim()

    const subject = `Website message from ${name || 'a visitor'}`
    const body = `${message}\n\n— ${name}${email ? ` (${email})` : ''}`

    const mailto =
      `mailto:${TO_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`

    // open the visitor's mail client with the message pre-filled
    window.location.href = mailto
    setSent(true)
  }

  if (sent) {
    return (
      <div className="text-center space-y-4">
        <p className="font-display text-xl md:text-2xl italic text-terracotta">
          Your mail client should have opened.
        </p>
        <p className="text-sm text-muted">
          If nothing happened, email directly:{' '}
          <a
            href={`mailto:${TO_EMAIL}`}
            className="underline hover:text-terracotta"
          >
            {TO_EMAIL}
          </a>
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="text-xs tracking-[0.2em] uppercase border-b border-ink pb-0.5 hover:text-terracotta hover:border-terracotta"
        >
          Send another
        </button>
      </div>
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
