import React from 'react'
import { motion } from 'framer-motion'

const MessageCard = () => {
  return (
    <section className="relative py-16 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,#f7dce9_0%,transparent_35%),_radial-gradient(circle_at_80%_20%,#c7b6ff_0%,transparent_35%),_radial-gradient(circle_at_50%_90%,#fde2f4_0%,transparent_35%)] opacity-70" />
      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl p-8 sm:p-10 bg-white/80 backdrop-blur-xl shadow-[0_10px_60px_rgba(199,182,255,0.35)] border border-rose-100">
          <h2 className="text-2xl sm:text-3xl font-serifTitle text-rose-700 mb-3">A little note</h2>
          <p className="text-rose-900/80 leading-relaxed text-base sm:text-lg">
            Dear Sneha, may your year be soft and kind—sprinkled with cozy mornings, gentle sunsets, and sweet moments that make your heart glow. You are loved more than words can say, and the world is brighter with you in it. Happy birthday, beautiful soul.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default MessageCard
