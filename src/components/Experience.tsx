import { Briefcase, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { useLocale } from '../hooks/useLocale'

export function Experience() {
  const { portfolioData, ui } = useLocale()

  return (
    <section id="experience" className="section bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="section-title mb-0 text-primary">{ui.experience.sectionTitle}</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          {/* Experience cards */}
          <div className="space-y-8">
            {portfolioData.experience.map((job, index) => (
              <div key={index} className="relative pl-8 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                <Card className="card-hover bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-2">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-mono flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-primary" />
                          {job.role}
                        </CardTitle>
                        <CardDescription className="font-mono mt-1">
                          <span className="text-primary">@</span>{' '}
                          {job.companyUrl ? (
                            <a 
                              href={job.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-primary transition-colors inline-flex items-center gap-1"
                            >
                              {job.company}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            job.company
                          )}
                        </CardDescription>
                        
                        {/* Role progression */}
                        {job.roles && job.roles.length > 0 && (
                          <div className="mt-3 space-y-1">
                            <div className="text-xs font-mono text-muted-foreground mb-1">{ui.experience.rolesLabel}</div>
                            {job.roles.map((role, roleIndex) => (
                              <div key={roleIndex} className="flex items-start gap-2 text-xs font-mono">
                                <span className="text-primary mt-0.5">
                                  {roleIndex === job.roles!.length - 1 ? '└─' : '├─'}
                                </span>
                                <div className="flex-1">
                                  <div className="text-foreground">{role.title}</div>
                                  <div className="text-muted-foreground text-[10px]">{role.period}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="text-sm font-mono text-muted-foreground shrink-0">
                        <div>{job.period}</div>
                        <div className="text-xs">{job.location}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {job.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">{'>'}</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.techStack.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="font-mono text-xs bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
