import React from 'react'
import Hero from './components/Hero'
import MessageCard from './components/MessageCard'
import Surprise from './components/Surprise'
import Decor from './components/Decor'

function App() {
  return (
    <div className="min-h-screen bg-white text-rose-900 selection:bg-[#f7dce9] selection:text-rose-700">
      {/* Global soft background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,#fff,transparent_40%),_radial-gradient(circle_at_90%_20%,#f7dce9,transparent_40%),_radial-gradient(circle_at_20%_90%,#c7b6ff,transparent_40%)]" />

      <Decor />
      <Hero />
      <MessageCard />
      <Surprise />

      <footer className="relative py-10 text-center text-sm text-rose-900/60">
        Made with love for Sneha ✨
      </footer>
    </div>
  )
}

export default App
