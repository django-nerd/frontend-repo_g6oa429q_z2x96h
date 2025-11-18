import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Confetti = () => {
  const pieces = Array.from({ length: 80 })
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-40">
      {pieces.map((_, i) => {
        const left = Math.random() * 100
        const delay = Math.random() * 0.6
        const duration = 2.5 + Math.random() * 1.2
        const rotate = (Math.random() - 0.5) * 360
        const size = 6 + Math.random() * 6
        const bg = Math.random() > 0.5 ? '#f7dce9' : '#c7b6ff'
        return (
          <motion.span
            key={i}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: '110vh', opacity: 1, rotate }}
            transition={{ duration, delay, ease: 'easeIn' }}
            style={{ left: `${left}%`, width: size, height: size, backgroundColor: bg }}
            className="absolute top-0 rounded-sm shadow-sm"
          />
        )
      })}
    </div>
  )
}

const Surprise = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className="relative py-20 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,#fff_0%,transparent_35%),_radial-gradient(circle_at_90%_20%,#fff_0%,transparent_35%)]" />
      <div className="relative max-w-3xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-serifTitle text-rose-700 mb-6">
          A little surprise
        </motion.h3>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#f7dce9] to-[#c7b6ff] text-rose-900 shadow-[0_10px_30px_rgba(247,220,233,0.6)] border border-white/50">
          Click for a Surprise 💝
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30 flex items-center justify-center bg-rose-900/10 backdrop-blur-sm p-6">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="relative w-full max-w-md rounded-3xl bg-white/90 border border-rose-100 shadow-[0_20px_70px_rgba(199,182,255,0.45)] p-8 text-center">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-tr from-[#f7dce9] to-[#c7b6ff] shadow-lg" />
                <h4 className="font-serifTitle text-2xl text-rose-700 mb-2">Surprise! 🎀</h4>
                <p className="text-rose-900/80 mb-6">May your day sparkle with gentle joy, warm hugs, and little miracles. You deserve the sweetest things today and always. Happy Birthday, Sneha! ✨</p>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setOpen(false)}
                  className="px-5 py-2 rounded-full bg-rose-600 text-white shadow hover:bg-rose-500 transition-colors">
                  Close
                </motion.button>
              </motion.div>
              <Confetti />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Surprise
