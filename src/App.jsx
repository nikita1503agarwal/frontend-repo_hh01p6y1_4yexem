import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Benefits from './components/Benefits'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(2,132,199,0.08),transparent_50%)]"></div>
      <div className="relative">
        <Navbar />
        <Hero />
        <Solutions />
        <Benefits />
        <CTA />
        <footer id="about" className="border-t border-white/10 py-10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-blue-200/70 text-sm">© {new Date().getFullYear()} Amiri AI. All rights reserved.</div>
            <div className="text-blue-200/60 text-sm flex items-center gap-4">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Security</a>
              <a href="#" className="hover:text-white">Terms</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
