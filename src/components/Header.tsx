import { Moon, Sun, Terminal } from 'lucide-react'
import { Button } from './ui/button'
import { useTheme } from '../hooks/useTheme'
import { useLocale } from '../hooks/useLocale'

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const { locale, setLocale, ui } = useLocale()

  const navItems = [
    { name: ui.nav.about, href: '#about' },
    { name: ui.nav.experience, href: '#experience' },
    { name: ui.nav.skills, href: '#skills' },
    { name: ui.nav.projects, href: '#projects' },
    { name: ui.nav.contact, href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center gap-2 text-primary font-mono font-bold text-lg hover:text-primary/80 transition-colors"
          >
            <Terminal className="w-5 h-5" />
            <span className="hidden sm:inline">pablo@dev</span>
            <span className="text-muted-foreground hidden sm:inline">:~$</span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div
              className="flex items-center rounded-md border border-border bg-card/80 p-1"
              role="group"
              aria-label={ui.header.switchLocale}
            >
              <Button
                variant={locale === 'en' ? 'secondary' : 'ghost'}
                size="sm"
                className="h-8 px-2 font-mono text-xs"
                onClick={() => setLocale('en')}
                aria-pressed={locale === 'en'}
              >
                EN
              </Button>
              <Button
                variant={locale === 'es' ? 'secondary' : 'ghost'}
                size="sm"
                className="h-8 px-2 font-mono text-xs"
                onClick={() => setLocale('es')}
                aria-pressed={locale === 'es'}
              >
                ES
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="relative"
              aria-label={ui.header.switchTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
