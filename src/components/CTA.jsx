export default function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/15 via-blue-500/10 to-blue-500/5 p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight">Ready to bring trustworthy AI to your care teams?</h3>
              <p className="text-blue-200/85 mt-3 max-w-lg">Let’s discuss your use cases and show you how Amiri AI can fit your compliance and IT requirements.</p>
            </div>
            <form className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input className="col-span-1 sm:col-span-2 h-12 rounded-xl bg-slate-900/70 border border-white/15 px-4 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-400/40" placeholder="Work email" />
              <button type="button" className="h-12 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-medium shadow shadow-blue-500/30">Request demo</button>
            </form>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_30%_90%,rgba(59,130,246,0.06),transparent_60%)]"></div>
    </section>
  )
}
