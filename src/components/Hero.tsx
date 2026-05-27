import { useEffect, useState } from 'react'
import { ChevronDown, ExternalLink, GitBranch, Server } from 'lucide-react'
import { useLocale } from '../hooks/useLocale.ts'
import { Button } from './ui/button'

export function Hero() {
  const { portfolioData, ui } = useLocale()
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = portfolioData.title

  // Typing animation
  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 80)

    return () => clearInterval(typingInterval)
  }, [fullText])

  // Cursor blink
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 relative"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Terminal-style greeting */}
        <div className="mb-6 font-mono text-sm text-muted-foreground">
          <span className="text-primary">$</span> whoami
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 font-mono">
          <span className="text-foreground">{portfolioData.name}</span>
        </h1>

        {/* Title with typing effect */}
        <div className="text-xl sm:text-2xl md:text-3xl font-mono mb-8 h-12 flex items-center justify-center">
          <span className="text-primary terminal-glow">{displayText}</span>
          <span 
            className={`ml-1 w-3 h-8 bg-primary inline-block ${showCursor ? 'opacity-100' : 'opacity-0'}`}
            aria-hidden="true"
          />
        </div>

        {/* Location */}
        <p className="text-muted-foreground font-mono text-sm mb-8">
          <span className="text-primary">{ui.hero.locationLabel}</span> {portfolioData.location}
        </p>

        <div className="mb-8 flex flex-col items-center gap-4">
          <div className="inline-flex max-w-xl items-center gap-3 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-left font-mono text-sm text-foreground shadow-[0_0_30px_rgba(34,197,94,0.12)]">
            <Server className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary">{ui.hero.homelabLabel}</p>
              <p className="mt-1 text-muted-foreground">{ui.hero.homelabText}</p>
            </div>
          </div>

          <Button asChild variant="outline" className="font-mono">
            <a
              href={portfolioData.sourceRepository}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitBranch className="h-4 w-4" aria-hidden="true" />
              {ui.hero.repoCta}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>

        {/* Terminal-style prompt */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border font-mono text-sm">
          <span className="text-muted-foreground">~/portfolio</span>
          <span className="text-primary">$</span>
          <span className="text-foreground">{ui.hero.promptCommand}</span>
          <span className={`w-2 h-4 bg-primary ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        aria-label={ui.hero.scrollAriaLabel}
      >
        <span className="text-xs font-mono">{ui.hero.scrollLabel}</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  )
}
