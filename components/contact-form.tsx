'use client'

import { useState } from 'react'
import { Send, Check } from 'lucide-react'

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Your Web3Forms access key
  const ACCESS_KEY = '18a26541-b57c-41b5-a807-8de80ee3c1a3'

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Store form element BEFORE any async work
    const form = e.currentTarget

    const formData = new FormData(form)
    formData.append('access_key', ACCESS_KEY)

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      })

      const result = await response.json()

      if (result.success) {
        setSent(true)
        // Reset using the stored form reference
        form.reset()
        setTimeout(() => setSent(false), 4000)
      } else {
        setError(result.message || 'Submission failed. Please try again.')
        setTimeout(() => setError(null), 5000)
      }
    } catch (err) {
      console.error('Submission error:', err)
      // Better error message based on error type
      if (err instanceof TypeError && err.message.includes('fetch')) {
        setError('Network error. Check your connection and try again.')
      } else {
        setError('Something went wrong. Please try again.')
      }
      setTimeout(() => setError(null), 5000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl glass p-8 md:p-10">
      {error && (
        <div className="mb-5 rounded-lg border border-red-500/50 bg-red-500/10 px-4 py-2 text-sm text-red-400">
          {error}
        </div>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" placeholder="Your name" />
        <Field label="Email" name="email" type="email" placeholder="you@email.com" />
      </div>
      <div className="mt-5">
        <Field label="Subject" name="subject" placeholder="What's this about?" />
      </div>
      <div className="mt-5">
        <label className="mb-2 block font-mono text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project..."
          className="w-full resize-none rounded-xl border border-input bg-white/[0.02] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-aurora/50 focus:ring-1 focus:ring-aurora/30"
        />
      </div>
      <button
        type="submit"
        disabled={sent || loading}
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-aurora px-7 py-3.5 font-mono text-[0.62rem] uppercase tracking-[0.3em] text-primary-foreground transition-all hover:-translate-y-0.5 glow-teal disabled:opacity-70"
      >
        {loading ? (
          <>
            <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Sending...
          </>
        ) : sent ? (
          <>
            <Check size={15} />
            Message Sent
          </>
        ) : (
          <>
            Send Message
            <Send size={14} className="transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-white/[0.02] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-aurora/50 focus:ring-1 focus:ring-aurora/30"
      />
    </div>
  )
}
