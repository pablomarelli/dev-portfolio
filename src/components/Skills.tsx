import { portfolioData } from '../data/portfolio'

interface SkillCategoryProps {
  title: string
  command: string
  skills: string[]
}

function SkillCategory({ title, command, skills }: SkillCategoryProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 border-b border-border">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs font-mono text-muted-foreground">{title}</span>
      </div>

      {/* Content */}
      <div className="p-4 font-mono text-sm">
        <div className="text-muted-foreground mb-3">
          <span className="text-primary">$</span> {command}
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded bg-primary/10 text-primary border border-primary/20 text-xs hover:bg-primary/20 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Skills() {
  const { skills } = portfolioData

  return (
    <section id="skills" className="section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="section-title mb-0 text-primary">Skills</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCategory 
            title="languages"
            command="ls ~/skills/languages"
            skills={skills.languages}
          />
          <SkillCategory 
            title="frameworks"
            command="ls ~/skills/frameworks"
            skills={skills.frameworks}
          />
          <SkillCategory 
            title="tools"
            command="ls ~/skills/tools"
            skills={skills.tools}
          />
          <SkillCategory 
            title="methodologies"
            command="ls ~/skills/methodologies"
            skills={skills.methodologies}
          />
        </div>

        {/* Proficiency note */}
        <div className="mt-8 p-4 bg-card/50 border border-border rounded-lg font-mono text-xs text-muted-foreground">
          <span className="text-primary">Note:</span> Primary expertise in Python ecosystem (Django, DRF, FastAPI) 
          with growing proficiency in Go for high-performance services.
        </div>
      </div>
    </section>
  )
}
