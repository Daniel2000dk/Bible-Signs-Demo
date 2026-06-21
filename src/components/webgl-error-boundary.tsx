'use client'

import React from 'react'

interface FallbackProps {
  className?: string
}

export function WebGLFallback({ className }: FallbackProps) {
  return (
    <div
      className={className}
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% 40%, #2F3A32 0%, #1A1A1A 70%)',
      }}
    />
  )
}

interface BoundaryProps {
  fallback: React.ReactNode
  children: React.ReactNode
}

interface BoundaryState {
  hasError: boolean
}

export class WebGLErrorBoundary extends React.Component<BoundaryProps, BoundaryState> {
  constructor(props: BoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): BoundaryState {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}
