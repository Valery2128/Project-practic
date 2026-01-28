import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-cyan-500 selection:text-white">
      {/* Navbar Stub */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          DevJuliana
        </div>
        <div className="space-x-4 text-sm font-medium text-slate-300">
          <button className="hover:text-white transition-colors">Projects</button>
          <button className="hover:text-white transition-colors">About</button>
          <button className="px-5 py-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700">
            Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
            Full Stack Developer
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Building digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              experiences
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            I craft accessible, pixel-perfect, and performant web applications.
            Focused on mastering the modern stack and Git workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-cyan-500/20">
              View Work
            </button>
            <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg border border-slate-700 transition-all">
              Download CV
            </button>
          </div>
        </div>

        {/* Visual Element / Placeholder */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative rounded-2xl bg-slate-800/50 border border-slate-700 p-8 aspect-square flex items-center justify-center overflow-hidden">
            <div className="text-9xl">🚀</div>
          </div>
        </div>
      </main>
    </div>
  )
}
