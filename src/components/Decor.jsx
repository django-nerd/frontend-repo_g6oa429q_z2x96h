import React from 'react'

const AnimatedHearts = () => {
  const hearts = Array.from({ length: 12 })
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((_, i) => {
        const left = Math.random() * 100
        const delay = (i % 6) * 0.6
        const duration = 8 + Math.random() * 6
        const size = 12 + Math.random() * 10
        return (
          <div
            key={i}
            className="absolute bottom-[-40px] text-rose-400/60"
            style={{ left: `${left}%`, animation: `floatUp ${duration}s ease-in ${delay}s infinite` }}
          >
            <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21s-6.716-4.315-9.428-7.027C.86 12.262 0 10.83 0 9.214 0 6.397 2.253 4 5.036 4c1.59 0 3.104.733 4.064 1.867C10.86 4.733 12.373 4 13.964 4 16.747 4 19 6.397 19 9.214c0 1.616-.86 3.048-2.572 4.759C18.716 16.685 12 21 12 21z" />
            </svg>
          </div>
        )
      })}
    </div>
  )
}

const Decor = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <AnimatedHearts />
    </div>
  )
}

export default Decor
