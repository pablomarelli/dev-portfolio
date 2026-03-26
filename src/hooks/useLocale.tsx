import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

import { localeContent, type Locale } from '../data/portfolio'

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  portfolioData: (typeof localeContent)[Locale]['portfolio']
  ui: (typeof localeContent)[Locale]['ui']
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const storedLocale = localStorage.getItem('locale') as Locale | null
  if (storedLocale === 'en' || storedLocale === 'es') {
    return storedLocale
  }

  const browserLanguage = window.navigator.language.toLowerCase()
  return browserLanguage.startsWith('es') ? 'es' : 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    localStorage.setItem('locale', locale)
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo<LocaleContextValue>(() => {
    const toggleLocale = () => {
      setLocale((prev) => (prev === 'en' ? 'es' : 'en'))
    }

    return {
      locale,
      setLocale,
      toggleLocale,
      portfolioData: localeContent[locale].portfolio,
      ui: localeContent[locale].ui,
    }
  }, [locale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)

  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }

  return context
}
