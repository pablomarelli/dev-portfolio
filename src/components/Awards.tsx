import { Award } from 'lucide-react'
import { useLocale } from '../hooks/useLocale'

export function Awards() {
  const { portfolioData, ui } = useLocale()

  return (
    <section id="awards" className="py-12 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title - smaller, more subtle */}
        <div className="flex items-center gap-3 mb-6">
          <Award className="w-4 h-4 text-muted-foreground" />
          <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
            {ui.awards.sectionTitle}
          </h3>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Awards - compact inline list */}
        <div className="flex flex-wrap gap-4 text-sm font-mono">
          {portfolioData.awards.map((award, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 px-3 py-2 bg-card/50 border border-border rounded-lg"
            >
              <span className="text-primary">{award.year}</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-foreground/80">{award.title}</span>
            </div>
          ))}
        </div>

        {/* Context note */}
        <p className="mt-4 text-xs text-muted-foreground font-mono">
          <span className="text-primary">*</span> {ui.awards.contextNote}
        </p>
      </div>
    </section>
  )
}
