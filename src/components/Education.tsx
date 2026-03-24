import { GraduationCap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { portfolioData } from '../data/portfolio'

export function Education() {
  return (
    <section id="education" className="section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">05.</span>
          <h2 className="section-title mb-0 text-primary">Education</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Education cards */}
        <div className="space-y-6">
          {portfolioData.education.map((edu, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="font-mono text-lg">
                      {edu.degree}
                    </CardTitle>
                    <CardDescription className="font-mono">
                      {edu.institution}
                    </CardDescription>
                    <div className="text-sm font-mono text-muted-foreground mt-1">
                      {edu.period}
                    </div>
                  </div>
                </div>
              </CardHeader>
              {edu.description && (
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {edu.description}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
