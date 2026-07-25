'use client'

import React from 'react'

export function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Radial Gradient Glows */}
      <div className="absolute -top-[20%] left-[15%] w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 via-indigo-500/10 to-transparent rounded-full blur-3xl opacity-70 animate-pulse pointer-events-none" />
      <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-gradient-to-tr from-violet-500/10 via-pink-500/5 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[25%] w-[650px] h-[650px] bg-gradient-to-r from-blue-600/10 to-teal-500/5 rounded-full blur-3xl opacity-50 pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      
      {/* Subtle vignette border gradient */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
    </div>
  )
}
