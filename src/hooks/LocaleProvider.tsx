import { useEffect, useState, type ReactNode } from 'react'

import { localeContent, type Locale } from '../data/portfolio'
import { LocaleContext, type LocaleContextValue } from './locale-context'

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

  const toggleLocale = () => {
    setLocale((prev) => (prev === 'en' ? 'es' : 'en'))
  }

  const value: LocaleContextValue = {
    locale,
    setLocale,
    toggleLocale,
    portfolioData: localeContent[locale].portfolio,
    ui: localeContent[locale].ui,
  }

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
