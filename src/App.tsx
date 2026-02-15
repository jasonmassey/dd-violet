export default function App() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-mono mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          coordination plane
        </div>
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          DD <span className="text-accent">Green</span>
        </h1>
        <p className="text-xl text-text-muted mb-6">
          One team. Humans and agents. One backlog.
        </p>
        <p className="text-text-muted leading-relaxed mb-10">
          The coordination layer for engineering teams deploying AI agents at
          scale. DD Green unifies human and agent work into a single board with
          intelligent routing, conflict detection, and unified velocity tracking.
        </p>
        <div className="grid grid-cols-3 gap-4 text-left">
          {[
            { label: 'Route', desc: 'Triage tasks to the right worker — human or agent — based on complexity' },
            { label: 'Coordinate', desc: 'Prevent conflicts, manage dependencies, serialize shared-file access' },
            { label: 'Track', desc: 'Unified velocity: 47 tasks closed — 12 by humans, 35 by agents' },
          ].map((item) => (
            <div key={item.label} className="p-4 rounded-lg bg-surface-raised border border-surface-border">
              <div className="text-accent font-mono text-sm mb-2">{item.label}</div>
              <div className="text-sm text-text-muted">{item.desc}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-text-muted text-sm font-mono">
          Part of the <a href="https://github.com/jasonmassey/dev-dash" className="text-accent hover:underline">dev-dash</a> platform
        </div>
      </div>
    </div>
  );
}
