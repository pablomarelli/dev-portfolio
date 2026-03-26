import { ExternalLink, Folder, GitBranch } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { useLocale } from '../hooks/useLocale'

// Language color mapping (GitHub-style)
const languageColors: Record<string, string> = {
  Go: '#00ADD8',
  Python: '#3572A5',
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  HCL: '#844FBA',
  Shell: '#89E051',
  Dockerfile: '#384D54',
}

export function Projects() {
  const { portfolioData, ui } = useLocale()

  return (
    <section id="projects" className="section bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="section-title mb-0 text-primary">{ui.projects.sectionTitle}</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.projects.map((project) => (
            <Card 
              key={project.name} 
              className="card-hover bg-card/50 backdrop-blur-sm group"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Folder className="w-10 h-10 text-primary mb-4" />
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={ui.projects.viewOnGitHub(project.name)}
                  >
                    <GitBranch className="w-5 h-5" />
                  </a>
                </div>
                <CardTitle className="font-mono text-lg group-hover:text-primary transition-colors">
                  {project.name}
                </CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: languageColors[project.language] || '#858585' }}
                    />
                    <span className="text-xs font-mono text-muted-foreground">
                      {project.language}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="font-mono text-xs"
                  >
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {ui.projects.viewCode}
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More projects CTA */}
        <div className="mt-8 text-center">
          <Button
            variant="outline"
            asChild
            className="font-mono"
          >
            <a 
              href="https://github.com/PabloMarelli?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-primary mr-2">$</span>
              {ui.projects.viewAllRepositories}
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
