import { Shield, Clock3, BarChart3, LockKeyhole, LineChart } from 'lucide-react'

const items = [
  { icon: Shield, title: 'Clinically safe by design', desc: 'Guardrails, citations, and human-in-the-loop ensure reliable decisions.' },
  { icon: Clock3, title: 'Faster time-to-value', desc: 'Deploy in weeks with pre-built integrations and templates.' },
  { icon: BarChart3, title: 'Measurable outcomes', desc: 'Track impact on quality measures, throughput, and cost savings.' },
  { icon: LockKeyhole, title: 'Enterprise-grade security', desc: 'End-to-end encryption, SSO, and granular access controls.' },
  { icon: LineChart, title: 'Continuous improvement', desc: 'Monitor drift and update models with feedback from clinicians.' },
]

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Why Amiri AI</h2>
            <p className="text-blue-200/80 mt-3 max-w-xl">We combine cutting-edge models with healthcare-grade safety to meet the realities of clinical practice and regulation.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((i) => (
              <div key={i.title} className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md p-6">
                <div className="h-10 w-10 rounded-lg bg-blue-500/15 border border-blue-400/20 flex items-center justify-center mb-3">
                  <i.icon className="h-5 w-5 text-blue-300" />
                </div>
                <div className="text-white font-medium">{i.title}</div>
                <div className="text-blue-200/80 text-sm mt-1">{i.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_80%_10%,rgba(59,130,246,0.06),transparent_60%)]"></div>
    </section>
  )
}
