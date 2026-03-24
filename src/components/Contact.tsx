import { Github, Linkedin, Mail, Terminal } from 'lucide-react'
import { Button } from './ui/button'
import { portfolioData } from '../data/portfolio'

const socialIcons: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
}

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section title */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex-1 h-px bg-border max-w-24" />
          <span className="text-primary font-mono text-sm">06.</span>
          <h2 className="section-title mb-0 text-primary">Get In Touch</h2>
          <div className="flex-1 h-px bg-border max-w-24" />
        </div>

        {/* Terminal prompt */}
        <div className="inline-block bg-card border border-border rounded-lg p-6 mb-8">
          <div className="font-mono text-sm text-left">
            <div className="text-muted-foreground mb-2">
              <span className="text-primary">$</span> cat contact.txt
            </div>
            <div className="text-foreground/90 leading-relaxed max-w-md">
              Whether you have a question or just want to say hi, feel free to reach out!
            </div>
          </div>
        </div>

        {/* Email CTA */}
        <div className="mb-8">
          <Button
            size="lg"
            asChild
            className="font-mono"
          >
            <a href={`mailto:${portfolioData.email}`}>
              <Mail className="w-4 h-4 mr-2" />
              Say Hello
            </a>
          </Button>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4">
          {portfolioData.socialLinks.map((link) => {
            const Icon = socialIcons[link.icon] || Terminal
            return (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith('mailto') ? undefined : '_blank'}
                rel={link.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="p-3 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                aria-label={link.name}
              >
                <Icon className="w-5 h-5" />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-mono text-muted-foreground">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-primary" />
            <span>Built with React, TypeScript & Tailwind</span>
          </div>
          <div>
            <span className="text-primary">&copy;</span> {new Date().getFullYear()} {portfolioData.name}
          </div>
        </div>
      </div>
    </footer>
  )
}
