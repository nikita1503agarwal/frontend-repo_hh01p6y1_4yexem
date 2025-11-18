import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-200 text-xs mb-4">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
              Trusted AI for healthcare
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white tracking-tight">
              AI solutions for clinical excellence
            </h1>
            <p className="mt-5 text-blue-100/90 text-lg max-w-xl">
              Amiri AI helps healthcare providers improve outcomes, reduce costs, and accelerate workflows with safe, secure, and compliant AI.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white shadow shadow-blue-500/30 transition-colors">
                Book a demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#solutions" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/10">
                Explore solutions
              </a>
            </div>
          </div>

          <div className="hidden lg:block"></div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/10 via-transparent to-slate-950"></div>
      </div>
    </section>
  )
}
