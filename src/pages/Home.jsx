import { Link } from 'react-router-dom'

const methods = [
  { name: 'gsap.to()', path: '/to', description: 'Animate from current to target', tag: 'tween' },
  { name: 'gsap.from()', path: '/from', description: 'Animate from values to current', tag: 'tween' },
  { name: 'gsap.fromTo()', path: '/from-to', description: 'Set both start and end explicitly', tag: 'tween' },
  { name: 'gsap.set()', path: '/set', description: 'Instantly set properties', tag: 'utility' },
  { name: 'gsap.timeline()', path: '/timeline', description: 'Sequence multiple tweens', tag: 'control' },
  { name: 'Stagger', path: '/stagger', description: 'Offset across multiple targets', tag: 'control' },
  { name: 'ScrollTrigger', path: '/scroll-trigger', description: 'Scroll-driven animations', tag: 'plugin' },
]

const tagStyle = {
  tween:   'text-violet-400 bg-violet-400/10',
  utility: 'text-zinc-500 bg-zinc-500/10',
  control: 'text-purple-400 bg-purple-400/10',
  plugin:  'text-amber-400 bg-amber-400/10',
}

export default function Home() {
  return (
    <div
      className="min-h-screen bg-[#09090b] text-white"
      style={{
        backgroundImage:
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.022) 1px, transparent 0)',
        backgroundSize: '28px 28px',
      }}
    >
      {/* Top bar */}
      <header className="border-b border-white/4 h-11 flex items-center justify-between px-6 sm:px-10">
        <div className="flex items-center gap-2.5">
          <span className="block w-1.5 h-1.5 rounded-full bg-violet-500" />
          <span className="font-mono text-[11px] text-white/25 tracking-[0.18em] uppercase">
            gsap / playground
          </span>
        </div>
        <span className="font-mono text-[11px] text-white/15">v3</span>
      </header>

      <main className="max-w-3xl mx-auto px-6 sm:px-10 pt-4 pb-32">
        {/* Hero */}
        <div className="mb-4">
          <h1 className="leading-none tracking-tighter font-black">
            <span className="block text-[clamp(4rem,10vw,6.5rem)] text-white">GSAP</span>
            <span className="block text-[clamp(4rem,10vw,6.5rem)] text-white/12">Methods</span>
          </h1>

          <p className="mt-4 text-white/30 text-sm leading-relaxed max-w-70">
            Pick a method and start experimenting. Each page is a live playground.
          </p>
        </div>

        {/* Method list */}
        <div>
          {methods.map((m, i) => (
            <Link
              key={m.path}
              to={m.path}
              className="group flex items-center gap-5 py-3.5 border-t border-white/5 hover:border-violet-500/20 transition-colors duration-200"
            >
              {/* Index */}
              <span className="font-mono text-[10px] text-white/12 w-4 shrink-0 select-none">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Tag */}
              <span className={`font-mono text-[10px] px-2 py-0.5 rounded shrink-0 ${tagStyle[m.tag]}`}>
                {m.tag}
              </span>

              {/* Name */}
              <span className="font-mono text-[15px] font-semibold text-white/60 group-hover:text-white transition-colors duration-150 flex-1">
                {m.name}
              </span>

              {/* Description */}
              <span className="text-xs text-white/20 hidden sm:block">
                {m.description}
              </span>

              {/* Arrow */}
              <span className="text-white/12 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all duration-200 text-sm shrink-0">
                →
              </span>
            </Link>
          ))}
          <div className="border-t border-white/5" />
        </div>
      </main>
    </div>
  )
}
