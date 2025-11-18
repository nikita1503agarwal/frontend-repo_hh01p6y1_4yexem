import { Stethoscope, ShieldCheck, Bot, Activity, Database, Lock } from 'lucide-react'

const cards = [
  {
    icon: Stethoscope,
    title: 'Clinical decision support',
    desc: 'Evidence-grounded suggestions at the point of care for diagnostics, triage, and treatment planning.'
  },
  {
    icon: Activity,
    title: 'Predictive risk modeling',
    desc: 'Early detection of deterioration and population risk stratification to reduce readmissions.'
  },
  {
    icon: Bot,
    title: 'AI assistants for staff',
    desc: 'HIPAA-aware copilots for charting, prior auth, discharge summaries, and care coordination.'
  },
  {
    icon: Database,
    title: 'Data harmonization',
    desc: 'Normalize EMR, claims, imaging, and device data with healthcare-specific ontologies.'
  },
  {
    icon: Lock,
    title: 'Privacy-preserving AI',
    desc: 'De-identification, PHI redaction, and federated learning to keep data protected.'
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & governance',
    desc: 'Audit trails, policy controls, and model monitoring aligned to HIPAA and SOC 2.'
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Solutions</h2>
          <p className="text-blue-200/80 mt-3 max-w-2xl">Modular capabilities you can adopt independently or as an integrated platform, built for real clinical workflows.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="group rounded-2xl border border-white/10 bg-slate-900/60 hover:bg-slate-900/80 backdrop-blur-md p-6 transition-colors">
              <div className="h-11 w-11 rounded-xl bg-blue-500/15 border border-blue-400/20 flex items-center justify-center mb-4">
                <c.icon className="h-5 w-5 text-blue-300" />
              </div>
              <h3 className="text-white font-medium text-lg mb-2">{c.title}</h3>
              <p className="text-blue-200/80 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,rgba(59,130,246,0.08),transparent_60%)]"></div>
    </section>
  )
}
