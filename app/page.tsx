'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function Home() {
  const [email, setEmail] = useState('')
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setFormState('success')
        setEmail('')
      } else {
        setFormState('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setFormState('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-center text-center overflow-hidden"
      style={{ backgroundImage: "url('/Hero_Background.png')" }}
    >
      {/* Overlay */}
      <img
        src="/Accent_Overlay.png"
        alt="Overlay"
        className="absolute top-0 left-0 w-full opacity-60 pointer-events-none select-none z-0"
      />

      {/* Header Logo */}
      <motion.img
        src="/header.png"
        alt="TheGirlz.store"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-80 md:w-96 lg:w-[28rem] mb-8 mt-8 relative z-30"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-lg text-gray-700 mb-8 max-w-md relative z-30"
      >
        We're crafting something stunning ✨  
        Join our waitlist to get early access to exclusive digital nail bundles.
      </motion.p>

      {/* Waitlist Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="relative z-30"
      >
        {formState === 'success' ? (
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-soft-glow max-w-md mx-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="text-4xl mb-4">💅</div>
            <h2 className="font-playfair text-2xl text-lilac-800 mb-2">
              You're on the list!
            </h2>
            <p className="text-lilac-600">
              We'll notify you as soon as we launch.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md w-full justify-center">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border border-lilac-200 shadow-sm focus:ring-2 focus:ring-lilac-500 outline-none text-gray-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={formState === 'loading'}
            />
            <button
              type="submit"
              disabled={formState === 'loading' || !email.trim()}
              className="px-5 py-3 rounded-xl bg-lilac-600 text-white font-semibold hover:bg-lilac-700 shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formState === 'loading' ? 'Joining...' : 'Join'}
            </button>
          </form>
        )}

        {/* Status messages */}
        {formState === 'success' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-lilac-700 font-medium"
          >
            You're on the list 💅
          </motion.p>
        )}
        {formState === 'error' && errorMessage && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-red-500 font-medium"
          >
            {errorMessage}
          </motion.p>
        )}
      </motion.div>

      <footer className="mt-10 text-sm text-gray-500 z-10">
        © {new Date().getFullYear()} TheGirlz.store — All rights reserved.
      </footer>
    </main>
  )
}
