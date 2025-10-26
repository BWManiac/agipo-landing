"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight } from 'lucide-react'

interface EmailCaptureProps {
  placeholder?: string
  successMessage?: string
  buttonText?: string
  variant?: 'inline' | 'stacked'
  className?: string
  source?: string
  context?: string
}

export function EmailCapture({ 
  placeholder = "Enter your email...",
  successMessage = "Thanks! We'll be in touch soon.",
  buttonText = "Join Waitlist",
  variant = 'inline',
  className = "",
  source = "agipo-landing",
  context = "Email capture form"
}: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || isLoading) return

    // Clear previous errors
    setError('')

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          source: source,
          context: context
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to submit email')
      }

      setIsSubmitted(true)
      setEmail('')
    } catch (error) {
      console.error('Email submission error:', error)
      setError('Failed to submit email. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className={`text-center p-4 rounded-lg bg-green-500/10 border border-green-500/20 ${className}`}>
        <p className="text-green-600 font-medium">{successMessage}</p>
      </div>
    )
  }

  if (variant === 'stacked') {
    return (
      <div className={`space-y-3 ${className}`}>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
            required
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? 'Submitting...' : buttonText}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </form>
        {error && (
          <div className="text-red-500 text-sm text-center">
            {error}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          required
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="px-8"
        >
          {isLoading ? 'Submitting...' : buttonText}
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </form>
      {error && (
        <div className="text-red-500 text-sm text-center">
          {error}
        </div>
      )}
    </div>
  )
}
