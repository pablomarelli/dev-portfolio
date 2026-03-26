import { useLocale } from '../hooks/useLocale'

export function About() {
  const { portfolioData, ui } = useLocale()

  return (
    <section id="about" className="section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="section-title mb-0 text-primary">{ui.about.sectionTitle}</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Terminal-style code block */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-4 text-xs font-mono text-muted-foreground">about.md</span>
          </div>

          {/* Content */}
          <div className="p-6 font-mono text-sm leading-relaxed">
            <div className="text-muted-foreground mb-4">
              <span className="text-primary">##</span> {ui.about.heading}
            </div>
            
            {portfolioData.bio.split('\n').map((paragraph, index) => (
              <p key={index} className="text-foreground/90 mb-4 last:mb-0">
                {paragraph.trim()}
              </p>
            ))}

            <div className="mt-6 pt-4 border-t border-border">
              <div className="text-muted-foreground mb-2">
                <span className="text-primary">###</span> {ui.about.factsHeading}
              </div>
              <ul className="space-y-1 text-foreground/80">
                {ui.about.facts.map((fact) => (
                  <li key={fact}>
                    <span className="text-primary">-</span> {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
