import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden flex items-center justify-center">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient veil */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-[#f7dce9]/60 to-[#c7b6ff]/50 mix-blend-screen" />

      {/* Subtle sparkles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-16 left-12 w-2 h-2 rounded-full bg-white/80 shadow-[0_0_12px_4px_rgba(255,255,255,0.6)] animate-twinkle" />
        <div className="absolute top-24 right-20 w-1.5 h-1.5 rounded-full bg-white/80 shadow-[0_0_10px_3px_rgba(255,255,255,0.5)] animate-twinkle delay-150" />
        <div className="absolute bottom-20 left-24 w-1.5 h-1.5 rounded-full bg-white/80 shadow-[0_0_10px_3px_rgba(255,255,255,0.5)] animate-twinkle delay-300" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl leading-tight font-serifTitle text-rose-700 drop-shadow-[0_2px_0_rgba(255,255,255,0.6)]">
          Happy Birthday Sneha 🎉💖
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-rose-900/80 text-lg sm:text-xl font-light">
          Wishing you a day filled with love, joy & all the soft magic you deserve.
        </motion.p>
      </div>
    </section>
  )
}

export default Hero
