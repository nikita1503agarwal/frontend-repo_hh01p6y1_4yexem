import { useState } from 'react'
import { Menu, X, Shield, BrainCircuit } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#solutions', label: 'Solutions' },
    { href: '#benefits', label: 'Benefits' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="relative z-20">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-3 text-white">
          <div className="h-10 w-10 rounded-xl bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm flex items-center justify-center">
            <Shield className="h-6 w-6 text-blue-300" />
          </div>
          <div>
            <div className="font-semibold tracking-tight text-white text-lg">Amiri AI</div>
            <div className="text-xs text-blue-300/70 -mt-1 flex items-center gap-1">
              <BrainCircuit className="h-3.5 w-3.5" />
              Healthcare Intelligence
            </div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-blue-100/80 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-sm transition-colors shadow shadow-blue-500/20">
            Book a demo
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 text-white">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-4 rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur-sm p-4">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-blue-100/90 hover:text-white py-2">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="mt-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-sm text-center">Book a demo</a>
          </div>
        </div>
      )}
    </header>
  )
}
